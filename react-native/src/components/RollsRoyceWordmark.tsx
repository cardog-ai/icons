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
 * RollsRoyceWordmark icon component for React Native
 */
const RollsRoyceWordmark = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#000" d="M209.814 251.103c1.82 4.004 5.518 6.476 9.065 6.476 4.682 0 8.217-3.777 8.217-8.517 0-4.209-1.848-6.563-9.794-12.207-7.122-5.056-9.748-8.761-9.748-14.16 0-5.79 4.26-11.292 11.388-11.292 5.129 0 9.748 2.959 11.168 7.721l-3.918 2.005c-1.257-3.489-4.167-5.408-7.348-5.408-3.75 0-6.781 2.947-6.781 6.585 0 3.283 1.472 6.639 7.731 10.964 8.659 5.932 11.904 9.389 11.904 15.792 0 7.317-5.436 12.835-12.918 12.835-5.737 0-11.191-3.69-12.999-8.746zm-59.728 5.362v-43.992h-4.792V260.8h24.115l1.141-4.335zm31.07 0v-43.992h-4.787V260.8h24.109l1.147-4.335zm277.596-18.225v-4.335h-19.414v-17.098h20.469v-4.335h-25.256V260.8h25.013l1.136-4.335h-21.362V238.24zm-89.841 22.56v-21.823l16.946-26.504h-5.575l-13.573 22.105-13.683-22.105h-5.662l16.76 26.502V260.8zM252.55 238.695v-4.241h-15.624v4.241zm175.481 15.311.394-.41-3.234-2.777-.4.396c-4.132 4.133-9.197 6.326-15.375 6.326-11.585 0-20.464-9.084-20.464-20.939 0-11.462 9.319-20.938 20.846-20.938 6.132 0 11.174 2.15 14.895 6.033l.481.504 2.793-3.515-.325-.336c-4.161-4.341-10.246-7.011-17.722-7.011-14.205 0-25.552 11.418-25.552 25.452 0 14.307 10.576 25.079 24.885 25.079 7.564 0 14.136-3.035 18.778-7.864M81.613 260.8 66.65 236.321H54.786V260.8H50V205h16.668c9.365 0 16.43 6.732 16.43 15.66 0 7.346-4.63 13.247-11.614 14.965L87.345 260.8zM67.31 231.818c7.262 0 11.064-5.613 11.064-11.158 0-6.361-5.008-11.158-11.643-11.158H54.786v22.316zm46.114 30.052c-14.332 0-25.14-10.808-25.14-25.139 0-14.203 11.04-25.328 25.14-25.328 14.309 0 25.043 11.045 25.043 25.139 0 13.994-11.052 25.328-25.043 25.328m-.191-46.099c-11.324 0-20.197 9.207-20.197 20.96 0 10.208 7.696 20.766 20.58 20.766 11.272 0 20.098-9.204 20.098-20.955 0-13.491-10.553-20.771-20.481-20.771M291.351 260.8l-14.964-24.479h-11.863V260.8h-4.787V205h16.667c9.366 0 16.43 6.732 16.43 15.66 0 7.346-4.63 13.247-11.614 14.965l15.862 25.175zm-14.303-28.982c7.261 0 11.063-5.613 11.063-11.158 0-6.361-5.007-11.158-11.643-11.158h-11.944v22.316zm46.114 30.052c-14.332 0-25.141-10.808-25.141-25.139 0-14.203 11.046-25.328 25.141-25.328 14.309 0 25.042 11.045 25.042 25.139 0 13.994-11.052 25.328-25.042 25.328m-.191-46.099c-11.325 0-20.197 9.207-20.197 20.96 0 10.208 7.696 20.766 20.579 20.766 11.272 0 20.099-9.204 20.099-20.955 0-13.491-10.554-20.771-20.481-20.771m-153.134 71.423c-5.407 0-9.8 4.399-9.8 9.807 0 5.735 4.121 9.897 9.8 9.897 5.402 0 9.801-4.398 9.801-9.806 0-5.735-4.121-9.898-9.801-9.898m0 16.818c-3.9 0-6.728-2.948-6.728-7.012 0-3.88 2.956-6.919 6.728-6.919 3.895 0 6.723 2.948 6.723 7.012 0 3.88-2.95 6.919-6.723 6.919m12.171-13.658h5.372v16.165h3.014v-16.165h5.181v-2.779h-13.567zm25.929-3.16c-5.407 0-9.806 4.399-9.806 9.807 0 5.735 4.12 9.897 9.806 9.897 5.401 0 9.8-4.398 9.8-9.806 0-5.735-4.121-9.898-9.8-9.898m0 16.818c-3.901 0-6.729-2.948-6.729-7.012 0-3.88 2.956-6.919 6.729-6.919 3.894 0 6.722 2.948 6.722 7.012 0 3.88-2.949 6.919-6.722 6.919m-61.293-6.21-5.929-10.227h-2.874v18.944h2.921V293.04l4.908 8.202h1.733l4.764-8.132v13.409h2.921v-18.944h-2.602zm164.527-2.359c-2.364-1.545-2.793-2.401-2.793-3.532 0-.865.62-1.796 1.976-1.796 1.205 0 2.127.801 2.463 2.144l2.62-.591c-.476-2.584-2.423-4.19-5.083-4.19-3.216 0-4.897 2.371-4.897 4.713 0 2.539 1.495 4.015 4.08 5.7 2.573 1.81 3.268 2.49 3.268 3.824 0 1.474-.915 2.354-2.451 2.354-1.982 0-2.84-1.678-3.211-3.085l-2.718.694c.493 2.296 1.924 5.033 5.929 5.033 2.672 0 5.372-1.782 5.372-5.188 0-2.751-1.385-3.965-4.555-6.08m-11.469-2.214c0-3.382-2.504-5.654-6.224-5.654h-5.558v18.944h3.019v-7.822h2.382l4.81 7.822h3.397l-5.176-8.344c2.162-.901 3.35-2.645 3.35-4.946m-6.114 2.845h-2.649v-5.689h2.55c2.081 0 3.321 1.027 3.321 2.748 0 .69-.232 2.941-3.222 2.941m-20.006-8.499-7.285 18.944h3.245l1.849-5.302h6.879l1.82 5.302h3.338l-7.192-18.944zm-1.264 10.973 2.545-7.294 2.497 7.294zm-37.942-5.319c0-3.382-2.504-5.654-6.225-5.654h-5.558v18.944h3.008v-7.822h2.394l4.81 7.822h3.396l-5.181-8.344c2.168-.901 3.356-2.645 3.356-4.946m-6.115 2.845h-2.66v-5.689h2.562c2.08 0 3.321 1.027 3.321 2.748 0 .69-.232 2.941-3.223 2.941m27.987-5.993c2.051 0 3.645.637 5.013 2.005l2.074-1.875c-1.9-2.086-4.085-3.017-7.087-3.017-5.355 0-9.714 4.484-9.714 9.995 0 5.626 3.965 9.709 9.43 9.709 2.88 0 5.43-1.072 7.366-3.103l-2.075-1.874c-1.345 1.427-2.979 2.057-5.106 2.057-3.182 0-6.502-2.084-6.502-6.886 0-3.977 2.822-7.011 6.601-7.011m107.308-2.453h-6.78v18.891h7.128v-.002c5.54-.033 8.96-4.3 8.96-9.303 0-5.209-4.19-9.586-9.308-9.586m.267 16.14h-4.034v-13.383h3.767c3.82 0 6.468 2.501 6.468 6.688 0 3.723-1.924 6.695-6.201 6.695m-33.451-.029v-16.164h-3.014v18.944h10.791v-2.78zm8.826-13.385h5.372v16.165h3.014v-16.165h5.187v-2.779h-13.573z" />
    </Svg>
  );
};

RollsRoyceWordmark.displayName = 'RollsRoyceWordmark';

export default RollsRoyceWordmark;