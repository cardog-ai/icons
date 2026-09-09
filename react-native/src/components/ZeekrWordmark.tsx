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

export interface ZeekrWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * ZeekrWordmark icon component for React Native
 */
const ZeekrWordmark = ({ size, width, height, ...props }: ZeekrWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M30.8 199.7h70.8L30.8 312.3h70.8M194.9 199.7h-67.6v112.6h67.6M127.3 256h51.5M289.8 199.7h-67.6v112.6h67.6M222.2 256h51.5M317.1 199.7v112.6M381.5 199.7l-64.4 61.1M341.2 244.7l43.5 67.6M412 312.3V199.7h43.4l19.3 12.9 4.9 22.5-4.9 22.5-19.3 12.9H412M442.6 270.5l37 41.8" /></G>
    </Svg>
  );
};

ZeekrWordmark.displayName = 'ZeekrWordmark';

export default ZeekrWordmark;