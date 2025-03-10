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
 * DodgeIcon icon component for React Native
 */
const DodgeIcon = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#000" d="M362.811 288h27.28l53.266-64h-27.279zM400.528 288h27.281l53.266-64h-27.279zM32.157 263.158A2.154 2.154 0 0 1 30 261.01v-19.383c0-1.185.966-2.147 2.157-2.147l41.964.102c11.827 0 21.413 5.265 21.413 11.76 0 6.492-9.586 11.756-21.413 11.756zm37.122-3.56c7.232.018 13.104-3.811 13.113-8.546.011-4.738-5.842-8.591-13.074-8.607l-25.658-.137c-.73-.001-1.322.699-1.325 1.566l-.03 14.136c-.002.866.586 1.57 1.315 1.573z" /><Path fill="#000" d="M30.572 252.413c-.186 2.685-.363 5.23-.363 7.835 0 2.609.58 3.237 2.373 3.277 1.87.038 15.115.099 24.734-.055 2.668-.042 5.253-.023 7.743-.008 8.608.061 16.048.121 21.711-2.293 6.288-2.679 8.674-7.217 8.853-8.435.174-1.182.266-3.371-.382-3.371-.646 0-10.495 1.69-11.29 1.757-.502.04-.684 1.257-.684 1.257-1.247 6.445-8.207 8.589-9.851 8.638-2.043.065-25.466 0-27.212 0-1.743 0-3.687-.56-3.687-2.35 0-1.792-.247-4.909-.316-6.252-.024-.514-.275-1.837-.138-3.602-.274 1.554-1.1 2.613-1.924 2.613h-7.296c-1.858 0-1.858-.707-2.2-2.824 0 .848 0 2.824-.07 3.813M189.542 263.301a2.17 2.17 0 0 1-2.168-2.169v-19.556c0-1.197.971-2.167 2.168-2.167l42.184.103c11.886 0 21.522 5.311 21.522 11.865 0 6.552-9.636 11.863-21.522 11.863zm37.221-3.759c7.171.018 12.996-3.761 13.004-8.433.01-4.674-5.795-8.475-12.968-8.49l-25.454-.131c-.723-.002-1.31.69-1.311 1.544l-.029 13.948c-.002.855.581 1.548 1.305 1.55z" /><Path fill="#000" d="M187.808 252.413c-.188 2.685-.364 5.23-.364 7.835 0 2.609.58 3.237 2.372 3.277 1.872.038 15.116.099 24.743-.055 2.668-.042 5.255-.023 7.743-.008 8.608.061 16.047.121 21.713-2.293 6.286-2.679 8.672-7.217 8.85-8.435.173-1.182.267-3.371-.379-3.371-.648 0-10.495 1.69-11.291 1.757-.504.04-.684 1.257-.684 1.257-1.247 6.445-8.208 8.589-9.856 8.638-2.041.065-25.47 0-27.214 0-1.745 0-3.689-.56-3.689-2.35 0-1.792-.247-4.909-.315-6.252-.026-.514-.276-1.837-.139-3.602-.275 1.554-1.1 2.613-1.924 2.613h-7.295c-1.86 0-1.86-.707-2.203-2.824 0 .848 0 2.824-.068 3.813" /><Path fill="#000" d="M199.839 260.358c0 .913.169 1.487 1.522 1.487 2.487 0 20.404-.024 24.266-.024s8.65.104 13.213-4.497c1.716-1.733.332-1.812-1.047-.794-1.38 1.021-3.644 3.536-12.085 3.536-8.438 0-17.54-.024-22.725-.024-.969 0-1.274-.616-1.53-.876-.254-.263-1.614-.501-1.614 1.192M189.625 239.872c-1.103.058-2.426-.112-2.37 1.586.054 1.698.531 8.309.617 10.07l11.391-.024c.221-.851.404-5.461.404-6.139 0-.68-.221-3.058 2.759-3 2.978.057 18.487.057 22.074.057 3.586 0 16.162 1.09 16.162 9.241l12.359-.005c0-1.895-.281-3.179-1.122-4.235-1.331-1.68-5.235-5.96-17.415-7.209-2.604-.269-24.43-.361-37.117-.361-3.442 0-6.211.007-7.742.019M132.917 263.827c-14.735-.472-26.695-5.537-26.695-12.364 0-6.829 11.959-11.935 26.695-12.366 2.715-.078 5.624-.158 8.376-.158s5.662.08 8.374.158c14.736.431 26.695 5.537 26.695 12.366 0 6.827-11.96 11.892-26.695 12.364-2.478.081-4.916.159-8.374.159-3.461 0-5.898-.078-8.376-.159m8.879-3.212c2.254 0 3.842-.06 5.456-.121 9.596-.35 17.386-4.148 17.386-9.266 0-5.117-7.789-8.942-17.386-9.266a161 161 0 0 0-5.456-.118c-1.79 0-3.686.057-5.454.118-9.597.324-17.387 4.149-17.387 9.266 0 5.118 7.791 8.916 17.387 9.266 1.614.061 3.202.121 5.454.121" /><Path fill="#000" d="M121.682 240.929c-8.57 1.759-12.225 4.814-13.742 6.371-1.519 1.558-1.918 3.515-1.574 4.57l11.813.015c.394-3.066 1.911-5.221 6.221-7.481 4.31-2.264 11.312-2.362 16.552-2.362 5.239 0 9.601-.003 15.732 1.6 7.126 1.862 8.214 6.362 8.41 8.172l11.293-.023s.313-1.548-.321-2.968c-.851-1.915-2.452-4.559-10.288-6.97-7.835-2.413-15.741-2.548-24.702-2.548-1.184 0-2.243-.003-3.211-.003-6.36 0-8.745.101-16.183 1.627" /><Path fill="#000" d="M106.3 251.392c0 11.046 24.399 12.885 32.232 12.885 7.836 0 13.876.061 21.529-1.287 13.026-2.298 15.907-8.407 16.325-11.353h-11.241c-.241 3.376-2.571 7.55-9.688 9.329s-27.569.613-31.516-1.351c-3.945-1.964-5.442-6.566-5.619-8.223zM332.158 241.083c0-.644-.512-1.166-1.142-1.166l-34.124-.007c-2.515-.039-4.904.074-7.629.145-13.837.359-24.271 6.634-24.271 11.522 0 6.2 6.137 10.594 24.271 10.934 2.112.038 5.381.143 7.629.143l32.967.001c1.19 0 2.154-.905 2.154-2.025v-8.016c0-1.116-.964-2.022-2.154-2.022l-31.087-.003c-.629 0-1.141.523-1.141 1.167v.655c0 .644.512 1.165 1.141 1.165l19.873.019c.631 0 1.143.522 1.143 1.167v4.569c0 .644-.512 1.166-1.143 1.166l-21.661.089c-.832 0-2.482-.082-2.823-.086-9.695-.099-15.589-5.49-15.589-9.218 0-4.721 7.449-8.041 14.382-8.277 1.275-.043 2.643-.087 3.938-.087l34.124.007c.63 0 1.142-.521 1.142-1.166z" /><Path fill="#000" d="M289.336 240.054c-13.837.361-24.314 5.864-24.314 12.33l13.61-.045s.014 0 .014-.473c0-5.169 7.282-8.55 14.21-8.784 1.275-.045 2.816-.058 4.109-.058l35.058.009c.63 0 .995-.73 1.376-1.958l.137-.428c0-.645-.499-.733-1.131-.733l-35.44-.004a77 77 0 0 0-1.071-.008c-2.132 0-4.222.092-6.558.152" /><Path fill="#000" d="M297.848 252.456c-.016.574-.016.637-.031.742-.062.436.021.863 1.126.863h19.24c.663 0 1.765.336 1.765 1.104 0 0 .044 4.192 0 4.918-.044.724.088 1.451-1.855 1.451-1.94 0-29.9 2.057-34.291-2.446-2.026-2.081-4.897-4.71-5.161-7.157h-13.595c0 11.051 18.626 11.187 22.333 11.187s40.468.271 41.927.271c1.456 0 2.779-.452 2.779-2.148 0 0 .003-7.814 0-8.315-.002-.451-.002-.371-.53-1.087l-31.5-.086c-.166 0-2.2.431-2.207.703M347.945 242.319l.63 9.737 12.471 1.069 43.507-.004c.458 0 .717-.346.988-.878l.225-.479.313-.929c.157-.575-.372-.879-.829-.879l-44.125.016c-.865 0-1.57-.746-1.57-1.664v-3.685c0-.919.705-1.661 1.57-1.661l45.493.008c.458 0 .686-.412.951-.89l.574-1.363c.205-.585-.37-.88-.826-.88l-57.278-.029c-1.155 0-2.094 1.287-2.094 2.511" /><Path fill="#000" d="M348.575 252.056s-.577 5.998-.674 8.383c-.096 2.384.872 2.482 3.099 2.482h55.557c1.16 0 1.116-.077 1.541-.798.398-.67.783-1.724.609-1.905 0 0-44.542.617-46.189.617-1.643 0-3.148-.296-3.148-1.639v-4.532c0-1.004.148-1.477 1.987-1.477h42.402c1.258 0 1.438-.1 1.896-1.131z" />
    </Svg>
  );
};

DodgeIcon.displayName = 'DodgeIcon';

export default DodgeIcon;