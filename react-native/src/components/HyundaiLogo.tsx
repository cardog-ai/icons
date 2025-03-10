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
 * HyundaiLogo icon component for React Native
 */
const HyundaiLogo = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#002C5F" d="M282.542 206.131c1.921 9.926-3.281 18.171-7.604 26.174-4.802 7.446-12.727 13.845-22.252 12.888-21.375-.32-42.265-3.602-61.639-9.448-.879-.239-1.759-.801-2.24-1.6-.401-1.122.161-2.163.96-2.881 17.692-14.33 38.744-20.971 59.557-27.939 7.763-2.24 16.011-4.642 24.734-3.521 3.599.482 7.201 2.965 8.484 6.327m72.924-42.424c9.926 8.164 18.892 19.293 15.849 32.74-4.963 19.852-26.574 30.419-43.785 37.141-9.367 3.123-18.811 6.327-29.057 7.287-.641-.081-1.682.078-1.843-.882l.239-1.119c14.569-16.412 25.615-34.82 35.304-53.472 4.481-8.406 8.646-17.049 12.487-25.536.559-.64 1.122-.96 1.762-1.2 3.599.318 6.163 3.12 9.044 5.041m-139.687-21.132-.32 1.199c-21.052 23.933-34.9 51.71-48.027 79.326-2.561 2.402-5.044-.802-7.365-1.843-11.688-7.683-22.255-20.092-19.212-34.819 4.882-19.21 24.654-29.456 41.146-36.418 9.765-3.682 19.933-6.644 30.658-8.325 1.122-.003 2.561-.162 3.12.88m104.466 3.841c1.2.64 2.642.879 3.363 2.079.64 1.361-.64 2.241-1.361 3.123-16.571 12.966-35.54 20.173-54.914 26.497-9.848 2.402-19.774 6.725-30.738 4.323-2.564-.641-4.883-2.322-6.325-4.805-2.722-7.524.961-15.368 4.162-21.931 4.242-8.245 11.769-17.932 22.173-18.091 22.414-.161 43.546 3.202 63.64 8.805m27.697.64c16.971 9.286 36.183 25.614 34.182 47.387-2.322 20.172-21.133 34.26-37.943 42.747-49.071 23.454-117.991 24.172-168.663 3.682-17.132-7.123-36.344-19.37-43.551-37.783-5.523-15.129 1.2-30.898 12.49-41.383 23.613-21.453 53.711-28.815 84.692-33.06 33.622-4.084 69.001-.482 99.099 9.845 6.725 2.483 13.37 5.205 19.694 8.565" /><Path fill="#003984" d="M423.155 297.028h-24.317c-4.082.243-5.222 1.262-5.222 6.253v13.757h29.539zm12.948-11.017V346h-12.948v-17.244h-29.539V346h-12.948v-47.029c0-8.309 3.342-12.96 12.948-12.96zm-68.381 12.949v32.465c0 10.335-5.764 14.564-12.949 14.564h-40.84V286h40.84c11.029 0 12.949 7.063 12.949 12.96m-13.103 3.61c0-3.286-1.989-5.554-5.471-5.554h-22.266v37.483l22.266-.002c5.072-.259 5.471-3.322 5.471-5.752zM50 286h12.948v23.645h28.968V286h12.948v59.987H91.916v-24.48H62.948v24.48H50zm77.055 0 16.231 24.524L159.323 286h15.722l-25.291 38.352v21.637h-12.949v-21.64L111.338 286zm120.67 0h41.724c5.946 0 11.704.841 11.536 12.96v47.029h-12.948v-42.72c0-5.166-.615-6.253-4.639-6.253h-22.722v48.973h-12.951zm214.275.011V346h-12.951v-59.989zm-280.48 59.978h41.721c8.295 0 11.706-2.417 11.538-14.463V286h-12.948v42.824c0 5.134-.615 5.757-4.64 5.757H194.47L194.468 286H181.52z" />
    </Svg>
  );
};

HyundaiLogo.displayName = 'HyundaiLogo';

export default HyundaiLogo;