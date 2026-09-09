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

export interface SmartLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SmartLogoHorizontal icon component for React Native
 */
const SmartLogoHorizontal = ({ size, width, height, ...props }: SmartLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M98.4 214.2v83.6l71.8-41.8-71.8-41.8M116.4 236.1v39.8M288.5 228.9l-25.4-3.5-8.7 8.7v14l9.6 7 15.7 1.8 9.6 7v14l-9.6 8.7-24.5-3.5M305.1 286.6v-61.2l18.3 37.6 18.4-37.6v61.2M353.1 286.6l21.9-61.2 21.9 61.2M362.8 265.6h24.4M408.2 286.6v-61.2h23.6l10.5 7 2.6 12.2-2.6 12.3-10.5 7h-23.6M424.8 263.9l20.1 22.7M456.3 225.4H500M478.1 225.4v61.2" /></G>
    </Svg>
  );
};

SmartLogoHorizontal.displayName = 'SmartLogoHorizontal';

export default SmartLogoHorizontal;