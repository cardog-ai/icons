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

export interface AvatrIconDarkProps extends SvgProps {
  /** Size of the icon (sets both width and height) */
  size?: number;
}

/**
 * AvatrIconDark icon component for React Native
 */
const AvatrIconDark = ({ size, width, height, ...props }: AvatrIconDarkProps) => {
  const computedWidth = size ?? width ?? 24;
  const computedHeight = size ?? height ?? 24;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={computedWidth}
      height={computedHeight}
      {...props}
    >
      <Path fill="#FFF" d="m368.5 44.3-225-.3-2.9.5-2.2 1.7-.8 1.8v416l.5 1.6 1.7 1.6 2.6.8h227.2l2.6-.8 1.4-1.4.8-1.8V48l-1.9-2.9ZM151.1 54.5l209.8-.3-104.6 342.6h-.6Zm-3.5 22.7 101.9 330.7-1.6 1.3-100.1 46.4Zm216.6 0 .2 378.4-101.9-47.2ZM255.5 416.8l1-.3 91.2 41.3-183.4.2 1.9-1.3Z" />
    </Svg>
  );
};

AvatrIconDark.displayName = 'AvatrIconDark';

export default AvatrIconDark;