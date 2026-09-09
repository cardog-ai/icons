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

export interface XPENGIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * XPENGIcon icon component for React Native
 */
const XPENGIcon = ({ size, width, height, ...props }: XPENGIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M152.6 152.6 256 256 152.6 359.4M359.4 152.6 256 256l103.4 103.4M206.8 119.8l98.4 98.5M206.8 392.2l98.4-98.5" /></G>
    </Svg>
  );
};

XPENGIcon.displayName = 'XPENGIcon';

export default XPENGIcon;