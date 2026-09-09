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

export interface NIOLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * NIOLogoHorizontalDark icon component for React Native
 */
const NIOLogoHorizontalDark = ({ size, width, height, ...props }: NIOLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m71.9 303.8 39.8-69.7 23.9 41.2" /><Path d="m114.4 275.3 35.2-61.1 43.8 80.3M173.5 258l19.9 36.5M253.5 287v-62l37.2 62v-62M324.4 225v62M370 225l-11.1 8.9-2.6 22.1 2.6 22.1L370 287h13.3l11.1-8.9L397 256l-2.6-22.1-11.1-8.9H370" /></G>
    </Svg>
  );
};

NIOLogoHorizontalDark.displayName = 'NIOLogoHorizontalDark';

export default NIOLogoHorizontalDark;