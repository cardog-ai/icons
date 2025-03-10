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
 * PolestarLogo icon component for React Native
 */
const PolestarLogo = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#000" d="M290.418 357.369q11.233 0 17.364 5.046 6.132 5.049 6.247 14.799h-10.43q-.115-11.586-13.411-11.586-5.503 0-8.71 2.237-3.21 2.235-3.209 6.021-.002 2.527 1.204 4.129 1.203 1.608 3.151 2.638 1.947 1.036 4.585 1.663c1.758.425 3.628.824 5.613 1.206q3.901.805 8.027 1.778 4.125.975 7.391 2.925c2.181 1.3 3.973 3.059 5.387 5.278q2.122 3.327 2.121 8.832 0 4.015-1.836 7.282-1.833 3.27-5.041 5.565c-2.138 1.531-4.682 2.715-7.623 3.556q-4.412 1.263-9.569 1.261c-8.251 0-14.597-1.795-19.026-5.391-4.284-3.472-6.525-8.376-6.741-14.701h10.667c.136 3.867 1.453 6.804 3.984 8.794 2.672 2.104 6.456 3.153 11.344 3.153q6.076 0 9.344-2.237 3.264-2.235 3.265-6.596-.002-2.75-1.26-4.416-1.263-1.659-3.383-2.751c-1.415-.726-3.036-1.302-4.872-1.722a171 171 0 0 0-5.731-1.204q-3.918-.693-7.792-1.607c-2.599-.609-4.949-1.548-7.05-2.808q-3.152-1.896-5.156-5.219-2.008-3.327-2.008-8.718 0-3.788 1.663-6.941 1.662-3.154 4.7-5.448 3.035-2.296 7.278-3.556 4.241-1.262 9.513-1.262m-55.589 0q13.866.002 20.345 9.059 6.477 9.065 6.478 25.583h-44.131q.226 4.359 1.606 7.971 1.374 3.614 3.724 6.196a17.1 17.1 0 0 0 5.387 4.013q3.035 1.435 6.705 1.435 5.73 0 9.8-2.638c2.71-1.759 5.101-4.915 5.748-9.081h11.157c-1.313 7.294-4.528 11.967-9.456 15.217q-7.395 4.875-17.593 4.876-13.64 0-20.858-8.318-7.223-8.314-7.223-22.999c0-4.432.648-8.564 1.948-12.387q1.948-5.736 5.674-9.981a25.9 25.9 0 0 1 8.94-6.596q5.215-2.35 11.748-2.35zm-83.38 0q6.649 0 11.979 2.294 5.328 2.294 9.055 6.481 3.725 4.187 5.729 9.922 2.007 5.736 2.008 12.617-.001 6.883-2.008 12.677-2.006 5.791-5.73 9.923c-2.482 2.751-5.522 4.892-9.112 6.422q-5.389 2.294-12.033 2.295-6.533-.001-11.807-2.296-5.273-2.295-8.998-6.421-3.724-4.132-5.672-9.923-1.949-5.792-1.949-12.677-.001-6.881 2.008-12.615 2.001-5.737 5.672-9.924 3.667-4.187 8.997-6.481t11.86-2.294zm229.16 0q8.366.001 13.064 2.523c3.135 1.684 5.462 3.824 6.992 6.423q2.292 3.901 2.808 8.661a86 86 0 0 1 .519 9.235v16.172c0 3.442.092 6.617.284 9.521a53 53 0 0 0 1.203 8.375h-9.855a52 52 0 0 1-.46-3.153q-.23-1.896-.345-4.876-3.782 5.049-8.708 7.168-4.93 2.123-11.349 2.124c-6.573 0-11.632-1.665-15.187-4.991q-5.329-4.99-5.329-12.906 0-4.816 1.892-8.086a16.2 16.2 0 0 1 5.044-5.393q3.15-2.12 7.277-3.326a62 62 0 0 1 8.48-1.835q4.357-.63 8.712-.973 4.354-.345 8.023-.805v-2.065q0-6.65-3.093-10.266-3.097-3.612-9.972-3.612-6.19 0-9.971 3.038-3.783 3.041-3.783 9.006h-10.43q-.001-4.588 1.775-8.258a18 18 0 0 1 4.988-6.252q3.208-2.582 7.622-4.015 4.409-1.435 9.799-1.435zm-42.546-12.616v14.336h12.839v8.717h-12.839v29.482q.001 3.095.173 5.562t.86 4.129q.687 1.665 2.12 2.526 1.43.86 3.953.86 1.26.001 2.694-.059 1.433-.057 3.265-.517v8.49q-4.696 1.031-8.71 1.031-3.438.001-6.247-.86-2.806-.858-4.698-2.807c-1.261-1.304-2.235-3.06-2.921-5.278-.691-2.217-1.032-4.933-1.032-8.145v-34.414h-10.889v-8.717h10.889v-14.337zm103.29 13.648q3.322.001 6.647.686v9.292a97 97 0 0 0-3.668-.574 25.5 25.5 0 0 0-3.322-.229q-4.815.001-7.852 1.664a12 12 0 0 0-4.757 4.704q-1.717 3.038-2.407 7.399-.687 4.361-.686 9.749v27.186h-10.546v-59.189h9.971v8.717q3.438-5.39 7.564-7.397 4.128-2.008 9.054-2.009v.001zm-242.74-23.4v83.277H188.07V335zm-109.398 0q5.27.001 11.004.458 5.73.458 11.233 3.212c3.667 1.988 6.434 4.874 8.31 8.661q2.806 5.677 2.807 12.79-.002 7.568-3.038 12.902c-2.025 3.556-4.757 6.37-8.194 8.433q-3.552 2.069-9.285 3.039-5.733.977-13.523.977H75.232v32.805H64V335zm304.456 54.372q-3.323.46-8.251.745c-3.209.18-6.395.661-9.514 1.435q-4.585 1.145-7.793 3.499-3.21 2.35-3.209 6.825 0 4.356 3.265 7.167c2.182 1.876 5.176 2.81 8.997 2.81a23.6 23.6 0 0 0 6.191-.803 12.37 12.37 0 0 0 5.271-2.925q2.293-2.12 3.669-5.85 1.376-3.726 1.376-9.577v-3.326zm-242.222-23.516q-4.012.001-7.275 1.604-3.272 1.61-5.56 4.59-2.293 2.983-3.555 7.17c-.842 2.791-1.259 5.908-1.259 9.349q0 5.162 1.203 9.405 1.201 4.245 3.496 7.285 2.29 3.038 5.559 4.703 3.266 1.663 7.276 1.663c2.753 0 5.253-.555 7.51-1.663a15.96 15.96 0 0 0 5.672-4.646q2.29-2.978 3.552-7.172c.842-2.787 1.261-5.906 1.261-9.347 0-3.442-.422-6.555-1.261-9.348q-1.262-4.187-3.608-7.227-2.352-3.04-5.616-4.703-3.267-1.663-7.396-1.663h.003zm82.923 0q-6.764.001-11.121 4.301-4.355 4.302-5.5 13.249h32.665q-.918-8.947-5.273-13.249-4.355-4.3-10.774-4.301zm-144.7-21.683h-14.44v32.124h14.443q4.354 0 7.907-.401c2.37-.269 4.201-.708 5.503-1.319q3.895-1.95 5.9-5.853 2.008-3.896 2.008-8.602 0-4.702-2.008-8.546-2.006-3.842-5.9-5.792c-1.302-.689-3.133-1.127-5.503-1.318q-3.553-.288-7.907-.289zM255.238 192.439v90.723l-3.705 4.506-15.309-76.243zM256.748 188.243V97.506L260.453 93l15.309 76.229z" /><Path fill="#000" d="M236.224 211.425 160 196.143l4.501-3.704h90.737zM275.776 169.233 352 184.566l-4.501 3.705h-90.751z" />
    </Svg>
  );
};

PolestarLogo.displayName = 'PolestarLogo';

export default PolestarLogo;