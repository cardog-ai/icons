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

export interface SkodaLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SkodaLogo icon component for React Native
 */
const SkodaLogo = ({ size, width, height, ...props }: SkodaLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m275.9 191.6-.3 6.5-1.1 6.5-1.9 6.3-2.5 6.1-3.1 5.8-3.9 5.3-4.3 4.9-5 4.4-5.3 3.8-5.7 3.2-6.1 2.5-6.3 1.8-6.5 1.1-6.6.4-6.5-.4-6.5-1.1-6.3-1.8-6.1-2.5-5.7-3.2-5.4-3.8-4.9-4.4-4.4-4.9-3.8-5.3-3.2-5.8-2.5-6.1-1.8-6.3-1.1-6.5-.4-6.5.4-6.6 1.1-6.5 1.8-6.3 2.5-6.1 3.2-5.7 3.8-5.3 4.4-4.9 4.9-4.4 5.4-3.9 5.7-3.1 6.1-2.5 6.3-1.9 6.5-1.1 6.5-.3 6.6.3 6.5 1.1 6.3 1.9 6.1 2.5 5.7 3.1 5.3 3.9 5 4.4 4.3 4.9 3.9 5.3 3.1 5.7 2.5 6.1 1.9 6.3 1.1 6.5.3 6.6M143.5 191.6h223.8M320.5 144.7l50.3 46.9-50.3 46.9M263 172.8l89.1-78.5M273.6 138.8l55.1-49.2M131.5 387l-36.4-5-12.6 12.6v20.1l13.8 10 22.7 2.6 13.8 10v20.1L119 470l-35.2-5M93.8 375.7l13.9-17.6M107.7 358.1l13.8 17.6M155.4 382v88M205.7 382l-50.3 47.8M174.3 417.2l33.9 52.8M246.6 382l-15.7 12.6-3.8 31.4 3.8 31.4 15.7 12.6h18.8l15.7-12.6 3.8-31.4-3.8-31.4-15.7-12.6h-18.8M303.8 382v88M303.8 382h27.6l18.9 13.8 7.5 30.2-7.5 30.2-18.9 13.8h-27.6M372.9 470l31.4-88 31.5 88M386.7 439.8h35.2" /></G>
    </Svg>
  );
};

SkodaLogo.displayName = 'SkodaLogo';

export default SkodaLogo;