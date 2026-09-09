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

export interface VoyahLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * VoyahLogo icon component for React Native
 */
const VoyahLogo = ({ size, width, height, ...props }: VoyahLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#111" d="m259.5 112-2.8 13.8.3 62.9 4.5-20.3.3-47.7ZM224.3 154.5l-2.3 2.6 10.5 93.3-2-67.4-2.6-20.3ZM289.7 155.7l-3.7 1.1-3.9 20-2.3 73Z" /><Path fill="#9A9A9A" d="m153.2 25.4-1.9.6v40.6l2.2 10.7 6.8 13.2 38.3 40.6 10.2 17.5 4.5 17.2 12.4 94.5 10.1 17.7-5-162.9-5.7-9.9Zm-.8 1.7 70.2 76.4 7 11.6 2.9 56.9-3.7-26.8-4.2-11-11.9-7.9-11-15.7-5.6 6.7 4.5 4.3-1.4 2.5 12.7 21.1 6.2 18.9 7.3 37.5 5.4 55 1.9 8.5 2.3-3.7.8 13.8-9.3-15.5-16-109.1-9.6-18-37-38.7-7.9-12.7-3.6-14.3Zm72.2 135.6 3.1 2.3 1.9 8.4 3.1 73.1-2.2-4ZM360.2 25.7l-73.6 79.8-5.4 9.3-5.6 163 10.4-16.7 12.4-92.7 5.7-22 7.6-13 37.5-39.5 7.9-12.9 3.4-12.2Zm-76.1 138.1 4.5 3.2-2.3 1.1-6.8 77.5ZM256.7 104.6l-11.8 10.2 5.6 199.6 4.8 7.3 5.1-6.4 1.7-24.3 4.8-165.2-.3-11.3Zm1.1 13 2.6-.3 1.1 9v42.1l-4.8 15.2Zm-7.6 93.6 2.3-.3 2.8 108.3-4-9.3Z" /><Path fill="#111" d="m411.6 395.5-12 1.4 1 59.6 12.9-.4.9-22.9 53-.5 4.8 1.4v22H486l-1-60.6-12.8.9-1 23.4h-56.8ZM39.8 395.9 26 397.8l42.9 58.7 44.9-58.7-16.2-.9-28.7 37.7ZM196.4 395.9l-68.3 2.4-5.7 9.1 2.4 43.4 9.5 6.2 68.3-2.8 5.7-9.1v-37.7Zm-54.9 12.9 51.5 1 1.4 31-4.7 3.3-51.1-.9-2.8-31ZM232.1 395.9l-15.2 1.5 34.8 34.3 2.9 25.3 11.9-1.4.5-23.9 34.8-34.3-18.1-.5-25.3 23.4ZM339.5 395.9l-45.8 60.6 15.7-.4 28.7-38.7 28.6 38.7 15.8.4Z" />
    </Svg>
  );
};

VoyahLogo.displayName = 'VoyahLogo';

export default VoyahLogo;