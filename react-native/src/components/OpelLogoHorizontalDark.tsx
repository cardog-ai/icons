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

export interface OpelLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * OpelLogoHorizontalDark icon component for React Native
 */
const OpelLogoHorizontalDark = ({ size, width, height, ...props }: OpelLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m188.1 256-.3 6.2-.9 6.1-1.5 6-2.1 5.8-2.7 5.7-3.1 5.3-3.7 4.9-4.2 4.6-4.6 4.2-4.9 3.7-5.3 3.1-5.7 2.7-5.8 2.1-6 1.5-6.1.9-6.2.3-6.2-.3-6.1-.9-6-1.5-5.8-2.1-5.6-2.7-5.4-3.1-4.9-3.7-4.6-4.2-4.2-4.6-3.7-4.9-3.1-5.3-2.7-5.7-2.1-5.8-1.5-6-.9-6.1-.3-6.2.3-6.2.9-6.1 1.5-6 2.1-5.8 2.7-5.6 3.1-5.4 3.7-4.9 4.2-4.6 4.6-4.2 4.9-3.7 5.4-3.1 5.6-2.7 5.8-2.1 6-1.5 6.1-.9 6.2-.3 6.2.3 6.1.9 6 1.5 5.8 2.1 5.7 2.7 5.3 3.1 4.9 3.7 4.6 4.2 4.2 4.6 3.7 4.9 3.1 5.4 2.7 5.6 2.1 5.8 1.5 6 .9 6.1.3 6.2" /><Path d="M137 202.9 107.7 258H127l-14 51.1 30.6-57.1h-19.9l13.3-49.1M265.5 225l-11.1 8.9-2.6 22.1 2.6 22.1 11.1 8.9h13.3l11.1-8.9 2.6-22.1-2.6-22.1-11.1-8.9h-13.3M305.8 287v-62h23.9l10.6 7.1 2.7 12.4-2.7 12.4-10.6 7.1h-23.9M395.3 225h-37.2v62h37.2M358.1 256h28.3M410.3 225v62h37.2" /></G>
    </Svg>
  );
};

OpelLogoHorizontalDark.displayName = 'OpelLogoHorizontalDark';

export default OpelLogoHorizontalDark;