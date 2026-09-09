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

export interface SkodaWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SkodaWordmark icon component for React Native
 */
const SkodaWordmark = ({ size, width, height, ...props }: SkodaWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m96.8 206.1-46.7-6.4L34 215.8v25.7l17.7 12.9 29 3.2 17.7 12.9v25.7l-17.7 16.1-45-6.4M48.5 191.7l17.7-22.6M66.2 169.1l17.7 22.6M127.3 199.7v112.6M191.7 199.7l-64.4 61.1M151.5 244.7l43.4 67.6M243.9 199.7l-20.1 16.1L219 256l4.8 40.2 20.1 16.1h24.2l20.1-16.1L293 256l-4.8-40.2-20.1-16.1h-24.2M317.1 199.7v112.6M317.1 199.7h35.4l24.1 17.7 9.7 38.6-9.7 38.6-24.1 17.7h-35.4M405.6 312.3l40.2-112.6L486 312.3M423.3 273.7h45" /></G>
    </Svg>
  );
};

SkodaWordmark.displayName = 'SkodaWordmark';

export default SkodaWordmark;