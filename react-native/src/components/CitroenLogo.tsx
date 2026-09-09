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

export interface CitroenLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CitroenLogo icon component for React Native
 */
const CitroenLogo = ({ size, width, height, ...props }: CitroenLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M162.3 131.8 256 80.3l93.8 51.5" /><Path d="m162.3 162.3 93.7-51.6 93.8 51.6M162.3 242l93.7-51.6 93.8 51.6" /><Path d="m162.3 272.4 93.7-51.5 93.8 51.5M80.7 401.7l-14.8-9.1h-20l-14.2 12.5-3.4 25 3.4 25.1 14.2 12.5h20l14.8-9.1M121.6 390.3V470M160.4 390.3h56.9M188.8 390.3V470M232.1 470v-79.7h30.7l13.7 9.1 3.4 15.9-3.4 16-13.7 9.1h-30.7M253.7 440.4l26.2 29.6M314.6 390.3l-14.2 11.4-3.4 28.4 3.4 28.5 14.2 11.4h17.1l14.3-11.4 3.4-28.5-3.4-28.4-14.3-11.4h-17.1M414.3 390.3h-47.9V470h47.9M366.4 430.1h36.5M374.4 375.5h9.1M397.2 375.5h9.1M433.6 470v-79.7l47.8 79.7v-79.7" /></G>
    </Svg>
  );
};

CitroenLogo.displayName = 'CitroenLogo';

export default CitroenLogo;