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
 * VolkswagenLogo icon component for React Native
 */
const VolkswagenLogo = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#001E50" d="M121.865 354c-10.542 0-19.213 7.829-19.213 20.849 0 12.206 5.877 19.859 17.873 19.859 10.655 0 19.224-7.886 19.224-20.906 0-13.491-7.405-19.802-17.884-19.802m105.454 0c-9.432 0-14.955 4.845-14.955 11.854 0 12.847 16.59 9.522 16.59 17.057 0 3.62-3.084 5.193-6.927 5.193-2.854 0-5.995-.641-8.209-1.401l-.466 7.06c2.448.643 5.233.945 8.028.945 9.667 0 15.556-5.437 15.556-12.856 0-12.203-16.657-9.696-16.657-16.761 0-2.803 2.334-4.783 6.699-4.783 2.388 0 4.828.404 7.04 1.048l.409-6.65c-2.329-.41-4.893-.706-7.108-.706m133.069.057c-13.626 0-22.017 8.823-22.017 21.202 0 12.03 7.398 19.381 19.86 19.381 4.717 0 9.554-.871 13.456-2.448v-18.8h-7.574v13.721c-1.511.467-3.145.695-5.008.695-7.977 0-12.524-4.905-12.524-13.255 0-8.817 5.597-13.721 13.342-13.721 3.669 0 7.268.754 10.412 1.981l1.17-7.059c-3.379-.994-7.215-1.697-11.117-1.697M63 354.638l13.683 39.421h8.675l13.74-39.421h-7.745l-7.744 22.603c-1.164 3.326-1.802 5.547-2.384 8.232H81.1c-.699-2.862-1.572-5.547-2.328-7.766l-7.62-23.069zm86.003 0v39.421h20.326v-6.661h-12.752v-32.76zm28.478 0v39.421h7.563v-18.925l12.695 18.925h9.901l-15.022-20.383 14.387-19.038h-9.209l-12.752 17.877v-17.877zm65.394 0 10.015 39.421h8.732l5.7-21.897c.702-2.626 1.23-5.26 1.522-8.005h.057c.409 2.805.871 5.664 1.51 8.176l5.712 21.726h9.254l10.015-39.421h-7.562l-5.36 22.022a79 79 0 0 0-1.51 7.583h-.068c-.35-2.745-.985-5.547-1.567-7.708l-6.064-21.897h-7.971l-5.996 22.022c-.698 2.512-1.169 5.197-1.578 7.823h-.057c-.349-2.746-.811-5.493-1.453-8.062l-5.36-21.783zm68.13 0-13.739 39.421h7.619l2.737-8.062h14.965l2.737 8.062h8.278l-14.035-39.421zm73.195 0v39.421h21.37v-6.479h-13.796v-10.692h13.103v-6.183h-13.103v-9.702h13.796v-6.365zm32.498 0v39.421h7.335v-14.074c0-4.728-.119-11.383-.352-14.769 1.165 2.569 2.969 5.666 4.656 8.643l11.65 20.2h9.255v-39.421h-7.336v12.263c0 4.847.117 12.325.409 16.295-1.457-2.979-3.431-6.484-5.178-9.52l-11.071-19.038zm-295.526 6.194c6.753 0 10.481 4.793 10.481 13.55 0 9.461-5.483 13.426-10.606 13.426-7.048 0-10.299-5.428-10.299-13.779 0-8.876 5.008-13.197 10.424-13.197m193.785 2.505h.125a61 61 0 0 0 1.862 6.309l3.668 10.339h-11.06l3.543-10.043c.815-2.276 1.396-4.56 1.862-6.605M256.153 299.472c-63.423 0-115.384-52.215-115.384-115.638 0-14.264 2.547-27.763 7.387-40.499l67.498 135.761c.764 1.782 2.038 3.311 4.075 3.311s3.311-1.529 4.076-3.311l31.074-69.536c.255-.764.764-1.528 1.528-1.528.765 0 1.019.764 1.529 1.528l31.074 69.536c.764 1.782 2.038 3.311 4.076 3.311s3.311-1.529 4.075-3.311l67.498-135.761c4.84 12.736 7.387 26.235 7.387 40.499-.51 63.423-52.471 115.638-115.893 115.638m0-141.873c-.764 0-1.019-.764-1.529-1.528l-36.168-81.507c11.716-4.33 24.452-6.623 37.697-6.623s25.98 2.293 37.697 6.623l-36.169 81.507c-.509 1.019-.764 1.528-1.528 1.528m-36.933 83.799c-.764 0-1.019-.764-1.528-1.528l-58.584-118.185c10.443-16.047 24.452-29.546 41.518-38.97l42.282 93.987c.509 1.528 1.783 2.038 3.056 2.038h20.377c1.528 0 2.547-.255 3.311-2.038l42.282-93.988c16.811 9.425 31.075 22.924 41.518 38.971L294.359 239.87c-.255.764-.764 1.528-1.528 1.528s-1.019-.764-1.528-1.528l-22.16-50.432c-.764-1.783-1.783-2.038-3.311-2.038h-20.377c-1.528 0-2.547.255-3.311 2.038l-21.396 50.432c-.255.764-.764 1.528-1.528 1.528m36.933 69.791c70.554 0 127.355-56.8 127.355-127.355 0-70.554-56.801-127.355-127.355-127.355-70.555 0-127.355 56.801-127.355 127.355 0 70.555 56.8 127.355 127.355 127.355" />
    </Svg>
  );
};

VolkswagenLogo.displayName = 'VolkswagenLogo';

export default VolkswagenLogo;