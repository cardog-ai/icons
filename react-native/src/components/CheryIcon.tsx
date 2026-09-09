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

export interface CheryIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CheryIcon icon component for React Native
 */
const CheryIcon = ({ size, width, height, ...props }: CheryIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m416.8 256-1.4 15.7-4.1 15.3-6.7 14.9-9.4 14-11.6 13-13.9 11.8-15.8 10.3-17.5 8.7-18.9 7-19.9 5-20.6 3.1-21 1-21-1-20.6-3.1-19.9-5-18.9-7-17.5-8.7-15.8-10.3-13.9-11.8-11.6-13-9.4-14-6.7-14.9-4.1-15.3-1.4-15.7 1.4-15.7 4.1-15.3 6.7-14.9 9.4-14 11.6-13 13.9-11.8 15.8-10.3 17.5-8.7 18.9-7 19.9-5 20.6-3.1 21-1 21 1 20.6 3.1 19.9 5 18.9 7 17.5 8.7 15.8 10.3 13.9 11.8 11.6 13 9.4 14 6.7 14.9 4.1 15.3 1.4 15.7" /><Path d="m174.2 234.5-11.1-6.9H148l-10.8 9.5-2.5 18.9 2.5 18.9 10.8 9.5h15.1l11.1-6.9M187.2 225.9v60.2M223.3 225.9v60.2M187.2 256h36.1M274 225.9h-36v60.2h36M238 256h27.4M288.7 286.1v-60.2h23.2l10.4 6.9 2.5 12-2.5 12-10.4 6.9h-23.2M305.1 263.7l19.7 22.4M337.8 225.9l19.8 31.8M377.3 225.9l-19.7 31.8M357.6 257.7v28.4" /></G>
    </Svg>
  );
};

CheryIcon.displayName = 'CheryIcon';

export default CheryIcon;