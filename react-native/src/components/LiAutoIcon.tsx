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

export interface LiautoIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * LiautoIcon icon component for React Native
 */
const LiautoIcon = ({ size, width, height, ...props }: LiautoIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M124.8 124.8h262.5v262.5H124.8V124.8" /><Path d="M148.3 181.4v149.2h89.6M318.9 181.4v149.2" /></G>
    </Svg>
  );
};

LiautoIcon.displayName = 'LiautoIcon';

export default LiautoIcon;