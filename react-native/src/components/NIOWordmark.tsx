import * as React from 'react';
import Svg, {
  Path,
  G,
  Circle,
  Rect,
  Ellipse,
  Line,
  Polygon,
  Polyline,
  Defs,
  ClipPath,
  LinearGradient,
  RadialGradient,
  Stop,
  Use,
  Symbol,
  Mask,
  Pattern,
  Image,
  ForeignObject,
  TSpan,
  TextPath,
  Text,
  SvgProps
} from 'react-native-svg';

export interface NIOWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * NIOWordmark icon component for React Native
 */
const NIOWordmark = ({ size, width, height, ...props }: NIOWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M84.6 331V181l90 150V181M256 181v150M366.4 181l-26.8 21.4-6.5 53.6 6.5 53.6 26.8 21.4h32.1l26.8-21.4 6.4-53.6-6.4-53.6-26.8-21.4h-32.1" /></G>
    </Svg>
  );
};

NIOWordmark.displayName = 'NIOWordmark';

export default NIOWordmark;