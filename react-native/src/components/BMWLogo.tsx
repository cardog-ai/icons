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
 * BMWLogo icon component for React Native
 */
const BMWLogo = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#0166B1" d="M361.481 256c0 58.294-47.187 105.482-105.481 105.482V256zM256 150.519V256H150.519c0-58.294 47.187-105.481 105.481-105.481" /><Path fill="#fff" d="M256 150.519c58.294 0 105.482 47.187 105.482 105.481H256zM150.519 256H256v105.481c-58.294 0-105.481-47.187-105.481-105.481" /><Path fill="#000" d="M256 150.519v5.783c54.968 0 99.698 44.719 99.698 99.698h5.783c0-58.252-47.229-105.481-105.481-105.481m0 205.179c-54.968 0-99.698-44.719-99.698-99.698h-5.783c0 58.252 47.229 105.481 105.481 105.481M256 78c-98.304 0-178 79.696-178 178s79.696 178 178 178 178-79.696 178-178S354.304 78 256 78m166.425 178c0 91.909-74.505 166.425-166.425 166.425S89.575 347.909 89.575 256 164.091 89.575 256 89.575 422.425 164.091 422.425 256" /><Path fill="#000" d="M179.932 170.129c5.689-5.95 8.909-12.824 3.221-19.387-3.095-3.562-8.292-4.34-12.6-2.585l-.428.166.136-.374c.637-1.693 1.045-7.092-3.587-10.82-2.258-1.817-5.092-2.492-7.957-2.202-5.343.54-9.452 4.164-20.64 16.552-3.377 3.739-8.291 9.637-11.24 13.458l30.73 28.95c10.184-11.193 14.335-15.357 22.365-23.758m-40.098-7.082c6.19-7.518 12.766-14.34 15.746-17.04.941-.851 1.966-1.703 3.21-2.035 2.018-.551 4.099.872 4.57 2.928.47 2.067-.837 4.029-2.29 5.649-3.273 3.666-15.276 16.137-15.276 16.137zm12.035 11.339s11.689-12.273 15.506-16.199c1.516-1.557 2.488-2.502 3.534-3.011 1.349-.654 2.823-.789 4.141.083 1.296.862 1.892 2.347 1.568 3.821-.387 1.755-1.83 3.427-3.022 4.704-1.61 1.714-15.475 16.449-15.496 16.469zm107.644-38.784 9.839-21.889.627-1.942-.177 2.025 1.035 29.252c3.45.322 7.016.799 10.529 1.381l-1.6-43.322c-4.914-.54-9.807-.924-14.701-1.132l-9.693 23.894-.345 1.775-.345-1.775L245 99.975c-4.893.208-9.787.592-14.701 1.132l-1.6 43.322a157 157 0 0 1 10.529-1.381l1.036-29.252-.178-2.025.627 1.942 9.839 21.889zm81.714 45.285c2.415 2.575 5.897 6.729 7.852 9.252l36.011-22.699a239 239 0 0 0-6.807-8.391l-22.805 14.974-1.558 1.329 1.161-1.682 10.069-19.958-7.121-7.071-20.106 9.999-1.694 1.153 1.348-1.547 15.088-22.637a219 219 0 0 0-8.458-6.791l-22.857 35.731c2.896 2.211 6.713 5.462 9.149 7.673l21.518-11.09 1.38-1.007-1.014 1.371z" />
    </Svg>
  );
};

BMWLogo.displayName = 'BMWLogo';

export default BMWLogo;