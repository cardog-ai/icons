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

export interface ZeekrLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * ZeekrLogoHorizontalDark icon component for React Native
 */
const ZeekrLogoHorizontalDark = ({ size, width, height, ...props }: ZeekrLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M71.9 202.9h106.2v106.2H71.9V202.9" /><Path d="M97.1 228.1h55.8l-47.8 55.8h55.8M252.6 225.4h38.5l-38.5 61.2h38.5M341.8 225.4h-36.7v61.2h36.7M305.1 256H333M393.4 225.4h-36.8v61.2h36.8M356.6 256h28M408.2 225.4v61.2M443.2 225.4l-35 33.2M421.3 249.9l23.6 36.7M459.8 286.6v-61.2h23.6l10.5 7 2.6 12.2-2.6 12.3-10.5 7h-23.6M476.4 263.9l20.1 22.7" /></G>
    </Svg>
  );
};

ZeekrLogoHorizontalDark.displayName = 'ZeekrLogoHorizontalDark';

export default ZeekrLogoHorizontalDark;