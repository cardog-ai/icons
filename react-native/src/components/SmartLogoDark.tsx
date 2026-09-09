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

export interface SmartLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SmartLogoDark icon component for React Native
 */
const SmartLogoDark = ({ size, width, height, ...props }: SmartLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="M209.1 100.2v147.6L335.7 174l-126.6-73.8M240.8 138.8v70.4M131.5 387l-36.4-5-12.6 12.6v20.1l13.8 10 22.7 2.6 13.8 10v20.1L119 470l-35.2-5M155.4 470v-88l26.4 54.1 26.4-54.1v88M224.6 470l31.4-88 31.4 88M238.4 439.8h35.2M303.8 470v-88h33.9l15.1 10.1 3.8 17.6-3.8 17.6-15.1 10h-33.9M327.7 437.3l28.9 32.7M372.9 382h62.9M404.3 382v88" /></G>
    </Svg>
  );
};

SmartLogoDark.displayName = 'SmartLogoDark';

export default SmartLogoDark;