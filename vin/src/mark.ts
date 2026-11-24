/**
 * The VIN mark renderer: a grid (grid.ts) to an SVG element tree or string.
 * Monochrome, `currentColor` on transparent, so it follows light and dark by
 * itself. Pure, no DOM, SSR-safe; one `<path>` per layer, never a rect per
 * module, and memoised, so a list of 500 marks is cheap.
 *
 *   vinMarkSvg("2HGFE2F50TH102099", { size: 20 })
 *   vinMark(vin, { size, grain, shape, frame, inverted, scannable, partial, title })
 */

import { readVin } from "./vin";
import { ENCODING, vinGrid, type Grain, type Grid } from "./grid";

export type VinMarkShape = "square" | "rounded" | "dot";
export type VinMarkGrain = "auto" | Grain;

export interface VinMarkOptions {
  /** Rendered size in CSS pixels. Default 24. */
  size?: number;
  /** Module density. `auto` (default): coarse to 20px, fine to 34px, full above. */
  grain?: VinMarkGrain;
  /** Module shape. Default square, the cleanest. */
  shape?: VinMarkShape;
  /** A quiet hairline frame with one module of margin. */
  frame?: boolean;
  /** Light modules knocked out of an ink tile. */
  inverted?: boolean;
  /** A real Data Matrix (ECC 200) a scanner reads back; full grain, 36px and up to scan on screen. */
  scannable?: boolean;
  /** The value is a VIN being typed (see grid.ts). */
  partial?: boolean;
  /** Accessible name. Default: the VIN. `false` when visible text beside it says the same. */
  title?: string | false;
}

export type VinMarkAttrs = Record<string, string | number>;
export interface VinMarkNode {
  tag: "svg" | "path" | "rect";
  attrs: VinMarkAttrs;
  children?: VinMarkNode[];
}

const r2 = (n: number) => Math.round(n * 100) / 100;

export function grainFor(size: number, grain: VinMarkGrain = "auto"): Grain {
  if (grain !== "auto") return grain;
  if (size <= 20) return "coarse";
  if (size <= 34) return "fine";
  return "full";
}

/** The accessible name: the identifier itself. */
export function vinLabel(raw: string | null | undefined): string {
  const r = readVin(raw);
  if (r.kind === "vin") return `VIN ${r.value}`;
  if (r.kind === "chassis") return `Chassis number ${r.value}`;
  if (r.kind === "legacy") return `Serial ${r.value}`;
  return "No VIN";
}

export interface Geometry {
  size: number;
  /** Module side in px. */
  m: number;
  /** Offset of module (0, 0) in px. */
  o: number;
}

/** Where the modules sit: the symbol fills the box, or leaves one module of margin for a frame or tile. */
export function geometry(g: Grid, size: number, margin: boolean): Geometry {
  const q = margin ? 1 : 0;
  const m = size / (g.n + q * 2);
  return { size, m, o: q * m };
}

/** One path for a set of modules: merged runs (square), rounded squares or dots. */
export function modulesPath(cells: Uint8Array, n: number, geo: Geometry, shape: VinMarkShape): string {
  const { m, o } = geo;
  let d = "";
  for (let r = 0; r < n; r++) {
    let c = 0;
    while (c < n) {
      if (!cells[r * n + c]) {
        c++;
        continue;
      }
      if (shape === "square" && (geo.size < 40 || m < 2.5)) {
        // Small: merged runs, crisp edges, no seams.
        let e = c;
        while (e < n && cells[r * n + e]) e++;
        d += `M${r2(o + c * m)} ${r2(o + r * m)}h${r2((e - c) * m)}v${r2(m)}h${r2(-(e - c) * m)}z`;
        c = e;
        continue;
      }
      const x = o + c * m;
      const y = o + r * m;
      if (shape === "square") {
        // Large: each module its own square with a hairline of air, so the grain reads as grain.
        const gap = Math.max(0.5, m * 0.1);
        d += `M${r2(x + gap / 2)} ${r2(y + gap / 2)}h${r2(m - gap)}v${r2(m - gap)}h${r2(gap - m)}z`;
      } else if (shape === "dot") {
        const rr = m * 0.42;
        d += `M${r2(x + m / 2 - rr)} ${r2(y + m / 2)}a${r2(rr)} ${r2(rr)} 0 1 0 ${r2(rr * 2)} 0a${r2(rr)} ${r2(rr)} 0 1 0 ${r2(-rr * 2)} 0z`;
      } else {
        const ins = m * 0.06;
        const s = m - ins * 2;
        const k = s * 0.3;
        d += `M${r2(x + ins + k)} ${r2(y + ins)}h${r2(s - 2 * k)}a${r2(k)} ${r2(k)} 0 0 1 ${r2(k)} ${r2(k)}v${r2(s - 2 * k)}a${r2(k)} ${r2(k)} 0 0 1 ${r2(-k)} ${r2(k)}h${r2(-(s - 2 * k))}a${r2(k)} ${r2(k)} 0 0 1 ${r2(-k)} ${r2(-k)}v${r2(-(s - 2 * k))}a${r2(k)} ${r2(k)} 0 0 1 ${r2(k)} ${r2(-k)}z`;
      }
      c++;
    }
  }
  return d;
}

function roundedRect(x: number, y: number, w: number, h: number, r: number): string {
  return `M${r2(x + r)} ${r2(y)}h${r2(w - 2 * r)}a${r2(r)} ${r2(r)} 0 0 1 ${r2(r)} ${r2(r)}v${r2(h - 2 * r)}a${r2(r)} ${r2(r)} 0 0 1 ${r2(-r)} ${r2(r)}h${r2(-(w - 2 * r))}a${r2(r)} ${r2(r)} 0 0 1 ${r2(-r)} ${r2(-r)}v${r2(-(h - 2 * r))}a${r2(r)} ${r2(r)} 0 0 1 ${r2(r)} ${r2(-r)}z`;
}

/** The opacity of a quiet frame (no VIN yet, or one still being typed). */
export const QUIET_OPACITY = 0.3;

function build(vin: string | null | undefined, o: VinMarkOptions & { size: number }): VinMarkNode {
  const size = o.size;
  const shape = o.shape ?? "square";
  const grain = o.scannable ? "full" : grainFor(size, o.grain);
  const g = vinGrid(vin, { grain, scannable: o.scannable, partial: o.partial });
  const margin = Boolean(o.frame || o.inverted);
  const geo = geometry(g, size, margin);
  const crisp: VinMarkAttrs = shape === "square" && (size < 40 || geo.m < 2.5) ? { "shape-rendering": "crispEdges" } : {};
  const children: VinMarkNode[] = [];


  if (o.inverted) {
    const tile = roundedRect(0, 0, size, size, Math.min(size * 0.18, geo.m * 1.6));
    const holes = modulesPath(g.data, g.n, geo, shape) + modulesPath(g.frame, g.n, geo, shape);
    children.push({ tag: "path", attrs: { d: tile + holes, "fill-rule": "evenodd", fill: "currentColor", opacity: g.quiet ? 0.55 : 1, "data-part": "tile" } });
  } else {
    if (o.frame) {
      const w = Math.max(0.75, size / 48);
      children.push({
        tag: "path",
        attrs: { d: roundedRect(w / 2, w / 2, size - w, size - w, Math.min(size * 0.16, geo.m * 1.4)), fill: "none", stroke: "currentColor", "stroke-width": r2(w), opacity: 0.35, "data-part": "frame-line" },
      });
    }
    const fr = modulesPath(g.frame, g.n, geo, shape);
    if (fr) children.push({ tag: "path", attrs: { d: fr, fill: "currentColor", ...(g.quiet ? ({ opacity: QUIET_OPACITY } as VinMarkAttrs) : {}), ...crisp, "data-part": "finder" } });
    const da = modulesPath(g.data, g.n, geo, shape);
    if (da) children.push({ tag: "path", attrs: { d: da, fill: "currentColor", ...crisp, "data-part": "data" } });
  }

  const title = o.title === undefined ? vinLabel(vin) : o.title;
  const attrs: VinMarkAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: `0 0 ${size} ${size}`,
    width: size,
    height: size,
    "data-vin-mark": ENCODING,
    "data-vin-kind": g.kind,
    "data-grain": o.scannable ? "datamatrix" : grain,
  };
  if (g.badCheck) attrs["data-check"] = "invalid";
  else if (g.kind === "vin") attrs["data-check"] = "valid";
  if (title === false) attrs["aria-hidden"] = "true";
  else {
    attrs.role = "img";
    attrs["aria-label"] = title;
  }
  return { tag: "svg", attrs, children };
}

/* A small memo: lists render the same few hundred marks over and over. */
const CACHE = new Map<string, VinMarkNode>();
const CACHE_MAX = 2000;

/** The mark as an element tree, for a React or React Native renderer to map 1:1. Memoised; treat it as read-only. */
export function vinMark(vin: string | null | undefined, options: VinMarkOptions = {}): VinMarkNode {
  const o = { ...options, size: options.size ?? 24 };
  const key = `${vin ?? ""}|${o.size}|${o.grain ?? ""}|${o.shape ?? ""}|${o.frame ? 1 : 0}${o.inverted ? 1 : 0}${o.scannable ? 1 : 0}${o.partial ? 1 : 0}|${o.title === false ? "\u0000" : (o.title ?? "")}`;
  const hit = CACHE.get(key);
  if (hit) return hit;
  const node = build(vin, o);
  if (CACHE.size >= CACHE_MAX) CACHE.delete(CACHE.keys().next().value as string);
  CACHE.set(key, node);
  return node;
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderSvg(node: VinMarkNode): string {
  const a = Object.entries(node.attrs)
    .map(([k, v]) => ` ${k}="${esc(String(v))}"`)
    .join("");
  const inner = (node.children ?? []).map(renderSvg).join("");
  return inner ? `<${node.tag}${a}>${inner}</${node.tag}>` : `<${node.tag}${a}/>`;
}

/** The mark as an SVG string, for emails, PDFs and server responses. */
export function vinMarkSvg(vin: string | null | undefined, options: VinMarkOptions = {}): string {
  return renderSvg(vinMark(vin, options));
}
