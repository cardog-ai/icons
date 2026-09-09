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

export interface SEATIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SEATIconDark icon component for React Native
 */
const SEATIconDark = ({ size, width, height, ...props }: SEATIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M388.2 332.3 256 408.6l-132.2-76.3V179.7L256 103.4l132.2 76.3v152.6" /><Path d="m302.8 179.7-71.4-9.8-24.6 24.6v39.4l27.1 19.6 44.2 5 27.1 19.6v39.4l-27.1 24.6-68.9-9.8" /></G>
    </Svg>
  );
};

SEATIconDark.displayName = 'SEATIconDark';

export default SEATIconDark;