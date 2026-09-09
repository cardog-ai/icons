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

export interface AlpineLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * AlpineLogoHorizontalDark icon component for React Native
 */
const AlpineLogoHorizontalDark = ({ size, width, height, ...props }: AlpineLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m68.6 310.5 49.8-101 6.6-13.3 24.6 47.8 31.8 66.5M89.8 272.6h59.8M118.4 209.5l79-35.2M250 281.4l18.1-50.8 18.1 50.8M258 264h20.3M295.7 230.6v50.8h30.4M338.4 281.4v-50.8H358l8.7 5.8 2.1 10.2-2.1 10.1-8.7 5.8h-19.6M396.4 230.6v50.8M423.9 281.4v-50.8l30.4 50.8v-50.8M497.1 230.6h-30.4v50.8h30.4M466.7 256h23.2" /></G>
    </Svg>
  );
};

AlpineLogoHorizontalDark.displayName = 'AlpineLogoHorizontalDark';

export default AlpineLogoHorizontalDark;