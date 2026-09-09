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

export interface GWMLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GWMLogoHorizontalDark icon component for React Native
 */
const GWMLogoHorizontalDark = ({ size, width, height, ...props }: GWMLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#454545" d="m130.6 198.8-12.1-.3-12.5 1.2-13.1 2.8-14 4.8-10.6 5.5-8.5 6.1-7.3 7-5.8 7.6-4 8.2-2.1 8.5-.6 9.1 1.5 10.4 3.7 10 4.5 7.6 8.5 9.1 6.1 4.6 9.2 4.9 6.9 2.7 12.2 3.7 7.9 1.2h7.3l7.9-1.8 4.6-3.4 2.1-3.6 1.8-9.2-.3-69.9-32.5 17-.9 25.3-1.2 10-3.1 6.4-3.6 3.6-3.1 1.9L75 291l-7-.3-6.4-2.8-3-2.1-4.3-4.6-2.7-4.5-2.8-7.3-1.2-6.4.3-12.2 3-10.3 4.9-8.5 7.9-8.8 9.4-7 10.1-5.2 10.6-3.7 15.2-3 16.2-1.2 15.8.9 16.4 3.6 12.8 4.9 12.4 7.3 9.5 8.8 3.9 5.5 3.7 7 2.4 7.9.6 4-.3 12.4-2.1 8.2-4 7.3-5.2 5.5-5.1 3.1-6.4 1.5-6.7-.6-3.7-1.6-4.2-3.6-4-7.6-.9-4.9-1.2-30.4-32.5-16.7v71.5l1.5 7.3 1.8 3.3 2.4 2.4 6.7 2.8 10.1.6 11.8-1.8 10.7-3.4 9.4-4.2 9.7-6.4 7.6-7.3 5.8-7.9 4-8.6 1.8-8.2.3-11.2-.6-5.8-4-11.9-4.5-7.3-4.3-5.1-5.8-5.5-7.6-5.5-15.5-7.6-20-5.5Z" /><Path fill="#FFF" d="m293.6 230.1-15.8-.2-.8.4v.9l16.3 48.8 1.3 1.7 13.6.2 1.3-1 8.7-25.5 1.5-3h.8l.5.8 9.7 27.9 1.3.8h13.4l1.3-1 16.3-49.1.2-1.3-.4-.4-15.9-.2-2.1 1.3-10.2 30.8-.7-.3-9.5-29.5-.9-1.9-.9-.4h-4.8l-1.3.8-10 30.8-1 .5-9.8-30-1.3-1.7ZM270.6 230.3l-58.6-.2-7 1.1-3.6 1.7-2.6 2.3-1.5 2.1-1.5 3.4-.8 3.8v22.8l.8 4.2 1.5 3.6 2.8 3.2 4.2 2.3 4.1 1.1 3.6.4h46.7l5.1-.8 3-1.3 2.3-1.9 1.1-1.7 1.5-5.5.2-18.3-.6-.9-.7-.4h-42.3l-.6.4v8.3l.4.3 24.9.2.6.4v7l-.4.8-.9.9-1.6.6h-34.3l-1.6-.6-.9-.9-.6-1.6v-22.2l1.2-2.3 2.4-1h54.4l.8-.7v-9.7l-.8-.9ZM385.5 230.3l-16.5-.2-.9.6v49.7l.9 1.3 1 .4h16.4l.6-.4.4-28 .9.4 11.7 25.1 1.9 2.7 8.7.2 1.3-.8 13.3-27.6.7.2.2 27.8.6.4h16.2l1.5-1 .6-1.5v-48.4l-.6-.9-16.8-.2-2.6 1.3-18.4 37.4-.7-.3-1.1-2.3-16.5-34.4-1.3-1.1Z" />
    </Svg>
  );
};

GWMLogoHorizontalDark.displayName = 'GWMLogoHorizontalDark';

export default GWMLogoHorizontalDark;