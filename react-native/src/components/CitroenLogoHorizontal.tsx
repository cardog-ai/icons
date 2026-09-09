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

export interface CitroenLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CitroenLogoHorizontal icon component for React Native
 */
const CitroenLogoHorizontal = ({ size, width, height, ...props }: CitroenLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m71.9 232.1 53.1-29.2 53.1 29.2" /><Path d="m71.9 249.4 53.1-29.3 53.1 29.3M71.9 294.5l53.1-29.2 53.1 29.2" /><Path d="m71.9 311.8 53.1-29.2 53.1 29.2M279.7 240.5l-8-4.9h-10.9l-7.7 6.8-1.9 13.6 1.9 13.6 7.7 6.8h10.9l8-4.9M302 234.3v43.4M323 234.3h31M338.5 234.3v43.4M362 277.7v-43.4h16.7l7.4 5 1.9 8.7-1.9 8.6-7.4 5H362M373.8 261.6l14.2 16.1M406.9 234.3l-7.8 6.2-1.8 15.5 1.8 15.5 7.8 6.2h9.3l7.7-6.2 1.8-15.5-1.8-15.5-7.7-6.2h-9.3M461 234.3h-26v43.4h26M435 256h19.8M439.4 226.3h4.9M451.7 226.3h5M471.5 277.7v-43.4l26 43.4v-43.4" /></G>
    </Svg>
  );
};

CitroenLogoHorizontal.displayName = 'CitroenLogoHorizontal';

export default CitroenLogoHorizontal;