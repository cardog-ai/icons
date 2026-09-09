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

export interface CitroenWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CitroenWordmarkDark icon component for React Native
 */
const CitroenWordmarkDark = ({ size, width, height, ...props }: CitroenWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m80.7 227.5-14.8-9.1h-20L31.7 231l-3.4 25 3.4 25 14.2 12.6h20l14.8-9.1M121.6 216.1v79.8M160.4 216.1h56.9M188.8 216.1v79.8M232.1 295.9v-79.8h30.7l13.7 9.2 3.4 15.9-3.4 15.9-13.7 9.1h-30.7M253.7 266.2l26.2 29.7M314.6 216.1l-14.2 11.4L297 256l3.4 28.5 14.2 11.4h17.1l14.3-11.4 3.4-28.5-3.4-28.5-14.3-11.4h-17.1M414.3 216.1h-47.9v79.8h47.9M366.4 256h36.5M374.4 201.3h9.1M397.2 201.3h9.1M433.6 295.9v-79.8l47.8 79.8v-79.8" /></G>
    </Svg>
  );
};

CitroenWordmarkDark.displayName = 'CitroenWordmarkDark';

export default CitroenWordmarkDark;