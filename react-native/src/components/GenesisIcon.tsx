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
 * GenesisIcon icon component for React Native
 */
const GenesisIcon = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#000" d="M246.608 212.968c-4.874 1.017-16.216 4.333-30.925 9.019l-6.425 2.034-11.962-.044c-12.538-.088-30.659-.796-95.035-3.714-56.135-2.564-52.502-2.476-52.059-1.724 2.304 3.891 6.868 7.03 11.564 7.87 4.785.928 21.488 2.52 75.718 7.339 15.108 1.371 31.058 2.83 35.444 3.316 22.95 2.521 27.691 4.731 34.204 15.873 6.557 11.275 9.658 15.829 15.019 21.886 6.602 7.472 18.609 16.536 29.109 21.93l4.741 2.432 4.74-2.432c10.368-5.306 22.507-14.458 29.109-21.93 5.361-6.057 8.462-10.611 15.019-21.886 6.513-11.142 11.254-13.352 34.204-15.873 4.386-.486 20.336-1.945 35.444-3.316 54.23-4.819 70.933-6.411 75.718-7.339 4.697-.84 9.26-3.979 11.564-7.87.443-.752 4.076-.84-52.059 1.724-52.059 2.343-79.439 3.493-93.041 3.803-13.292.309-11.298.663-30.704-5.306-17.279-5.35-22.507-6.544-29.108-6.721-4.165-.132-6.07.045-10.279.929m21.001 8.224c9.348 2.343 20.956 6.19 25.918 8.577 4.963 2.432 6.159 3.803 6.026 7.074-.133 5.306-6.956 20.825-12.45 28.474-3.367 4.731-10.146 11.717-15.374 15.917-4.209 3.404-13.735 9.683-15.197 10.081-1.816.442-11.962-6.279-19.671-12.999-7.842-6.853-13.779-14.591-18.343-23.876-2.481-5.084-5.715-14.015-6.158-17.155-.576-3.802 2.171-6.189 10.855-9.55 7.399-2.874 22.551-7.162 30.127-8.533 2.349-.398 7.577.31 14.267 1.99" /><Path fill="#000" d="M224.057 239.408c-2.083 1.37-2.924 4.023-2.083 6.588 1.019 3.316 4.785 4.775 8.728 3.404 1.33-.486 1.374-.575 1.374-3.095v-2.608h-1.994c-1.949 0-2.658.663-1.329 1.149.399.177.665.84.665 1.769 0 1.37-.089 1.503-1.33 1.503-3.145 0-4.696-4.156-2.614-6.853.842-1.017 1.241-1.15 2.792-1.017 1.019.133 2.171.354 2.614.53.62.31.753.133.753-.751 0-1.238-.886-1.636-4.032-1.636-1.373 0-2.525.309-3.544 1.017M233.715 238.7c-.177.133-.133.487.133.796.221.265.487 2.653.531 5.35l.133 4.819 3.899.133c3.633.133 3.855.088 3.855-.796 0-.796-.266-.884-2.703-.884h-2.658l.133-1.68c.133-1.636.133-1.636 2.259-1.769 1.462-.088 2.083-.309 2.083-.796 0-.442-.576-.619-2.216-.619h-2.215v-3.0949999999999998h2.703c2.304 0 2.658-.088 2.436-.707-.132-.398-.265-.796-.265-.884 0-.31-7.798-.177-8.108.132M243.772 238.921c-.177.266-.089.619.177.708.355.088.532 1.724.532 5.261 0 4.996 0 5.041 1.019 4.908.886-.133.975-.442 1.196-3.183l.222-3.095 2.569 3.227c1.994 2.432 2.836 3.139 3.545 3.051.93-.133.974-.354.974-5.659 0-5.35-.044-5.527-.974-5.66-.931-.132-.975.044-1.108 3.405l-.133 3.581-2.791-3.537c-2.082-2.697-3.013-3.537-3.81-3.537-.621 0-1.241.221-1.418.53M256.001 239.01c0 .354.222.796.443.928.266.177.443 2.344.443 5.129v4.819h3.766c3.456 0 3.766-.088 3.766-.884s-.31-.884-2.437-.884h-2.437v-3.537h2.216c1.683 0 2.215-.177 2.215-.663s-.532-.664-2.215-.664h-2.216v-3.0949999999999998h2.482c2.082 0 2.436-.132 2.303-.795-.133-.619-.753-.752-4.253-.885-3.367-.088-4.076 0-4.076.531M267.608 238.833c-.531.221-1.196.928-1.417 1.592-.665 1.724.31 3.272 2.88 4.686 2.569 1.371 2.968 2.697.974 2.918-.709.089-1.861-.044-2.569-.309-1.285-.442-1.33-.398-1.197.752s.266 1.193 2.836 1.326c2.171.088 2.88-.044 3.854-.796 2.26-1.768 1.463-4.289-1.905-5.969-1.595-.796-2.215-1.37-2.215-2.078 0-.84.177-.884 2.437-.663 2.171.221 2.437.133 2.437-.575 0-.442-.311-.928-.709-1.061-1.019-.398-4.209-.265-5.406.177M275.672 238.921c-.177.266-.088.619.178.708.354.088.531 1.724.531 5.217v5.04h2.658v-11.495000000000001h-1.506c-.842 0-1.683.221-1.861.53M282.982 239.054c-2.569 1.415-1.816 4.156 1.595 5.925 1.507.796 2.216 1.459 2.216 2.034 0 1.061-1.817 1.414-3.811.707-1.284-.442-1.329-.398-1.196.752s.266 1.193 2.836 1.326c3.367.177 5.051-.928 5.051-3.183 0-1.592-.576-2.255-3.412-3.803-1.241-.663-1.905-1.37-1.905-1.901 0-.796.221-.84 2.437-.619 2.171.221 2.436.133 2.436-.575 0-.442-.31-.928-.708-1.061-1.241-.486-4.342-.265-5.539.398M62.918 232.112c.088.221 1.639 1.725 3.455 3.405 13.115 11.938 22.685 15.563 46.964 17.641 11.076.973 26.184 1.901 44.527 2.697 8.772.398 17.013.929 18.342 1.194 1.64.31 2.836.884 3.988 1.901.886.796 1.462 1.592 1.329 1.725-.266.265-32.21-.266-50.242-.841-5.671-.176-8.285-.132-7.975.177 1.019 1.017 23.171 7.207 35.4 9.904l6.247 1.371 17.279.044c18.741.044 18.608.044 21.001 2.564l1.019 1.106-1.906.265c-2.171.265-14.354 1.15-15.949 1.15-.621 0-.842.177-.576.398.487.53 16.215 4.819 23.216 6.411 6.512 1.414 17.722 3.492 17.943 3.271.089-.088-.93-1.061-2.304-2.122-5.715-4.554-12.184-12.38-20.557-24.76-4.342-6.455-8.773-11.274-11.83-12.954-4.12-2.211-13.469-3.847-33.318-5.836-51.482-5.041-93.572-9.064-95.478-9.064-.398 0-.664.177-.576.353M430.121 233.35c-8.639.796-26.007 2.476-38.546 3.714s-28.887 2.83-36.33 3.582c-22.02 2.122-31.28 3.714-35.533 6.013-3.057 1.68-7.488 6.499-11.829 12.954-8.374 12.38-14.843 20.206-20.558 24.76-1.374 1.061-2.393 2.034-2.304 2.122.222.221 11.431-1.857 17.944-3.271 7-1.592 22.728-5.881 23.216-6.411.266-.221.044-.398-.576-.398-1.595 0-13.779-.885-15.95-1.15L307.75 275l1.019-1.106c2.392-2.52 2.259-2.52 21-2.564l17.279-.044 6.248-1.371c12.184-2.697 34.381-8.887 35.4-9.904.31-.309-2.26-.353-7.754-.177-17.368.531-50.198 1.106-50.464.841-.133-.133.443-.929 1.329-1.725 1.152-1.017 2.349-1.591 3.988-1.901 1.329-.265 9.57-.796 18.342-1.194 18.343-.796 33.407-1.724 44.527-2.697 24.235-2.078 33.85-5.703 46.964-17.641 1.816-1.68 3.411-3.184 3.456-3.405.221-.53-1.684-.397-18.963 1.238" />
    </Svg>
  );
};

GenesisIcon.displayName = 'GenesisIcon';

export default GenesisIcon;