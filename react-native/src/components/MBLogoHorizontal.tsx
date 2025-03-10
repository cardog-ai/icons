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
 * MBLogoHorizontal icon component for React Native
 */
const MBLogoHorizontal = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#231F20" d="M126.18 209.899c16.567 8.712 27.884 26.083 27.884 46.106 0 20.022-11.317 37.447-27.884 46.107v-5.954c6.336-3.79 11.695-9.093 15.595-15.37l-15.595-6.33v-9.633l17.109 13.367c3.574-6.603 5.577-14.125 5.577-22.189 0-16.992-9.097-31.927-22.686-40.153zM102.087 204a51.84 51.84 0 0 1 24.093 5.899v5.953c-6.66-4.006-14.456-6.386-22.686-6.657l5.955 42.589 16.731 13.041v9.633l-24.203-9.794-24.04 9.849v-9.58l16.84-13.15 5.901-42.589c-8.34.271-16.08 2.652-22.741 6.656v-5.951c7.202-3.788 15.432-5.899 24.15-5.899m24.093 98.112c-7.256 3.787-15.431 5.95-24.093 5.95a52.4 52.4 0 0 1-24.149-5.897v-6.007c7.04 4.274 15.322 6.709 24.149 6.709 8.771 0 17.002-2.435 24.093-6.709zm-48.242.053C61.316 293.452 50 276.027 50 256.005c0-20.023 11.314-37.394 27.937-46.106l.001 5.953c-13.644 8.225-22.74 23.107-22.74 40.153A46.8 46.8 0 0 0 60.83 278.3l17.107-13.367v9.58l-15.538 6.383c3.898 6.226 9.204 11.473 15.54 15.262zM313.762 239.179c-2.384.633-4.533 1.014-7.201 1.301v.811c3.003 0 3.386.336 3.386 2.817v8.344c-1.766-2.861-3.151-3.718-5.724-3.718-5.106 0-8.679 4.815-8.679 11.683 0 6.869 3.623 11.687 8.823 11.687 2.718 0 4.577-1.237 5.911-3.908.193 1.81.194 2.002.671 3.815 1.955-.621 2.764-.814 5.58-1.146l.713-.097v-.811c-3.194-.095-3.48-.334-3.48-3.242zm-128.694.347c-1.813.192-2.768.241-4.532.241-1.337 0-2.05-.046-3.908-.191v1.189c3.289.192 3.955.669 3.955 2.864v.288l-1.001 23.417c-.095 2.577-.57 2.957-3.909 3.196v1.146c2.481-.192 3.432-.238 4.766-.238 1.337 0 2.289.046 4.723.238v-1.146c-3.34-.239-3.959-.669-3.959-2.767v-.429l.954-24.753 7.822 21.129.573 1.668.67 1.859.666 1.863.526 1.527h.717l.523-1.574.619-1.816.667-1.761.572-1.579 7.872-21.269.429 24.706v.238c0 2.242-.715 2.766-3.959 2.958v1.146c3.005-.287 4.149-.382 5.962-.382 1.811 0 2.957.095 5.962.382v-1.146c-3.434-.239-3.865-.619-3.912-3.196l-.522-23.417v-.335c0-2.147.714-2.625 3.959-2.817v-1.189c-1.813.145-2.576.191-3.768.191-1.432 0-2.432-.049-4.579-.241l-9.014 24.137zm185.54.19v1.197c3.434.189 3.912.568 3.912 3.145v23.132c0 2.577-.381 2.909-3.912 3.196v1.145h12.069c3.529 0 5.436-.428 7.439-1.667 2.387-1.527 3.959-4.438 3.959-7.444 0-2.574-1.097-4.909-2.958-6.34-1.002-.763-2.052-1.194-3.768-1.528 3.434-1.287 5.249-3.72 5.249-7.057 0-2.482-1.051-4.678-2.864-6.06-1.621-1.192-3.482-1.719-6.582-1.719zm7.918 1.481h4.053c4.008 0 5.772 1.954 5.772 6.391 0 2.193-.521 3.768-1.571 5.008-1.05 1.192-2.338 1.574-5.011 1.574h-3.243zm-109.7 6.82-1.29 2.432c-1.526-1.479-2.813-2.003-4.863-2.003-5.629 0-9.446 4.866-9.446 11.971 0 6.964 3.77 11.641 9.302 11.641 4.295 0 7.012-2.77 7.63-7.872h-1.956q-.858 6.296-5.296 6.297c-3.671 0-5.53-3.387-5.53-10.066 0-6.821 2.101-10.681 5.678-10.681 2.91 0 4.672 2.001 5.53 6.149h1.052v-7.868zm85.465.144-.811 1.953c-1.621-1.095-3.002-1.524-4.863-1.524-4.198 0-7.155 2.576-7.155 6.344 0 2.766 1.1 4.101 4.579 5.725l2.194.997 1.812.811c2.337 1.05 3.246 2.147 3.246 3.768 0 2.435-2.1 4.295-4.914 4.295-3.339 0-5.343-2.098-6.204-6.438l-1.044.047v7.965h.857l1.142-2.147c1.813 1.432 3.53 2.003 5.725 2.003 4.484 0 7.681-2.858 7.681-6.866 0-2.814-1.291-4.342-4.914-5.916l-2.004-.857c-4.342-1.908-5.054-2.527-5.054-4.435 0-2.242 1.955-3.959 4.482-3.959 3.005 0 4.578 1.813 5.007 5.627h1.099v-7.393zm70.508 0c-1.903.669-3.529 1.049-6.297 1.43v.811c.239 0 .481.047.623.047 2.387 0 2.669.289 2.716 2.244v15.452c0 2.05-.472 2.434-3.382 2.576v.955c2.481-.24 3.479-.285 5.148-.285 1.718 0 2.674.045 5.155.285v-.955c-2.481-.095-3.102-.573-3.102-2.479v-11.546c0-3.911 1.716-5.959 4.961-5.959 3.05 0 4.291 1.668 4.291 5.818v11.687c0 1.906-.619 2.384-3.196 2.479v.955c2.479-.24 3.433-.285 5.199-.285 1.716 0 2.673.045 5.202.285v-.955c-2.91-.142-3.39-.526-3.39-2.576v-11.449c0-1.811-.238-3.146-.717-4.291-.953-2.337-3.433-3.815-6.294-3.815-2.763 0-4.723 1.145-6.441 3.722-.098-1.814-.237-3.053-.476-4.151m-183.567.094c-1.958.571-3.579.859-6.298 1.099v.857h.62c2.479.047 2.719.288 2.767 2.338v15.596c0 2.05-.523 2.434-3.434 2.576v.955c2.624-.24 3.625-.289 5.343-.289 1.669 0 2.671.049 5.292.289v-.955c-2.908-.142-3.386-.526-3.386-2.576v-9.969c0-4.723 1.574-7.723 4.053-7.723.858 0 1.434.473 1.434 1.141v.429l-.098.479c-.047.193-.093.381-.093.476 0 .955.859 1.621 1.956 1.621 1.192 0 2.003-.907 2.003-2.291 0-2.287-1.766-3.862-4.15-3.862-2.479 0-4.533 1.576-5.581 4.294v-.526c-.097-1.431-.191-2.193-.428-3.959m-17.868.191c-5.724 0-9.298 4.626-9.298 11.971s3.574 11.641 9.727 11.641c4.674 0 7.726-2.912 8.347-7.826h-1.906c-.573 4.056-2.672 6.251-6.059 6.251-4.34 0-6.247-3.337-6.294-10.779h14.212c-.094-7.345-3.1-11.258-8.729-11.258m59.495 0c-5.724 0-9.302 4.626-9.302 11.971s3.578 11.641 9.731 11.641c4.674 0 7.729-2.912 8.347-7.826h-1.909c-.571 4.056-2.669 6.251-6.056 6.251-4.34 0-6.25-3.337-6.298-10.779h14.217c-.098-7.345-3.101-11.258-8.73-11.258m45.494 0c-5.724 0-9.302 4.626-9.302 11.971s3.578 11.641 9.73 11.641c4.674 0 7.727-2.912 8.348-7.826h-1.91c-.573 4.056-2.669 6.251-6.056 6.251-4.339 0-6.25-3.337-6.297-10.779h14.216c-.097-7.345-3.103-11.258-8.729-11.258m78.898 0c-5.724 0-9.302 4.626-9.302 11.971s3.578 11.641 9.731 11.641c4.674 0 7.726-2.912 8.347-7.826h-1.91c-.571 4.056-2.667 6.251-6.052 6.251-4.342 0-6.25-3.337-6.297-10.779h14.212c-.097-7.345-3.1-11.258-8.729-11.258m38.342.573-1.102 6.2h.958c1.716-4.293 2.478-4.961 5.581-4.961h5.861l-12.923 21.273h16.407l1.243-6.866h-1.002c-1.434 4.34-2.766 5.627-6.013 5.627h-5.576L462 249.019zm-222.276.666c3.1 0 4.674 2.671 4.961 8.301h-10.303c.476-5.485 2.29-8.301 5.342-8.301m59.492 0c3.1 0 4.674 2.671 4.961 8.301h-10.304c.476-5.485 2.29-8.301 5.343-8.301m45.497 0c3.1 0 4.674 2.671 4.961 8.301h-10.304c.477-5.485 2.29-8.301 5.343-8.301m78.898 0c3.1 0 4.674 2.671 4.961 8.301h-10.304c.477-5.485 2.29-8.301 5.343-8.301m-102.553.382c3.529 0 5.343 3.628 5.343 10.639 0 6.629-1.764 10.062-5.199 10.062s-5.245-3.576-5.245-10.398c0-6.916 1.667-10.303 5.101-10.303m73.875 5.584h4.533c2.528 0 3.957.427 5.054 1.524s1.715 3.147 1.715 5.436c0 4.769-2.384 7.443-6.629 7.443h-1.715c-2.529 0-2.958-.384-2.958-2.482zm-19.13 1.89v2.467h10.658v-2.467z" />
    </Svg>
  );
};

MBLogoHorizontal.displayName = 'MBLogoHorizontal';

export default MBLogoHorizontal;