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

export interface GACIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GACIconDark icon component for React Native
 */
const GACIconDark = ({ size, width, height, ...props }: GACIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m106.7 256 7.5-7.6 7.4-7.6 7.5-7.4 7.5-7.3 7.4-7.2 7.5-6.9 7.5-6.6 7.4-6.3 7.5-5.9 7.5-5.6 7.4-5.2 7.5-4.7 7.4-4.2 7.5-3.7 7.5-3.2 7.4-2.6 7.5-2.1 7.5-1.5 7.4-.9 7.5-.3 7.5.3 7.4.9 7.5 1.5 7.5 2.1 7.4 2.6 7.5 3.2 7.5 3.7 7.4 4.2 7.5 4.7 7.4 5.2 7.5 5.6 7.5 5.9 7.4 6.3 7.5 6.6 7.5 6.9 7.4 7.2 7.5 7.3 7.5 7.4 7.4 7.6 7.5 7.6M106.7 256l7.5 7.6 7.4 7.6 7.5 7.4 7.5 7.3 7.4 7.2 7.5 6.9 7.5 6.6 7.4 6.3 7.5 5.9 7.5 5.6 7.4 5.2 7.5 4.7 7.4 4.2 7.5 3.7 7.5 3.2 7.4 2.6 7.5 2.1 7.5 1.5 7.4.9 7.5.3 7.5-.3 7.4-.9 7.5-1.5 7.5-2.1 7.4-2.6 7.5-3.2 7.5-3.7 7.4-4.2 7.5-4.7 7.4-5.2 7.5-5.6 7.5-5.9 7.4-6.3 7.5-6.6 7.5-6.9 7.4-7.2 7.5-7.3 7.5-7.4 7.4-7.6 7.5-7.6" /><Path d="m106.7 256 7.5 6.8 7.4 6.3 7.5 5.9 7.5 5.4 7.4 5 7.5 4.2 7.5 3.8 7.4 3.2 7.5 2.5 7.5 2.1 7.4 1.4 7.5.8 7.4.3 7.5-.3 7.5-.7 7.4-1.3 7.5-1.8 7.5-2.1 7.4-2.5 7.5-2.9 7.5-3.2 7.4-3.5 7.5-3.6 7.5-3.7 7.4-4 7.5-3.9 7.5-4 7.4-4 7.5-3.8 7.4-3.7 7.5-3.6 7.5-3.4 7.4-3.2 7.5-2.9 7.5-2.5 7.4-2.3 7.5-1.9 7.5-1.5 7.4-1.2 7.5-.8" /></G>
    </Svg>
  );
};

GACIconDark.displayName = 'GACIconDark';

export default GACIconDark;