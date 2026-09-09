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

export interface DaciaIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DaciaIcon icon component for React Native
 */
const DaciaIcon = ({ size, width, height, ...props }: DaciaIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m128.1 254.4 108.6-57.7 32.3 60.9-108.6 57.7-32.3-60.9" /><Path d="m243 254.4 108.6-57.7 32.3 60.9-108.6 57.7-32.3-60.9" /></G>
    </Svg>
  );
};

DaciaIcon.displayName = 'DaciaIcon';

export default DaciaIcon;