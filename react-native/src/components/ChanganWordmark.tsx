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

export interface ChanganWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * ChanganWordmark icon component for React Native
 */
const ChanganWordmark = ({ size, width, height, ...props }: ChanganWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m80.7 227.5-14.8-9.1h-20L31.7 231l-3.4 25 3.4 25 14.2 12.6h20l14.8-9.1M97.7 216.1v79.8M145.6 216.1v79.8M97.7 256h47.9M160.4 295.9l28.4-79.8 28.5 79.8M172.9 268.5h31.9M232.1 295.9v-79.8l47.8 79.8v-79.8M349.4 227.5l-14.8-9.1h-20L300.4 231l-3.4 25 3.4 25 14.2 12.6h20l14.8-9.1V264h-22.8M361.9 295.9l28.5-79.8 28.4 79.8M374.4 268.5h31.9M433.6 295.9v-79.8l47.8 79.8v-79.8" /></G>
    </Svg>
  );
};

ChanganWordmark.displayName = 'ChanganWordmark';

export default ChanganWordmark;