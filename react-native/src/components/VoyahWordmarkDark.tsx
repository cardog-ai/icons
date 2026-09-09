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

export interface VoyahWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * VoyahWordmarkDark icon component for React Native
 */
const VoyahWordmarkDark = ({ size, width, height, ...props }: VoyahWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#FFF" d="m411.6 225.5-12 1.4 1 59.6 12.9-.4.9-22.9 53-.5 4.8 1.4v22H486l-1-60.6-12.8.9-1 23.4h-56.8ZM39.8 225.9 26 227.8l42.9 58.7 44.9-58.7-16.2-.9-28.7 37.7ZM196.4 225.9l-68.3 2.4-5.7 9.1 2.4 43.4 9.5 6.2 68.3-2.8 5.7-9.1v-37.7Zm-54.9 12.9 51.5 1 1.4 31-4.7 3.3-51.1-.9-2.8-31ZM232.1 225.9l-15.2 1.5 34.8 34.3 2.9 25.3 11.9-1.4.5-23.9 34.8-34.3-18.1-.5-25.3 23.4ZM339.5 225.9l-45.8 60.6 15.7-.4 28.7-38.7 28.6 38.7 15.8.4Z" />
    </Svg>
  );
};

VoyahWordmarkDark.displayName = 'VoyahWordmarkDark';

export default VoyahWordmarkDark;