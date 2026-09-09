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

export interface MGLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * MGLogoDark icon component for React Native
 */
const MGLogoDark = ({ size, width, height, ...props }: MGLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M156.4 74.4h199.2v199.2H156.4V74.4" /><Path d="m325.3 202.7-40.6 40.6h-57.4l-40.6-40.6v-57.4l40.6-40.6h57.4l40.6 40.6v57.4" /><Path d="M207.5 207.6v-67.2l20.1 41.3 20.3-41.3v67.2M306.4 150l-12.4-7.7h-16.8l-12.1 10.5-2.8 21.2 2.8 21.2 12.1 10.5H294l12.4-7.7v-17.3h-19.2M192.5 470v-88l26.4 54.1 26.4-54.1v88M322 394.6l-16.3-10.1h-22l-15.8 13.8-3.7 27.7 3.7 27.7 15.8 13.8h22l16.3-10.1v-22.6h-25.1" /></G>
    </Svg>
  );
};

MGLogoDark.displayName = 'MGLogoDark';

export default MGLogoDark;