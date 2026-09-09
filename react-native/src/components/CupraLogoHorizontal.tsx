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

export interface CupraLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CupraLogoHorizontal icon component for React Native
 */
const CupraLogoHorizontal = ({ size, width, height, ...props }: CupraLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m95.8 213.5 43.8 42.5-43.8 42.5v-21.9l22.6-20.6-22.6-20.6v-21.9" /><Path d="M154.2 213.5 110.4 256l43.8 42.5v-21.9L131.6 256l22.6-20.6v-21.9M292 234.1l-11.4-6.9h-15.3l-10.9 9.6-2.7 19.2 2.7 19.2 10.9 9.6h15.3l11.4-6.9M305.1 225.4v50.7l9.6 10.5h17.5l9.6-10.5v-50.7M356.6 286.6v-61.2h23.6l10.5 7 2.7 12.2-2.7 12.3-10.5 7h-23.6M408.2 286.6v-61.2h23.6l10.5 7 2.6 12.2-2.6 12.3-10.5 7h-23.6M424.8 263.9l20.1 22.7M456.3 286.6l21.8-61.2 21.9 61.2M465.9 265.6h24.5" /></G>
    </Svg>
  );
};

CupraLogoHorizontal.displayName = 'CupraLogoHorizontal';

export default CupraLogoHorizontal;