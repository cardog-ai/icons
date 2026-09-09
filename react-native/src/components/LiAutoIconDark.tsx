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

export interface LiautoIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * LiautoIconDark icon component for React Native
 */
const LiautoIconDark = ({ size, width, height, ...props }: LiautoIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M124.8 124.8h262.5v262.5H124.8V124.8" /><Path d="M148.3 181.4v149.2h89.6M318.9 181.4v149.2" /></G>
    </Svg>
  );
};

LiautoIconDark.displayName = 'LiautoIconDark';

export default LiautoIconDark;