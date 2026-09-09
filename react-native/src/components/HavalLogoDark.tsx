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

export interface HavalLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * HavalLogoDark icon component for React Native
 */
const HavalLogoDark = ({ size, width, height, ...props }: HavalLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M150.5 109.5h211v129h-211v-129M174.6 153.5v41M199.2 153.5v41M174.6 174h24.6" /><Path d="m206.8 194.5 14.6-41 14.7 41M213.2 180.4h16.4M242.5 153.5l13.5 41 13.5-41M275.9 194.5l14.7-41 14.6 41M282.4 180.4h16.4M312.8 153.5v41h24.6M81.3 382v88M134.1 382v88M81.3 426h52.8M150.4 470l31.4-88 31.5 88M164.2 439.8h35.2M227.1 382l28.9 88 28.9-88M298.7 470l31.5-88 31.4 88M312.6 439.8h35.2M377.9 382v88h52.8" /></G>
    </Svg>
  );
};

HavalLogoDark.displayName = 'HavalLogoDark';

export default HavalLogoDark;