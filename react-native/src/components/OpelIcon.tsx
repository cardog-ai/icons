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

export interface OpelIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * OpelIcon icon component for React Native
 */
const OpelIcon = ({ size, width, height, ...props }: OpelIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m411.9 256-.8 15.3-2.3 15.1-3.7 14.9-5.1 14.3-6.5 13.9-7.9 13.1-9.1 12.2-10.2 11.5-11.5 10.2-12.2 9.1-13.1 7.9-13.9 6.5-14.3 5.1-14.9 3.7-15.1 2.3-15.3.8-15.3-.8-15.1-2.3-14.9-3.7-14.3-5.1-13.9-6.5-13.1-7.9-12.2-9.1-11.4-10.2-10.3-11.5-9.1-12.2-7.9-13.1-6.5-13.9-5.1-14.3-3.7-14.9-2.3-15.1-.8-15.3.8-15.3 2.3-15.1 3.7-14.9 5.1-14.3 6.5-13.9 7.9-13.1 9.1-12.2 10.3-11.4 11.4-10.3 12.2-9.1 13.1-7.9 13.9-6.5 14.3-5.1 14.9-3.7 15.1-2.3 15.3-.8 15.3.8 15.1 2.3 14.9 3.7 14.3 5.1 13.9 6.5 13.1 7.9 12.2 9.1 11.5 10.3 10.2 11.4 9.1 12.2 7.9 13.1 6.5 13.9 5.1 14.3 3.7 14.9 2.3 15.1.8 15.3" /><Path d="m285.5 124.8-72.2 136.1h47.6l-34.4 126.4 75.4-141.1h-49.2l32.8-121.4" /></G>
    </Svg>
  );
};

OpelIcon.displayName = 'OpelIcon';

export default OpelIcon;