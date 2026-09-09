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

export interface DongfengIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DongfengIcon icon component for React Native
 */
const DongfengIcon = ({ size, width, height, ...props }: DongfengIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#E60021" d="m277.7 44.8-45.8-.8-31.3 5.6-32.1 11.3-37 20.8L97 112.3l-21.7 28.1L56 178.1l-11.2 40.2v75.4L48 309l12.1 34.5 22.4 38.6 28.2 31.3 20.8 16.9 17.7 11.2 24.9 12 20.9 7.3 36.9 7.2h45.8l36.9-7.2 42.6-17.7 31.3-20.9 28.1-27.3 23.3-32.9 18.5-42.6 8-37.7.8-43.4-7.2-40.1-15.3-39.4-20.9-32.9-30.5-32.1-34.5-24.1-23.3-11.2-20.9-7.3Zm-31.3 24.1 33.7.8 39.3 9.6L350 93.8l30.5 22.5L407 146l16 27.3-6.4 21.7-12.8 24.9-18.5 24.9-14.5 12.8-2.4-32.1-11.2-37.8-17.7-31.3-25.7-28.9-28.9-20.9-37.7-16-37.8-6.4-29.7.8-1.6 1.6 18.5 4.8 27.3 12.8 16.8 11.3 12.9 12-32.9 3.2-41 13.7-28.9 17.6-28.1 26.5-18.5 26.5-8.8 17.7-7.2 20.9-4.9 22.5-1.6 19.2 2.5 38.6-9.7-25.7-4.8-20.9-2.4-40.1 2.4-22.5 5.6-24.1 9.7-24.9 10.4-19.3 14.4-20.1 20.9-21.6 33-23.3 20-9.7 21.7-7.2 23.3-4.8Zm7.2 60.2h3.2l16.1 17.7 22.4 36.9L305 211l5.6 39.4-2.4 35.3-11.2 38.6-20.1 35.3-21.7 24.1-23.3-24.9-18.5-32.1-11.2-35.4-3.2-24.9 1.6-36.1 9.6-36.9 10.5-22.5 11.2-17.7Zm171 49.8 6.5 12.9 8 29.7 2.4 17.6v33.8l-3.2 21.6-7.2 25.7-11.3 24.9-12 19.3-12.1 15.3-23.3 22.5-19.2 13.6-20.1 10.4-29.7-9.6-32.1-18.5-16.1-14.4 20.1-.8 28.1-5.6 37.7-16.1 28.9-20.9 28.1-32.1 16.1-29.7 9.6-30.5 3.2-21.7v-32.9ZM138 254.4l4 37.7 12 36.2 15.3 26.5 26.5 29.7 28.9 20.9 35.3 15.2 31.3 6.4 38.6.8-21.7 8.1-25.7 5.6-14.5 1.6-41.7-1.6-24.9-5.6-25.7-9.7-25.7-14.4-24.9-20.1-24.1-28.1-9.6-15.3-4.8-12 8.8-24.9 11.2-20.9 16.1-21.7Z" />
    </Svg>
  );
};

DongfengIcon.displayName = 'DongfengIcon';

export default DongfengIcon;