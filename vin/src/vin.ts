/**
 * Reading a VIN for the mark: which kind of identifier it is and, for a
 * 17-character VIN, its sections. Pure, no dependencies, safe anywhere.
 *
 * The sections are the ones ISO 3779 and 49 CFR 565 give every VIN:
 *
 *   1-3  WMI     world manufacturer identifier (the maker)
 *   4-8  VDS     vehicle descriptor section (line, body, engine, restraint)
 *   9    check   the check digit, a weighted sum mod 11 ("X" for ten)
 *   10   year    the model year code, a 30-position cycle
 *   11   plant   the assembly plant
 *   12-17 serial the production sequence
 *
 * Anything else that names a vehicle is one of three fallbacks: a Japanese
 * chassis number (model code, hyphen, serial), a legacy identifier (a
 * pre-1981 or otherwise short serial), or nothing at all.
 */

/** The 33 characters a VIN may carry (no I, O or Q). */
export const VIN_ALPHABET = "0123456789ABCDEFGHJKLMNPRSTUVWXYZ";

/** The 30 model-year codes, in cycle order: A = 1980 / 2010 / 2040. */
export const YEAR_CODES = "ABCDEFGHJKLMNPRSTVWXY123456789";

const TRANSLIT: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8,
  J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9,
  S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9,
};
const WEIGHTS = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

const VIN_RE = /^[A-HJ-NPR-Z0-9]{17}$/;
/** A Japanese chassis number: model code, hyphen, 4 to 8 digit serial. */
const CHASSIS_RE = /^([A-Z0-9]{1,10})-([0-9]{4,8})$/;
const LEGACY_RE = /^[A-Z0-9]{5,16}$/;

export type VinKind = "vin" | "chassis" | "legacy" | "none";

export interface VinCheck {
  /** The character at position 9. */
  char: string;
  /** What the weighted sum says it should be, or null when a character cannot be weighed. */
  expected: string | null;
  valid: boolean;
}

export interface VinYear {
  code: string;
  /** Position in the 30-code cycle, 0 = A. */
  index: number;
  /**
   * The model year this code most likely means. North American VINs carry a
   * letter at position 7 from 2010 on and a digit before; that is the rule
   * used, so a code reads as one year, never two.
   */
  year: number;
}

export type VinRead =
  | {
      kind: "vin";
      value: string;
      wmi: string;
      vds: string;
      check: VinCheck;
      /** Null when position 10 is not a year code (0, U, Z). */
      year: VinYear | null;
      plant: string;
      serial: string;
    }
  | { kind: "chassis"; value: string; code: string; serial: string }
  | { kind: "legacy"; value: string }
  | { kind: "none"; value: "" };

/** Upper-case, trim, and drop spaces; a chassis number keeps its hyphen. */
export function normalizeVin(raw: string | null | undefined): string {
  return (raw ?? "").toUpperCase().replace(/[\s ]+/g, "").replace(/[‐-―−]/g, "-");
}

/** The check digit a 17-character VIN should carry, or null when a character has no weight. */
export function expectedCheckDigit(vin: string): string | null {
  if (vin.length !== 17) return null;
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    const c = vin[i];
    const v = c >= "0" && c <= "9" ? c.charCodeAt(0) - 48 : TRANSLIT[c];
    if (v === undefined) return null;
    sum += v * WEIGHTS[i];
  }
  const r = sum % 11;
  return r === 10 ? "X" : String(r);
}

export function readYear(vin: string): VinYear | null {
  const code = vin[9];
  const index = YEAR_CODES.indexOf(code);
  if (index < 0) return null;
  const letterAt7 = /[A-Z]/.test(vin[6]);
  return { code, index, year: (letterAt7 ? 2010 : 1980) + index };
}

export function readVin(raw: string | null | undefined): VinRead {
  const value = normalizeVin(raw);
  if (!value) return { kind: "none", value: "" };
  if (value.length === 17 && /^[A-Z0-9]{17}$/.test(value)) {
    const expected = VIN_RE.test(value) ? expectedCheckDigit(value) : null;
    const char = value[8];
    return {
      kind: "vin",
      value,
      wmi: value.slice(0, 3),
      vds: value.slice(3, 8),
      check: { char, expected, valid: expected !== null && expected === char },
      year: readYear(value),
      plant: value[10],
      serial: value.slice(11),
    };
  }
  const chassis = CHASSIS_RE.exec(value);
  if (chassis) return { kind: "chassis", value, code: chassis[1], serial: chassis[2] };
  if (LEGACY_RE.test(value)) return { kind: "legacy", value };
  return { kind: "none", value: "" };
}

/** The short label a badge wears: the last six of the serial, behind an ellipsis. */
export function vinTail(raw: string | null | undefined, n = 6): string {
  const r = readVin(raw);
  if (r.kind === "none") return "No VIN";
  if (r.kind === "chassis") return r.value;
  return r.value.length <= n ? r.value : `…${r.value.slice(-n)}`;
}

/** One sentence that says what the mark shows, for its accessible name. */
export function describeVin(raw: string | null | undefined): string {
  const r = readVin(raw);
  switch (r.kind) {
    case "none":
      return "No VIN on record";
    case "chassis":
      return `Chassis number ${r.value}: model code ${r.code}, serial ${r.serial}`;
    case "legacy":
      return `Legacy serial ${r.value}`;
    case "vin": {
      const year = r.year ? `model year ${r.year.year} (${r.year.code})` : "no model year code";
      const check = r.check.valid ? "check digit valid" : "check digit does not match";
      return `VIN ${r.value}: maker ${r.wmi}, ${year}, plant ${r.plant}, serial ${r.serial}, ${check}`;
    }
  }
}

export interface VinInputClean {
  /** What the field should hold: upper case, no spaces, at most 17 for a VIN. */
  value: string;
  /** Characters dropped because no VIN carries them (I, O, Q). */
  rejected: string[];
}

/**
 * Clean what a person typed, pasted or scanned into a VIN field. Handles
 * lower case, spaces and dashes in a pasted VIN, Code 39 start/stop
 * asterisks, and the leading "I" (import marker) many VIN barcodes carry
 * before the 17 characters. A value with a hyphen and letters before it is
 * kept as a chassis number. I, O and Q are dropped from a VIN and reported.
 */
export function cleanVinInput(raw: string): VinInputClean {
  let v = raw.toUpperCase().replace(/[\s *]+/g, "").replace(/[‐-―−]/g, "-");
  if (/^[A-Z0-9]{1,10}-[0-9]*$/.test(v) && !/^[A-HJ-NPR-Z0-9]{17}$/.test(v.replace(/-/g, ""))) {
    return { value: v.slice(0, 19), rejected: [] };
  }
  v = v.replace(/[^A-Z0-9]/g, "");
  if (v.length === 18 && v[0] === "I" && /^[A-HJ-NPR-Z0-9]{17}$/.test(v.slice(1))) v = v.slice(1);
  const rejected = v.match(/[IOQ]/g) ?? [];
  return { value: v.replace(/[IOQ]/g, "").slice(0, 17), rejected };
}
