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

export interface OraLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * OraLogoHorizontalDark icon component for React Native
 */
const OraLogoHorizontalDark = ({ size, width, height, ...props }: OraLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m188.1 256-.5 6.1-1.7 5.9-2.6 5.8-3.7 5.4-4.6 5.1-5.4 4.6-6.2 4-6.9 3.3-7.4 2.7-7.8 2-8.1 1.2-8.2.4-8.2-.4-8.1-1.2-7.8-2-7.4-2.7-6.9-3.3-6.2-4-5.4-4.6-4.6-5.1-3.7-5.4-2.6-5.8-1.7-5.9-.5-6.1.5-6.1 1.7-5.9 2.6-5.8 3.7-5.4 4.6-5.1 5.4-4.6 6.2-4 6.9-3.3 7.4-2.7 7.8-2 8.1-1.2 8.2-.4 8.2.4 8.1 1.2 7.8 2 7.4 2.7 6.9 3.3 6.2 4 5.4 4.6 4.6 5.1 3.7 5.4 2.6 5.8 1.7 5.9.5 6.1" /><Path d="m97.6 241.6-5.1 4.1-1.3 10.3 1.3 10.3 5.1 4.1h6.2l5.1-4.1 1.3-10.3-1.3-10.3-5.1-4.1h-6.2M116.4 270.4v-28.8h11.1l4.9 3.3 1.2 5.8-1.2 5.7-4.9 3.3h-11.1M124.2 259.7l9.4 10.7M139 270.4l10.3-28.8 10.3 28.8M143.5 260.5H155M265.5 225l-11.1 8.9-2.6 22.1 2.6 22.1 11.1 8.9h13.3l11.1-8.9 2.6-22.1-2.6-22.1-11.1-8.9h-13.3M305.8 287v-62h23.9l10.6 7.1 2.7 12.4-2.7 12.4-10.6 7.1h-23.9M322.6 264l20.4 23M354.5 287l22.2-62 22.1 62M364.3 265.7h24.8" /></G>
    </Svg>
  );
};

OraLogoHorizontalDark.displayName = 'OraLogoHorizontalDark';

export default OraLogoHorizontalDark;