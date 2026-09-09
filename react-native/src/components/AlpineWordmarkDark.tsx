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

export interface AlpineWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * AlpineWordmarkDark icon component for React Native
 */
const AlpineWordmarkDark = ({ size, width, height, ...props }: AlpineWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m26 302.7 33.3-93.4 33.4 93.4M40.7 270.7H78M110 209.3v93.4h56M188.7 302.7v-93.4h36l16 10.7 4 18.7-4 18.6-16 10.7h-36M295.3 209.3v93.4M346 302.7v-93.4l56 93.4v-93.4M480.7 209.3h-56v93.4h56M424.7 256h42.6" /></G>
    </Svg>
  );
};

AlpineWordmarkDark.displayName = 'AlpineWordmarkDark';

export default AlpineWordmarkDark;