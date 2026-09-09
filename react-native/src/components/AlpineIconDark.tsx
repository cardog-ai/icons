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

export interface AlpineIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * AlpineIconDark icon component for React Native
 */
const AlpineIconDark = ({ size, width, height, ...props }: AlpineIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m116.5 390.5 123.1-249.3 16.4-32.9 60.7 118.2 78.8 164M169 297h147.7M239.6 141.2l195.2-87" /></G>
    </Svg>
  );
};

AlpineIconDark.displayName = 'AlpineIconDark';

export default AlpineIconDark;