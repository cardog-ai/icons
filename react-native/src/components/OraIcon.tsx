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

export interface OraIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * OraIcon icon component for React Native
 */
const OraIcon = ({ size, width, height, ...props }: OraIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m411.9 256-1.4 15-4 14.7L400 300l-9.1 13.4-11.3 12.5-13.3 11.3-15.4 9.9-17 8.3-18.3 6.7-19.2 4.8-20.1 3-20.3.9-20.3-.9-20.1-3-19.2-4.8-18.3-6.7-17-8.3-15.3-9.9-13.4-11.3-11.3-12.5L112 300l-6.5-14.3-4-14.7-1.4-15 1.4-15 4-14.7L112 212l9.1-13.4 11.3-12.5 13.4-11.3 15.3-9.9 17-8.3 18.3-6.7 19.2-4.8 20.1-3 20.3-.9 20.3.9 20.1 3 19.2 4.8 18.3 6.7 17 8.3 15.4 9.9 13.3 11.3 11.3 12.5L400 212l6.5 14.3 4 14.7 1.4 15" /><Path d="m188.3 220.4-12.7 10.2-3 25.4 3 25.4 12.7 10.2h15.3l12.7-10.2 3.1-25.4-3.1-25.4-12.7-10.2h-15.3M234.7 291.6v-71.2h27.4l12.2 8.1 3 14.3-3 14.2-12.2 8.2h-27.4M253.9 265.2l23.4 26.4M290.6 291.6l25.4-71.2 25.5 71.2M301.8 267.2h28.4" /></G>
    </Svg>
  );
};

OraIcon.displayName = 'OraIcon';

export default OraIcon;