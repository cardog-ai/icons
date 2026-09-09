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

export interface AlpineLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * AlpineLogoDark icon component for React Native
 */
const AlpineLogoDark = ({ size, width, height, ...props }: AlpineLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M156.4 270.1 244.3 92 256 68.5l43.4 84.4 56.2 117.2M193.9 203.3h105.5M244.3 92l139.4-62.1M39.1 470l31.5-88 31.4 88M53 439.8h35.2M118.3 382v88h52.8M192.5 470v-88h34l15 10.1 3.8 17.6-3.8 17.6-15 10h-34M293.1 382v88M340.9 470v-88l52.8 88v-88M467.8 382H415v88h52.8M415 426h40.3" /></G>
    </Svg>
  );
};

AlpineLogoDark.displayName = 'AlpineLogoDark';

export default AlpineLogoDark;