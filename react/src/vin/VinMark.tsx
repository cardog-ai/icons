import * as React from "react";
import { forwardRef, memo, useMemo } from "react";
import { vinMark, type VinMarkGrain, type VinMarkNode, type VinMarkShape } from "@cardog-icons/vin";

export interface VinMarkProps extends Omit<React.SVGProps<SVGSVGElement>, "ref" | "children" | "title"> {
  /** The VIN, chassis number or legacy serial. `null` draws the quiet empty mark. */
  vin: string | null | undefined;
  /** Rendered size in pixels (width and height). Default 24. */
  size?: number;
  /** Module density. `auto` (default): coarse to 20px, fine to 34px, full above. */
  grain?: VinMarkGrain;
  /** Module shape. Default square, the cleanest. */
  shape?: VinMarkShape;
  /** A quiet hairline frame with one module of margin. */
  frame?: boolean;
  /** Modules knocked out of an ink tile. */
  inverted?: boolean;
  /** A real Data Matrix (ECC 200) a scanner reads back to the exact VIN. Scan on screen from 48px. */
  scannable?: boolean;
  /** The VIN is still being typed: each character fills its own cells. */
  partial?: boolean;
  /** Accessible name. Default: the VIN. `false` when visible text beside it names the vehicle. */
  title?: string | false;
  /** Ink colour. Default `currentColor`, so the mark takes the text colour. */
  color?: string;
}

const camel = (k: string) =>
  k.startsWith("data-") || k.startsWith("aria-") ? k : k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

function toReact(node: VinMarkNode, key?: number): React.ReactElement {
  const props: Record<string, unknown> = { key };
  for (const [k, v] of Object.entries(node.attrs)) props[camel(k)] = v;
  return React.createElement(node.tag, props, ...(node.children ?? []).map((c, i) => toReact(c, i)));
}

/**
 * The VIN mark as an SVG: a thin, memoised map of the tree `vinMark` returns.
 * Monochrome in `currentColor`, so it holds in light and dark with no CSS.
 * No "use client": it renders on the server as well.
 *
 *   <VinMark vin="2HGFE2F50TH102099" size={20} title={false} />   beside a label
 *   <VinMark vin={vin} size={48} />                                named by the VIN
 *   <VinMark vin={vin} size={64} scannable />                      a real Data Matrix
 */
const VinMarkBase = forwardRef<SVGSVGElement, VinMarkProps>(function VinMark(
  { vin, size = 24, grain, shape, frame, inverted, scannable, partial, title, color, ...props },
  ref,
) {
  const node = useMemo(
    () => vinMark(vin, { size, grain, shape, frame, inverted, scannable, partial, title }),
    [vin, size, grain, shape, frame, inverted, scannable, partial, title],
  );
  const svgProps: Record<string, unknown> = { ref, ...props };
  for (const [k, v] of Object.entries(node.attrs)) if (!(camel(k) in props)) svgProps[camel(k)] = v;
  if (color) svgProps.color = color;
  if (svgProps.style === undefined) svgProps.style = { flexShrink: 0 };
  return React.createElement("svg", svgProps, ...(node.children ?? []).map((c, i) => toReact(c, i)));
});

export const VinMark = memo(VinMarkBase);
VinMark.displayName = "VinMark";

export default VinMark;
