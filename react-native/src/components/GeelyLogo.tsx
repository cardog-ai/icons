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

export interface GeelyLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GeelyLogo icon component for React Native
 */
const GeelyLogo = ({ size, width, height, ...props }: GeelyLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m168.1 138.8 87.9-37.5 87.9 37.5v70.4L256 246.7l-87.9-37.5v-70.4" /><Path d="m191.5 167 64.5-25.8 64.5 25.8M191.5 181l64.5 25.8 64.5-25.8M136.6 394.6l-16.4-10.1h-22l-15.7 13.8-3.8 27.7 3.8 27.7 15.7 13.8h22l16.4-10.1v-22.6h-25.2M208.2 382h-52.8v88h52.8M155.4 426h40.3M282.4 382h-52.8v88h52.8M229.6 426h40.2M303.8 382v88h52.8M375.4 382l28.9 46.5M433.3 382l-29 46.5M404.3 428.5V470" /></G>
    </Svg>
  );
};

GeelyLogo.displayName = 'GeelyLogo';

export default GeelyLogo;