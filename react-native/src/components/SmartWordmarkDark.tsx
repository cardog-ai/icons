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

export interface SmartWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SmartWordmarkDark icon component for React Native
 */
const SmartWordmarkDark = ({ size, width, height, ...props }: SmartWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m96.8 206.1-46.7-6.4L34 215.8v25.7l17.7 12.9 29 3.2 17.7 12.9v25.7l-17.7 16.1-45-6.4M127.3 312.3V199.7l33.8 69.2 33.8-69.2v112.6M215.8 312.3 256 199.7l40.2 112.6M233.5 273.7h45M317.1 312.3V199.7h43.4l19.3 12.9 4.9 22.5-4.9 22.5-19.3 12.9h-43.4M347.7 270.5l37 41.8M405.6 199.7H486M445.8 199.7v112.6" /></G>
    </Svg>
  );
};

SmartWordmarkDark.displayName = 'SmartWordmarkDark';

export default SmartWordmarkDark;