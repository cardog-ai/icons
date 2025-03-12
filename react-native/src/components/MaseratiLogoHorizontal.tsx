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
 * MaseratiLogoHorizontal icon component for React Native
 */
const MaseratiLogoHorizontal = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#000" d="M465.071 249.256h-7.383c.171-.374.341-.714.511-1.054 1.225-2.415 2.483-3.197 5.205-3.197h3.776c-.68 1.395-1.395 2.823-2.109 4.251" /><Path fill="#000" d="M457.111 265.681c2.245-4.557 4.524-9.114 6.77-13.67h-7.383c-1.939 3.944-3.912 7.855-5.851 11.8-.681 1.326-1.565 1.87-3.13 1.87h-17.963c2.45-4.863 4.865-9.726 7.28-14.623 1.021-2.04 1.395-2.176 3.811-2.176h2.143c2.075 0 3.062-.578 3.912-2.244.341-.681.647-1.361.987-2.007h-7.655c1.089-2.21 2.212-4.421 3.3-6.631h-4.831c-2.109 0-3.095.544-3.912 2.21-.714 1.463-1.463 2.959-2.177 4.421h-4.049c-.68 1.429-1.394 2.823-2.109 4.251h4.049a3050 3050 0 0 0-7.451 14.929c-.646 1.326-1.565 1.87-3.096 1.87h-15.955l8.471-15.507h-5.852c-1.361 0-1.939.442-2.823 1.497 0-1.123-.409-1.497-1.463-1.497h-4.049c-6.668 0-10.41 2.075-13.302 7.346-1.156 2.108-2.313 4.216-3.436 6.325-.748 1.326-1.633 1.836-3.13 1.836-3.402 0-6.838 0-10.274.034-3.708 0-5.171-.544-5.579-2.516-.442-2.075.476-3.809 5.477-7.108.953-.612 1.871-1.224 2.824-1.87 1.293-.85 1.837-1.326 1.667-2.244-.17-.851-.68-1.803-4.729-1.803-6.464.034-12.894.034-19.357.034-2.042 0-2.994.51-3.913 2.211-2.075 3.808-4.184 7.617-6.26 11.426-.714 1.326-1.598 1.87-3.095 1.87h-31.027c.442-1.292.885-2.618 1.327-3.911h15.479c3.062 0 4.321-.782 5.443-3.366.477-1.156.987-2.347 1.463-3.503.374-.85.681-2.108.068-3.06-.748-1.089-2.619-1.667-5.409-1.667h-14.901c-4.763 0-6.906 1.327-8.573 5.237-1.055 2.415-2.075 4.863-3.096 7.278-1.054 2.482-2.721 2.992-5.103 2.992h-10.648c.238-.34.476-.68.68-1.02 2.109-3.163 1.701-6.665-1.088-9.658-2.79-2.924-6.43-3.945-9.696-4.829-2.756 0-5.512 0-8.267-.034-1.905 3.469-3.776 6.938-5.682 10.406-2.381 4.353-4.967 5.101-9.525 5.101h-10.002l8.471-15.507h-5.852c-1.395 0-1.973.442-2.823 1.497 0-1.123-.409-1.497-1.497-1.497h-4.015c-6.668 0-10.41 2.075-13.302 7.346-1.156 2.108-2.313 4.216-3.436 6.325-.748 1.326-1.599 1.836-3.13 1.836h-15.241c4.321-7.889 8.608-15.779 12.928-23.668.749-1.361-.238-3.061-1.803-3.061h-60.624c-4.117 0-6.158 1.054-8.097 4.353h26.196c-4.865 8.91-9.73 17.819-14.595 26.695h7.552c4.865-8.876 9.73-17.785 14.595-26.661h10.478c-4.865 8.876-9.729 17.785-14.594 26.661h7.552c4.865-8.876 9.73-17.785 14.595-26.661h10.478l-12.043 22.036c-.544.986-1.089 2.381-.51 3.367.51.816 1.735 1.258 3.572 1.258h19.868c.986 0 1.395-.306 2.007-1.02 0 .782.646 1.02 1.429 1.02h34.19c6.77 0 10.376-1.972 13.302-7.311a1799 1799 0 0 0 4.491-8.23c.068.034.408.102.476.102 5.375 1.02 8.097 3.027 8.335 6.087a4.4 4.4 0 0 1-1.123 3.333c-1.02 1.088-2.551 1.7-4.252 1.734-3.436 0-4.831 1.326-6.158 4.285h28.951c.953 0 1.395-.306 1.974-1.02.034.782.68 1.02 1.462 1.02h42.798c2.892 0 4.15-.748 5.579-3.401 1.667-3.026 3.334-6.087 5.001-9.147 1.157-2.075 2.586-2.891 5.069-2.891h7.553c-1.293.884-2.688 2.006-3.776 3.095-1.429 1.496-2.824 3.502-3.062 6.121-.204 1.836.272 3.4 1.293 4.557.986 1.088 2.483 1.666 4.252 1.666h17.623c.952 0 1.394-.306 1.973-1.02 0 .782.68 1.02 1.463 1.02h37.014c.986 0 1.395-.306 2.007-1.02 0 .782.646 1.02 1.429 1.02h54.773c3.3 0 4.967-1.054 5.579-3.571.068-.272.136-.51.204-.782-8.641 0-17.282 0-25.889.034m-150.03-9.182c.748-2.142 2.483-2.346 4.048-2.346h8.437c-.204.578-.374 1.156-.578 1.734-.68 2.007-2.245 2.177-3.64 2.177h-8.811c.204-.51.374-1.054.544-1.565m-76.716 6.258c-1.191 2.142-2.551 2.924-5.069 2.924h-4.184c1.497-2.754 3.027-5.475 4.524-8.229 1.157-2.109 2.552-2.925 5.035-2.925h4.185a1799 1799 0 0 1-4.491 8.23m167.346 0c-1.157 2.142-2.517 2.924-5.035 2.924h-4.184c1.496-2.754 3.027-5.475 4.524-8.229 1.123-2.109 2.552-2.925 5.035-2.925h4.185a637 637 0 0 1-4.525 8.23M55.273 281.777v-3.999h20.571v3.999H55.273M65.576 290.098h6.484v-6.233H59.091v6.233zM59.09 275.687c-.035-3.422-.9-6.809-3.674-9.078h20.319000000000003c-2.774 2.269-3.675 5.656-3.675 9.078H59.091M41.906 259.98v-2.954H89.21v2.954H41.906M44.032 270.68c2.774-.613 5.728-2.162 7.71-4.071h-8.215c.18 1.333.325 2.702.505 4.071M87.12 270.68c-2.774-.613-5.764-2.162-7.746-4.071h8.25c-.18 1.333-.36 2.702-.504 4.071M41.114 250.505C38.52 235.158 33.512 219.162 28 208.642c5.944 3.206 12.285 8.322 19.094 15.275a81 81 0 0 0-8.466-1.765c3.927 9.295 7.17 18.77 10.123 28.353zM90.038 250.505c2.558-15.347 7.566-31.343 13.078-41.863-5.909 3.206-12.25 8.322-19.058 15.275a79 79 0 0 1 8.466-1.765c-3.927 9.295-7.17 18.77-10.124 28.353zM39.42 255.477v-2.99h52.312v2.99H39.42M56.749 207.021c4.035-6.953 7.494-14.843 8.826-23.021 1.297 8.178 4.756 16.068 8.827 23.021a253 253 0 0 0-4.683-2.054c-1.442-.684-2.054-.288-2.018 1.225.504 14.771 2.666 31.56 10.376 44.313h-9.079a72 72 0 0 1-3.423-10.051c-.864 3.314-2.017 6.665-3.422 10.051h-9.079c7.71-12.753 9.872-29.542 10.376-44.313.036-1.513-.577-1.909-2.054-1.225-1.693.721-3.206 1.406-4.647 2.054M39.42 264.52v-2.99h52.312v2.99H39.42" />
    </Svg>
  );
};

MaseratiLogoHorizontal.displayName = 'MaseratiLogoHorizontal';

export default MaseratiLogoHorizontal;