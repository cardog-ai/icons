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
import { IconComponentProps } from '../types';

/**
 * RAMWordmark icon component for React Native
 */
const RAMWordmark = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#000" d="M421.517 285.468v-33.821h-2.177l-18.192 33.821h-27.415l-18.192-33.821h-1.665v33.821h-40.995V225h64.183l11.273 18.832L400.379 225H462v60.468zM140.829 264.714s17.295-3.587 17.295-17.295c0-22.291-27.159-22.291-27.159-22.291H50v60.98h44.198v-20.113h6.789l15.117 19.729h47.016zm-36.639-12.939H93.813v-14.22h11.402c4.228.256 7.559 3.843 7.559 8.071 0 6.021-8.456 6.149-8.456 6.149zM270.22 225.128h-66.232l-31.771 60.468h44.71l6.149-14.605h27.287l5.893 14.477h45.351zm-42.916 32.027 9.608-18.832 9.48 18.832z" />
    </Svg>
  );
};

RAMWordmark.displayName = 'RAMWordmark';

export default RAMWordmark;