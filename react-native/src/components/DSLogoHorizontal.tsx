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

export interface DSLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * DSLogoHorizontal icon component for React Native
 */
const DSLogoHorizontal = ({ size, width, height, ...props }: DSLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="M79.2 220.8h56.4l5.5.4 5.4 1.3 5.1 2.2 4.7 2.8 4.2 3.6 3.6 4.2 2.9 4.7 2.1 5.1 1.3 5.4.4 5.5-.4 5.5-1.3 5.4-2.1 5.1-2.9 4.7-3.6 4.2-4.2 3.6-4.7 2.8-5.1 2.2-5.4 1.3-5.5.4h-21.2l-5.5-.4-5.4-1.3-5.1-2.2-4.7-2.8-4.2-3.6-3.6-4.2L83 272l-2.1-5.1-1.3-5.4-.4-5.5.4-5.5 1.3-5.4L83 240l2.9-4.7 3.6-4.2 4.2-3.6 4.7-2.8 5.1-2.2 5.4-1.3 5.5-.4H79.2M94.8 235.1v41.8" /><Path d="M94.8 235.1H108l8.9 6.6 3.6 14.3-3.6 14.3-8.9 6.6H94.8M154 237.5l-17.3-2.4-6 6v9.5l6.6 4.8 10.7 1.2 6.6 4.8v9.5l-6.6 6-16.7-2.4M251.3 245v22M251.3 245h6.9l4.7 3.4 1.9 7.6-1.9 7.6-4.7 3.4h-6.9M282.5 246.2l-9.2-1.2-3.1 3.1v5.1l3.4 2.5 5.7.6 3.5 2.5v5.1l-3.5 3.1-8.8-1.2M298.2 267l7.9-22 7.9 22M301.7 259.5h8.8M318.1 245v18.3l3.5 3.7h6.3l3.4-3.7V245M335.4 245h15.8M343.3 245v22M359.6 245l-4 3.1-.9 7.9.9 7.9 4 3.1h4.7l3.9-3.1 1-7.9-1-7.9-3.9-3.1h-4.7M373.9 267v-22l6.6 13.5 6.6-13.5v22M396.8 245l-4 3.1-.9 7.9.9 7.9 4 3.1h4.7l3.9-3.1 1-7.9-1-7.9-3.9-3.1h-4.7M411.1 245v22M411.1 245h7.2l4.1 2.5v4.7l-4.1 2.5h-7.2" /><Path d="M411.1 254.7h8.2l4.4 2.9v6.6l-5 2.8h-7.6M436.3 245v22M448.3 245v22h13.2M480.1 245h-13.2v22h13.2M466.9 256H477M498.1 246.2 489 245l-3.2 3.1v5.1l3.5 2.5 5.7.6 3.4 2.5v5.1L495 267l-8.9-1.2" /></G>
    </Svg>
  );
};

DSLogoHorizontal.displayName = 'DSLogoHorizontal';

export default DSLogoHorizontal;