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

export interface SEATWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SEATWordmarkDark icon component for React Native
 */
const SEATWordmarkDark = ({ size, width, height, ...props }: SEATWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m115.2 193.2-58.8-8.1-20.3 20.2v32.5L58.4 254l36.5 4 22.3 16.2v32.5l-22.3 20.2-56.7-8.1M238.8 185.1h-85.1v141.8h85.1M153.7 256h64.8M265.1 326.9l50.7-141.8 50.6 141.8M287.4 278.3h56.7M384.7 185.1H486M435.3 185.1v141.8" /></G>
    </Svg>
  );
};

SEATWordmarkDark.displayName = 'SEATWordmarkDark';

export default SEATWordmarkDark;