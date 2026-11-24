import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { vinMark, type VinMarkGrain, type VinMarkNode, type VinMarkShape } from "@cardog-icons/vin";

export interface VinMarkProps extends Omit<SvgProps, "color" | "children" | "title"> {
  /** The VIN, chassis number or legacy serial. `null` draws the quiet empty mark. */
  vin: string | null | undefined;
  /** Rendered size (width and height). Default 24. */
  size?: number;
  /** Module density. `auto` (default): coarse to 20, fine to 34, full above. */
  grain?: VinMarkGrain;
  /** Module shape. Default square, the cleanest. */
  shape?: VinMarkShape;
  /** A quiet hairline frame with one module of margin. */
  frame?: boolean;
  /** Modules knocked out of an ink tile. */
  inverted?: boolean;
  /** A real Data Matrix (ECC 200) a scanner reads back to the exact VIN. */
  scannable?: boolean;
  /** The VIN is still being typed: each character fills its own cells. */
  partial?: boolean;
  /** Accessible label. Default: the VIN. `false` hides the mark from screen readers (Android and iOS). */
  title?: string | false;
  /**
   * Ink colour. Native has no `currentColor` cascade, so pass the theme's text
   * colour. Default `#000`.
   */
  color?: string;
}

const camel = (k: string) => k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

/** Native has no data-* or aria-* on paths; what is left maps 1:1, with currentColor resolved to `color`. */
function pathProps(node: VinMarkNode, color: string): Record<string, string | number> {
  const out: Record<string, string | number> = {};
  for (const [k, v] of Object.entries(node.attrs)) {
    if (k.startsWith("data-") || k.startsWith("aria-")) continue;
    out[camel(k)] = v === "currentColor" ? color : v;
  }
  return out;
}

/**
 * The element tree for a mark, for react-native-svg: `svg` to `Svg`, `path`
 * to `Path`. Exported for tests and for renderers that compose it.
 */
export function vinMarkElement(props: VinMarkProps): React.ReactElement {
  const { vin, size = 24, grain, shape, frame, inverted, scannable, partial, title, color = "#000", ...rest } = props;
  const node = vinMark(vin, { size, grain, shape, frame, inverted, scannable, partial, title });
  const a = node.attrs;
  const label = title === false ? undefined : String(a["aria-label"]);
  return (
    <Svg
      viewBox={String(a.viewBox)}
      width={size}
      height={size}
      accessible={label !== undefined}
      accessibilityRole={label !== undefined ? "image" : undefined}
      accessibilityLabel={label}
      importantForAccessibility={label === undefined ? "no-hide-descendants" : undefined}
      accessibilityElementsHidden={label === undefined ? true : undefined}
      {...rest}
    >
      {(node.children ?? []).map((c, i) => (
        <Path key={i} {...pathProps(c, color)} />
      ))}
    </Svg>
  );
}

/**
 * The VIN mark for React Native, over react-native-svg. The same tree as the
 * web, so the same VIN draws the same mark on every surface.
 *
 *   <VinMark vin="2HGFE2F50TH102099" size={20} color={theme.text} />
 */
export const VinMark = React.memo(function VinMark(props: VinMarkProps) {
  return vinMarkElement(props);
});

VinMark.displayName = "VinMark";

export default VinMark;
