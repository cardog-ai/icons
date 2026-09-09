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

export interface SEATLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SEATLogo icon component for React Native
 */
const SEATLogo = ({ size, width, height, ...props }: SEATLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M350.4 228.5 256 283l-94.4-54.5v-109L256 65l94.4 54.5v109" /><Path d="m289.4 119.5-51-7-17.6 17.6v28.1l19.4 14 31.6 3.6 19.4 14v28.1l-19.4 17.6-49.2-7M168.6 387l-36.4-5-12.6 12.6v20.1l13.8 10 22.7 2.6 13.8 10v20.1L156.1 470l-35.2-5M245.3 382h-52.8v88h52.8M192.5 426h40.2M261.7 470l31.4-88 31.4 88M275.5 439.8h35.2M335.8 382h62.9M367.3 382v88" /></G>
    </Svg>
  );
};

SEATLogo.displayName = 'SEATLogo';

export default SEATLogo;