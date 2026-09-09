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

export interface LiautoWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * LiautoWordmarkDark icon component for React Native
 */
const LiautoWordmarkDark = ({ size, width, height, ...props }: LiautoWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M30.8 213.6v84.8h50.9M127.7 213.6v84.8M211.2 298.4l30.3-84.8 30.2 84.8M224.5 269.3h33.9M287.5 213.6v70.2l13.3 14.6H325l13.3-14.6v-70.2M354.1 213.6h60.5M384.3 213.6v84.8M446.7 213.6l-15.2 12.1-3.6 30.3 3.6 30.3 15.2 12.1h18.1l15.1-12.1 3.7-30.3-3.7-30.3-15.1-12.1h-18.1" /></G>
    </Svg>
  );
};

LiautoWordmarkDark.displayName = 'LiautoWordmarkDark';

export default LiautoWordmarkDark;