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

export interface ChanganLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * ChanganLogoHorizontal icon component for React Native
 */
const ChanganLogoHorizontal = ({ size, width, height, ...props }: ChanganLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m101.8 280.6 23.2 23.9 23.2-23.9M78.5 220.8l33.2 38.5-9.9 21.3M171.5 220.8l-33.2 38.5 9.9 21.3M279.7 240.5l-8-4.9h-10.9l-7.7 6.8-1.9 13.6 1.9 13.6 7.7 6.8h10.9l8-4.9M289 234.3v43.4M315 234.3v43.4M289 256h26M323 277.7l15.5-43.4 15.5 43.4M329.8 262.8h17.4M362 277.7v-43.4l26 43.4v-43.4M425.7 240.5l-8-4.9h-10.8l-7.8 6.8-1.8 13.6 1.8 13.6 7.8 6.8h10.8l8-4.9v-11.2h-12.3M432.5 277.7l15.5-43.4 15.5 43.4M439.4 262.8h17.3M471.5 277.7v-43.4l26 43.4v-43.4" /></G>
    </Svg>
  );
};

ChanganLogoHorizontal.displayName = 'ChanganLogoHorizontal';

export default ChanganLogoHorizontal;