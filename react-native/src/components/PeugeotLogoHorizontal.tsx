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

export interface PeugeotLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * PeugeotLogoHorizontal icon component for React Native
 */
const PeugeotLogoHorizontal = ({ size, width, height, ...props }: PeugeotLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M75.2 192.9h99.6v63.8l-49.8 65-49.8-65v-63.8" /><Path d="m102.4 305.1 5.3-31.2 14-25.9M121.7 248l16.6-11.9 5.3 15.9-13.3 3.3-8.6-7.3M125.7 260l23.9-17.3M102.4 305.1H121M107.7 273.9l-18.6-7.3-2.6-21.2M252.5 277.7v-43.4h16.7l7.4 5 1.9 8.7-1.9 8.6-7.4 5h-16.7M315 234.3h-26v43.4h26M289 256h19.8M325.5 234.3v35.9l6.8 7.5h12.4l6.8-7.5v-35.9M389.2 240.5l-8-4.9h-10.8l-7.8 6.8-1.8 13.6 1.8 13.6 7.8 6.8h10.8l8-4.9v-11.2h-12.3M424.5 234.3h-26v43.4h26M398.5 256h19.8M443.4 234.3l-7.8 6.2-1.8 15.5 1.8 15.5 7.8 6.2h9.3l7.7-6.2 1.9-15.5-1.9-15.5-7.7-6.2h-9.3M469.1 234.3H500M484.5 234.3v43.4" /></G>
    </Svg>
  );
};

PeugeotLogoHorizontal.displayName = 'PeugeotLogoHorizontal';

export default PeugeotLogoHorizontal;