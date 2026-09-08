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

export interface RenaultIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * RenaultIconDark icon component for React Native
 */
const RenaultIconDark = ({ size, width, height, ...props }: RenaultIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#fff" d="M256 128c-66.27 0-120 57.32-120 128s53.73 128 120 128 120-57.32 120-128-53.73-128-120-128M145 256c0-65.51 49.85-119 111-119s111 53.49 111 119-49.85 119-111 119-111-53.49-111-119M291.51 100.75 276.41 128h-40.82l-15.1-27.25 8.65-15.84 15.9 28.3h21.92l15.9-28.3zm42.5-71.85-31.8 59.36-8.1-14.82 19-44.54zm-156.02 0h20.9l19 44.54-8.1 14.82z" />
    </Svg>
  );
};

RenaultIconDark.displayName = 'RenaultIconDark';

export default RenaultIconDark;