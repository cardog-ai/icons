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

export interface GWMIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GWMIconDark icon component for React Native
 */
const GWMIconDark = ({ size, width, height, ...props }: GWMIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#454545" d="m270 113.4-30.3-.8-31.1 3.1-32.6 6.8-34.9 12.1-26.6 13.7-21.2 15.2-18.2 17.4-14.4 19-9.9 20.5-5.3 21.2-1.5 22.7 3.8 25.8 9.1 25.1 11.4 18.9 21.2 22.8 15.2 11.4 22.7 12.1 17.5 6.8 30.3 9.1 19.7 3.1h18.2l19.8-4.6 11.3-8.3 5.4-9.1 4.5-22.8-.8-174.4-81.1 42.4-2.3 63-3 25-7.6 15.9-9.1 9.1-7.6 4.6-11.4 3-17.4-.7-15.9-6.9-7.6-5.3L79.6 319l-6.8-11.4-6.8-18.2-3-16 .7-30.3 7.6-25.8 12.1-21.2 19.8-22 23.5-17.5 25-12.9 26.6-9.1 37.9-7.5 40.2-3.1 39.4 2.3 41 9.1 31.8 12.1 31.1 18.2 23.5 22 9.9 13.7 9.1 17.4 6.1 19.8 1.5 9.8-.8 31.1-5.3 20.5-9.8 18.2-12.9 13.6-12.9 7.6-15.9 3.8-16.7-1.5-9.1-3.8-10.7-9.1-9.8-18.9-2.3-12.2-3-75.8-81.2-41.7v178.2l3.8 18.2 4.6 8.3 6 6.1 16.7 6.8 25 1.6 29.6-4.6 26.6-8.3 23.5-10.7 24.3-15.9 18.9-18.2 14.4-19.7 9.9-21.2 4.5-20.5.8-28.1-1.5-14.4-9.9-29.6-11.4-18.2-10.6-12.9-14.4-13.6-18.9-13.7-38.7-19-50.1-13.6Z" />
    </Svg>
  );
};

GWMIconDark.displayName = 'GWMIconDark';

export default GWMIconDark;