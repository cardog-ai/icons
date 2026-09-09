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

export interface SAICIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SAICIcon icon component for React Native
 */
const SAICIcon = ({ size, width, height, ...props }: SAICIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m400.4 256-.9 16.2-2.7 16-4.5 15.5-6.2 15-7.9 14.1-9.3 13.2-10.8 12.1-12.1 10.8-13.2 9.3-14.1 7.9-15 6.2-15.5 4.5-16 2.7-16.2.9-16.2-.9-16-2.7-15.5-4.5-15-6.2-14.1-7.9-13.2-9.3-12.1-10.8-10.8-12.1-9.3-13.2-7.9-14.1-6.2-15-4.5-15.5-2.7-16-.9-16.2.9-16.2 2.7-16 4.5-15.5 6.2-15 7.9-14.1 9.3-13.2 10.8-12.1 12.1-10.8 13.2-9.3 14.1-7.9 15-6.2 15.5-4.5 16-2.7 16.2-.9 16.2.9 16 2.7 15.5 4.5 15 6.2 14.1 7.9 13.2 9.3 12.1 10.8 10.8 12.1 9.3 13.2 7.9 14.1 6.2 15 4.5 15.5 2.7 16 .9 16.2" /><Path d="m118.2 292.1 67.3-68.9 70.5 65.6 70.5-65.6 67.3 68.9" /></G>
    </Svg>
  );
};

SAICIcon.displayName = 'SAICIcon';

export default SAICIcon;