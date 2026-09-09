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

export interface MGLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * MGLogoHorizontalDark icon component for React Native
 */
const MGLogoHorizontalDark = ({ size, width, height, ...props }: MGLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M68.6 199.6h112.8v112.8H68.6V199.6" /><Path d="m164.3 272.3-23 23h-32.6l-23-23v-32.6l23-23h32.6l23 23v32.6" /><Path d="M97.5 275.1v-38.2l11.4 23.4 11.5-23.4v38.2M153.6 242.4l-7.1-4.4H137l-6.8 6-1.6 12 1.6 12 6.8 6h9.5l7.1-4.4v-9.8h-10.9M253.5 287v-62l18.6 38.1 18.6-38.1v62M344.8 233.9l-11.5-7.1h-15.5l-11.1 9.7L304 256l2.7 19.5 11.1 9.7h15.5l11.5-7.1v-15.9h-17.7" /></G>
    </Svg>
  );
};

MGLogoHorizontalDark.displayName = 'MGLogoHorizontalDark';

export default MGLogoHorizontalDark;