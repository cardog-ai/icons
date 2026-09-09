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

export interface HavalLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * HavalLogoHorizontalDark icon component for React Native
 */
const HavalLogoHorizontalDark = ({ size, width, height, ...props }: HavalLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M65.2 219.5h119.6v73H65.2v-73M78.8 244.4v23.2M92.8 244.4v23.2M78.8 256h14" /><Path d="m97.1 267.6 8.3-23.2 8.3 23.2M100.8 259.7h9.3M117.4 244.4l7.6 23.2 7.6-23.2M136.3 267.6l8.3-23.2 8.3 23.2M139.9 259.7h9.3M157.2 244.4v23.2h14M253.5 225.4v61.2M290.2 225.4v61.2M253.5 256h36.7M301.6 286.6l21.8-61.2 21.9 61.2M311.2 265.6h24.5M354.9 225.4l20.1 61.2 20.1-61.2M404.7 286.6l21.9-61.2 21.8 61.2M414.3 265.6h24.5M459.8 225.4v61.2h36.7" /></G>
    </Svg>
  );
};

HavalLogoHorizontalDark.displayName = 'HavalLogoHorizontalDark';

export default HavalLogoHorizontalDark;