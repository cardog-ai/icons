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

export interface DSWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DSWordmark icon component for React Native
 */
const DSWordmark = ({ size, width, height, ...props }: DSWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M28.3 235.7v40.6M28.3 235.7h12.8l8.7 6.4 3.5 13.9-3.5 13.9-8.7 6.4H28.3M85.7 238l-16.8-2.3-5.8 5.8v9.3l6.4 4.6 10.4 1.2 6.4 4.6v9.3l-6.4 5.8-16.2-2.3M114.8 276.3l14.5-40.6 14.5 40.6M121.1 262.4h16.3M151.3 235.7v33.6l6.4 7h11.6l6.4-7v-33.6M183.2 235.7h29M197.7 235.7v40.6M227.6 235.7l-7.3 5.8-1.7 14.5 1.7 14.5 7.3 5.8h8.7l7.2-5.8 1.8-14.5-1.8-14.5-7.2-5.8h-8.7M254 276.3v-40.6l12.2 24.9 12.1-24.9v40.6M296 235.7l-7.2 5.8L287 256l1.8 14.5 7.2 5.8h8.7l7.3-5.8 1.7-14.5-1.7-14.5-7.3-5.8H296M322.4 235.7v40.6M322.4 235.7h13.4l7.5 4.6v8.7l-7.5 4.7h-13.4M322.4 253.7h15.1l8.1 5.2v12.2l-9.3 5.2h-13.9M368.8 235.7v40.6M390.9 235.7v40.6h24.3M449.5 235.7h-24.4v40.6h24.4M425.1 256h18.6M482.5 238l-16.8-2.3-5.8 5.8v9.3l6.4 4.6 10.4 1.2 6.4 4.6v9.3l-6.4 5.8-16.2-2.3" /></G>
    </Svg>
  );
};

DSWordmark.displayName = 'DSWordmark';

export default DSWordmark;