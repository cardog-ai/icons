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

export interface DSLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DSLogoDark icon component for React Native
 */
const DSLogoDark = ({ size, width, height, ...props }: DSLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M175.1 111.9h99.7l9.7.8 9.5 2.2 8.9 3.8 8.4 5 7.4 6.4 6.3 7.4 5.1 8.3 3.7 9 2.3 9.5.8 9.7-.8 9.7-2.3 9.5-3.7 9-5.1 8.3-6.3 7.4-7.4 6.4-8.4 5-8.9 3.8-9.5 2.2-9.7.8h-37.5l-9.8-.8-9.5-2.2-8.9-3.8-8.4-5-7.4-6.4-6.3-7.4-5.1-8.3-3.7-9-2.3-9.5-.8-9.7.8-9.7 2.3-9.5 3.7-9 5.1-8.3 6.3-7.4 7.4-6.4 8.4-5 8.9-3.8 9.5-2.2 9.8-.8h-62.2M202.7 137.1v73.8" /><Path d="M202.7 137.1h23.2l15.9 11.6 6.3 25.3-6.3 25.3-15.9 11.6h-23.2M307.2 141.3l-30.6-4.2-10.6 10.5v16.9l11.6 8.4 19 2.2 11.6 8.4v16.9l-11.6 10.5-29.5-4.2M28.3 429.4V470M28.3 429.4h12.8l8.7 6.4 3.5 13.9-3.5 13.9-8.7 6.4H28.3M85.7 431.7l-16.8-2.3-5.8 5.8v9.3l6.4 4.6 10.4 1.2 6.4 4.6v9.3l-6.4 5.8-16.2-2.3M114.8 470l14.5-40.6 14.5 40.6M121.1 456.1h16.3M151.3 429.4V463l6.4 7h11.6l6.4-7v-33.6M183.2 429.4h29M197.7 429.4V470M227.6 429.4l-7.3 5.8-1.7 14.5 1.7 14.5 7.3 5.8h8.7l7.2-5.8 1.8-14.5-1.8-14.5-7.2-5.8h-8.7M254 470v-40.6l12.2 24.9 12.1-24.9V470M296 429.4l-7.2 5.8-1.8 14.5 1.8 14.5 7.2 5.8h8.7l7.3-5.8 1.7-14.5-1.7-14.5-7.3-5.8H296M322.4 429.4V470M322.4 429.4h13.4l7.5 4.6v8.7l-7.5 4.7h-13.4M322.4 447.4h15.1l8.1 5.2v12.2l-9.3 5.2h-13.9M368.8 429.4V470M390.9 429.4V470h24.3M449.5 429.4h-24.4V470h24.4M425.1 449.7h18.6M482.5 431.7l-16.8-2.3-5.8 5.8v9.3l6.4 4.6 10.4 1.2 6.4 4.6v9.3l-6.4 5.8-16.2-2.3" /></G>
    </Svg>
  );
};

DSLogoDark.displayName = 'DSLogoDark';

export default DSLogoDark;