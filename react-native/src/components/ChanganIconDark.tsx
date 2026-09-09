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

export interface ChanganIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * ChanganIconDark icon component for React Native
 */
const ChanganIconDark = ({ size, width, height, ...props }: ChanganIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m198.6 316.7 57.4 59.1 57.4-59.1M141.2 169l82 95.2-24.6 52.5M370.8 169l-82 95.2 24.6 52.5" /></G>
    </Svg>
  );
};

ChanganIconDark.displayName = 'ChanganIconDark';

export default ChanganIconDark;