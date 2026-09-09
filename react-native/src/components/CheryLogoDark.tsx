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

export interface CheryLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * CheryLogoDark icon component for React Native
 */
const CheryLogoDark = ({ size, width, height, ...props }: CheryLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <G stroke="#FFF"><Path d="m370.8 174-1 11.2-2.9 10.9-4.8 10.7-6.7 10-8.3 9.3-9.9 8.4-11.3 7.4-12.5 6.2-13.5 4.9-14.2 3.6-14.7 2.2-15 .7-15-.7-14.7-2.2-14.2-3.6-13.5-4.9-12.5-6.2-11.3-7.4-9.9-8.4-8.3-9.3-6.7-10-4.8-10.7-2.9-10.9-1-11.2 1-11.2 2.9-10.9 4.8-10.7 6.7-10 8.3-9.3 9.9-8.4 11.3-7.4 12.5-6.2 13.5-4.9 14.2-3.6 14.7-2.2 15-.7 15 .7 14.7 2.2 14.2 3.6 13.5 4.9 12.5 6.2 11.3 7.4 9.9 8.4 8.3 9.3 6.7 10 4.8 10.7 2.9 10.9 1 11.2" /><Path d="m197.6 158.6-8-4.9h-10.7l-7.7 6.8-1.9 13.5 1.9 13.5 7.7 6.8h10.7l8-4.9M206.8 152.5v43M232.6 152.5v43M206.8 174h25.8M268.9 152.5h-25.8v43h25.8M243.1 174h19.6M279.4 195.5v-43H296l7.3 4.9 1.9 8.6-1.9 8.6-7.3 4.9h-16.6M291 179.5l14.2 16M314.4 152.5l14.1 22.7M342.7 152.5l-14.2 22.7M328.5 175.2v20.3M136.6 394.6l-16.4-10.1h-22l-15.7 13.8-3.8 27.7 3.8 27.7 15.7 13.8h22l16.4-10.1M155.4 382v88M208.2 382v88M155.4 426h52.8M282.4 382h-52.8v88h52.8M229.6 426h40.2M303.8 470v-88h33.9l15.1 10.1 3.8 17.6-3.8 17.6-15.1 10h-33.9M327.7 437.3l28.9 32.7M375.4 382l28.9 46.5M433.3 382l-29 46.5M404.3 428.5V470" /></G>
    </Svg>
  );
};

CheryLogoDark.displayName = 'CheryLogoDark';

export default CheryLogoDark;