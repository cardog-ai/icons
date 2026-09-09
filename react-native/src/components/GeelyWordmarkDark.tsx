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

export interface GeelyWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GeelyWordmarkDark icon component for React Native
 */
const GeelyWordmarkDark = ({ size, width, height, ...props }: GeelyWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m103.2 215.8-20.9-12.9H54.1L34 220.6 29.2 256l4.8 35.4 20.1 17.7h28.2l20.9-12.9v-28.9H71M194.9 199.7h-67.6v112.6h67.6M127.3 256h51.5M289.8 199.7h-67.6v112.6h67.6M222.2 256h51.5M317.1 199.7v112.6h67.6M408.8 199.7l37 59.5M482.8 199.7l-37 59.5M445.8 259.2v53.1" /></G>
    </Svg>
  );
};

GeelyWordmarkDark.displayName = 'GeelyWordmarkDark';

export default GeelyWordmarkDark;