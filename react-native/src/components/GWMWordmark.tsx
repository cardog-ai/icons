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

export interface GWMWordmarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * GWMWordmark icon component for React Native
 */
const GWMWordmark = ({ size, width, height, ...props }: GWMWordmarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#E60000" d="m207.5 208.4-29.2-.4-1.4.7v1.8l29.9 89.7 2.4 3.1 25.1.3 2.4-1.7 16-46.9 2.8-5.6h1.4l1 1.4 17.7 51.4 2.5 1.4h24.7l2.4-1.7 29.9-90.4.3-2.4-.6-.7-29.3-.4-3.8 2.5-18.8 56.6-1.3-.7-17.4-54.2-1.8-3.5-1.7-.7H252l-2.4 1.4-18.5 56.7-1.7 1-18.1-55.3-2.4-3.1ZM165.1 208.7l-107.8-.3-12.9 2.1-6.6 3.1-4.8 4.2-2.8 3.8-2.8 6.2-1.4 7v42.1l1.4 7.6 2.8 6.6 5.2 5.9 7.6 4.2 7.7 2.1 6.6.7h85.9l9.4-1.4 5.5-2.4 4.2-3.5 2.1-3.1 2.8-10.1.3-33.8-1-1.7-1.4-.7H87.2l-1 .7v15.3l.6.7 45.9.3 1.1.7v12.9l-.7 1.4-1.7 1.7-2.8 1.1H65.3l-2.8-1.1-1.7-1.7-1.1-2.8v-41l2.1-4.2 4.5-1.7h100.2l1.4-1.4v-17.7l-1.4-1.8ZM376.5 208.7l-30.3-.3-1.7 1v91.5l1.7 2.4 1.8.7h30.2l1.1-.7.7-51.5 1.7.7 21.5 46.3 3.5 4.8 16 .4 2.5-1.4 24.3-50.8 1.4.4.3 51.1 1.1.7h29.9l2.8-1.8 1-2.7v-89l-1-1.8-31-.3-4.9 2.4-33.7 68.8-1.4-.7-2.1-4.1-30.2-63.3-2.4-2.1Z" />
    </Svg>
  );
};

GWMWordmark.displayName = 'GWMWordmark';

export default GWMWordmark;