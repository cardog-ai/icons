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

export interface OraWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * OraWordmarkDark icon component for React Native
 */
const OraWordmarkDark = ({ size, width, height, ...props }: OraWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m113.5 181-26.8 21.4-6.4 53.6 6.4 53.6 26.8 21.4h32.1l26.8-21.4 6.5-53.6-6.5-53.6-26.8-21.4h-32.1M211 331V181h57.9l25.7 17.1 6.4 30-6.4 30-25.7 17.2H211M251.7 275.3 301 331M328.9 331l53.5-150L436 331M352.4 279.6h60" /></G>
    </Svg>
  );
};

OraWordmarkDark.displayName = 'OraWordmarkDark';

export default OraWordmarkDark;