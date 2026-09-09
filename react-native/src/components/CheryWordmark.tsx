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

export interface CheryWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CheryWordmark icon component for React Native
 */
const CheryWordmark = ({ size, width, height, ...props }: CheryWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m103.2 215.8-20.9-12.9H54.1L34 220.6 29.2 256l4.8 35.4 20.1 17.7h28.2l20.9-12.9M127.3 199.7v112.6M194.9 199.7v112.6M127.3 256h67.6M289.8 199.7h-67.6v112.6h67.6M222.2 256h51.5M317.1 312.3V199.7h43.4l19.3 12.9 4.9 22.5-4.9 22.5-19.3 12.9h-43.4M347.7 270.5l37 41.8M408.8 199.7l37 59.5M482.8 199.7l-37 59.5M445.8 259.2v53.1" /></G>
    </Svg>
  );
};

CheryWordmark.displayName = 'CheryWordmark';

export default CheryWordmark;