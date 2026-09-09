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

export interface OpelLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * OpelLogoDark icon component for React Native
 */
const OpelLogoDark = ({ size, width, height, ...props }: OpelLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m367.3 174-.5 10.9-1.6 10.8-2.7 10.6-3.7 10.3-4.6 9.9-5.6 9.4-6.5 8.7-7.3 8.2-8.2 7.3-8.7 6.5-9.4 5.6-9.9 4.6-10.3 3.7-10.6 2.7-10.8 1.6-10.9.5-10.9-.5-10.8-1.6-10.6-2.7-10.3-3.7-9.9-4.6-9.4-5.6-8.7-6.5-8.1-7.3-7.4-8.2-6.5-8.7-5.6-9.4-4.6-9.9-3.7-10.3-2.7-10.6-1.6-10.8-.5-10.9.5-10.9 1.6-10.8 2.7-10.6 3.7-10.3 4.6-9.9 5.6-9.4 6.5-8.7 7.4-8.1 8.1-7.4 8.7-6.5 9.4-5.6 9.9-4.6 10.3-3.7 10.6-2.7 10.8-1.6 10.9-.5 10.9.5 10.8 1.6 10.6 2.7 10.3 3.7 9.9 4.6 9.4 5.6 8.7 6.5 8.2 7.4 7.3 8.1 6.5 8.7 5.6 9.4 4.6 9.9 3.7 10.3 2.7 10.6 1.6 10.8.5 10.9" /><Path d="m277.1 80.3-51.6 97.2h34l-24.6 90.3L288.8 167h-35.1l23.4-86.7M135.3 382l-15.7 12.6-3.8 31.4 3.8 31.4 15.7 12.6h18.9l15.7-12.6 3.8-31.4-3.8-31.4-15.7-12.6h-18.9M192.5 470v-88h34l15 10.1 3.8 17.6-3.8 17.6-15 10h-34M319.5 382h-52.8v88h52.8M266.7 426h40.2M340.9 382v88h52.8" /></G>
    </Svg>
  );
};

OpelLogoDark.displayName = 'OpelLogoDark';

export default OpelLogoDark;