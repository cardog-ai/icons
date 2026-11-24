/**
 * Data Matrix ECC 200 (ISO/IEC 16022), square symbols up to 26 x 26, ASCII
 * encodation. Small and dependency-free: enough to write a VIN, a chassis
 * number or a legacy serial as a code a phone or a handheld scanner reads
 * back exactly (src/__tests__/vin.test.ts decodes it with ZXing).
 *
 * Returns the symbol as rows of booleans (true = dark), finder included,
 * quiet zone not included.
 */

/** [size, data codewords, error-correction codewords]: the single-region square symbols. */
const SYMBOLS: ReadonlyArray<readonly [number, number, number]> = [
  [10, 3, 5],
  [12, 5, 7],
  [14, 8, 10],
  [16, 12, 12],
  [18, 18, 14],
  [20, 22, 18],
  [22, 30, 20],
  [24, 36, 24],
  [26, 44, 28],
];

/** ASCII encodation: digit pairs pack into one codeword, other characters are value + 1. */
export function asciiCodewords(text: string): number[] {
  const out: number[] = [];
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    const d = text.charCodeAt(i + 1);
    if (c >= 48 && c <= 57 && d >= 48 && d <= 57) {
      out.push(130 + (c - 48) * 10 + (d - 48));
      i++;
    } else if (c < 128) {
      out.push(c + 1);
    } else {
      throw new RangeError("Data Matrix ASCII encodation takes 7-bit characters only");
    }
  }
  return out;
}

/* GF(256) over x^8 + x^5 + x^3 + x^2 + 1 (301), generator 2. */
const EXP = new Array<number>(512);
const LOG = new Array<number>(256);
(() => {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP[i] = x;
    LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 301;
  }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
})();
const mul = (a: number, b: number) => (a && b ? EXP[LOG[a] + LOG[b]] : 0);

function reedSolomon(data: number[], n: number): number[] {
  // Generator: product of (x - 2^i), i = 1..n; coefficients highest first.
  let g = [1];
  for (let i = 1; i <= n; i++) {
    const next = new Array<number>(g.length + 1).fill(0);
    for (let j = 0; j < g.length; j++) {
      next[j] ^= g[j];
      next[j + 1] ^= mul(g[j], EXP[i]);
    }
    g = next;
  }
  const rem = new Array<number>(n).fill(0);
  for (const d of data) {
    const f = d ^ rem[0];
    rem.shift();
    rem.push(0);
    for (let j = 0; j < n; j++) rem[j] ^= mul(g[j + 1], f);
  }
  return rem;
}

/** The ECC 200 placement ("utah" shapes and the four corner cases), Annex F. */
function place(nrow: number, ncol: number, codewords: number[]): boolean[][] {
  const grid: number[][] = Array.from({ length: nrow }, () => new Array<number>(ncol).fill(-1));
  const bit = (cw: number, b: number) => ((codewords[cw] >> (8 - b)) & 1) as 0 | 1;
  const mod = (r: number, c: number, cw: number, b: number) => {
    if (r < 0) {
      r += nrow;
      c += 4 - ((nrow + 4) % 8);
    }
    if (c < 0) {
      c += ncol;
      r += 4 - ((ncol + 4) % 8);
    }
    grid[r][c] = bit(cw, b);
  };
  const utah = (r: number, c: number, cw: number) => {
    mod(r - 2, c - 2, cw, 1);
    mod(r - 2, c - 1, cw, 2);
    mod(r - 1, c - 2, cw, 3);
    mod(r - 1, c - 1, cw, 4);
    mod(r - 1, c, cw, 5);
    mod(r, c - 2, cw, 6);
    mod(r, c - 1, cw, 7);
    mod(r, c, cw, 8);
  };
  const corner = (cw: number, cells: Array<[number, number]>) => cells.forEach(([r, c], i) => mod(r, c, cw, i + 1));
  let r = 4;
  let c = 0;
  let cw = 0;
  do {
    if (r === nrow && c === 0)
      corner(cw++, [[nrow - 1, 0], [nrow - 1, 1], [nrow - 1, 2], [0, ncol - 2], [0, ncol - 1], [1, ncol - 1], [2, ncol - 1], [3, ncol - 1]]);
    if (r === nrow - 2 && c === 0 && ncol % 4)
      corner(cw++, [[nrow - 3, 0], [nrow - 2, 0], [nrow - 1, 0], [0, ncol - 4], [0, ncol - 3], [0, ncol - 2], [0, ncol - 1], [1, ncol - 1]]);
    if (r === nrow - 2 && c === 0 && ncol % 8 === 4)
      corner(cw++, [[nrow - 3, 0], [nrow - 2, 0], [nrow - 1, 0], [0, ncol - 2], [0, ncol - 1], [1, ncol - 1], [2, ncol - 1], [3, ncol - 1]]);
    if (r === nrow + 4 && c === 2 && !(ncol % 8))
      corner(cw++, [[nrow - 1, 0], [nrow - 1, ncol - 1], [0, ncol - 3], [0, ncol - 2], [0, ncol - 1], [1, ncol - 3], [1, ncol - 2], [1, ncol - 1]]);
    do {
      if (r < nrow && c >= 0 && grid[r][c] < 0) utah(r, c, cw++);
      r -= 2;
      c += 2;
    } while (r >= 0 && c < ncol);
    r += 1;
    c += 3;
    do {
      if (r >= 0 && c < ncol && grid[r][c] < 0) utah(r, c, cw++);
      r += 2;
      c -= 2;
    } while (r < nrow && c >= 0);
    r += 3;
    c += 1;
  } while (r < nrow || c < ncol);
  if (grid[nrow - 1][ncol - 1] < 0) {
    grid[nrow - 1][ncol - 1] = grid[nrow - 2][ncol - 2] = 1;
    grid[nrow - 1][ncol - 2] = grid[nrow - 2][ncol - 1] = 0;
  }
  return grid.map((row) => row.map((v) => v === 1));
}

/**
 * The symbol for `text`: the smallest square that holds it, never smaller
 * than `minSize` (18 by default, so every VIN wears the same 18 x 18 grain).
 */
export function dataMatrix(text: string, minSize = 18): boolean[][] {
  const data = asciiCodewords(text);
  const sym = SYMBOLS.find(([size, cap]) => size >= minSize && cap >= data.length);
  if (!sym) throw new RangeError(`Too long for a single-region Data Matrix: ${text.length} characters`);
  const [size, cap, ecc] = sym;
  const padded = data.slice();
  for (let pos = padded.length + 1; padded.length < cap; pos++) {
    if (padded.length === data.length) padded.push(129);
    else {
      const v = 129 + (((149 * pos) % 253) + 1);
      padded.push(v > 254 ? v - 254 : v);
    }
  }
  const codewords = padded.concat(reedSolomon(padded, ecc));
  const inner = place(size - 2, size - 2, codewords);
  return Array.from({ length: size }, (_, r) =>
    Array.from({ length: size }, (_, c) => {
      if (c === 0 || r === size - 1) return true; // the solid L
      if (r === 0) return c % 2 === 0; // top timing
      if (c === size - 1) return r % 2 === 1; // right timing
      return inner[r - 1][c - 1];
    }),
  );
}
