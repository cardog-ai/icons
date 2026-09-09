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

export interface DSIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DSIconDark icon component for React Native
 */
const DSIconDark = ({ size, width, height, ...props }: DSIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M142.8 169h139.5l13.6 1.1 13.3 3.2 12.5 5.3 11.7 7 10.4 8.9 8.8 10.4 7.1 11.6 5.2 12.6 3.2 13.3 1.1 13.6-1.1 13.6-3.2 13.3-5.2 12.6-7.1 11.6-8.8 10.4-10.4 8.9-11.7 7-12.5 5.3-13.3 3.2-13.6 1.1h-52.5l-13.7-1.1-13.3-3.2-12.5-5.3-11.7-7-10.4-8.9-8.8-10.4-7.1-11.6-5.2-12.6-3.2-13.3-1.1-13.6 1.1-13.6 3.2-13.3 5.2-12.6 7.1-11.6 8.8-10.4 10.4-8.9 11.7-7 12.5-5.3 13.3-3.2 13.7-1.1h-87M181.4 204.3v103.4" /><Path d="M181.4 204.3h32.5l22.2 16.3 8.8 35.4-8.8 35.4-22.2 16.3h-32.5M327.6 210.2l-42.8-5.9-14.8 14.8v23.6l16.3 11.8 26.5 3 16.3 11.8v23.6l-16.3 14.8-41.3-5.9" /></G>
    </Svg>
  );
};

DSIconDark.displayName = 'DSIconDark';

export default DSIconDark;