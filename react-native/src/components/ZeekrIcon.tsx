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

export interface ZeekrIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * ZeekrIcon icon component for React Native
 */
const ZeekrIcon = ({ size, width, height, ...props }: ZeekrIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M124.8 124.8h262.5v262.5H124.8V124.8" /><Path d="M187.1 187.1h137.8L206.8 324.9h137.8" /></G>
    </Svg>
  );
};

ZeekrIcon.displayName = 'ZeekrIcon';

export default ZeekrIcon;