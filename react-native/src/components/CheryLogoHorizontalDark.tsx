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

export interface CheryLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CheryLogoHorizontalDark icon component for React Native
 */
const CheryLogoHorizontalDark = ({ size, width, height, ...props }: CheryLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m190.1 256-.6 6.3-1.6 6.3-2.8 6-3.8 5.6-4.7 5.3-5.6 4.8-6.4 4.1-7.1 3.6-7.6 2.8-8.1 2-8.3 1.3-8.5.4-8.5-.4-8.3-1.3-8.1-2-7.6-2.8-7.1-3.6-6.4-4.1-5.6-4.8-4.7-5.3-3.8-5.6-2.8-6-1.6-6.3-.6-6.3.6-6.3 1.6-6.3 2.8-6 3.8-5.6 4.7-5.3 5.6-4.8 6.4-4.1 7.1-3.6 7.6-2.8 8.1-2 8.3-1.3 8.5-.4 8.5.4 8.3 1.3 8.1 2 7.6 2.8 7.1 3.6 6.4 4.1 5.6 4.8 4.7 5.3 3.8 5.6 2.8 6 1.6 6.3.6 6.3" /><Path d="m91.9 247.3-4.5-2.8h-6.1l-4.4 3.8-1 7.7 1 7.7 4.4 3.8h6.1l4.5-2.8M97.1 243.8v24.4M111.8 243.8v24.4M97.1 256h14.7M132.3 243.8h-14.6v24.4h14.6M117.7 256h11.1M138.2 268.2v-24.4h9.4l4.2 2.8 1.1 4.9-1.1 4.8-4.2 2.8h-9.4M144.9 259.1l8 9.1M158.1 243.8l8 12.9M174.1 243.8l-8 12.9M166.1 256.7v11.5M292 234.1l-11.4-6.9h-15.3l-10.9 9.6-2.7 19.2 2.7 19.2 10.9 9.6h15.3l11.4-6.9M305.1 225.4v61.2M341.8 225.4v61.2M305.1 256h36.7M393.4 225.4h-36.8v61.2h36.8M356.6 256h28M408.2 286.6v-61.2h23.6l10.5 7 2.6 12.2-2.6 12.3-10.5 7h-23.6M424.8 263.9l20.1 22.7M458 225.4l20.1 32.3M498.3 225.4l-20.2 32.3M478.1 257.7v28.9" /></G>
    </Svg>
  );
};

CheryLogoHorizontalDark.displayName = 'CheryLogoHorizontalDark';

export default CheryLogoHorizontalDark;