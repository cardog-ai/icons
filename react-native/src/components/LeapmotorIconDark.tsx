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

export interface LeapmotorIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * LeapmotorIconDark icon component for React Native
 */
const LeapmotorIconDark = ({ size, width, height, ...props }: LeapmotorIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m362.6 214.2 5.9 12.4 4.4 13 2.9 13.4 1.4 13.7v13.7l-1.8 13.7-3.2 13.3-4.6 12.9-6.2 12.3-7.5 11.5-8.6 10.7-9.9 9.5-10.9 8.3-11.8 7.2-12.5 5.6-13 4.3-13.5 2.8-13.7 1.2-13.7-.3-13.6-1.8-13.3-3.4-12.9-4.9-12.2-6.3-11.4-7.6-10.5-8.9-9.3-10-8.3-11-6.9-11.9-5.6-12.5-4-13.2-2.6-13.4-1.1-13.7.5-13.8 2.1-13.5 3.5-13.3 5.1-12.7 6.5-12.2 7.8-11.3 8.9-10.3 10.2-9.3 11.1-8.1 12-6.7 12.6-5.5 13.2-3.8 13.5-2.5 13.7-.8 13.7.7 13.6 2.3M292.1 324.9l113.2-170.6" /></G>
    </Svg>
  );
};

LeapmotorIconDark.displayName = 'LeapmotorIconDark';

export default LeapmotorIconDark;