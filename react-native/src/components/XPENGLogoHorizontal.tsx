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

export interface XPENGLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * XPENGLogoHorizontal icon component for React Native
 */
const XPENGLogoHorizontal = ({ size, width, height, ...props }: XPENGLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M83.2 214.2 125 256l-41.8 41.8M166.8 214.2 125 256l41.8 41.8M105.1 200.9l39.8 39.8M105.1 311.1l39.8-39.8M252.6 225.4l38.5 61.2M291.1 225.4l-38.5 61.2M305.1 286.6v-61.2h23.6l10.5 7 2.6 12.2-2.6 12.3-10.5 7h-23.6M393.4 225.4h-36.8v61.2h36.8M356.6 256h28M408.2 286.6v-61.2l36.7 61.2v-61.2M498.3 234.1l-11.4-6.9h-15.3l-10.9 9.6L458 256l2.7 19.2 10.9 9.6h15.3l11.4-6.9v-15.8h-17.5" /></G>
    </Svg>
  );
};

XPENGLogoHorizontal.displayName = 'XPENGLogoHorizontal';

export default XPENGLogoHorizontal;