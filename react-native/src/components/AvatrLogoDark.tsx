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

export interface AvatrLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * AvatrLogoDark icon component for React Native
 */
const AvatrLogoDark = ({ size, width, height, ...props }: AvatrLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#FFF" d="M335.6 24.2 176.4 24l-2.1.4-1.5 1.1-.6 1.4v294.2l.4 1.2 1.1 1.1 2 .6h160.6l2-.6.9-.9.6-1.4V26.9l-1.4-2.1Zm-153.8 7.2 148.4-.1-74 242.3h-.4Zm-2.5 16.1 72.1 233.9-1.1 1-70.8 32.8Zm153.2 0 .2 267.7-72.1-33.4Zm-76.9 240.2.8-.2 64.5 29.2-129.8.2 1.4-.9ZM73.6 403.6l-1.3-.2-2.3.9-44 44.3h8.1l2.7-.7 2.9-1.6 32.1-31.6h2.3l1.1.6 31 31 2.3 1.4 3.3.9h8.1L76.6 405l-2.1-1.4ZM125.8 403.6l-6.8-.2v.5l44.1 43.8 2 .9h1.8l2-.9 44.1-43.8v-.5l-9.2.2-4.5 2.1-31.3 31.2-2.2.7-1.6-.5-31.2-31.2-4.1-2ZM259.5 403.6l-1.4-.2-1.8.7-44.5 44.5h8.1l2.3-.5 3.1-1.5 28.8-28.8 3.8-3.1 2.9.4 31.9 31.7 5 1.8h8.3l-44.3-44.3ZM374.3 403.6l-76.4-.2 6.1 6.3 5.4 2h77.3l-7-6.7-2.7-1.1ZM475.4 403.9l-70.1-.3 5.2 5.4 4.9 2.5 58.5.2 3.1 2.1.7 3.3-1.8 2.9-2.7.9h-67l-1.1 1.2v25.4l1.3 1.1h5.4l1.4-1.1.2-18.5h41.4l15.9 16.2 2.7 2 4.3 1.4h8.1l-19.4-19.3 8.6-.3 2.7-.6 3.6-2.1 2.7-2.9 1.3-2.7.7-2.7v-3.3l-1.3-4.3-4.3-4.7-2-1.2ZM345.1 420.7l-5.6-.2-1.4 1.3v25.4l1.6 1.4h5.2l1.3-1.1v-25.9Z" />
    </Svg>
  );
};

AvatrLogoDark.displayName = 'AvatrLogoDark';

export default AvatrLogoDark;