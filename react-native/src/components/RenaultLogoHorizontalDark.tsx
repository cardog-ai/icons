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

export interface RenaultLogoHorizontalDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * RenaultLogoHorizontalDark icon component for React Native
 */
const RenaultLogoHorizontalDark = ({ size, width, height, ...props }: RenaultLogoHorizontalDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#fff" d="M95.76 197.08c-30.484 0-55.2 26.367-55.2 58.88s24.716 58.88 55.2 58.88 55.2-26.367 55.2-58.88-24.716-58.88-55.2-58.88M44.7 255.96c0-30.135 22.931-54.74 51.06-54.74s51.06 24.605 51.06 54.74-22.931 54.74-51.06 54.74-51.06-24.605-51.06-54.74" /><G fill="#fff"><Path d="M241.596 236.747v38.583h33.612v-7.78h-23.62v-7.812h20.691v-7.677h-20.69v-7.638h23.131v-7.676zM192 236.747v38.583h9.992v-12.084h12.028l6.977 12.084h11.524l-8.368-14.193c4.063-2.243 6.989-6.329 6.989-11.355 0-10.32-7.823-13.035-14.18-13.035zm9.992 7.676h14.17c1.83 0 3.867 1.422 3.867 5.82 0 1.491-.435 5.327-3.866 5.327h-14.171ZM284.285 236.747v38.583h9.992v-24.853l22.09 24.853h9.992v-38.583h-9.992v24.65l-22.09-24.65zM349.053 236.747l-17.002 38.583h11.457l2.593-6.569h19.434l2.592 6.57h11.458l-17.003-38.584zm6.765 7.391 6.687 16.947H349.13zM434.86 236.747v38.583h32.01v-7.78h-22.017v-30.803zM461.975 236.747v7.676h15.016v30.907h9.992v-30.907H502v-7.676zM384.277 236.747v26.075c0 10.927 11.083 13.242 19.873 13.242s19.873-2.315 19.873-13.242v-26.075h-9.992v25.587c0 3.973-6.007 5.307-9.881 5.307s-9.881-1.334-9.881-5.307v-25.587z" /></G>
    </Svg>
  );
};

RenaultLogoHorizontalDark.displayName = 'RenaultLogoHorizontalDark';

export default RenaultLogoHorizontalDark;