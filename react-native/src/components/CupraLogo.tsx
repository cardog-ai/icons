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

export interface CupraLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CupraLogo icon component for React Native
 */
const CupraLogo = ({ size, width, height, ...props }: CupraLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m204.4 99 77.4 75-77.4 75v-38.7l39.9-36.3-39.9-36.3V99" /><Path d="m307.6 99-77.4 75 77.4 75v-38.7L267.7 174l39.9-36.3V99M136.6 394.6l-16.4-10.1h-22l-15.7 13.8-3.8 27.7 3.8 27.7 15.7 13.8h22l16.4-10.1M155.4 382v72.9l13.9 15.1h25.1l13.8-15.1V382M229.6 470v-88h33.9l15.1 10.1 3.8 17.6-3.8 17.6-15.1 10h-33.9M303.8 470v-88h33.9l15.1 10.1 3.8 17.6-3.8 17.6-15.1 10h-33.9M327.7 437.3l28.9 32.7M372.9 470l31.4-88 31.5 88M386.7 439.8h35.2" /></G>
    </Svg>
  );
};

CupraLogo.displayName = 'CupraLogo';

export default CupraLogo;