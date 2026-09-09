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

export interface PeugeotLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * PeugeotLogoDark icon component for React Native
 */
const PeugeotLogoDark = ({ size, width, height, ...props }: PeugeotLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M168.1 62.7h175.8v112.5L256 290l-87.9-114.8V62.7" /><Path d="m216.2 260.7 9.3-55.1 24.6-45.7" /><Path d="m250.1 159.9 29.3-21.1 9.4 28.2-23.4 5.8-15.3-12.9M257.2 181l42.2-30.4M216.2 260.7H249M225.5 205.6l-32.8-12.8-4.7-37.5M30.6 470v-79.7h30.7l13.7 9.1 3.4 15.9-3.4 16-13.7 9.1H30.6M145.6 390.3H97.7V470h47.9M97.7 430.1h36.5M164.9 390.3v66l12.5 13.7h22.8l12.5-13.7v-66M282.2 401.7l-14.8-9.1h-19.9l-14.3 12.5-3.4 25 3.4 25.1 14.3 12.5h19.9l14.8-9.1v-20.5h-22.8M347.1 390.3h-47.8V470h47.8M299.3 430.1h36.4M381.8 390.3l-14.2 11.4-3.4 28.4 3.4 28.5 14.2 11.4h17.1l14.2-11.4 3.4-28.5-3.4-28.4-14.2-11.4h-17.1M429.1 390.3H486M457.5 390.3V470" /></G>
    </Svg>
  );
};

PeugeotLogoDark.displayName = 'PeugeotLogoDark';

export default PeugeotLogoDark;