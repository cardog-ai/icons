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

export interface DaciaWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DaciaWordmark icon component for React Native
 */
const DaciaWordmark = ({ size, width, height, ...props }: DaciaWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M32.4 199.7v112.6M32.4 199.7h35.4l24.1 17.7 9.7 38.6-9.7 38.6-24.1 17.7H32.4M120.9 312.3l40.2-112.6 40.2 112.6M138.6 273.7h45M293 215.8l-20.9-12.9h-28.2l-20.1 17.7L219 256l4.8 35.4 20.1 17.7h28.2l20.9-12.9M350.9 199.7v112.6M405.6 312.3l40.2-112.6L486 312.3M423.3 273.7h45" /></G>
    </Svg>
  );
};

DaciaWordmark.displayName = 'DaciaWordmark';

export default DaciaWordmark;