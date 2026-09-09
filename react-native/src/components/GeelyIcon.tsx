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

export interface GeelyIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GeelyIcon icon component for React Native
 */
const GeelyIcon = ({ size, width, height, ...props }: GeelyIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m133 206.8 123-52.5 123 52.5v98.4l-123 52.5-123-52.5v-98.4" /><Path d="m165.8 246.2 90.2-36.1 90.2 36.1M165.8 265.8l90.2 36.1 90.2-36.1" /></G>
    </Svg>
  );
};

GeelyIcon.displayName = 'GeelyIcon';

export default GeelyIcon;