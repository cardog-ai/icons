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

export interface NIOIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * NIOIconDark icon component for React Native
 */
const NIOIconDark = ({ size, width, height, ...props }: NIOIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m124.8 374.1 98.4-172.2 59.1 101.7" /><Path d="m229.8 303.6 86.9-151L425 351.2M375.8 260.9l49.2 90.3" /></G>
    </Svg>
  );
};

NIOIconDark.displayName = 'NIOIconDark';

export default NIOIconDark;