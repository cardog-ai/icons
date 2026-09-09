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

export interface PeugeotWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * PeugeotWordmarkDark icon component for React Native
 */
const PeugeotWordmarkDark = ({ size, width, height, ...props }: PeugeotWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M30.6 295.9v-79.8h30.7l13.7 9.2 3.4 15.9-3.4 15.9-13.7 9.1H30.6M145.6 216.1H97.7v79.8h47.9M97.7 256h36.5M164.9 216.1v66.1l12.5 13.7h22.8l12.5-13.7v-66.1M282.2 227.5l-14.8-9.1h-19.9L233.2 231l-3.4 25 3.4 25 14.3 12.6h19.9l14.8-9.1V264h-22.8M347.1 216.1h-47.8v79.8h47.8M299.3 256h36.4M381.8 216.1l-14.2 11.4-3.4 28.5 3.4 28.5 14.2 11.4h17.1l14.2-11.4 3.4-28.5-3.4-28.5-14.2-11.4h-17.1M429.1 216.1H486M457.5 216.1v79.8" /></G>
    </Svg>
  );
};

PeugeotWordmarkDark.displayName = 'PeugeotWordmarkDark';

export default PeugeotWordmarkDark;