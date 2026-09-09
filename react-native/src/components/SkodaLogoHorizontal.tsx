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

export interface SkodaLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SkodaLogoHorizontal icon component for React Native
 */
const SkodaLogoHorizontal = ({ size, width, height, ...props }: SkodaLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m136.3 266-.2 3.7-.6 3.7-1.1 3.5-1.4 3.5-1.8 3.2-2.1 3-2.5 2.8-2.8 2.5-3 2.2-3.3 1.8-3.5 1.4-3.5 1-3.7.7-3.7.2-3.7-.2-3.7-.7-3.6-1-3.4-1.4-3.3-1.8-3-2.2-2.8-2.5-2.5-2.8-2.1-3-1.8-3.2-1.5-3.5-1-3.5-.6-3.7-.2-3.7.2-3.8.6-3.6 1-3.6 1.5-3.4 1.8-3.3 2.1-3 2.5-2.8 2.8-2.5 3-2.2 3.3-1.8 3.4-1.4 3.6-1 3.7-.6 3.7-.2 3.7.2 3.7.6 3.5 1 3.5 1.4 3.3 1.8 3 2.2 2.8 2.5 2.5 2.8 2.1 3 1.8 3.3 1.4 3.4 1.1 3.6.6 3.6.2 3.8M61.3 266h126.8M161.5 239.4l28.6 26.6-28.6 26.5M129 255.3l50.5-44.5M135 236.1l31.2-27.9M288.5 228.9l-25.4-3.5-8.7 8.7v14l9.6 7 15.7 1.8 9.6 7v14l-9.6 8.7-24.5-3.5M262.2 221l9.7-12.2M271.9 208.8l9.6 12.2M305.1 225.4v61.2M340 225.4l-34.9 33.2M318.2 249.9l23.6 36.7M368.4 225.4l-10.9 8.7-2.6 21.9 2.6 21.9 10.9 8.7h13.2l10.9-8.7 2.6-21.9-2.6-21.9-10.9-8.7h-13.2M408.2 225.4v61.2M408.2 225.4h19.2l13.2 9.6 5.2 21-5.2 21-13.2 9.6h-19.2M456.3 286.6l21.8-61.2 21.9 61.2M465.9 265.6h24.5" /></G>
    </Svg>
  );
};

SkodaLogoHorizontal.displayName = 'SkodaLogoHorizontal';

export default SkodaLogoHorizontal;