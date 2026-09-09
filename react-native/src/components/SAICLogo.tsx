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

export interface SAICLogoProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * SAICLogo icon component for React Native
 */
const SAICLogo = ({ size, width, height, ...props }: SAICLogoProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#111"><Path d="m359.1 174-.6 11.5-2 11.5-3.2 11-4.4 10.8-5.6 10-6.7 9.5-7.7 8.6-8.6 7.7-9.5 6.7-10 5.6-10.8 4.4-11 3.2-11.5 2-11.5.6-11.5-.6-11.5-2-11-3.2-10.8-4.4-10-5.6-9.5-6.7-8.6-7.7-7.7-8.6-6.7-9.5-5.6-10-4.4-10.8-3.2-11-2-11.5-.6-11.5.6-11.5 2-11.5 3.2-11 4.4-10.8 5.6-10 6.7-9.5 7.7-8.6 8.6-7.7 9.5-6.7 10-5.6 10.8-4.4 11-3.2 11.5-2 11.5-.6 11.5.6 11.5 2 11 3.2 10.8 4.4 10 5.6 9.5 6.7 8.6 7.7 7.7 8.6 6.7 9.5 5.6 10 4.4 10.8 3.2 11 2 11.5.6 11.5" /><Path d="m157.6 199.8 48-49.2 50.4 46.8 50.4-46.8 48 49.2M168.6 387l-36.4-5-12.6 12.6v20.1l13.8 10 22.7 2.6 13.8 10v20.1L156.1 470l-35.2-5M187.5 470l31.4-88 31.4 88M201.3 439.8h35.2M293.1 382v88M396.2 394.6l-16.4-10.1h-22l-15.7 13.8-3.8 27.7 3.8 27.7 15.7 13.8h22l16.4-10.1" /></G>
    </Svg>
  );
};

SAICLogo.displayName = 'SAICLogo';

export default SAICLogo;