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

export interface SAICWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SAICWordmark icon component for React Native
 */
const SAICWordmark = ({ size, width, height, ...props }: SAICWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m115.2 193.2-58.8-8.1-20.3 20.2v32.5L58.4 254l36.5 4 22.3 16.2v32.5l-22.3 20.2-56.7-8.1M145.6 326.9l50.6-141.8 50.7 141.8M167.9 278.3h56.7M315.8 185.1v141.8M481.9 205.3l-26.3-16.2h-35.5l-25.3 22.3-6.1 44.6 6.1 44.6 25.3 22.3h35.5l26.3-16.2" /></G>
    </Svg>
  );
};

SAICWordmark.displayName = 'SAICWordmark';

export default SAICWordmark;