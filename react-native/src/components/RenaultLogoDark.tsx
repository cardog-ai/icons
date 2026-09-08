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

export interface RenaultLogoDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * RenaultLogoDark icon component for React Native
 */
const RenaultLogoDark = ({ size, width, height, ...props }: RenaultLogoDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#fff" d="M256 128c-66.27 0-120 57.32-120 128s53.73 128 120 128 120-57.32 120-128-53.73-128-120-128M145 256c0-65.51 49.85-119 111-119s111 53.49 111 119-49.85 119-111 119-111-53.49-111-119" /><Path fill="#fff" d="M256 246.5c-66.27 0-120 57.32-120 128s53.73 128 120 128 120-57.32 120-128-53.73-128-120-128m-111 128c0-65.51 49.85-119 111-119s111 53.49 111 119-49.85 119-111 119-111-53.49-111-119" />
    </Svg>
  );
};

RenaultLogoDark.displayName = 'RenaultLogoDark';

export default RenaultLogoDark;