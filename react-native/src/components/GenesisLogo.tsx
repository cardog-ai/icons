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
 * GenesisLogo icon component for React Native
 */
const GenesisLogo = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#000" d="M246.61 184.968c-4.874 1.017-16.216 4.333-30.925 9.02l-6.425 2.034-11.962-.044c-12.538-.089-30.659-.796-95.035-3.714-56.135-2.565-52.502-2.476-52.059-1.725 2.304 3.891 6.868 7.03 11.564 7.87 4.785.929 21.488 2.52 75.718 7.34 15.108 1.37 31.058 2.829 35.444 3.316 22.95 2.52 27.691 4.731 34.204 15.873 6.557 11.274 9.658 15.828 15.019 21.885 6.602 7.473 18.609 16.536 29.109 21.93l4.741 2.432 4.74-2.432c10.368-5.305 22.507-14.457 29.109-21.93 5.361-6.057 8.462-10.611 15.019-21.885 6.513-11.142 11.254-13.353 34.204-15.873 4.386-.487 20.336-1.946 35.444-3.316 54.23-4.82 70.933-6.411 75.718-7.34 4.697-.84 9.26-3.979 11.564-7.87.443-.751 4.076-.84-52.059 1.725-52.059 2.343-79.439 3.492-93.041 3.802-13.292.309-11.298.663-30.704-5.306-17.279-5.35-22.507-6.543-29.108-6.72-4.165-.133-6.07.044-10.279.928m21.001 8.224c9.348 2.343 20.956 6.19 25.918 8.578 4.962 2.431 6.159 3.802 6.026 7.074-.133 5.305-6.956 20.824-12.45 28.473-3.367 4.731-10.146 11.717-15.374 15.917-4.209 3.405-13.735 9.683-15.197 10.081-1.816.442-11.962-6.278-19.671-12.999-7.842-6.853-13.779-14.59-18.343-23.875-2.481-5.085-5.715-14.016-6.158-17.155-.576-3.802 2.171-6.19 10.855-9.55 7.399-2.874 22.551-7.163 30.127-8.534 2.348-.397 7.577.31 14.267 1.99" /><Path fill="#000" d="M224.059 211.408c-2.083 1.371-2.925 4.024-2.083 6.588 1.019 3.316 4.785 4.775 8.728 3.404 1.33-.486 1.374-.574 1.374-3.095v-2.608h-1.994c-1.949 0-2.658.663-1.329 1.149.399.177.665.841.665 1.769 0 1.371-.089 1.503-1.33 1.503-3.145 0-4.696-4.156-2.614-6.853.842-1.017 1.241-1.149 2.792-1.017 1.019.133 2.171.354 2.614.531.62.309.753.132.753-.752 0-1.238-.886-1.636-4.032-1.636-1.373 0-2.525.31-3.544 1.017M233.717 210.701c-.178.132-.133.486.133.796.221.265.487 2.652.531 5.349l.133 4.82 3.899.132c3.633.133 3.855.089 3.855-.795 0-.796-.266-.885-2.703-.885h-2.658l.133-1.68c.133-1.636.133-1.636 2.259-1.768 1.462-.089 2.083-.31 2.083-.796 0-.442-.576-.619-2.216-.619h-2.215v-3.0949999999999998h2.703c2.303 0 2.658-.089 2.436-.708-.133-.398-.265-.795-.265-.884 0-.309-7.798-.177-8.108.133M243.774 210.922c-.177.265-.089.619.177.707.355.089.532 1.725.532 5.262 0 4.996 0 5.04 1.019 4.907.886-.132.974-.442 1.196-3.183l.222-3.095 2.569 3.228c1.994 2.431 2.836 3.139 3.545 3.05.93-.132.974-.353.974-5.659 0-5.35-.044-5.527-.974-5.659-.931-.133-.975.044-1.108 3.404l-.133 3.581-2.791-3.537c-2.082-2.697-3.013-3.537-3.81-3.537-.621 0-1.241.221-1.418.531M256.003 211.01c0 .354.221.796.443.929.266.177.443 2.343.443 5.129v4.819h3.766c3.456 0 3.766-.089 3.766-.884 0-.796-.31-.885-2.437-.885h-2.437v-3.537h2.216c1.683 0 2.215-.177 2.215-.663s-.532-.663-2.215-.663h-2.216v-3.0949999999999998h2.481c2.083 0 2.437-.133 2.304-.796-.133-.619-.753-.752-4.253-.884-3.367-.089-4.076 0-4.076.53M267.61 210.833c-.531.221-1.196.929-1.417 1.592-.665 1.724.31 3.272 2.88 4.687 2.569 1.37 2.968 2.697.974 2.918-.709.088-1.861-.044-2.569-.31-1.285-.442-1.33-.398-1.197.752s.266 1.194 2.836 1.326c2.171.089 2.88-.044 3.854-.795 2.26-1.769 1.462-4.289-1.905-5.969-1.595-.796-2.215-1.371-2.215-2.078 0-.84.177-.885 2.437-.664 2.171.222 2.437.133 2.437-.574 0-.442-.311-.929-.709-1.061-1.019-.398-4.209-.266-5.406.176M275.674 210.922c-.177.265-.088.619.177.707.355.089.532 1.725.532 5.217v5.041h2.658v-11.496h-1.506c-.842 0-1.684.221-1.861.531M282.984 211.054c-2.569 1.415-1.816 4.157 1.595 5.925 1.507.796 2.216 1.459 2.216 2.034 0 1.061-1.817 1.415-3.811.707-1.284-.442-1.329-.398-1.196.752s.266 1.194 2.836 1.326c3.367.177 5.051-.928 5.051-3.183 0-1.592-.576-2.255-3.412-3.802-1.241-.664-1.905-1.371-1.905-1.902 0-.795.221-.84 2.437-.619 2.171.222 2.436.133 2.436-.574 0-.442-.31-.929-.708-1.061-1.241-.487-4.342-.266-5.539.397M62.92 204.113c.088.221 1.639 1.724 3.455 3.404 13.115 11.938 22.685 15.564 46.964 17.642 11.076.972 26.184 1.901 44.527 2.697 8.772.398 17.013.928 18.342 1.193 1.64.31 2.836.885 3.988 1.902.886.795 1.462 1.591 1.329 1.724-.266.265-32.21-.265-50.242-.84-5.671-.177-8.286-.133-7.975.177 1.019 1.017 23.171 7.207 35.4 9.904l6.247 1.37 17.279.045c18.741.044 18.608.044 21 2.564l1.02 1.105-1.906.266c-2.171.265-14.355 1.149-15.95 1.149-.62 0-.841.177-.576.398.488.531 16.216 4.819 23.217 6.411 6.512 1.415 17.722 3.493 17.943 3.272.089-.089-.93-1.061-2.304-2.122-5.715-4.554-12.184-12.38-20.557-24.76-4.342-6.455-8.773-11.275-11.83-12.955-4.12-2.21-13.469-3.846-33.318-5.836-51.482-5.04-93.573-9.064-95.478-9.064-.398 0-.664.177-.576.354M430.123 205.351c-8.64.796-26.007 2.476-38.546 3.714s-28.887 2.829-36.33 3.581c-22.02 2.122-31.28 3.714-35.533 6.013-3.057 1.68-7.488 6.5-11.829 12.955-8.374 12.38-14.843 20.206-20.558 24.76-1.374 1.061-2.393 2.033-2.304 2.122.221.221 11.431-1.857 17.944-3.272 7-1.592 22.728-5.88 23.216-6.411.265-.221.044-.398-.576-.398-1.595 0-13.779-.884-15.95-1.149l-1.905-.266 1.019-1.105c2.392-2.52 2.259-2.52 21-2.564l17.279-.045 6.248-1.37c12.183-2.697 34.38-8.887 35.399-9.904.311-.31-2.259-.354-7.753-.177-17.368.53-50.198 1.105-50.464.84-.133-.133.443-.929 1.329-1.724 1.152-1.017 2.349-1.592 3.988-1.902 1.329-.265 9.57-.795 18.342-1.193 18.343-.796 33.407-1.725 44.527-2.697 24.235-2.078 33.849-5.704 46.964-17.642 1.816-1.68 3.411-3.183 3.456-3.404.221-.531-1.684-.398-18.963 1.238M182.411 298.819c-7.31 1.238-12.405 8.047-11.785 15.74.399 5.217 3.545 9.904 8.197 12.159 1.772.884 2.747 1.061 6.513 1.061 3.899 0 4.74-.133 6.956-1.194 1.417-.663 3.278-1.724 4.12-2.387l1.551-1.15v-10.965h-9.748v3.537h5.76v2.565c0 1.945-.221 2.785-.753 3.271-1.684 1.459-4.032 2.255-7.089 2.476-2.835.177-3.5.045-5.582-.972-3.811-1.857-5.627-5.085-5.627-9.993.044-6.145 4.165-10.302 10.19-10.302 3.412 0 5.804 1.062 7.931 3.449l1.418 1.636 1.506-1.061c.842-.531 1.551-1.15 1.551-1.282s-.709-1.061-1.551-2.078c-2.924-3.405-8.684-5.306-13.558-4.51M291.845 298.775c-5.361 1.061-8.285 6.145-6.247 10.788 1.108 2.476 3.19 3.935 7.178 4.996 5.184 1.371 6.203 2.255 6.203 5.261 0 1.194-.355 1.946-1.33 2.963-1.284 1.238-1.55 1.326-4.12 1.149-3.19-.177-4.652-1.061-6.07-3.537l-.93-1.636-1.507.929c-.841.486-1.55 1.149-1.55 1.415 0 1.061 2.614 4.2 4.519 5.438 1.506 1.017 2.392 1.282 5.184 1.371 2.835.132 3.677-.045 5.316-.885 2.969-1.503 4.564-3.802 4.829-6.764.399-4.731-1.993-7.473-8.196-9.285-4.253-1.283-5.893-2.521-5.893-4.554 0-4.156 6.159-5.218 9.57-1.636l1.374 1.459 1.373-.884c1.64-1.017 1.684-1.062.621-2.698-2.039-3.006-6.336-4.642-10.324-3.89M329.593 298.863c-2.481.486-4.829 2.255-5.848 4.554-2.304 5.085.399 9.373 7 11.142 5.273 1.371 6.336 2.211 6.336 5.217 0 2.476-1.551 3.891-4.519 4.156-3.19.266-5.405-.751-7-3.271l-1.152-1.857-1.418.884c-.798.486-1.418 1.061-1.418 1.282 0 1.857 3.766 5.704 6.424 6.588.931.309 2.969.442 4.653.354 3.766-.221 6.335-1.769 7.886-4.776 2.747-5.438 0-9.992-7.31-12.203-4.475-1.326-5.893-2.387-5.893-4.377 0-1.901 1.063-3.227 3.101-3.758 2.26-.619 5.14.354 6.557 2.167l1.064 1.326 1.506-.973c.798-.53 1.507-1.105 1.507-1.282s-.621-1.017-1.418-1.901c-2.481-2.83-6.114-4.024-10.058-3.272M205.938 313.409v14.149h15.062999999999999v-3.537h-11.076v-8.843h10.235l-.133-1.901-.133-1.857-4.963-.133-5.006-.132v-8.357h11.076v-3.537h-15.062999999999999zM228.977 313.409v14.149h3.987l.089-9.771.133-9.772 9.437 9.993c5.183 5.482 9.702 9.992 10.057 9.992.576 0 .665-2.078.665-14.369v-14.37h-3.988v9.815l-.044 9.86-9.615-9.86c-5.272-5.394-9.88-9.859-10.145-9.815-.444 0-.576 3.139-.576 14.148M262.648 313.409v14.149h15.064v-3.537h-11.076v-8.843h10.19v-3.979h-10.19v-8.401h11.076v-3.537h-15.064zM310.498 313.409v14.149h4.431v-28.296999999999997h-4.431z" />
    </Svg>
  );
};

GenesisLogo.displayName = 'GenesisLogo';

export default GenesisLogo;