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

export interface CupraIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CupraIcon icon component for React Native
 */
const CupraIcon = ({ size, width, height, ...props }: CupraIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m183.8 151 108.3 105-108.3 105v-54.1l55.8-50.9-55.8-50.9V151" /><Path d="M328.2 151 219.9 256l108.3 105v-54.1L272.4 256l55.8-50.9V151" /></G>
    </Svg>
  );
};

CupraIcon.displayName = 'CupraIcon';

export default CupraIcon;