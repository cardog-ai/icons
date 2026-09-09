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

export interface GeelyLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GeelyLogoHorizontalDark icon component for React Native
 */
const GeelyLogoHorizontalDark = ({ size, width, height, ...props }: GeelyLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m75.2 236.1 49.8-21.3 49.8 21.3v39.8L125 297.2l-49.8-21.3v-39.8" /><Path d="m88.5 252 36.5-14.6 36.5 14.6M88.5 260l36.5 14.6 36.5-14.6M292 234.1l-11.4-6.9h-15.3l-10.9 9.6-2.7 19.2 2.7 19.2 10.9 9.6h15.3l11.4-6.9v-15.8h-17.5M341.8 225.4h-36.7v61.2h36.7M305.1 256H333M393.4 225.4h-36.8v61.2h36.8M356.6 256h28M408.2 225.4v61.2h36.7M458 225.4l20.1 32.3M498.3 225.4l-20.2 32.3M478.1 257.7v28.9" /></G>
    </Svg>
  );
};

GeelyLogoHorizontalDark.displayName = 'GeelyLogoHorizontalDark';

export default GeelyLogoHorizontalDark;