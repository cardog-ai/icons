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
 * VinfastIcon icon component for React Native
 */
const VinfastIcon = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#3C3C3C" d="M431.903 69.562c-6.488-3.197-16.084 8.24-19.328 9.44-9.692 2.082-18.654 7.1-25.862 14.483-12.52 13.485-91.021 142.493-109.847 166.467-10.052 12.836-18.277 24.273-20.836 24.273s-10.783-11.437-20.836-24.273c-18.825-24.024-97.417-152.982-109.892-166.467-7.208-7.382-16.17-12.401-25.862-14.484-3.244-1.199-12.794-12.636-19.328-9.44-4.98 2.498.411 14.035.411 14.035 2.239 7.192 29.564 77.465 56.888 142.593 24.674 58.735 47.886 109.379 56.979 129.158 36.555 79.312 56.66 87.553 61.549 87.653 4.889 0 25.223-8.291 61.549-87.653 9.138-19.978 32.35-70.423 57.025-129.158 27.416-64.928 54.831-135.4 56.796-142.593.137 0 5.575-11.537.594-14.034m-9.138 16.382c-12.018 14.933-97.007 207.821-116.198 243.481-19.191 35.661-43.683 79.912-50.491 79.912-6.763-.349-31.026-44.101-50.262-79.912-19.237-35.81-104.318-228.548-116.335-243.481-3.153-4.046-10.92-11.937-8.133-13.635 4.066-2.448 13.707 9.34 19.373 10.938 7.932 1.331 15.231 5.514 20.745 11.886 10.281 10.689 29.152 44.352 62.508 98.742 20.836 34.062 38.2 60.283 47.932 73.669 12.109 16.781 20.471 24.972 24.126 24.972s11.972-8.041 24.081-24.972c9.732-13.336 27.096-39.557 47.932-73.669 33.356-54.39 52.181-88.053 62.554-98.742 5.507-6.381 12.809-10.566 20.744-11.886 5.758-1.599 15.307-13.386 19.328-10.938 2.925 1.698-4.843 9.589-8.087 13.635z" /><Path fill="#3C3C3C" d="M403.482 96.43c-4.569 8.19-22.39 46.448-45.145 91.598-25.268 50.495-55.471 107.582-61.503 118.719-11.286 20.827-33.767 56.338-40.804 56.588-6.991-.3-29.472-35.761-40.758-56.638-5.986-11.087-36.006-68.174-61.457-118.669-22.847-44.95-40.85-83.408-45.145-91.599-4.295-8.19-2.97-10.988 5.94 0 13.297 16.832 45.191 77.465 45.191 77.465s55.014 100.289 63.604 113.575c8.591 13.285 26.183 38.108 32.534 38.357 6.443-.249 24.446-25.771 32.579-38.357 8.134-12.587 63.696-113.575 63.696-113.575s31.986-60.483 45.282-77.165c8.91-11.288 10.327-9.19 5.986-.3" />
    </Svg>
  );
};

VinfastIcon.displayName = 'VinfastIcon';

export default VinfastIcon;