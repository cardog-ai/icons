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

export interface MGIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * MGIconDark icon component for React Native
 */
const MGIconDark = ({ size, width, height, ...props }: MGIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M116.5 116.5h279v279h-279v-279" /><Path d="M353 296.2 296.2 353h-80.4L159 296.2v-80.4l56.8-56.8h80.4l56.8 56.8v80.4" /><Path d="M188.1 303.1v-94.2l28.2 57.8 28.3-57.8v94.2M326.6 222.4l-17.4-10.8h-23.6l-16.8 14.8-4 29.6 4 29.6 16.8 14.8h23.6l17.4-10.8v-24.2h-26.9" /></G>
    </Svg>
  );
};

MGIconDark.displayName = 'MGIconDark';

export default MGIconDark;