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

export interface LeapmotorLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * LeapmotorLogoHorizontal icon component for React Native
 */
const LeapmotorLogoHorizontal = ({ size, width, height, ...props }: LeapmotorLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m168.1 239.1 2.4 5 1.8 5.3 1.2 5.4.6 5.5-.1 5.6-.7 5.5-1.3 5.4-1.8 5.2-2.5 5-3.1 4.7-3.5 4.3-4 3.8-4.4 3.4-4.8 2.9-5 2.3-5.3 1.7-5.4 1.2-5.6.4-5.5-.1-5.5-.7-5.4-1.4-5.2-2-5-2.5-4.6-3.1-4.2-3.6-3.8-4-3.4-4.5-2.8-4.8-2.2-5.1-1.6-5.3-1.1-5.5-.4-5.5.2-5.6.8-5.5 1.4-5.3 2.1-5.2 2.6-4.9 3.2-4.6 3.6-4.2 4.1-3.7 4.5-3.3 4.9-2.7 5.1-2.2 5.3-1.6 5.5-1 5.5-.3 5.6.3 5.5.9M139.6 283.9l45.8-69.1M251.9 239.2v33.6H272M300.3 239.2h-20.1v33.6h20.1M280.2 256h15.3M306.5 272.8l12-33.6 12 33.6M311.8 261.3h13.4M336.7 272.8v-33.6h12.9l5.8 3.9 1.4 6.7-1.4 6.7-5.8 3.8h-12.9M364.9 272.8v-33.6l10.1 20.6 10.1-20.6v33.6M399.7 239.2l-6 4.8-1.5 12 1.5 12 6 4.8h7.1l6-4.8 1.5-12-1.5-12-6-4.8h-7.1M419.5 239.2h24M431.5 239.2v33.6M456.2 239.2l-6 4.8-1.4 12 1.4 12 6 4.8h7.2l5.9-4.8 1.5-12-1.5-12-5.9-4.8h-7.2M478 272.8v-33.6h12.9l5.7 3.9 1.5 6.7-1.5 6.7-5.7 3.8H478M487.1 260.3l11 12.5" /></G>
    </Svg>
  );
};

LeapmotorLogoHorizontal.displayName = 'LeapmotorLogoHorizontal';

export default LeapmotorLogoHorizontal;