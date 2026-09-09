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

export interface SEATLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SEATLogoHorizontalDark icon component for React Native
 */
const SEATLogoHorizontalDark = ({ size, width, height, ...props }: SEATLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M178.5 286.9 125 317.8l-53.5-30.9v-61.8l53.5-30.9 53.5 30.9v61.8" /><Path d="m143.9 225.1-28.9-4-9.9 10V247l10.9 8 18 2 10.9 8v15.9l-10.9 10-27.9-4M289 228.5l-25.7-3.5-8.9 8.9V248l9.8 7.1 15.9 1.8 9.8 7.1v14.1l-9.8 8.9-24.8-3.5M343 225h-37.2v62H343M305.8 256h28.3M354.5 287l22.2-62 22.1 62M364.3 265.7h24.8M406.8 225h44.3M428.9 225v62" /></G>
    </Svg>
  );
};

SEATLogoHorizontalDark.displayName = 'SEATLogoHorizontalDark';

export default SEATLogoHorizontalDark;