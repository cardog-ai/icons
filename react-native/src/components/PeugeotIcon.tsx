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

export interface PeugeotIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * PeugeotIcon icon component for React Native
 */
const PeugeotIcon = ({ size, width, height, ...props }: PeugeotIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M133 100.1h246v157.5L256 418.4 133 257.6V100.1" /><Path d="m200.2 377.4 13.1-77.1 34.5-64M247.8 236.3l41-29.5 13.1 39.4-32.8 8.2-21.3-18.1M257.6 265.8l59.1-42.6M200.2 377.4h46" /><Path d="m213.3 300.3-45.9-18-6.6-52.5" /></G>
    </Svg>
  );
};

PeugeotIcon.displayName = 'PeugeotIcon';

export default PeugeotIcon;