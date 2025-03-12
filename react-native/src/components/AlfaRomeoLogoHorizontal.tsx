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
 * AlfaRomeoLogoHorizontal icon component for React Native
 */
const AlfaRomeoLogoHorizontal = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#221F20" d="M461.804 248.383h-2.354s-.197 0-.197.195c.197 2.342-2.158 4.293-5.493 5.268-.981-9.756-20.796-1.756-22.954 7.805-9.024 4.488-13.144.976-13.537-.39 0 0 12.752-3.707 13.341-9.756.196-5.073-17.068-1.171-20.207 9.951-3.532 1.951-7.848 1.951-7.848 1.171-.196-1.756 5.494-6.439 6.671-9.171 1.177-3.122-2.158-2.927-2.158-2.927-2.747.391-10.398 2.732-10.398 2.732.981-5.659-7.259-1.171-12.949 0 .393-3.902-3.139-3.122-15.498.39-.981-9.756-20.992-1.756-23.151 7.805-4.904 2.341-7.062 1.756-7.062.195.196-2.146 4.316-6.439 2.746-9.366 17.853-4.683 14.911-18.146 6.278-21.853a15.8 15.8 0 0 1 2.747-1.756s.196-.195-.196-.195h-3.335c-.197 0-.197 0-.393.195a6 6 0 0 0-1.373.976c-29.232-7.61-50.616 21.463-29.821 24.194l4.317-3.707c.98-.78.588-.976-.197-.976-1.962 0-3.335-.39-4.12-.975-9.22-6.634 8.24-20.293 25.701-15.415-10.594 8-23.15 33.366-34.921 25.756-.393-.195-.589 0-.981.195-2.158 2.342-5.886 5.268-5.886 5.268-.392.196-.392.781 0 .976 14.518 6.439 22.758-2.927 30.801-14.048.785 1.56 3.139 3.512 7.063 2.536 0 2.146-7.651 9.171-8.043 10.536-1.766 5.464 10.79 2.342 16.479-.195 3.728 8 19.619-.195 22.366-7.414 7.651-2.537 6.278.195 5.689 1.171-4.708 5.853-7.455 8.585-7.455 9.17 0 .195.196.39.392.39h5.101c.785 0 1.177-.39 1.766-.78.392-.39 7.063-8.39 8.436-9.951 8.24-3.317 4.708 1.171 4.708 1.171-4.708 5.658-7.455 8.585-7.455 9.17 0 .195.196.39.393.39h5.101c.784 0 1.177-.39 1.765-.78.393-.39 7.455-8.78 8.436-10.146 7.848-2.732 4.513 1.17 4.12 1.561-.392.585-4.708 5.463-4.905 6.243-.784 3.903 3.532 4.683 16.873-.585 3.923 7.805 18.637.585 20.207-.195 0 .195 0 .39.196.585 3.728 8 19.619-.195 22.365-7.414 7.848-2.146 9.025-7.61 9.025-7.805s0-.195-.196-.195m-118.89-14.244c8.633 5.659 2.355 12.878-3.727 15.61-1.177-1.366-3.728-3.122-7.455-1.756 3.531-4.878 7.062-9.951 11.182-13.854m-11.378 15.805c1.569-1.756 5.1-.195 5.1.976-3.139 1.365-5.297-.781-5.1-.976m33.744 4.878c-3.728 1.951-2.943 4.488-3.335 4.878-4.709 4.097-8.044 3.902-9.025 2.732-2.943-3.317 7.847-13.659 12.164-9.952.392.391.392 1.366.196 2.342m60.622-3.317c.588-.195.784.195.588.78-1.373 5.073-9.809 7.22-9.809 7.22s.981-6.829 9.221-8m24.915 3.512c-3.727 1.561-2.746 4.293-3.335 4.683-4.708 4.097-8.044 3.902-9.024 2.732-2.943-3.317 7.847-13.659 12.163-9.952.589.391.589 1.561.196 2.537m-152.633 3.122h-2.747s-.196 0-.196.195c-1.177 2.146-5.101 4.683-9.025 5.658-7.259 2.147-2.943-3.707-2.943-3.707 6.475-7.805 6.867-8.39 7.456-9.17.196-.195-.197-.391-.589-.391h-4.708c-1.178 0-1.962.586-2.551 1.171l-.196-.195c-1.962-3.122-9.613-2.732-15.303.976-3.923 2.536-6.474 5.853-7.259 8.585-2.942 0-5.493-.39-7.651-.976l5.297-6.439c11.183-3.122 29.428-20.682 20.404-20.487-7.652.975-17.853 8.975-30.998 24.195-.392-.391-2.747-1.952-4.12-.781-.785.585-.588 1.951.393 2.927-13.734 5.073-12.949 2.341-11.772.585.981-1.366 4.513-6.439 4.513-6.439 13.733-4.292 31.782-23.024 19.422-20.292-5.297 1.171-16.087 7.805-31.39 25.951-7.063 3.317-12.36 5.268-7.455-1.171 5.101-6.439 20.992-24.195 20.992-24.78 0-.195-.196-.39-.588-.39h-6.475c-.981 0-1.765.78-2.354 1.366-3.727-2.342-8.632-1.561-8.632-1.561-18.246 1.365-34.529 18.536-33.156 28.292.393 2.536 2.747 6.049 8.044 6.049 1.177 0 5.689-.586 10.594-2.927 0 0-2.158 6.244 16.087-.195 0 .195-2.746 6.829 20.6-1.171-.196.39-8.24 9.17-12.36 13.268-9.417 9.561-16.087 3.317-16.48 2.927h-.196l-1.765 1.561s-.197.195 0 .39c15.106 11.122 31.193-9.756 39.237-18.146 2.55.585 5.886.78 9.809.195 0 .78.197 1.366.589 1.951 1.766 2.732 8.044 2.732 13.341 0 0 0 .784 3.903 11.575 1.366 5.297-1.171 11.182-5.073 12.752-8 0-.195-.196-.39-.196-.39m-24.131-21.463c2.158-1.366 2.158 1.561-.981 4.878-7.455 7.805-13.341 8.975-13.341 8.975s7.848-9.951 14.322-13.853m-20.796 0c2.158-1.366 2.158 1.561-.981 4.878-7.455 7.805-13.341 8.975-13.341 8.975s7.848-9.951 14.322-13.853m-53.559 25.365c-11.183-1.366-1.374-14.829 9.417-21.853 7.651-5.073 15.695-6.439 16.283-2.341-.196 1.17-.981 2.731-2.943 4.878-1.961 2.146-8.043 9.17-12.948 14.829-3.531 3.317-7.651 4.682-9.809 4.487m80.829-7.219c-1.57 1.951-3.728 4.488-5.297 6.634-3.139 2.146-6.278 2.732-7.455 1.366-1.374-1.561.196-5.268 3.727-8 3.335-2.927 7.259-3.902 8.633-2.342.392.586.588 1.366.392 2.342" /><Path fill="#1E1D51" d="M148.326 256.999c0 26.138-21.189 47.326-47.326 47.326-26.138 0-47.326-21.188-47.326-47.326 0-26.137 21.188-47.326 47.326-47.326 26.137 0 47.326 21.189 47.326 47.326" /><Path fill="#fff" d="M100.816 223.782c-4.042.076-7.92.796-11.525 2.054v25.981h11.525zm-20.963 7.743c-6.01 5.101-10.248 12.136-11.689 20.106h11.69zm9.03 29.509v27.161a39 39 0 0 0 11.828 2.051v-29.212zm-20.757.074c1.198 8.488 5.526 15.996 11.801 21.362v-21.362z" /><Path fill="#2F7FBE" d="M101.654 224.117c17.858.349 32.229 14.942 32.229 32.883s-14.371 32.526-32.229 32.875z" /><Path fill="#D50D16" d="M88.433 226.249v26.304h12.203v7.765H88.433v27.501a33.6 33.6 0 0 1-7.82-4.544v-22.957H67.9a33.5 33.5 0 0 1 .141-7.765h12.572v-21.759a33.6 33.6 0 0 1 7.82-4.545" /><Path fill="#9D0D16" d="M121.291 235.191h-11.312v1.578h11.312z" /><Path fill="#F8E45E" d="M101.138 207.275c-17.216-.027-33.98 8.893-43.2 24.863-13.723 23.77-5.569 54.199 18.2 67.922 23.77 13.723 54.2 5.57 67.923-18.2 13.723-23.769 5.569-54.199-18.2-67.922a49.5 49.5 0 0 0-24.723-6.663m-.138 2.398c26.124 0 47.326 21.202 47.326 47.326S127.124 304.326 101 304.326s-47.326-21.203-47.326-47.327S74.876 209.673 101 209.673m-2.85 1.657v9.81h2.989v-3.305l2.414 3.305 3.933.575-3.408-4.405c.748-.155 2.151-.949 2.151-2.622-.001-2.505-2.256-3.305-3.672-3.305zm3.777 2.151c.813 0 1.39.551 1.416 1.154s-.391 1.258-1.311 1.258h-.945l-.051-2.36zm14.091.557-.159.002c-2.579.052-4.76 1.616-5.281 4.17-.52 2.543 1.79 5.553 4.613 6.194 3.064.695 5.923-.76 6.567-4.062.552-2.827-1.526-5.604-4.612-6.192a6 6 0 0 0-1.128-.112m-36.173 2.59-2.675 1.416 1.258 11.067 2.833-2.098-.367-1.677 3.094-1.837 1.416 1.049 3.253-1.31zm36.242.122q.274 0 .553.052c1.489.284 2.434 1.571 2.174 2.937s-1.629 2.295-3.118 2.011-2.223-1.726-1.963-3.091c.228-1.195 1.082-1.913 2.354-1.909m-36.137 3.392 2.254 1.731-1.626.944zm49.882 1.417-8.393 5.822 2.465 1.94 4.04-3.147-2.047 5.088 1.049.996 5.142-2.098-3.095 4.196 1.888 2.675 5.927-8.497-1.889-2.254-4.826 1.94 1.942-4.879zM101 222.799c-18.872 0-34.202 15.33-34.202 34.202 0 18.871 15.33 34.2 34.202 34.2 18.871 0 34.202-15.329 34.202-34.2S119.871 222.799 101 222.799m-31.331 1.12-4.091 4.72 7.132 6.347 1.995-2.307-2.728-2.414 1.993-2.15-1.731-1.574-1.993 2.203-.996-.943 2.15-2.362zm30.67.199v27.143h-10.64v-25.156a32.8 32.8 0 0 1 10.64-1.987m1.315 0c12.524.244 23.333 7.496 28.673 17.994q-.104-.138-.211-.271c-1.308-1.625-2.956-2.703-4.36-3.606a.657.657 0 0 0-.89.169c-.326.453-.943.829-1.748.829h-6.059c-.304 0-.592.083-.842.263-.249.18-.47.503-.47.885v.69c-.003.004-.008.015-.034.035a.54.54 0 0 1-.306.094h-5.221l.005-.436v-.008c0-.795-.405-1.517-1.031-1.973l-.01-.009-.008-.005-2.282-1.547-.003-.003-.003-.002a2.04 2.04 0 0 0-1.153-.345q-.192.005-.373.049a1.9 1.9 0 0 0-1.127.811c-.506.777-.39 2.006.584 2.702l1.071.818.008.007.008.005c.225.161.35.356.35.409l-.026 1.735v.01c0 .021-.003.026-.005.035a.8.8 0 0 1-.207-.046c-.253-.083-.446-.19-.744-.303a3.3 3.3 0 0 0-1.174-.202 2.66 2.66 0 0 0-2.412 1.493zm-13.27 2.502v25.956h11.955v7.662H88.384v27.137a32.9 32.9 0 0 1-7.661-4.484v-22.653H68.268a33.2 33.2 0 0 1 .138-7.662h12.317v-21.47a32.9 32.9 0 0 1 7.66-4.486m22.294 5.056a.974.974 0 1 0 0 1.947.974.974 0 0 0 0-1.947m2.479 0a.973.973 0 1 0 .001 1.947.973.973 0 0 0-.001-1.947m2.478 0a.973.973 0 1 0 .001 1.947.973.973 0 0 0-.001-1.947m2.478 0a.973.973 0 1 0 .001 1.947.973.973 0 0 0-.001-1.947m2.48 0a.974.974 0 1 0 0 1.947.974.974 0 0 0 0-1.947m-41.185.518v19.067H68.61c1.331-7.559 5.246-14.23 10.798-19.067m30.571 2.026v1.578h11.313v-1.578zm0 2.124v1.579h11.313v-1.579zm31.497.007-8.917 3.619 2.518 5.875 2.359-.997-1.31-2.991 1.102-.524 1.259 2.885 2.149-.892-1.205-2.779 1.049-.472 1.258 2.989 2.203-.891zm-81.46 1.101-1.257 2.779 8.706 4.04 2.78-5.666-2.15-1.102-1.679 2.939zm45.723.732c.103-.006.224.021.389.13l2.276 1.544c.284.207.472.589.472.898l-.026 2.132v.009c0 .839.424 1.555.973 2.055.323.294.694.527 1.09.669a3.3 3.3 0 0 0-1.09.669c-.549.5-.973 1.216-.973 2.056v.008l.026 2.141c0 .308-.208.696-.492.902l-2.262 1.535c-.22.145-.355.143-.482.111a.58.58 0 0 1-.337-.251c-.169-.26-.243-.563.247-.913l.008-.006.008-.007 1.088-.83c.369-.264.883-.706.883-1.467v-.01l-.026-1.744c0-.373-.134-.793-.51-1.077-.376-.285-.913-.32-1.427-.152-.367.121-.607.25-.799.322s-.355.117-.709.117c-.495 0-.8-.186-1.029-.454a1.5 1.5 0 0 1-.347-.884v-.132c0-.245.118-.617.347-.884.229-.268.534-.454 1.029-.454.354 0 .517.044.709.116s.432.202.799.323c.514.168 1.051.133 1.427-.152.376-.284.51-.714.51-1.087l.026-1.734v-.01c0-.761-.531-1.215-.899-1.478l-1.072-.819-.008-.007-.008-.006c-.49-.35-.416-.653-.247-.913.084-.13.21-.22.337-.251a.5.5 0 0 1 .099-.015m19.767 1.462c1.259.823 2.564 1.752 3.586 3.02 1.146 1.424 1.958 3.256 1.958 5.957 0 5.075-4.739 9.15-9.297 9.15h-11.014a1.13 1.13 0 0 0-.827.366 1.1 1.1 0 0 0-.27.744c.002.256.084.518.276.735.192.218.507.364.821.364h10.753c3.866 0 5.928 2.488 5.928 5.426 0 2.863-2.141 5.554-5.902 5.554h-11.08c-.269 0-.554.122-.73.318a.97.97 0 0 0-.249.661.98.98 0 0 0 .25.654c.175.193.459.316.729.316h8.247c1.776 0 3.286 1.73 3.286 3.382 0 .838-.238 1.611-.765 2.174-.526.562-1.367.97-2.782.97h-4.946a1 1 0 0 0-.595.181.84.84 0 0 0-.339.674.84.84 0 0 0 .349.638 1 1 0 0 0 .585.177h3.281c.462 0 .804.203 1.075.531.27.329.428.79.428 1.158 0 .458-.17.882-.469 1.148-.194.172-.463.291-.831.32a1.13 1.13 0 0 0-.105-.661c-.15-.305-.568-.547-.924-.547h-1.968a3.13 3.13 0 0 1-2.001-.747c-.559-.488-.942-1.179-.942-2.175 0-.916.382-1.569.926-2.037.543-.469 1.264-.714 1.795-.714h4.837c.219 0 .432-.038.635-.161.204-.124.413-.384.413-.707-.001-.324-.211-.584-.415-.707a1.17 1.17 0 0 0-.633-.16h-7.578c-2.916 0-4.54-2.063-4.54-4.288 0-1.985 1.7-4.338 4.277-4.338h11.278c.307 0 .623-.143.811-.361.187-.219.261-.479.259-.727a1.1 1.1 0 0 0-.264-.719 1.1 1.1 0 0 0-.806-.36H110.53c-3.211 0-5.751-2.381-5.751-5.977 0-3.003 2.457-6.083 6.092-6.083h10.411c.568 0 1.077-.256 1.389-.628.313-.373.452-.832.454-1.285a1.98 1.98 0 0 0-.445-1.29 1.83 1.83 0 0 0-1.398-.63h-11.109l-.008-.623c0-.385.209-.772.545-1.077.335-.306.786-.48 1.062-.48h6.225c.241 0 .479-.056.713-.217.235-.162.453-.51.453-.944 0-.448-.134-.674-.453-.944a1.2 1.2 0 0 0-.713-.217h-6.225c-.276 0-.727-.175-1.062-.48-.336-.306-.545-.699-.545-1.084l.005-.381h7.598c.421 0 .805-.135 1.107-.367s.549-.587.549-1.036v-.564h3.695c.958 0 1.79-.357 2.387-.902m6.703 6.968a32.9 32.9 0 0 1 1.674 10.387c0 11.487-5.891 21.599-14.818 27.478a2.9 2.9 0 0 0 .511-1.683c0-.704-.252-1.416-.726-1.993q-.03-.034-.061-.066c1.496-.072 2.635-.579 3.377-1.371.802-.857 1.12-1.983 1.12-3.074 0-1.61-.902-3.16-2.268-4.015h.5c4.407 0 7.217-3.329 7.217-6.869 0-3.002-1.953-5.692-5.201-6.494 4.664-.876 8.831-5.072 8.831-10.291 0-.714-.055-1.382-.156-2.009m-30.555.234q.151.305.385.58c.447.521 1.16.913 2.027.913.493 0 .876-.09 1.174-.203.298-.112.49-.219.744-.302a.7.7 0 0 1 .207-.046c.002.008.005.014.005.034v.01l.026 1.745c0 .054-.125.238-.35.4l-.008.004-.009.007-1.086.832c-.974.696-1.074 1.911-.568 2.688.216.331.532.6.918.745-1.054 1.319-1.656 2.967-1.656 4.624 0 3.653 2.369 6.423 5.512 7.118-2.354.804-3.828 3.155-3.828 5.363 0 2.896 2.293 5.604 5.855 5.604h.258q-.087.066-.172.136a3.97 3.97 0 0 0-1.382 3.034c0 1.352.572 2.452 1.391 3.167a4.4 4.4 0 0 0 2.868 1.07h1.648c-.035.12-.073.232-.073.232a.66.66 0 0 0 .474.911c.471.093.916.099 1.319.031a32.7 32.7 0 0 1-15.678 4.331v-43.028zm-35.446 1.146-10.23 3.357-.366 3.042 9.704 5.245-.052-3.514-1.467-.679.22-3.612 1.719-.429zm75.216.315c-3.424 0-5.14 2.806-5.14 5.612s2.03 5.613 5.14 5.613c3.108 0 5.192-2.545 5.192-5.613 0-3.016-1.821-5.612-5.192-5.612m-31.236 1.969h11.094c.224 0 .307.061.388.157a.7.7 0 0 1 .139.441.72.72 0 0 1-.146.446c-.083.099-.166.157-.381.157h-10.411q-.477.001-.929.058a2.36 2.36 0 0 0 .249-1.051v-.008zm31.301 1.073c1.509 0 2.389 1.409 2.389 2.57 0 1.135-.912 2.57-2.389 2.57s-2.336-1.245-2.336-2.57.827-2.57 2.336-2.57m-79.773 1.057-.125 2.013-2.78-1.287zm6.706 9.146h10.986v20.249c-5.841-5.088-9.87-12.204-10.986-20.249m21.277 0h10.64v28.322a32.8 32.8 0 0 1-10.64-1.988z" /><Path fill="#9D0D16" d="M105.739 238.184c.103-.006.225.021.39.13l2.275 1.544c.284.207.472.59.472.898l-.026 2.133v.008c0 .84.425 1.556.973 2.055.324.295.694.527 1.09.669a3.3 3.3 0 0 0-1.09.67c-.548.499-.973 1.215-.973 2.055v.008l.026 2.141c0 .309-.208.696-.491.903l-2.263 1.534c-.22.145-.354.143-.482.112a.6.6 0 0 1-.337-.252c-.169-.26-.243-.562.247-.912l.008-.007.008-.006 1.089-.831c.368-.263.883-.706.883-1.467v-.009l-.027-1.745c0-.372-.133-.792-.509-1.077s-.913-.32-1.427-.151c-.367.12-.607.249-.8.322-.192.072-.355.117-.708.117-.496 0-.8-.187-1.03-.454a1.5 1.5 0 0 1-.347-.885v-.131c0-.245.118-.618.347-.885.23-.268.534-.454 1.03-.454.353 0 .516.044.708.117.193.072.433.202.8.322.514.169 1.051.133 1.427-.151s.509-.715.509-1.087l.027-1.735v-.01c0-.76-.532-1.214-.9-1.478l-1.072-.819-.008-.006-.008-.007c-.49-.35-.416-.653-.247-.912a.58.58 0 0 1 .337-.252.5.5 0 0 1 .099-.015" /><Path fill="#157031" d="M125.506 239.646c1.259.823 2.564 1.752 3.586 3.02 1.146 1.425 1.958 3.257 1.958 5.958 0 5.074-4.739 9.15-9.296 9.15h-11.015c-.313 0-.633.143-.827.365a1.1 1.1 0 0 0-.27.745c.002.255.084.517.276.735s.507.363.821.363h10.753c3.866 0 5.928 2.488 5.928 5.426 0 2.863-2.141 5.554-5.901 5.554h-11.081c-.268 0-.554.122-.73.318a.97.97 0 0 0-.248.661.97.97 0 0 0 .25.654c.174.193.458.316.728.316h8.248c1.775 0 3.285 1.73 3.285 3.382 0 .838-.238 1.611-.765 2.174-.526.562-1.367.97-2.782.97h-4.946a1 1 0 0 0-.595.181.84.84 0 0 0-.339.674.84.84 0 0 0 .349.638c.183.13.388.177.585.177h3.281c.462 0 .805.203 1.075.532.27.328.428.789.428 1.157 0 .459-.17.882-.469 1.148-.194.172-.462.291-.83.32a1.14 1.14 0 0 0-.106-.661c-.15-.304-.568-.547-.924-.547h-1.968a3.13 3.13 0 0 1-2.001-.747c-.559-.488-.942-1.179-.942-2.175 0-.916.383-1.568.926-2.037s1.264-.714 1.795-.714h4.838c.218 0 .431-.038.634-.161.204-.124.413-.384.413-.707 0-.324-.211-.584-.414-.707a1.2 1.2 0 0 0-.633-.16h-7.579c-2.916 0-4.539-2.063-4.539-4.288 0-1.985 1.699-4.337 4.276-4.337h11.278c.307 0 .623-.144.811-.362.188-.219.261-.479.259-.727a1.1 1.1 0 0 0-.264-.718 1.1 1.1 0 0 0-.806-.36H110.53c-3.211 0-5.751-2.382-5.751-5.977 0-3.004 2.457-6.084 6.092-6.084h10.411a1.82 1.82 0 0 0 1.389-.628c.313-.373.452-.832.454-1.284a1.98 1.98 0 0 0-.445-1.291 1.83 1.83 0 0 0-1.398-.63h-11.108l-.009-.623c0-.385.209-.772.545-1.077.335-.305.786-.48 1.062-.48h6.225c.241 0 .479-.056.714-.217.234-.162.452-.51.452-.944 0-.447-.134-.674-.452-.944a1.2 1.2 0 0 0-.714-.217h-6.225c-.276 0-.727-.175-1.062-.48s-.545-.699-.545-1.084l.005-.381h7.598c.421 0 .805-.135 1.107-.367s.549-.587.549-1.036v-.564h3.695a3.5 3.5 0 0 0 2.387-.902" />
    </Svg>
  );
};

AlfaRomeoLogoHorizontal.displayName = 'AlfaRomeoLogoHorizontal';

export default AlfaRomeoLogoHorizontal;