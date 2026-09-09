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

export interface HavalIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * HavalIcon icon component for React Native
 */
const HavalIcon = ({ size, width, height, ...props }: HavalIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M108.3 165.8h295.4v180.4H108.3V165.8M142 227.3v57.4M176.4 227.3v57.4M142 256h34.4" /><Path d="m187.1 284.7 20.5-57.4 20.5 57.4M196.1 265h23M237.1 227.3l18.9 57.4 18.9-57.4M283.9 284.7l20.5-57.4 20.5 57.4M292.9 265h23M335.6 227.3v57.4H370" /></G>
    </Svg>
  );
};

HavalIcon.displayName = 'HavalIcon';

export default HavalIcon;