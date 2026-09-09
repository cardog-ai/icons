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

export interface LiautoLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * LiautoLogoDark icon component for React Native
 */
const LiautoLogoDark = ({ size, width, height, ...props }: LiautoLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M162.3 80.3h187.5v187.5H162.3V80.3" /><Path d="M179.1 120.7v106.6h64M300.9 120.7v106.6M30.8 385.3V470h50.9M127.7 385.3V470M211.2 470l30.3-84.7 30.2 84.7M224.5 440.9h33.9M287.5 385.3v70.2l13.3 14.5H325l13.3-14.5v-70.2M354.1 385.3h60.5M384.3 385.3V470M446.7 385.3l-15.2 12.1-3.6 30.2 3.6 30.3 15.2 12.1h18.1l15.1-12.1 3.7-30.3-3.7-30.2-15.1-12.1h-18.1" /></G>
    </Svg>
  );
};

LiautoLogoDark.displayName = 'LiautoLogoDark';

export default LiautoLogoDark;