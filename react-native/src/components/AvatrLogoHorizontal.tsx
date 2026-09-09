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

export interface AvatrLogoHorizontalProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * AvatrLogoHorizontal icon component for React Native
 */
const AvatrLogoHorizontal = ({ size, width, height, ...props }: AvatrLogoHorizontalProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#111" d="m170.1 171.1-90.2-.1-1.2.2-.9.7-.3.7v166.8l.2.6.7.7 1.1.3h91l1.1-.3.6-.6.3-.7V172.6l-.8-1.2Zm-87.2 4.1 84.2-.1-42 137.4h-.2Zm-1.4 9.1 40.9 132.6-.6.5L81.6 336Zm86.9 0 .1 151.7-40.9-18.9Zm-43.6 136.2.4-.2 36.6 16.6-73.6.1.8-.5ZM220.9 243.8l-.7-.1-1.3.5-23.9 24.1h4.4l1.5-.4 1.5-.8 17.5-17.3h1.2l.6.4 16.9 16.9 1.2.7 1.9.5h4.4l-23.6-23.7-1.1-.8ZM249.2 243.8l-3.6-.1v.3l23.9 23.8 1.1.5h1l1.1-.5 23.9-23.8v-.3l-5 .1-2.4 1.1-17 17-1.2.4-.9-.3-17-16.9-2.2-1.1ZM321.9 243.8l-.7-.1-1 .4-24.2 24.2h4.4l1.2-.3 1.7-.8 15.7-15.7 2-1.7 1.6.3 17.4 17.2 2.7 1h4.5l-24.1-24.1ZM384.3 243.8l-41.5-.1 3.3 3.4 2.9 1.1h42l-3.8-3.6-1.4-.6ZM439.3 244l-38.1-.2 2.8 3 2.7 1.3 31.7.1 1.7 1.1.4 1.9-1 1.6-1.5.5h-36.4l-.6.6v13.8l.8.6h2.9l.7-.6.2-10.1H428l8.7 8.8 1.5 1.1 2.3.8h4.4l-10.5-10.5 4.6-.2 1.5-.3 1.9-1.1 1.5-1.6.7-1.5.4-1.4v-1.9l-.7-2.3-2.4-2.6-1.1-.6ZM368.4 253.1l-3-.1-.8.7v13.8l.9.8h2.8l.7-.6v-14.1Z" />
    </Svg>
  );
};

AvatrLogoHorizontal.displayName = 'AvatrLogoHorizontal';

export default AvatrLogoHorizontal;