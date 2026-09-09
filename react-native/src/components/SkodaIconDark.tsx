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

export interface SkodaIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SkodaIconDark icon component for React Native
 */
const SkodaIconDark = ({ size, width, height, ...props }: SkodaIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m283.9 280.6-.5 9.2-1.6 9.1-2.5 8.8-3.5 8.5-4.5 8.1-5.3 7.4-6.1 6.9-6.9 6.2-7.5 5.3-8 4.4-8.6 3.5-8.7 2.6-9.2 1.5-9.1.5-9.2-.5-9.1-1.5-8.8-2.6-8.5-3.5-8.1-4.4-7.4-5.3-6.9-6.2-6.2-6.9-5.3-7.4-4.5-8.1-3.5-8.5-2.5-8.8-1.6-9.1-.5-9.2.5-9.2 1.6-9.1 2.5-8.8 3.5-8.5 4.5-8 5.3-7.5 6.2-6.9 6.9-6.1 7.4-5.4 8.1-4.4 8.5-3.5 8.8-2.6 9.1-1.5 9.2-.5 9.1.5 9.2 1.5 8.7 2.6 8.6 3.5 8 4.4 7.5 5.4 6.9 6.1 6.1 6.9 5.3 7.5 4.5 8 3.5 8.5 2.5 8.8 1.6 9.1.5 9.2M98.5 280.6h313.4M346.2 215l70.6 65.6-70.6 65.6M265.8 254.4l124.7-110M280.6 206.8l77.1-68.9" /></G>
    </Svg>
  );
};

SkodaIconDark.displayName = 'SkodaIconDark';

export default SkodaIconDark;