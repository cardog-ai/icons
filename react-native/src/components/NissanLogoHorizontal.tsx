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
 * NissanLogoHorizontal icon component for React Native
 */
const NissanLogoHorizontal = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#C90C41" d="M334.11 261.382c4.314-10.307 8.518-20.279 8.631-20.549.248-.567.681-.819 1.362-.891.306-.028 1.01-.042 1.725-.042.678 0 1.365.014 1.606.042.601.086 1.141.356 1.385 1.005 1.055 2.883 4.644 11.59 8.326 20.435zm28.958-25.194c-4.229-9.83-2.641-8.742-11.977-9.066-.856-.035-2.729-.07-5.517-.076-2.795 0-3.527.02-5.658.062-8.79.155-7.412-.453-10.419 5.914.003 0-15.108 34.658-21.667 49.064l-.296.608c-1.23 2.437-.326 2.524 1.626 2.524l13.699-.011c.87 0 1.447-.536 1.67-1.019 0 0 1.884-4.511 4.473-10.608h33.254a2161 2161 0 0 0 4.442 10.573c.288.674.924 1.085 1.67 1.085l14.115-.024c2.097 0 2.547.27 1.746-1.635-2.513-5.993-18.81-41.895-21.161-47.391m-212.673-9.101h-13.864c-1.093 0-1.402.54-1.402 1.487v54.871c0 1.51.34 1.773 1.863 1.773h13.128c1.475 0 1.784-.349 1.784-1.766v-54.847c0-1.072-.333-1.518-1.509-1.518m-31.043-.013h-11.341c-1.509 0-1.784.352-1.784 1.783l-.007 43.448s-22.804-35.712-25.76-40.323c-3.428-5.326-4.641-4.977-14.562-4.977-9.938 0-13.104.069-13.104.069-1.516.007-1.794.352-1.794 1.77l.03 54.601c0 1.483.328 1.78 1.795 1.78l11.365-.007c1.536 0 1.825-.349 1.825-1.766l-.014-42.836s18.738 29.591 25.053 39.532c3.194 5.032 3.76 5.063 12.949 5.07l15.352-.007c1.495 0 1.815-.283 1.815-1.78V228.85c0-1.437-.268-1.776-1.818-1.776m339.073 0h-11.33c-1.506 0-1.791.352-1.791 1.783l-.007 43.448s-22.77-35.712-25.747-40.323c-3.424-5.326-4.631-4.977-14.579-4.977-9.907 0-13.097.069-13.097.069-1.505.007-1.791.352-1.791 1.77l.031 54.601c.004 1.483.327 1.78 1.795 1.78l11.368-.007c1.536 0 1.815-.349 1.815-1.766l-.011-42.836s18.738 29.591 25.056 39.532c3.194 5.032 3.747 5.063 12.963 5.07l15.332-.007c1.498 0 1.821-.283 1.821-1.78V228.85c0-1.437-.271-1.776-1.828-1.776m-248.479 22.298a5596 5596 0 0 0-25.297-2.409c-1.791-.176-2.29-1.224-2.437-2.399-.069-.525-.069-.957-.069-1.31 0-.532.024-.816.069-1.213.161-1.649 1.007-2.323 2.756-2.323l40.484.007c1.471.007 1.839-.276 1.839-1.79v-9.246c0-1.4-.423-1.642-1.835-1.649h-41.113c-10.708 0-16.748 3.93-18.394 12.056-.365 1.825-.44 4.051-.44 5.624 0 1.904.12 3.861.326 5.368.636 4.659 3.451 10.134 15.775 11.354 9.797.971 23.887 2.167 28.621 2.579 2.145.183 2.526 1.811 2.66 2.727q.083.53.083 1.572c0 .616 0 1.265-.083 2.161-.11 1.289-.694 1.897-2.371 1.897h-42.939c-1.505 0-1.815.311-1.815 1.791v9.215c0 1.496.358 1.793 1.805 1.793h42.395c10.502 0 17.377-1.787 19.223-10.957.392-1.935.464-4.469.464-6.242 0-2.741-.186-5.198-.365-6.118-1.894-9.619-9.102-11.475-19.342-12.488m74.404 0a5652 5652 0 0 0-25.297-2.409c-1.791-.176-2.296-1.224-2.448-2.399-.048-.525-.048-.957-.048-1.31 0-.532.028-.816.048-1.213.172-1.649 1.008-2.323 2.795-2.323l40.47.007c1.454.007 1.815-.276 1.815-1.79v-9.246c0-1.4-.416-1.642-1.815-1.649h-41.123c-10.708 0-16.751 3.93-18.391 12.056-.364 1.825-.443 4.051-.443 5.624 0 1.904.117 3.861.323 5.368.646 4.659 3.451 10.134 15.768 11.354 9.793.971 23.904 2.167 28.634 2.579 2.132.183 2.524 1.811 2.661 2.727q.077.53.076 1.572c0 .616 0 1.265-.076 2.161-.113 1.289-.694 1.897-2.365 1.897h-42.948c-1.516 0-1.812.311-1.815 1.791l.006 9.215c-.006 1.496.358 1.793 1.802 1.793h42.388c10.501 0 17.366-1.787 19.222-10.957.382-1.935.468-4.469.468-6.242 0-2.741-.193-5.198-.378-6.118-1.898-9.619-9.092-11.475-19.329-12.488" />
    </Svg>
  );
};

NissanLogoHorizontal.displayName = 'NissanLogoHorizontal';

export default NissanLogoHorizontal;