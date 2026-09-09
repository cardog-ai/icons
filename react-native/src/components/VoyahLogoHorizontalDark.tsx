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

export interface VoyahLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * VoyahLogoHorizontalDark icon component for React Native
 */
const VoyahLogoHorizontalDark = ({ size, width, height, ...props }: VoyahLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#FFF" d="m127 220.8-1.6 7.9.2 35.6 2.5-11.5.2-27ZM107 245l-1.3 1.4 6 52.9-1.2-38.2-1.4-11.5ZM144.1 245.6l-2.1.7-2.2 11.3-1.3 41.4Z" /><Path fill="#CECECE" d="m66.8 171.8-1.2.3v23l1.3 6.1 3.9 7.5 21.7 23 5.7 9.9 2.6 9.8 7 53.5 5.8 10.1-2.9-92.4-3.2-5.6Zm-.5 1 39.8 43.3 4 6.5 1.6 32.3-2.1-15.2-2.4-6.2-6.7-4.5-6.3-8.9-3.2 3.8 2.6 2.4-.8 1.4 7.2 12 3.5 10.7 4.2 21.3 3 31.1 1.1 4.8 1.3-2.1.5 7.9-5.3-8.8-9.1-61.9-5.4-10.2-21-21.9-4.4-7.2-2.1-8.1Zm40.9 76.8 1.7 1.3 1.2 4.8 1.7 41.4-1.3-2.3ZM184 172l-41.7 45.2-3 5.2-3.2 92.4 5.9-9.4 7-52.6 3.2-12.5 4.4-7.3 21.2-22.4 4.5-7.3 1.9-6.9Zm-43.1 78.2 2.6 1.8-1.3.6-3.9 44ZM125.4 216.7l-6.7 5.7 3.2 113.2 2.7 4.1 2.9-3.7.9-13.7 2.8-93.6-.2-6.4Zm.6 7.3 1.5-.1.6 5.1v23.8l-2.7 8.6Zm-4.3 53.1 1.3-.2 1.6 61.4-2.2-5.3Z" /><Path fill="#FFF" d="m404.5 239.4-6.4.8.5 32.4 7-.3.5-12.4 28.8-.3 2.6.8v11.9h7.5l-.5-32.9-7 .5-.5 12.7h-30.9ZM202.5 239.7l-7.5 1 23.3 31.9 24.4-31.9-8.8-.5-15.6 20.5ZM287.6 239.7l-37.1 1.3-3.1 4.9 1.3 23.6 5.2 3.4 37.1-1.6 3.1-4.9v-20.5Zm-29.8 7 28 .5.7 16.8-2.5 1.9-27.8-.6-1.6-16.8ZM307 239.7l-8.3.7 19 18.7 1.5 13.8 6.5-.8.3-13 18.9-18.7-9.9-.2-13.7 12.7ZM365.4 239.7l-24.9 32.9 8.5-.3 15.6-21 15.6 21 8.5.3Z" />
    </Svg>
  );
};

VoyahLogoHorizontalDark.displayName = 'VoyahLogoHorizontalDark';

export default VoyahLogoHorizontalDark;