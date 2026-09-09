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

export interface GACLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GACLogoHorizontalDark icon component for React Native
 */
const GACLogoHorizontalDark = ({ size, width, height, ...props }: GACLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m64.6 256 3-3.1 3-3 3-3 3.1-3 3-2.9 3-2.8 3-2.7 3-2.5 3.1-2.4 3-2.3 3-2.1 3-1.9 3-1.7 3.1-1.5 3-1.3 3-1.1 3-.8 3.1-.6 3-.3 3-.2 3 .2 3 .3 3.1.6 3 .8 3 1.1 3 1.3 3.1 1.5 3 1.7 3 1.9 3 2.1 3 2.3 3.1 2.4 3 2.5 3 2.7 3 2.8 3 2.9 3.1 3 3 3 3 3 3 3.1M64.6 256l3 3.1 3 3 3 3 3.1 3 3 2.9 3 2.8 3 2.7 3 2.5 3.1 2.4 3 2.3 3 2.1 3 1.9 3 1.7 3.1 1.5 3 1.3 3 1.1 3 .8 3.1.6 3 .3 3 .2 3-.2 3-.3 3.1-.6 3-.8 3-1.1 3-1.3 3.1-1.5 3-1.7 3-1.9 3-2.1 3-2.3 3.1-2.4 3-2.5 3-2.7 3-2.8 3-2.9 3.1-3 3-3 3-3 3-3.1" /><Path d="m64.6 256 3 2.8 3 2.5 3 2.4 3.1 2.2 3 2 3 1.7 3 1.5 3 1.3 3.1 1.1 3 .8 3 .6 3 .3 3 .1 3.1-.1 3-.3 3-.5 3-.7 3.1-.9 3-1 3-1.2 3-1.3 3-1.4 3.1-1.4 3-1.6 3-1.6 3-1.6 3.1-1.6 3-1.6 3-1.5 3-1.5 3-1.5 3.1-1.4 3-1.2 3-1.2 3-1 3-1 3.1-.7 3-.7 3-.4 3-.4M292.5 233.9l-11.5-7.1h-15.5l-11.1 9.7-2.6 19.5 2.6 19.5 11.1 9.7H281l11.5-7.1v-15.9h-17.7M302.3 287l22.1-62 22.1 62M312 265.7h24.8M397 233.9l-11.5-7.1H370l-11.1 9.7-2.6 19.5 2.6 19.5 11.1 9.7h15.5l11.5-7.1" /></G>
    </Svg>
  );
};

GACLogoHorizontalDark.displayName = 'GACLogoHorizontalDark';

export default GACLogoHorizontalDark;