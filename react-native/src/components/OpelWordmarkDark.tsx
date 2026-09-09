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

export interface OpelWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * OpelWordmarkDark icon component for React Native
 */
const OpelWordmarkDark = ({ size, width, height, ...props }: OpelWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m61.5 185.1-25.4 20.2-6 50.7 6 50.7 25.4 20.2h30.4l25.3-20.2 6.1-50.7-6.1-50.7-25.3-20.2H61.5M153.7 326.9V185.1h54.7l24.3 16.2 6.1 28.4-6.1 28.3-24.3 16.2h-54.7M358.3 185.1h-85.1v141.8h85.1M273.2 256h64.9M392.8 185.1v141.8h85.1" /></G>
    </Svg>
  );
};

OpelWordmarkDark.displayName = 'OpelWordmarkDark';

export default OpelWordmarkDark;