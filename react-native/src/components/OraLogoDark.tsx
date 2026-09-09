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

export interface OraLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * OraLogoDark icon component for React Native
 */
const OraLogoDark = ({ size, width, height, ...props }: OraLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m367.3 174-.9 10.7-2.9 10.5-4.7 10.2-6.4 9.6-8.1 8.9-9.5 8.1-11 7.1-12.1 5.9-13.1 4.8-13.8 3.4-14.3 2.1-14.5.7-14.5-.7-14.3-2.1-13.8-3.4-13.1-4.8-12.1-5.9-10.9-7.1-9.6-8.1-8.1-8.9-6.4-9.6-4.7-10.2-2.9-10.5-.9-10.7.9-10.7 2.9-10.5 4.7-10.2 6.4-9.6 8.1-8.9 9.6-8.1 10.9-7.1 12.1-5.9 13.1-4.8 13.8-3.4 14.3-2.1L256 92l14.5.7 14.3 2.1 13.8 3.4 13.1 4.8 12.1 5.9 11 7.1 9.5 8.1 8.1 8.9 6.4 9.6 4.7 10.2 2.9 10.5.9 10.7" /><Path d="m207.7 148.6-9.1 7.2-2.2 18.2 2.2 18.2 9.1 7.2h10.9l9-7.2 2.3-18.2-2.3-18.2-9-7.2h-10.9M240.8 199.4v-50.8h19.5l8.8 5.8 2.1 10.2-2.1 10.1-8.8 5.9h-19.5M254.5 180.6l16.7 18.8M280.7 199.4l18.2-50.8 18.2 50.8M288.7 182H309M172.4 382l-15.7 12.6-3.8 31.4 3.8 31.4 15.7 12.6h18.9l15.7-12.6 3.7-31.4-3.7-31.4-15.7-12.6h-18.9M229.6 470v-88h33.9l15.1 10.1 3.8 17.6-3.8 17.6-15.1 10h-33.9M253.5 437.3l28.9 32.7M298.7 470l31.5-88 31.4 88M312.6 439.8h35.2" /></G>
    </Svg>
  );
};

OraLogoDark.displayName = 'OraLogoDark';

export default OraLogoDark;