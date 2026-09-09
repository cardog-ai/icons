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

export interface DongfengWordmarkDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DongfengWordmarkDark icon component for React Native
 */
const DongfengWordmarkDark = ({ size, width, height, ...props }: DongfengWordmarkDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#FFF" d="m76.7 241.1-5.9.3-5.8 2.9-3.9 5.5-1 4.6.3 5.5 2.3 5.5 3.9 3.6 6.8 2.3h6.2l6.2-2 5.2-5.2 1.6-5.2-.3-7.4-2.3-4.9-5.2-4.2-4.5-1.3Zm-2.6 5.5 4.9-.3 1.6.6 2.6 2.3 1.6 3.6.3 3.5-1.3 5.5-2.6 3-3.2 1.3h-2.9l-3.6-1.3-2.3-2.6-1.3-3.6v-4.9l1.3-3.9 1.6-1.9ZM153.3 241.1l-6.5.3-6.1 2.3-4.2 3.5-2.3 4.6-.3 7.4 1.9 4.9 4.9 4.6 6.1 2.2 9.1.4 8.2-2v-15.2h-13.4v4.8h6.2l-.3 6.5-4.6.7-4.5-1-3.6-2.3-1.6-2.3-.7-6.8 1.3-2.9 2.6-2.6 4.9-1.9h5.9l6.1 1.6.7-5.5ZM280.4 241.1l-8.2.6-5.2 2.3-3.5 3.2-2.6 5.9v6.5l2.2 5.2 3.9 3.5 6.9 2.6 9.1.4 8.1-2v-15.2h-13.3v4.8h6.1l-.3 6.5-4.5.7-4.6-1-3.2-2-2.3-3.2-.7-3.9 1-4.2 4.2-4.2 3.9-1.3h5.9l6.2 1.6.6-5.5ZM375.5 241.1l-7.1.6-4.2 2.3-3.3 3.6-1.9 5.8.3 7.1 2.6 5.6 3.9 3.2 6.2 2 8.1-.4 5.5-2.2 3.9-4.3 2-6.5-.7-7.1-2.6-4.9-5.5-3.9Zm-2.9 5.5 4.9-.3 2.3.9 2.6 2.6.9 2.3.4 6.5-.7 2.3-1.3 2.2-3.6 2.6-4.5.4-2.3-.7-2.9-2.6-1.6-3.6.6-8.4 2.6-3.2ZM438.9 241.1l-5.9.3-5.8 2.9-2.6 2.9-2.3 6.9.7 7.4 2.9 5.2 5.5 3.6 3.9 1h6.5l6.2-2 5.2-5.2 1.6-5.2-.3-7.1-2.3-5.2-2.6-2.6-3.6-2Zm-2.6 5.5 4.9-.3 1.6.6 2.6 2.3 1.6 3.9v6.1l-1 2.6-2.6 3-3.2 1.3h-2.9l-3.6-1.3-2.3-2.6-1.3-3.6v-5.2l1.3-3.6 1.6-1.9ZM38.3 241.7l-12.3-.3v29.2h15.3l4.8-1 5.2-2.9 3.6-4.9 1-7.4-1.3-4.9-2-2.9-5.8-3.9Zm-4.5 5.2 8.1.3 3.3 1.7 1.6 1.9 1.3 6.5-1.3 3.9-2.6 2.6-5.2 1.6-5.5-.3ZM107.9 241.7l-9.1-.3v29.2h6.8v-20.4l13 20.4h9.1v-28.9l-7.2-.3v20.4ZM191.7 241.7l-20.2-.3v29.2h7.8v-12h12.1v-5.2h-12.1v-6.8H192ZM218.6 241.7h-21.4v28.9H219v-5.2h-14v-7.1h13v-5.2h-13v-6.5h13.6ZM234.6 241.7l-8.8-.3v29.2h6.8v-20.4l12.7 20.4h9.1v-29.2h-6.8v20.8ZM324.5 241.7h-10.7v28.9h6.8v-21.1l8.8 20.8 7.2.3 8.7-21.4.4 21.4h7.1v-29.2l-10.7.3-8.5 20.5h-.6ZM419.4 241.7l-25-.3v5.5h8.8v23.7h7.4v-23.7h8.8ZM474 241.7l-13-.3v29.2h7.5v-11.7h3.5l3 2 4.2 9.7h6.8v-2.9l-4.5-9.4-2-1.7 4.6-3.5.9-2.3-.3-4.2-3.2-3.6-4.3-1.3Zm-5.5 5.2 5.5-.3 1.9.6 1.3 1.3v3.3l-2.9 1.9-5.8.4Z" />
    </Svg>
  );
};

DongfengWordmarkDark.displayName = 'DongfengWordmarkDark';

export default DongfengWordmarkDark;