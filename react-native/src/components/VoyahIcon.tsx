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

export interface VoyahIconProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * VoyahIcon icon component for React Native
 */
const VoyahIcon = ({ size, width, height, ...props }: VoyahIconProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#111" d="m261 168.3-4 19.6.4 88.8 6.4-28.7.4-67.3ZM211.2 228.5l-3.2 3.6L222.7 364l-2.8-95.2-3.6-28.7ZM303.6 230.1l-5.2 1.6-5.5 28.3-3.2 103.2Z" /><Path fill="#9A9A9A" d="m110.7 46-2.7.8v57.4l3.1 15.1 9.6 18.7 54.2 57.4 14.4 24.7 6.3 24.3 17.6 133.5 14.3 25.1-7.2-230.3-7.9-13.9Zm-1.1 2.4 99.2 108 9.9 16.3 4 80.5-5.2-37.8-5.9-15.6-16.8-11.1-15.5-22.4-8 9.6 6.4 6-2 3.6 17.9 29.9 8.8 26.7 10.4 53 7.5 77.7 2.8 11.9 3.2-5.2 1.2 19.6-13.1-22-22.8-154.2-13.5-25.5-52.2-54.6-11.2-17.9-5.1-20.3Zm102 191.7 4.4 3.1 2.7 12 4.4 103.2-3.2-5.6ZM403.2 46.4l-104 112.8-7.5 13.1-8 230.3 14.7-23.5L316 248l7.9-31.1 10.8-18.3 53-55.8 11.2-18.3 4.7-17.1ZM295.7 241.7l6.3 4.3-3.2 1.6-9.5 109.6ZM257 158l-16.7 14.3 7.9 282.2 6.8 10.3 7.2-9.2 2.4-34.2 6.7-233.5-.4-16Zm1.6 18.3 3.6-.4 1.6 12.8V248l-6.8 21.5Zm-10.8 132.3 3.2-.4 4 153-5.6-13.1Z" />
    </Svg>
  );
};

VoyahIcon.displayName = 'VoyahIcon';

export default VoyahIcon;