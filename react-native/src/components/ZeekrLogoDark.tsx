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

export interface ZeekrLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * ZeekrLogoDark icon component for React Native
 */
const ZeekrLogoDark = ({ size, width, height, ...props }: ZeekrLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M162.3 80.3h187.5v187.5H162.3V80.3" /><Path d="M206.8 124.8h98.4l-84.4 98.4h98.5M80 382h55.3L80 470h55.3M208.2 382h-52.8v88h52.8M155.4 426h40.3M282.4 382h-52.8v88h52.8M229.6 426h40.2M303.8 382v88M354.1 382l-50.3 47.8M322.6 417.2l34 52.8M377.9 470v-88h34l15.1 10.1 3.7 17.6-3.7 17.6-15.1 10h-34M401.8 437.3l28.9 32.7" /></G>
    </Svg>
  );
};

ZeekrLogoDark.displayName = 'ZeekrLogoDark';

export default ZeekrLogoDark;