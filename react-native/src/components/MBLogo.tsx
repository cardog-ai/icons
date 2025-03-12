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
 * MBLogo icon component for React Native
 */
const MBLogo = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#231F20" d="M293.605 147.386c26.384 13.863 44.407 41.502 44.407 73.361s-18.023 59.585-44.407 73.363v-9.473c10.09-6.03 18.625-14.468 24.835-24.456l-24.835-10.072v-15.327l27.247 21.269c5.692-10.506 8.882-22.476 8.882-35.306 0-27.038-14.488-50.801-36.129-63.891zM255.234 138c13.797 0 26.815 3.36 38.371 9.386v9.473c-10.607-6.375-23.024-10.162-36.13-10.593l9.484 67.766 26.646 20.75v15.327l-38.546-15.584-38.286 15.671v-15.242l26.818-20.924 9.399-67.766c-13.28.431-25.61 4.22-36.217 10.59v-9.468c11.471-6.026 24.576-9.386 38.461-9.386m38.371 156.11c-11.556 6.027-24.576 9.469-38.371 9.469a83.5 83.5 0 0 1-38.458-9.384v-9.558c11.21 6.8 24.401 10.676 38.458 10.676 13.969 0 27.077-3.876 38.371-10.676zm-76.829.085c-26.474-13.863-44.495-41.589-44.495-73.448s18.019-59.498 44.492-73.361l.003 9.473c-21.731 13.087-36.217 36.765-36.217 63.888a74.44 74.44 0 0 0 8.969 35.476l27.245-21.269v15.242l-24.746 10.158c6.209 9.906 14.659 18.255 24.749 24.283zM247.919 322.571c-3.797 1.008-7.219 1.615-11.469 2.071v1.29c4.783 0 5.393.535 5.393 4.483v13.276c-2.812-4.552-5.017-5.916-9.117-5.916-8.13 0-13.821 7.661-13.821 18.59s5.769 18.596 14.051 18.596c4.33 0 7.29-1.969 9.415-6.219.306 2.881.309 3.185 1.067 6.07 3.115-.988 4.403-1.295 8.888-1.823l1.136-.155v-1.29c-5.089-.151-5.543-.532-5.543-5.159zm-204.956.552c-2.887.306-4.41.385-7.218.385-2.129 0-3.265-.074-6.224-.304v1.891c5.239.306 6.299 1.065 6.299 4.558v.458l-1.595 37.26c-.151 4.1-.907 4.704-6.225 5.085v1.823c3.952-.306 5.465-.378 7.59-.378 2.13 0 3.646.072 7.522.378v-1.823c-5.318-.381-6.305-1.065-6.305-4.403v-.682l1.52-39.386 12.456 33.62.913 2.654 1.067 2.957 1.061 2.964.838 2.431h1.142l.832-2.505.986-2.89 1.062-2.802.912-2.512 12.537-33.843.683 39.312v.379c0 3.567-1.139 4.4-6.306 4.706v1.823c4.786-.457 6.608-.608 9.495-.608 2.884 0 4.71.152 9.496.608v-1.823c-5.47-.381-6.156-.985-6.231-5.085l-.832-37.26v-.533c0-3.417 1.138-4.177 6.306-4.483v-1.891c-2.888.23-4.103.304-6.001.304-2.28 0-3.873-.079-7.293-.385L57.095 361.53zm295.487.304v1.904c5.47.301 6.232.904 6.232 5.004v36.807c0 4.099-.607 4.628-6.232 5.084v1.823h19.221c5.621 0 8.658-.681 11.848-2.654 3.801-2.428 6.306-7.061 6.306-11.843 0-4.095-1.748-7.81-4.711-10.088-1.597-1.215-3.269-1.899-6.001-2.431 5.469-2.048 8.359-5.92 8.359-11.229 0-3.949-1.674-7.444-4.561-9.643-2.582-1.896-5.545-2.734-10.483-2.734zm12.612 2.356h6.454c6.383 0 9.192 3.109 9.192 10.169 0 3.489-.829 5.996-2.502 7.968-1.672 1.897-3.723 2.505-7.981 2.505h-5.163zm-174.707 10.851-2.054 3.87c-2.431-2.354-4.481-3.188-7.746-3.188-8.965 0-15.044 7.743-15.044 19.049 0 11.08 6.005 18.521 14.815 18.521 6.839 0 11.166-4.406 12.151-12.525h-3.115q-1.367 10.02-8.435 10.02c-5.846 0-8.806-5.389-8.806-16.016 0-10.854 3.346-16.996 9.042-16.996 4.636 0 7.441 3.185 8.807 9.785h1.676v-12.52zm136.11.23-1.291 3.106c-2.582-1.742-4.783-2.424-7.746-2.424-6.685 0-11.394 4.098-11.394 10.095 0 4.401 1.751 6.525 7.292 9.108l3.494 1.588 2.886 1.29c3.722 1.67 5.17 3.416 5.17 5.996 0 3.873-3.346 6.833-7.826 6.833-5.319 0-8.51-3.339-9.881-10.244l-1.663.075v12.674h1.365l1.819-3.417c2.888 2.278 5.622 3.187 9.117 3.187 7.142 0 12.233-4.548 12.233-10.925 0-4.477-2.055-6.909-7.827-9.413l-3.19-1.364c-6.915-3.036-8.049-4.02-8.049-7.056 0-3.568 3.113-6.3 7.137-6.3 4.786 0 7.292 2.886 7.975 8.954h1.75v-11.763zm112.29 0c-3.031 1.063-5.621 1.668-10.03 2.276v1.289c.382 0 .767.075.993.075 3.802 0 4.251.46 4.326 3.571v24.586000000000002c0 3.262-.751 3.872-5.387 4.099v1.519c3.952-.381 5.541-.453 8.199-.453 2.737 0 4.258.072 8.211.453v-1.519c-3.953-.151-4.941-.912-4.941-3.944v-18.373c0-6.222 2.733-9.48 7.901-9.48 4.858 0 6.833 2.654 6.833 9.257v18.596c0 3.032-.986 3.793-5.089 3.944v1.519c3.948-.381 5.467-.453 8.279-.453 2.733 0 4.258.072 8.286.453v-1.519c-4.636-.227-5.4-.837-5.4-4.099v-18.218c0-2.881-.379-5.005-1.142-6.827-1.517-3.718-5.467-6.07-10.023-6.07-4.401 0-7.522 1.822-10.259 5.922-.155-2.885-.376-4.858-.757-6.604m-292.347.149c-3.118.908-5.7 1.367-10.029 1.748v1.364h.987c3.948.076 4.331.459 4.406 3.721v24.815c0 3.262-.832 3.872-5.468 4.099v1.519c4.179-.381 5.772-.459 8.509-.459 2.657 0 4.254.078 8.428.459v-1.519c-4.631-.227-5.393-.837-5.393-4.099V352.8c0-7.517 2.506-12.29 6.455-12.29 1.366 0 2.284.753 2.284 1.817v.682l-.156.762c-.075.306-.149.606-.149.757 0 1.52 1.368 2.579 3.116 2.579 1.899 0 3.19-1.443 3.19-3.646 0-3.639-2.812-6.144-6.61-6.144-3.948 0-7.219 2.507-8.887 6.833v-.837c-.155-2.278-.306-3.491-.683-6.3m-28.456.303c-9.115 0-14.808 7.362-14.808 19.049s5.692 18.521 15.491 18.521c7.444 0 12.305-4.633 13.294-12.451h-3.035c-.914 6.453-4.257 9.946-9.651 9.946-6.911 0-9.947-5.309-10.023-17.151h22.634c-.15-11.687-4.937-17.914-13.902-17.914m94.752 0c-9.116 0-14.815 7.362-14.815 19.049s5.698 18.521 15.497 18.521c7.444 0 12.309-4.633 13.294-12.451h-3.041c-.91 6.453-4.25 9.946-9.644 9.946-6.912 0-9.954-5.309-10.03-17.151h22.641c-.155-11.687-4.938-17.914-13.902-17.914m72.452 0c-9.116 0-14.815 7.362-14.815 19.049s5.698 18.521 15.497 18.521c7.444 0 12.305-4.633 13.294-12.451h-3.041c-.913 6.453-4.25 9.946-9.644 9.946-6.912 0-9.954-5.309-10.03-17.151h22.641c-.155-11.687-4.941-17.914-13.902-17.914m125.652 0c-9.116 0-14.814 7.362-14.814 19.049s5.698 18.521 15.497 18.521c7.443 0 12.305-4.633 13.294-12.451h-3.042c-.909 6.453-4.248 9.946-9.638 9.946-6.915 0-9.954-5.309-10.029-17.151h22.634c-.155-11.687-4.937-17.914-13.902-17.914m61.064.912-1.757 9.865h1.527c2.733-6.829 3.946-7.893 8.887-7.893h9.335l-20.58 33.849h26.128l1.98-10.925h-1.595c-2.284 6.905-4.405 8.953-9.576 8.953h-8.882L484 338.228zm-353.994 1.06c4.937 0 7.444 4.251 7.901 13.208h-16.41c.759-8.727 3.647-13.208 8.509-13.208m94.745 0c4.937 0 7.444 4.251 7.901 13.208h-16.41c.759-8.727 3.647-13.208 8.509-13.208m72.458 0c4.937 0 7.444 4.251 7.901 13.208h-16.41c.759-8.727 3.648-13.208 8.509-13.208m125.652 0c4.938 0 7.444 4.251 7.901 13.208h-16.409c.758-8.727 3.647-13.208 8.508-13.208m-163.324.608c5.621 0 8.509 5.773 8.509 16.928 0 10.548-2.81 16.01-8.279 16.01-5.47 0-8.354-5.69-8.354-16.543 0-11.005 2.655-16.395 8.124-16.395m117.653 8.886h7.217c4.028 0 6.302.678 8.05 2.424s2.731 5.007 2.731 8.65c0 7.588-3.797 11.843-10.557 11.843h-2.731c-4.028 0-4.71-.612-4.71-3.95zm-30.467 3.007v3.925h16.974v-3.925z" />
    </Svg>
  );
};

MBLogo.displayName = 'MBLogo';

export default MBLogo;