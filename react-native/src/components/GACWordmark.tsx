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

export interface GACWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GACWordmark icon component for React Native
 */
const GACWordmark = ({ size, width, height, ...props }: GACWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M178.9 202.4 151 185.3h-37.5l-26.8 23.6-6.4 47.1 6.4 47.1 26.8 23.6H151l27.9-17.1V271H136M202.4 331 256 181l53.6 150M226 279.6h60M431.7 202.4l-27.8-17.1h-37.5l-26.8 23.6-6.5 47.1 6.5 47.1 26.8 23.6h37.5l27.8-17.1" /></G>
    </Svg>
  );
};

GACWordmark.displayName = 'GACWordmark';

export default GACWordmark;