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

export interface GACLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GACLogoDark icon component for React Native
 */
const GACLogoDark = ({ size, width, height, ...props }: GACLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m149.4 174 5.3-5.4 5.3-5.4 5.4-5.3 5.3-5.3 5.3-5.1 5.4-4.9 5.3-4.8 5.3-4.5 5.3-4.2 5.4-4 5.3-3.7 5.3-3.4 5.4-2.9 5.3-2.7 5.3-2.3 5.4-1.8 5.3-1.5 5.3-1.1 5.4-.6 5.3-.2 5.3.2 5.4.6 5.3 1.1 5.3 1.5 5.4 1.8 5.3 2.3 5.3 2.7 5.4 2.9 5.3 3.4 5.3 3.7 5.4 4 5.3 4.2 5.3 4.5 5.3 4.8 5.4 4.9 5.3 5.1 5.3 5.3 5.4 5.3 5.3 5.4 5.3 5.4M149.4 174l5.3 5.4 5.3 5.4 5.4 5.3 5.3 5.3 5.3 5.1 5.4 4.9 5.3 4.8 5.3 4.5 5.3 4.2 5.4 4 5.3 3.7 5.3 3.4 5.4 2.9 5.3 2.7 5.3 2.3 5.4 1.8 5.3 1.5 5.3 1.1 5.4.6 5.3.2 5.3-.2 5.4-.6 5.3-1.1 5.3-1.5 5.4-1.8 5.3-2.3 5.3-2.7 5.4-2.9 5.3-3.4 5.3-3.7 5.4-4 5.3-4.2 5.3-4.5 5.3-4.8 5.4-4.9 5.3-5.1 5.3-5.3 5.4-5.3 5.3-5.4 5.3-5.4" /><Path d="m149.4 174 5.3 4.9 5.3 4.5 5.4 4.2 5.3 3.9 5.3 3.5 5.4 3 5.3 2.7 5.3 2.3 5.3 1.8 5.4 1.5 5.3 1 5.3.6 5.4.2 5.3-.2 5.3-.6 5.4-.9 5.3-1.2 5.3-1.6 5.4-1.8 5.3-2 5.3-2.3 5.4-2.5 5.3-2.5 5.3-2.7 5.4-2.9 5.3-2.8 5.3-2.8 5.4-2.8 5.3-2.8 5.3-2.6 5.4-2.6 5.3-2.4 5.3-2.3 5.3-2.1 5.4-1.8 5.3-1.6 5.3-1.4 5.4-1.1 5.3-.8 5.3-.6M210.7 394.6l-16.3-10.1h-22l-15.7 13.8-3.8 27.7 3.8 27.7 15.7 13.8h22l16.3-10.1v-22.6h-25.1M224.6 470l31.4-88 31.4 88M238.4 439.8h35.2M359.1 394.6l-16.4-10.1h-22L305 398.3l-3.7 27.7 3.7 27.7 15.7 13.8h22l16.4-10.1" /></G>
    </Svg>
  );
};

GACLogoDark.displayName = 'GACLogoDark';

export default GACLogoDark;