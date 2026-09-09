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

export interface NIOLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * NIOLogo icon component for React Native
 */
const NIOLogo = ({ size, width, height, ...props }: NIOLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m162.3 258.4 70.3-123.1 42.2 72.7" /><Path d="m237.3 208 62.1-107.8L376.7 242M341.5 177.5l35.2 64.5M155.4 470v-88l52.8 88v-88M256 382v88M320.7 382 305 394.6l-3.7 31.4 3.7 31.4 15.7 12.6h18.9l15.7-12.6 3.8-31.4-3.8-31.4-15.7-12.6h-18.9" /></G>
    </Svg>
  );
};

NIOLogo.displayName = 'NIOLogo';

export default NIOLogo;