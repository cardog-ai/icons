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
 * JeepIcon icon component for React Native
 */
const JeepIcon = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#424D07" d="M120.957 174h33.495v88.096c0 15.168-6.489 46.94-52.947 46.94S50 279.428 50 262.824v-16.252h32.42v15.886c0 9.747 6.478 18.777 18.725 18.777 12.241 0 19.812-6.857 19.812-18.411zm85.34 36.826c-30.616 0-44.3 28.167-44.3 52.349 0 24.198 15.486 47.662 47.179 47.662 27.733.362 46.108-17.692 46.108-31.048h-30.617s-3.605 8.663-14.409 8.663-16.923-6.138-16.923-20.94h62.304c0-46.573-23.046-56.686-49.337-56.686m-12.967 37.914c0-9.747 3.955-17.697 15.125-17.697 11.531 0 16.568 8.673 16.568 17.697zm113.114-37.914c-30.611 0-44.305 28.167-44.305 52.349 0 24.198 15.491 47.662 47.184 47.662 27.738.362 46.103-17.692 46.103-31.048h-30.612s-3.605 8.663-14.409 8.663-16.928-6.138-16.928-20.94h62.31c0-46.573-23.047-56.686-49.343-56.686m-12.967 37.914c0-9.747 3.965-17.697 15.12-17.697 11.536 0 16.573 8.673 16.573 17.697zM395.014 339v-38.643c1.293 1.725 2.029 2.556 4.321 4.337 3.589 2.808 9.723 7.589 23.407 7.589 24.848 0 39.258-21.668 39.258-51.276 0-38.271-24.128-49.102-39.619-49.102-15.486 0-21.316 7.222-23.407 9.752-2.42 2.912-3.213 4.569-4.326 6.97v-14.198h-30.972V339zm-.721-76.909c.36-18.415 7.56-25.994 17.283-25.994 15.852 0 18.726 12.277 18.726 24.91 0 12.643-2.158 29.247-17.284 29.247s-19.086-9.747-18.725-28.163" />
    </Svg>
  );
};

JeepIcon.displayName = 'JeepIcon';

export default JeepIcon;