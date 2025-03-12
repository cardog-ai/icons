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
 * FiatLogo icon component for React Native
 */
const FiatLogo = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#A70230" d="M254.39 56.78c-16.983.04-23.944.68-39.042 3.694-56.496 11.28-106.321 48.257-134.272 99.651-35.088 64.517-31.295 143.795 9.801 204.859 12.926 19.205 32.743 39.276 51.935 52.599 26.333 18.281 59.751 30.662 90.952 33.695 3.419.334 7.233.704 8.476.824 6.051.588 30.358-.233 38.147-1.288 32.486-4.396 61.753-15.759 87.876-34.117 39.018-27.418 67.291-68.477 78.558-114.088 12.698-51.401 4.641-105.488-22.374-150.188-27.076-44.803-70.896-77.344-121.173-89.986-17.276-4.343-28.847-5.681-48.884-5.656m-1.9 5.552c10.254.057 22.506.506 27.049 1.156 23.392 3.348 45.295 10.297 64.523 20.472 60.554 32.042 99.928 93.775 102.851 161.256l.362 8.379-3.697-3.524a1254 1254 0 0 0-6.541-6.186c-4.854-4.543-9.88-16.527-12.752-30.404l-1.232-5.952.221 12.839c.812 47.052-10.117 95.04-31.563 138.583-5.997 12.176-11.618 21.269-16.286 26.349-5.801 6.314-21.175 17.08-33.014 23.119-18.869 9.626-38.604 14.529-65.697 16.323-8.008.53-36.557.816-37.064.371-.13-.116-3.327-.371-7.107-.574-22.533-1.203-45.135-6.723-61.955-15.13-12.796-6.396-30.162-18.573-35.448-24.855-1.655-1.967-4.508-5.862-6.34-8.658-4.49-6.852-14.208-26.651-18.785-38.275-14.892-37.815-21.906-73.325-22.013-111.449-.036-13.176-.114-14.368-.736-11.325-2.391 11.717-6.54 18.934-13.651 23.746-4.303 2.912-6.63 5.269-9.197 9.315l-1.605 2.53.004-3.642c.003-2.002.384-7.198.845-11.548 4.03-37.977 17.958-71.768 42.023-101.954 5.844-7.331 21.621-23.024 29.18-29.027 25.495-20.244 55.627-33.958 86.265-39.259 6.278-1.086 7.941-1.31 17.153-2.32 2.619-.285 8.054-.389 14.207-.356m4.123 27.77c-9.34-.062-18.62.166-23.415.714-33.192 3.799-63.12 13.55-91.268 29.738-10.667 6.135-15.641 9.855-21.993 16.446-9.17 9.516-13.944 17.729-18.929 32.567-8.62 25.654-10.41 55.151-5.655 93.078 3.848 30.686 13.799 64.092 27.38 91.918 3.845 7.878 4.952 9.637 7.876 12.514 1.871 1.842 4.725 4.007 6.342 4.812 3.359 1.673 6.188 1.885 7.301.545 1.038-1.25 1.391-11.746.54-16.065-.362-1.843-1.801-7.099-3.198-11.682-11.346-37.209-20.301-84.272-22.811-119.887-.854-12.118-.718-35.082.261-44.34 1.836-17.352 5.497-30.644 10.402-37.77 2.033-2.955 7.26-7.198 12.766-10.366 18.449-10.612 51.48-18.139 89.291-20.347 11.413-.666 45.4-.454 54.818.343 43.088 3.643 73.653 12.016 90.215 24.714 5.252 4.027 7.852 7.916 10.537 15.766 4.622 13.508 6.54 28.521 6.496 50.819-.078 38.662-8.585 90.803-22.488 137.823-4.351 14.717-4.777 16.742-4.787 22.753-.012 6.875.868 9.161 3.525 9.161 2.756 0 7.431-2.544 10.904-5.933 2.512-2.451 3.793-4.531 7.518-12.209 14.557-30.006 24.271-63.065 28.029-95.393 1.761-15.143 1.927-18.643 1.764-36.997-.137-15.479-.363-19.888-1.33-26-3.416-21.604-8.98-37.76-17.287-50.191-3.668-5.489-11.136-13.38-16.46-17.395-9.103-6.863-29.339-17.564-44.47-23.515-19.162-7.537-36.994-12.016-58.1-14.591-5.033-.615-14.434-.968-23.774-1.03m-.244 29.965c-26.75 0-35.015.464-53.122 3.102-29.941 4.361-53.013 12.285-63.568 21.832-6.971 6.305-11.184 19.833-13.049 41.9-.83 9.821-.385 35.299.833 47.784 3.993 40.915 14.54 89.271 27.284 125.088 4.983 14.007 6.317 15.944 14.841 21.552 16.175 10.643 36.88 16.439 66.154 18.519 9.509.676 29.571.698 38.994.041 30.496-2.12 50.218-7.508 66.892-18.272 7.641-4.934 9.995-7.658 12.724-14.719 13.467-34.847 24.552-83.429 29.846-130.799.754-6.748.984-13.74 1-30.501.02-19.997-.083-22.394-1.272-29.771-2.4-14.906-6.157-25.388-10.704-29.863-11.743-11.557-40.629-20.484-79.708-24.634-10.23-1.086-14.938-1.244-37.145-1.259m-9.206 71.485h48.561c15.793 26.842 21.509 65.397 19.669 133.61H295.89c-.112-15.396-.576-45.498-2.47-55.25h-24.09l-.224 55.25h-20.103zm-92.527.001h47.861l.124 17.457h-23.023l-.067 43.477h17.636v17.272h-17.636l.461 55.407h-21.03zm56.174 0h24.818l-.441 133.613H213.47zm101.805 0h59.016l.13 16.833h-17.013l-4.462 116.78h-21.01l.493-116.76h-17.154zm-44 16.454-.239 45.385h24.162c-2.769-21.909-6.301-35.276-11.798-45.385zM173.63 397.643c-1.807 0-2.312.212-2.312.967 0 1.637 7.319 8.218 11.65 10.476 8.989 4.685 28.761 8.97 48.818 10.58 9.726.78 47.729.261 56.23-.769 20.061-2.431 35.869-6.673 43.582-11.695 4.19-2.729 8.127-6.805 8.127-8.416 0-.951-.369-1.143-2.198-1.143-2.753 0-11.009 1.686-20.637 4.213-9.182 2.41-14.198 3.347-25.585 4.783-33.263 4.194-69.699 2.31-97.666-5.048-8.413-2.214-17.201-3.948-20.009-3.948" />
    </Svg>
  );
};

FiatLogo.displayName = 'FiatLogo';

export default FiatLogo;