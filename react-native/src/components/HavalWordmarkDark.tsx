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

export interface HavalWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * HavalWordmarkDark icon component for React Native
 */
const HavalWordmarkDark = ({ size, width, height, ...props }: HavalWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M32.4 199.7v112.6M100 199.7v112.6M32.4 256H100M120.9 312.3l40.2-112.6 40.2 112.6M138.6 273.7h45M219 199.7l37 112.6 37-112.6M310.7 312.3l40.2-112.6 40.2 112.6M328.4 273.7h45M412 199.7v112.6h67.6" /></G>
    </Svg>
  );
};

HavalWordmarkDark.displayName = 'HavalWordmarkDark';

export default HavalWordmarkDark;