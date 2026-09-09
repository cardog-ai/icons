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

export interface XPENGWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * XPENGWordmark icon component for React Native
 */
const XPENGWordmark = ({ size, width, height, ...props }: XPENGWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m30.8 199.7 70.8 112.6M101.6 199.7 30.8 312.3M127.3 312.3V199.7h43.5l19.3 12.9 4.8 22.5-4.8 22.5-19.3 12.9h-43.5M289.8 199.7h-67.6v112.6h67.6M222.2 256h51.5M317.1 312.3V199.7l67.6 112.6V199.7M482.8 215.8l-20.9-12.9h-28.2l-20.1 17.7-4.8 35.4 4.8 35.4 20.1 17.7h28.2l20.9-12.9v-28.9h-32.2" /></G>
    </Svg>
  );
};

XPENGWordmark.displayName = 'XPENGWordmark';

export default XPENGWordmark;