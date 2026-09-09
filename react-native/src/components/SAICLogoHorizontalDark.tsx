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

export interface SAICLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SAICLogoHorizontalDark icon component for React Native
 */
const SAICLogoHorizontalDark = ({ size, width, height, ...props }: SAICLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m183.4 256-.3 6.5-1.1 6.5-1.8 6.3-2.5 6.1-3.2 5.7-3.8 5.3-4.4 4.9-4.9 4.4-5.3 3.8-5.7 3.2-6.1 2.5-6.3 1.8-6.5 1.1-6.5.3-6.5-.3-6.5-1.1-6.3-1.8-6.1-2.5-5.7-3.2-5.3-3.8-4.9-4.4-4.4-4.9-3.8-5.3-3.2-5.7-2.5-6.1L68 269l-1.1-6.5-.3-6.5.3-6.5L68 243l1.8-6.3 2.5-6.1 3.2-5.7 3.8-5.3 4.4-4.9 4.9-4.4 5.3-3.8 5.7-3.2 6.1-2.5 6.3-1.8 6.5-1.1 6.5-.3 6.5.3 6.5 1.1 6.3 1.8 6.1 2.5 5.7 3.2 5.3 3.8 4.9 4.4 4.4 4.9 3.8 5.3 3.2 5.7 2.5 6.1 1.8 6.3 1.1 6.5.3 6.5" /><Path d="m69.2 270.6 27.2-27.9 28.6 26.6 28.6-26.6 27.2 27.9M289 228.5l-25.7-3.5-8.9 8.9V248l9.8 7.1 15.9 1.8 9.8 7.1v14.1l-9.8 8.9-24.8-3.5M302.3 287l22.1-62 22.1 62M312 265.7h24.8M376.7 225v62M449.3 233.9l-11.5-7.1h-15.5l-11.1 9.7-2.7 19.5 2.7 19.5 11.1 9.7h15.5l11.5-7.1" /></G>
    </Svg>
  );
};

SAICLogoHorizontalDark.displayName = 'SAICLogoHorizontalDark';

export default SAICLogoHorizontalDark;