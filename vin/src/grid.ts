/**
 * The VIN mark's module grid: which squares are dark, at which grain.
 *
 * Two encodings share one renderer:
 *
 *   ZONED (default)  the identity mark. A 16 x 16 field inside a Data Matrix
 *                    style frame (solid L, timing on the other two sides).
 *                    Every VIN position owns a fixed patch of the field, so a
 *                    typed prefix fills a stable region and the code grows as
 *                    the VIN is typed:
 *                      rows 0-5    WMI (1-3), one 2-row band per character,
 *                                  in 2 x 2 blocks: the coarse grain is the maker
 *                      rows 6-11   VDS (4-8) and the check digit (9), a row each
 *                      rows 12-15  year (10), plant (11), serial (12-17), half a row each
 *                    Coarser grains are this field downsampled (a block is dark
 *                    at 40% dark), so the 16px mark is the 64px mark seen from afar.
 *   DATA MATRIX      a real ECC 200 symbol (datamatrix.ts), scannable back to
 *                    the exact string; `scannable: true`, at 36px and up.
 *
 * Both are frozen by ENCODING: a VIN's code never changes without the
 * version changing, and the golden test in tests/unit/vin-mark.test.ts holds
 * literal bit patterns.
 */

import { dataMatrix } from "./datamatrix";
import { expectedCheckDigit, readVin } from "./vin";

/** The encoding version. Bump only with a deliberate, announced change to every mark. */
export const ENCODING = "vm1";

export type Grain = "coarse" | "fine" | "full";

/** Field side per grain: 4, 8 or 16 modules inside the frame. */
export const GRAIN_FIELD: Record<Grain, number> = { coarse: 4, fine: 8, full: 16 };

export type GridKind = "vin" | "chassis" | "legacy" | "none" | "partial";

export interface Grid {
  /** Symbol side in modules, frame included. */
  n: number;
  /** Data modules, row-major, n * n. */
  data: Uint8Array;
  /** Frame modules (the L and the timing), row-major, n * n. */
  frame: Uint8Array;
  kind: GridKind;
  /** The frame is a hint only (no VIN yet, or a VIN still being typed). */
  quiet: boolean;
  /** Check digit present and wrong: the top module of the L is left out (a scanner still reads it). */
  badCheck: boolean;
  /** How many VIN characters the field holds (0-17), for a partial grid. */
  filled: number;
}

/* ---------- frozen hashing ---------- */

function fnv1a(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}
function fmix(h: number): number {
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}
/** `n` bits (n <= 32) for one character at one position, 30-50% set: a light, even grain. */
function slotBits(pos: number, ch: string, n: number): boolean[] {
  const lo = Math.ceil(n * 0.3);
  const hi = Math.floor(n * 0.5);
  for (let attempt = 0; ; attempt++) {
    const h = fmix(fnv1a(`${ENCODING}:${pos}:${ch}:${attempt}`));
    const bits = Array.from({ length: n }, (_, i) => ((h >>> i) & 1) === 1);
    const on = bits.filter(Boolean).length;
    if ((on >= lo && on <= hi) || attempt > 32) return bits;
  }
}

/* ---------- the zoned field ---------- */

const F = 16;

/** The cells (row, col in the 16 x 16 field) VIN position `p` owns, in fill order. */
export function vinSlot(p: number): Array<[number, number]> {
  const cells: Array<[number, number]> = [];
  if (p < 3) {
    for (let b = 0; b < 8; b++) for (let dy = 0; dy < 2; dy++) for (let dx = 0; dx < 2; dx++) cells.push([p * 2 + dy, b * 2 + dx]);
  } else if (p < 9) {
    for (let c = 0; c < F; c++) cells.push([6 + (p - 3), c]);
  } else {
    const i = p - 9;
    for (let c = 0; c < 8; c++) cells.push([12 + (i >> 1), (i & 1) * 8 + c]);
  }
  return cells;
}

function vinField(value: string): Uint8Array {
  const f = new Uint8Array(F * F);
  for (let p = 0; p < Math.min(17, value.length); p++) {
    const cells = vinSlot(p);
    if (p < 3) {
      // WMI: 8 blocks, one bit each, 2 x 2 modules per bit.
      const bits = slotBits(p, value[p], 8);
      cells.forEach(([r, c], i) => (f[r * F + c] = bits[i >> 2] ? 1 : 0));
    } else {
      const bits = slotBits(p, value[p], cells.length);
      cells.forEach(([r, c], i) => (f[r * F + c] = bits[i] ? 1 : 0));
    }
  }
  return f;
}

/** Any other identifier: its characters share the field in reading order. */
function genericField(value: string, salt: string): Uint8Array {
  const f = new Uint8Array(F * F);
  const per = (F * F) / value.length;
  for (let p = 0; p < value.length; p++) {
    const start = Math.round(p * per);
    const end = Math.round((p + 1) * per);
    let bits: boolean[] = [];
    for (let i = start; i < end; i++) {
      if ((i - start) % 32 === 0) bits = slotBits(1000 + p, `${salt}${value[p]}${(i - start) >> 5}`, 32);
      f[i] = bits[(i - start) % 32] ? 1 : 0;
    }
  }
  return f;
}

/** A block is dark when 40% or more of it is (the field runs 30-50% dark, so blocks split about evenly). */
function downsample(f: Uint8Array, k: number): Uint8Array {
  if (k === F) return f;
  const s = F / k;
  const out = new Uint8Array(k * k);
  for (let i = 0; i < k; i++)
    for (let j = 0; j < k; j++) {
      let on = 0;
      for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) on += f[(i * s + y) * F + j * s + x];
      out[i * k + j] = on >= Math.ceil(s * s * 0.4) ? 1 : 0;
    }
  return out;
}

function frameFor(n: number, kind: GridKind): Uint8Array {
  const fr = new Uint8Array(n * n);
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++) {
      let on = c === 0 || r === n - 1;
      if (!on && r === 0 && kind !== "chassis") on = c % 2 === 0;
      if (!on && c === n - 1 && (kind === "vin" || kind === "partial" || kind === "none")) on = r % 2 === 1;
      fr[r * n + c] = on ? 1 : 0;
    }
  return fr;
}

export interface GridOptions {
  grain?: Grain;
  /** Real Data Matrix instead of the zoned field (always full grain). */
  scannable?: boolean;
  /** Read the value as a VIN being typed: a prefix fills its zones and the frame stays quiet until 17. */
  partial?: boolean;
}

/** Normalised value for the grid: upper case, no spaces. */
const norm = (v: string | null | undefined) => (v ?? "").toUpperCase().replace(/\s+/g, "");

export function vinGrid(raw: string | null | undefined, opts: GridOptions = {}): Grid {
  const value = norm(raw);
  const grain = opts.grain ?? "full";
  const read = readVin(value);

  if (opts.scannable && read.kind !== "none") {
    const m = dataMatrix(read.value);
    const n = m.length;
    const data = new Uint8Array(n * n);
    const frame = new Uint8Array(n * n);
    m.forEach((row, r) =>
      row.forEach((on, c) => {
        const edge = r === 0 || c === 0 || r === n - 1 || c === n - 1;
        (edge ? frame : data)[r * n + c] = on ? 1 : 0;
      }),
    );
    const badCheck = read.kind === "vin" && !read.check.valid;
    if (badCheck) frame[0] = 0;
    return { n, data, frame, kind: read.kind, quiet: false, badCheck, filled: read.kind === "vin" ? 17 : 0 };
  }

  const k = GRAIN_FIELD[grain];
  const n = k + 2;
  let field: Uint8Array;
  let kind: GridKind;
  let quiet = false;
  let badCheck = false;
  let filled = 0;

  if (opts.partial && /^[A-HJ-NPR-Z0-9]{0,17}$/.test(value) && value.length < 17) {
    kind = value.length ? "partial" : "none";
    field = vinField(value);
    quiet = true;
    filled = value.length;
  } else if (read.kind === "vin") {
    kind = "vin";
    field = vinField(read.value);
    badCheck = !read.check.valid;
    filled = 17;
  } else if (read.kind === "chassis" || read.kind === "legacy") {
    kind = read.kind;
    field = genericField(read.value, read.kind);
  } else {
    kind = "none";
    field = new Uint8Array(F * F);
    quiet = true;
  }

  const small = downsample(field, k);
  const data = new Uint8Array(n * n);
  for (let r = 0; r < k; r++) for (let c = 0; c < k; c++) data[(r + 1) * n + c + 1] = small[r * k + c];
  const frame = frameFor(n, kind);
  if (badCheck) frame[0] = 0;
  return { n, data, frame, kind, quiet, badCheck, filled };
}

/** The grid as hex, row-major data then frame: the golden form the tests freeze. */
export function gridHex(g: Grid): string {
  const hex = (a: Uint8Array) => {
    let s = "";
    for (let i = 0; i < a.length; i += 4) s += ((a[i] << 3) | ((a[i + 1] ?? 0) << 2) | ((a[i + 2] ?? 0) << 1) | (a[i + 3] ?? 0)).toString(16);
    return s;
  };
  return `${g.n}:${hex(g.data)}:${hex(g.frame)}`;
}

/** Whether a 17-character value's check digit matches (re-exported for the input). */
export const checkDigitMatches = (vin: string) => vin.length === 17 && expectedCheckDigit(vin) === vin[8];
