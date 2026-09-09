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

export interface CupraWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CupraWordmarkDark icon component for React Native
 */
const CupraWordmarkDark = ({ size, width, height, ...props }: CupraWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m103.2 215.8-20.9-12.9H54.1L34 220.6 29.2 256l4.8 35.4 20.1 17.7h28.2l20.9-12.9M127.3 199.7V293l17.7 19.3h32.2l17.7-19.3v-93.3M222.2 312.3V199.7h43.5l19.3 12.9 4.8 22.5-4.8 22.5-19.3 12.9h-43.5M317.1 312.3V199.7h43.4l19.3 12.9 4.9 22.5-4.9 22.5-19.3 12.9h-43.4M347.7 270.5l37 41.8M405.6 312.3l40.2-112.6L486 312.3M423.3 273.7h45" /></G>
    </Svg>
  );
};

CupraWordmarkDark.displayName = 'CupraWordmarkDark';

export default CupraWordmarkDark;