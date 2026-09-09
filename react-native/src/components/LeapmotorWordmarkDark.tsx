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

export interface LeapmotorWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * LeapmotorWordmarkDark icon component for React Native
 */
const LeapmotorWordmarkDark = ({ size, width, height, ...props }: LeapmotorWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M29.5 225.2v61.6h37M118.5 225.2h-37v61.6h37M81.5 256h28.2M130 286.8l22-61.6 22 61.6M139.7 265.7h24.7M185.5 286.8v-61.6h23.8l10.6 7 2.6 12.3-2.6 12.4-10.6 7h-23.8M237.5 286.8v-61.6L256 263l18.5-37.8v61.6M301.4 225.2l-11 8.8-2.7 22 2.7 22 11 8.8h13.2l11-8.8 2.7-22-2.7-22-11-8.8h-13.2M338 225.2h44M360 225.2v61.6M405.4 225.2l-11 8.8-2.7 22 2.7 22 11 8.8h13.2l11-8.8 2.6-22-2.6-22-11-8.8h-13.2M445.5 286.8v-61.6h23.8l10.5 7 2.7 12.3-2.7 12.4-10.5 7h-23.8M462.2 263.9l20.3 22.9" /></G>
    </Svg>
  );
};

LeapmotorWordmarkDark.displayName = 'LeapmotorWordmarkDark';

export default LeapmotorWordmarkDark;