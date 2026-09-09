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

export interface DaciaLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DaciaLogoDark icon component for React Native
 */
const DaciaLogoDark = ({ size, width, height, ...props }: DaciaLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m164.7 172.9 77.5-41.3 23.1 43.5-77.6 41.3-23-43.5" /><Path d="m246.7 172.9 77.6-41.3 23 43.5-77.5 41.3-23.1-43.5M81.3 382v88M81.3 382h27.6l18.9 13.8 7.5 30.2-7.5 30.2-18.9 13.8H81.3M150.4 470l31.4-88 31.5 88M164.2 439.8h35.2M284.9 394.6l-16.3-10.1h-22l-15.7 13.8-3.8 27.7 3.8 27.7 15.7 13.8h22l16.3-10.1M330.2 382v88M372.9 470l31.4-88 31.5 88M386.7 439.8h35.2" /></G>
    </Svg>
  );
};

DaciaLogoDark.displayName = 'DaciaLogoDark';

export default DaciaLogoDark;