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

export interface CitroenIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CitroenIconDark icon component for React Native
 */
const CitroenIconDark = ({ size, width, height, ...props }: CitroenIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M124.8 196.9 256 124.8l131.3 72.1" /><Path d="M124.8 239.6 256 167.4l131.3 72.2M124.8 351.2 256 279l131.3 72.2" /><Path d="M124.8 393.8 256 321.6l131.3 72.2" /></G>
    </Svg>
  );
};

CitroenIconDark.displayName = 'CitroenIconDark';

export default CitroenIconDark;