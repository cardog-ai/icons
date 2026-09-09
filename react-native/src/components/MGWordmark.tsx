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

export interface MGWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * MGWordmark icon component for React Native
 */
const MGWordmark = ({ size, width, height, ...props }: MGWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M147.8 331V181l45 92.1 45-92.1v150M368.5 202.4l-27.9-17.1h-37.5l-26.7 23.6-6.5 47.1 6.5 47.1 26.7 23.6h37.5l27.9-17.1V271h-42.9" /></G>
    </Svg>
  );
};

MGWordmark.displayName = 'MGWordmark';

export default MGWordmark;