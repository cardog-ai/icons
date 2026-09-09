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

export interface XPENGLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * XPENGLogo icon component for React Native
 */
const XPENGLogo = ({ size, width, height, ...props }: XPENGLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M182.2 100.2 256 174l-73.8 73.8M329.8 100.2 256 174l73.8 73.8M220.8 76.7l70.4 70.3M220.8 271.3l70.4-70.3M80 382l55.3 88M135.3 382 80 470M155.4 470v-88h34l15.1 10.1 3.7 17.6-3.7 17.6-15.1 10h-34M282.4 382h-52.8v88h52.8M229.6 426h40.2M303.8 470v-88l52.8 88v-88M433.3 394.6l-16.4-10.1h-22l-15.7 13.8-3.8 27.7 3.8 27.7 15.7 13.8h22l16.4-10.1v-22.6h-25.2" /></G>
    </Svg>
  );
};

XPENGLogo.displayName = 'XPENGLogo';

export default XPENGLogo;