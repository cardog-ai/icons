/**
 * The VIN mark's contract (README.md): golden bits, the ZXing round trip,
 * prefix fill and the rendered SVG. `jest --ci` never writes a snapshot, so
 * a change to any mark fails here until ENCODING and the major move.
 */
import {
  ENCODING,
  cleanVinInput,
  dataMatrix,
  expectedCheckDigit,
  gridHex,
  readVin,
  vinGrid,
  vinMark,
  vinMarkSvg,
  vinSlot,
  vinTail,
  type Grid,
  type VinMarkNode,
} from "../index";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("../../package.json") as { version: string };

const HONDA = "2HGFE2F50TH102099";
const SIBLING = "2HGFE2F50TH102183";
const TESLA = "5YJYGDEE7LF052483";
const TESLA_ALTERED = "5YJYGDEE3LF052483";

const find = (n: VinMarkNode, pred: (n: VinMarkNode) => boolean): VinMarkNode[] =>
  (pred(n) ? [n] : []).concat(...(n.children ?? []).map((c) => find(c, pred)));

/** A grid as an image ZXing can read: 4px modules, a 2-module quiet zone. */
async function scan(g: Grid): Promise<string> {
  const zx = await import("@zxing/library");
  const s = 4;
  const q = 2;
  const W = (g.n + q * 2) * s;
  const lum = new Uint8ClampedArray(W * W).fill(255);
  for (let i = 0; i < g.n * g.n; i++) {
    if (!(g.data[i] || g.frame[i])) continue;
    const r = Math.floor(i / g.n) + q;
    const c = (i % g.n) + q;
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) lum[(r * s + y) * W + c * s + x] = 0;
  }
  const bmp = new zx.BinaryBitmap(new zx.HybridBinarizer(new zx.RGBLuminanceSource(lum, W, W)));
  return new zx.DataMatrixReader().decode(bmp).getText();
}

describe("reading a VIN", () => {
  it("splits a VIN into its sections", () => {
    const r = readVin(" 2hgfe2f50th102099 ");
    expect(r).toMatchObject({ kind: "vin", wmi: "2HG", vds: "FE2F5", plant: "H", serial: "102099" });
    if (r.kind !== "vin") throw new Error();
    expect(r.year).toEqual({ code: "T", index: 16, year: 2026 });
    expect(r.check).toEqual({ char: "0", expected: "0", valid: true });
  });

  it("computes the check digit, X for ten", () => {
    expect(expectedCheckDigit(TESLA)).toBe("7");
    expect(expectedCheckDigit("1M8GDM9AXKP042788")).toBe("X");
    expect(readVin(TESLA_ALTERED)).toMatchObject({ check: { valid: false, expected: "7", char: "3" } });
  });

  it("reads digit-at-7 VINs in the 1980-2009 cycle", () => {
    const r = readVin("1G2NE13M2RM612996");
    expect(r.kind === "vin" && r.year?.year).toBe(1994);
  });

  it("refuses a check on characters a VIN cannot carry", () => {
    expect(readVin("WP0ZZZ99ZTS39212Q")).toMatchObject({ kind: "vin", check: { expected: null, valid: false } });
  });

  it("names the fallbacks", () => {
    expect(readVin("ZRR80-0301309")).toEqual({ kind: "chassis", value: "ZRR80-0301309", code: "ZRR80", serial: "0301309" });
    expect(readVin("124379N500001").kind).toBe("legacy");
    expect(readVin(null).kind).toBe("none");
    expect(readVin("").kind).toBe("none");
    expect(readVin("ab-12").kind).toBe("none");
  });

  it("tails a badge label", () => {
    expect(vinTail(HONDA)).toBe("…102099");
    expect(vinTail("ZRR80-0301309")).toBe("ZRR80-0301309");
    expect(vinTail(undefined)).toBe("No VIN");
  });
});

describe("cleaning what is typed, pasted or scanned", () => {
  it("upper-cases, strips spaces and refuses I, O and Q", () => {
    expect(cleanVinInput(" 2hgfe 2f50 th102099 ")).toEqual({ value: HONDA, rejected: [] });
    expect(cleanVinInput("2HGFE2F5OTH1O2099")).toEqual({ value: "2HGFE2F5TH12099", rejected: ["O", "O"] });
  });

  it("reads a scanner's string: Code 39 asterisks and the leading import I", () => {
    expect(cleanVinInput("*I2HGFE2F50TH102099*").value).toBe(HONDA);
    expect(cleanVinInput("i2hgfe2f50th102099").value).toBe(HONDA);
  });

  it("keeps a chassis number's hyphen and caps a VIN at 17", () => {
    expect(cleanVinInput("zrr80-0301309").value).toBe("ZRR80-0301309");
    expect(cleanVinInput(HONDA + "77").value).toBe(HONDA);
  });
});

describe("the real Data Matrix", () => {
  it("reads back to the exact VIN, chassis number and legacy serial with ZXing", async () => {
    for (const v of [HONDA, TESLA, "WP0AB2A96RS221952", "SCCPC11136HM30102", "ZRR80-0301309", "AWS210-60849612", "124379N500001"]) {
      expect(await scan(vinGrid(v, { scannable: true }))).toBe(v);
    }
  });

  it("still reads with the bad-check module left out", async () => {
    const g = vinGrid(TESLA_ALTERED, { scannable: true });
    expect(g.badCheck).toBe(true);
    expect(await scan(g)).toBe(TESLA_ALTERED);
  });

  it("wears 18 x 18 for every VIN", () => {
    expect(dataMatrix(HONDA)).toHaveLength(18);
    expect(dataMatrix("ZZZZZZZZZZZZZZZZZ")).toHaveLength(18);
  });
});

describe("the zoned grid", () => {
  it("is frozen: these bits only change with ENCODING", () => {
    expect(ENCODING).toBe("vm1");
    expect(gridHex(vinGrid(HONDA, { grain: "full" }))).toBe(
      "18:00001807e601f8007e001f9fe007f80080d2519b05b04057711dc244c383aa82c2c1485641e900000:aaaaa000180002000180002000180002000180002000180002000180002000180002000180003ffff",
    );
    expect(gridHex(vinGrid(HONDA, { grain: "coarse" }))).toBe("6:00660e300:aa182183f");
    expect(gridHex(vinGrid("WP0AB2A96RS221952", { grain: "fine" }))).toBe("10:0010a340384f0f2729ae1b000:aaa01802018020180201803ff");
  });

  it("gives every position its own cells, the whole field once", () => {
    const seen = new Set<string>();
    for (let p = 0; p < 17; p++) for (const [r, c] of vinSlot(p)) seen.add(`${r},${c}`);
    expect(seen.size).toBe(256);
  });

  it("fills a typed prefix in place, the same every time, and un-fills on delete", () => {
    const full = vinGrid(HONDA, { grain: "full" });
    for (let n = 0; n <= 17; n++) {
      const g = vinGrid(HONDA.slice(0, n), { grain: "full", partial: true });
      expect(gridHex(g)).toBe(gridHex(vinGrid(HONDA.slice(0, n), { grain: "full", partial: true })));
      for (let p = 0; p < 17; p++)
        for (const [r, c] of vinSlot(p)) {
          const i = (r + 1) * 18 + c + 1;
          expect(g.data[i]).toBe(p < n ? full.data[i] : 0);
        }
    }
  });

  it("keeps the frame quiet until the VIN is complete", () => {
    expect(vinGrid("", { partial: true }).quiet).toBe(true);
    expect(vinGrid(HONDA.slice(0, 11), { partial: true }).quiet).toBe(true);
    expect(vinGrid(HONDA, { partial: true }).quiet).toBe(false);
  });

  it("leaves the L's top module out for a bad check digit, at every grain", () => {
    for (const grain of ["coarse", "fine", "full"] as const) {
      const ok = vinGrid(TESLA, { grain });
      const bad = vinGrid(TESLA_ALTERED, { grain });
      expect(ok.frame[0]).toBe(1);
      expect(bad.frame[0]).toBe(0);
    }
  });

  it("draws siblings alike except the foot", () => {
    const a = vinGrid(HONDA);
    const b = vinGrid(SIBLING);
    const rows = (g: Grid, from: number, to: number) => Array.from(g.data.slice(from * 18, to * 18)).join("");
    expect(rows(a, 1, 13)).toBe(rows(b, 1, 13));
    expect(rows(a, 13, 17)).not.toBe(rows(b, 13, 17));
  });

  it("gives each fallback its frame", () => {
    expect(vinGrid("ZRR80-0301309").kind).toBe("chassis");
    expect(vinGrid("124379N500001").kind).toBe("legacy");
    const none = vinGrid(null);
    expect(none.kind).toBe("none");
    expect(none.quiet).toBe(true);
    expect(none.data.every((v) => v === 0)).toBe(true);
  });
});

describe("the version", () => {
  it("ties the package major to the encoding: 1.x draws vm1", () => {
    expect(`vm${version.split(".")[0]}`).toBe(ENCODING);
  });
});

describe("the mark", () => {
  it("is deterministic", () => {
    for (const size of [16, 20, 24, 32, 48, 96]) expect(vinMarkSvg(HONDA, { size })).toBe(vinMarkSvg(HONDA, { size, title: undefined }));
  });

  it("draws one path per layer, never a rect per module", () => {
    for (const o of [{}, { shape: "dot" as const }, { inverted: true }, { scannable: true, size: 64 }]) {
      const m = vinMark(HONDA, { size: 48, ...o });
      expect(m.children!.length).toBeLessThanOrEqual(3);
      expect(find(m, (n) => n.tag === "rect")).toHaveLength(0);
    }
  });

  it("is named by the VIN, or hidden beside visible text", () => {
    expect(vinMark(HONDA).attrs["aria-label"]).toBe(`VIN ${HONDA}`);
    expect(vinMark("ZRR80-0301309").attrs["aria-label"]).toBe("Chassis number ZRR80-0301309");
    expect(vinMark(null).attrs["aria-label"]).toBe("No VIN");
    expect(vinMark(HONDA, { title: false }).attrs["aria-hidden"]).toBe("true");
  });

  it("flags the check digit on the svg", () => {
    expect(vinMark(TESLA).attrs["data-check"]).toBe("valid");
    expect(vinMark(TESLA_ALTERED).attrs["data-check"]).toBe("invalid");
  });

  it("renders 500 distinct marks quickly", () => {
    const vins = Array.from({ length: 500 }, (_, i) => `2HGFE2F50TH${String(100000 + i * 7)}`);
    const t = performance.now();
    for (const v of vins) vinMarkSvg(v, { size: 20 });
    expect(performance.now() - t).toBeLessThan(1000);
  });

  it("holds its output (snapshot)", () => {
    expect(vinMarkSvg(HONDA, { size: 16 })).toMatchSnapshot();
    expect(vinMarkSvg(TESLA_ALTERED, { size: 24 })).toMatchSnapshot();
    expect(vinMarkSvg("WP0AB2A96RS221952", { size: 64, shape: "dot", frame: true })).toMatchSnapshot();
    expect(vinMarkSvg(HONDA, { size: 64, scannable: true, inverted: true })).toMatchSnapshot();
    expect(vinMarkSvg("ZRR80-0301309", { size: 32 })).toMatchSnapshot();
    expect(vinMarkSvg(null, { size: 20 })).toMatchSnapshot();
    expect(vinMarkSvg(HONDA.slice(0, 8), { size: 48, partial: true })).toMatchSnapshot();
  });
});
