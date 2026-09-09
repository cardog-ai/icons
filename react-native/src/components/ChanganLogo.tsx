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

export interface ChanganLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * ChanganLogo icon component for React Native
 */
const ChanganLogo = ({ size, width, height, ...props }: ChanganLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m215 217.4 41 42.1 41-42.1M174 111.9l58.6 68-17.6 37.5M338 111.9l-58.6 68 17.6 37.5M80.7 401.7l-14.8-9.1h-20l-14.2 12.5-3.4 25 3.4 25.1 14.2 12.5h20l14.8-9.1M97.7 390.3V470M145.6 390.3V470M97.7 430.1h47.9M160.4 470l28.4-79.7 28.5 79.7M172.9 442.7h31.9M232.1 470v-79.7l47.8 79.7v-79.7M349.4 401.7l-14.8-9.1h-20l-14.2 12.5-3.4 25 3.4 25.1 14.2 12.5h20l14.8-9.1v-20.5h-22.8M361.9 470l28.5-79.7 28.4 79.7M374.4 442.7h31.9M433.6 470v-79.7l47.8 79.7v-79.7" /></G>
    </Svg>
  );
};

ChanganLogo.displayName = 'ChanganLogo';

export default ChanganLogo;