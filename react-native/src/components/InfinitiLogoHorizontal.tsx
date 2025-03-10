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
 * InfinitiLogoHorizontal icon component for React Native
 */
const InfinitiLogoHorizontal = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#231F20" d="M136.317 265.971 118 241.239l-18.317 24.732c-6.186-.604-16.816-4.645-16.816-11.824 0-9.048 15.615-17.493 35.193-17.493 20.599 0 35.193 8.445 35.193 17.493 0 7.239-10.69 11.281-16.816 11.763M118 234c-25.344 0-43 9.953-43 22.802 0 6.032 3.844 12.788 12.011 16.89 7.627 3.8 18.317 5.127 19.819 5.308L118 246.245 129.17 279a68.8 68.8 0 0 0 19.819-5.308c8.167-4.102 12.011-10.858 12.011-16.89-.06-12.909-17.656-22.802-43-22.802M232.545 242.086v23.766l-8.077-22.908c-.172-.601-.602-.858-1.461-.858h-7.477V271h5.156v-23.509l7.992 22.565c.172.601.688.858 1.289.858h7.735V242h-5.157zm26.64 0V271h6.016v-12.355h10.742v-5.32h-10.742v-6.005h10.913V242h-16.929zm137.754 0v5.577h6.617V271h6.015v-23.423h6.617V242h-19.335zM296.997 271h6.445v-28.914h-6.445zm73.044 0h6.445v-28.914h-6.445zm66.6 0H443v-28.914h-6.359zM187 271h6.445v-28.914H187zm160.956-28.914H342.8v23.766l-8.078-22.908c-.172-.601-.601-.858-1.375-.858h-7.562V271h5.156v-23.509l7.992 22.565c.172.601.687.858 1.289.858h7.734V242z" />
    </Svg>
  );
};

InfinitiLogoHorizontal.displayName = 'InfinitiLogoHorizontal';

export default InfinitiLogoHorizontal;