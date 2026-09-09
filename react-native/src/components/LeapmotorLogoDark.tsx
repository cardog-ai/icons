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

export interface LeapmotorLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * LeapmotorLogoDark icon component for React Native
 */
const LeapmotorLogoDark = ({ size, width, height, ...props }: LeapmotorLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m332.1 144.1 4.2 8.9 3.2 9.3 2.1 9.6 1 9.7-.1 9.9-1.2 9.7-2.3 9.5-3.3 9.2-4.4 8.8-5.3 8.2-6.2 7.6-7.1 6.8-7.8 6-8.4 5.1-8.9 4.1-9.3 3-9.6 2-9.8.9-9.8-.3-9.7-1.2-9.5-2.5-9.2-3.5-8.8-4.5-8.1-5.4-7.5-6.4-6.7-7.1-5.9-7.9-4.9-8.4-4-9-2.9-9.4-1.9-9.6-.7-9.8.3-9.8 1.6-9.7 2.5-9.5 3.6-9.1 4.6-8.6 5.6-8.1 6.4-7.4 7.3-6.6 7.9-5.8 8.5-4.8 9-3.9 9.5-2.8 9.6-1.7 9.8-.6 9.8.5 9.7 1.6M281.8 223.2l80.8-121.9M29.5 408.3V470h37M118.5 408.3h-37V470h37M81.5 439.2h28.2M130 470l22-61.7 22 61.7M139.7 448.9h24.7M185.5 470v-61.7h23.8l10.6 7.1 2.6 12.3-2.6 12.3-10.6 7.1h-23.8M237.5 470v-61.7l18.5 37.9 18.5-37.9V470M301.4 408.3l-11 8.8-2.7 22.1 2.7 22 11 8.8h13.2l11-8.8 2.7-22-2.7-22.1-11-8.8h-13.2M338 408.3h44M360 408.3V470M405.4 408.3l-11 8.8-2.7 22.1 2.7 22 11 8.8h13.2l11-8.8 2.6-22-2.6-22.1-11-8.8h-13.2M445.5 470v-61.7h23.8l10.5 7.1 2.7 12.3-2.7 12.3-10.5 7.1h-23.8M462.2 447.1l20.3 22.9" /></G>
    </Svg>
  );
};

LeapmotorLogoDark.displayName = 'LeapmotorLogoDark';

export default LeapmotorLogoDark;