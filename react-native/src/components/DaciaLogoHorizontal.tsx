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

export interface DaciaLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DaciaLogoHorizontal icon component for React Native
 */
const DaciaLogoHorizontal = ({ size, width, height, ...props }: DaciaLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m73.2 255.4 44-23.4 13.1 24.6-44 23.4-13.1-24.6" /><Path d="m119.7 255.4 44-23.4 13.1 24.6-44 23.4-13.1-24.6M253.5 225.4v61.2M253.5 225.4h19.2l13.1 9.6 5.3 21-5.3 21-13.1 9.6h-19.2M301.6 286.6l21.8-61.2 21.9 61.2M311.2 265.6h24.5M395.1 234.1l-11.4-6.9h-15.3l-10.9 9.6-2.6 19.2 2.6 19.2 10.9 9.6h15.3l11.4-6.9M426.6 225.4v61.2M456.3 286.6l21.8-61.2 21.9 61.2M465.9 265.6h24.5" /></G>
    </Svg>
  );
};

DaciaLogoHorizontal.displayName = 'DaciaLogoHorizontal';

export default DaciaLogoHorizontal;