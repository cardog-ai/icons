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

export interface LiautoLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * LiautoLogoHorizontal icon component for React Native
 */
const LiautoLogoHorizontal = ({ size, width, height, ...props }: LiautoLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M71.9 202.9h106.2v106.2H71.9V202.9" /><Path d="M81.4 225.8v60.4h36.3M150.5 225.8v60.4M252.6 233v46h27.7M305.3 233v46M350.7 279l16.4-46 16.5 46M357.9 263.2h18.4M392.1 233v38.1l7.2 7.9h13.2l7.2-7.9V233M428.3 233h32.9M444.7 233v46M478.6 233l-8.2 6.6-2 16.4 2 16.4 8.2 6.6h9.9l8.2-6.6 2-16.4-2-16.4-8.2-6.6h-9.9" /></G>
    </Svg>
  );
};

LiautoLogoHorizontal.displayName = 'LiautoLogoHorizontal';

export default LiautoLogoHorizontal;