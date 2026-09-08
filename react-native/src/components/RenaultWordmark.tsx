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

export interface RenaultWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * RenaultWordmark icon component for React Native
 */
const RenaultWordmark = ({ size, width, height, ...props }: RenaultWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G fill="#0B0B0B"><Path d="M85.994 501.608v62.23h54.213v-12.546H102.11V538.69h33.373v-12.381H102.11v-12.32h37.31v-12.381zM6 501.608v62.23h16.116v-19.49h19.4l11.254 19.49h18.586L57.86 540.948c6.553-3.618 11.272-10.208 11.272-18.315 0-16.646-12.618-21.024-22.87-21.024zm16.116 12.38h22.856c2.952 0 6.236 2.295 6.236 9.388 0 2.405-.702 8.591-6.236 8.591H22.116ZM154.847 501.608v62.23h16.116v-40.085l35.629 40.086h16.116v-62.231h-16.116v39.758l-35.629-39.758zM259.312 501.608l-27.423 62.23h18.48l4.18-10.594h31.346l4.181 10.595h18.48l-27.423-62.231zm10.91 11.921 10.787 27.333h-21.573zM397.71 501.608v62.23h51.63v-12.546h-35.513v-49.684zM441.443 501.608v12.38h24.22v49.85h16.117v-49.85H506v-12.38zM316.124 501.608v42.057c0 17.623 17.877 21.358 32.053 21.358 14.177 0 32.054-3.735 32.054-21.358v-42.057h-16.117v41.27c0 6.407-9.688 8.558-15.937 8.558s-15.937-2.151-15.937-8.558v-41.27z" /></G>
    </Svg>
  );
};

RenaultWordmark.displayName = 'RenaultWordmark';

export default RenaultWordmark;