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
 * BentleyIcon icon component for React Native
 */
const BentleyIcon = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#000" d="M291.815 198.846c-12.188-5.919-23.273-7.846-36.426-7.846-11.922 0-24.386 2.525-35.699 7.405-11.775-4.092-39.983-1.662-46.148-1.524-7.059.161-36.265-1.6-43.162-1.6-6.898 0-21.158.224-31.915.959-16.377 1.125-34.891-.47-37.125-1.025-1.084-.266-1.888.389-1.888.389-.48.636-5.452 6.242-5.452 6.242l.485 1.609 11.708 5.924-1.602 7.694 11.399 5.131s0 6.399.632 7.201c.642.812 12.04 3.688 12.04 3.688s1.137 7.481 1.926 8.169c1.336 1.187 13.324 2.412 13.324 2.412s3.684 6.726 5.286 7.366c1.607.641 14.446 2.568 16.847 1.923 0 0 1.065 5.601 3.337 6.612 2.429 1.073 16.4.607 16.4.607s1.734 5.521 4.515 6.385c2.6.802 14.741-2.388 14.741-2.388s1.773 4.092 3.537 4.808c2.69 1.097 12.497-2.378 12.497-2.378 5.043 20.748 21.842 35.429 41.627 43.105l2.766 5.553 6.503-2.458 3.399 5.207 5.937-3.223 4.045 4.898 5.334-3.854 4.701 4.357 4.682-4.485 5.348 3.906 4.026-4.889 5.947 3.233 3.408-5.165 6.532 2.502 2.69-5.559c18.34-7.105 35.319-21.901 40.838-40.659 1.716.764 4.972 1.875 7.663 1.988 0 0 3.066-1.105 4.311-4.979 0 0 10.643 3.318 12.588 2.725 0 0 1.787-.095 3.436-5.53 1.089.498 1.992.233 3.613.584 8.286 1.799 11.898.826 11.898.826s1.854-.314 3.323-7.282c.737.11 1.264.2 1.821.166 0 0 12.302.352 14.431-.711 0 0 1.945-.489 2.643-7.472 5.072.76 9.636 1.092 13.329.67 0 0 4.136-1.42 5.728-9.541 2.791-.176 11.019-.722 12.041-1.932 0 0 2.025-.93 2.025-8.226 3.218-.209 8.452-.883 10.339-2.886 0 0 1.996-2.307 1.131-7.865 7.601-1.59 10.239-4.063 10.239-4.063-.052-2.687-2.419-7.628-2.419-7.628s8.504-3.275 10.572-4.937l.67-1.229s-5.148-6.161-5.946-6.327c-1.831-.38-18.283 1.998-28.916 1.998-10.643 0-29.824-1.614-37.72-1.614-7.9 0-32.566 1.775-44.17 1.775-11.608 0-16.11-1.775-24.652-1.775-5.31 0-17.502.337-25.018 3.033" /><Path fill="#fff" d="M431.353 210.299c-2.758.005-5.505.015-8.253.015-4.696.218-9.735.085-14.584.161-6.384.1-21.082.218-21.828.275h-9.141c-5.186 0-9.764-.019-14.945-.019-.879.038-6.132.181-7.791.171-.742-.019-2.082-.109-2.819 0-1.227.19-3.228 2.768-.818 2.768.105-.024.219-.043.333-.057q.363-.051.732-.114c.675-.209 1.555.042 2.244.095 1.283.09 2.581.189 3.869.28 3.39.232 6.774.46 10.154.697 2.429.195 4.867.399 7.297.589 17.792 1.12 35.371 2.71 53.81 2.71 4.263 0 8.071-1.865 9.412-2.292.57-.185 1.768-.318 2.219-.722.951-.83-.142-3.845-1.055-4.395-.622-.38-8.147-.2-8.836-.162M73.43 211.65c-.932.352-1.34.817-1.464 1.847-.1.75.47 2.478 2.296 3.422 1.302.594 6.25 2.9 7.525 3.171 1.179.252 75.676-4.096 75.795-4.115 1.008-.461 3.741-1.216 3.504-2.806-.067-.455-.785-.906-1.184-1.068-.841-.318-10.021.518-10.705.522-6.327 0-74.056-.973-75.767-.973M334.539 212.772a2.06 2.06 0 0 0-1.978 1.362c-.271.731-.361 1.728.271 2.236.656.522 1.673.669 2.496.883 1.326.342 2.657.683 3.974 1.025 1.53.375 2.804.589 4.577.764 1.369.128 2.558-.175 2.914-1.272.395-1.272.252-2.122-.741-2.686-.466-.261-2.382-.803-5.177-1.315-2.728-.499-5.523-.945-6.336-.997M174.787 212.713c-2.6.802-5.286 1.196-7.995 1.699-1.061.185-2.458.242-3.318.84-.395.275-.614.693-.723 1.134-.095.442-.033.964.233 1.277.394.47 2.899 1.557 4.525 1.277 2.577-.622 4.82-1.443 7.216-2.217.832-.242 1.916-.379 2.515-1.039.656-.726.223-1.528-.295-2.15-.537-.627-1.374-1.007-2.158-.821M350.835 216.842c-.309.138-.618.228-.865.484-.841.855-1.046 2.265.585 2.265.661-.2 2.448.071 3.085.17 1.184.176 2.363.361 3.537.546l14.308 2.25c5.756.94 11.537 1.899 17.388 2.544 4.107.456 8.195 1.178 12.345 1.572 6.399.607 12.711 1.504 19.475 1.504.409-.014.823-.038 1.232-.052.238-.028.485-.043.727-.052.167-.029.347-.043.513-.062q.272-.027.557-.062c.199-.014.408-.033.613-.047.176-.029.337-.038.509-.057.133-.028.261-.043.384-.062.119-.014.229-.038.348-.052l.327-.057c.114-.019.233-.033.343-.057a168 168 0 0 0 1.83-.479c2.144-.655 3.237-1.552 3.983-3.674.162-.48.366-1.154-.009-1.586-.338-.379-.861-.446-1.374-.469-2.691 0-5.386-.01-8.076-.01-3.67-.133-7.326-.27-11.005-.403-13.595-.636-27.095-1.723-40.562-2.587q-6.844-.527-13.695-1.059c-1.887-.147-4.53-.508-6.503-.508M178.007 218.713c-2.496.485-4.716 1.553-7.064 2.34-.97.318-2.215.546-2.933 1.334-.437.48-.551 1.092-.394 1.761.1.446.299 1.116.613 1.467.627.712 2.286 1.377 3.404 1.377.622-.019 1.582-.214 1.987-.375l5.495-2.958c.627-.337 1.435-.436 1.949-.968 1.749-1.799-1.569-4.229-3.057-3.978M331.108 219.621c-1.046.342-3.422 1.633-2.4 2.786.404.465 1.702.902 2.258 1.092.689.299.642.384 1.326.683.775.356 1.535.717 2.305 1.068 1.436.698 2.201 1.458 4.008 1.458 2.129-.048 3.085.28 4.14-1.733.285-.522.095-1.106-.209-1.5-.499-.65-3.323-1.675-4.549-2.093-2.406-.817-6.204-1.942-6.879-1.761M159.499 219.048c-1.683.171-13.98 1.353-18.458 1.637-2.396.195-44.217 2.791-47.863 2.844-.675.052-9.517-.043-10.434.735-.476.404.052 2.791.508 3.228.851.821 2.405 1.063 3.523 1.372 3.246.911 6.165 1.946 9.935 1.946.247-.019 65.637-8.345 66.825-8.345.171-.166.337-.284.309-.55-.052-.594-2.339-2.407-2.909-2.668-.423-.19-.913-.199-1.436-.199M346.967 221.731c-.642.242-1.408.575-1.246 1.462.109.636.385 1.647.913 2.051.903.693 2.928.963 4.083 1.262 3.209.831 6.432 1.657 9.645 2.478 4.749 1.22 9.536 2.226 14.365 3.365a253 253 0 0 0 17.902 3.575c3.313.527 6.636 1.125 10.049 1.566 1.759.223 3.47.546 5.324.546.176-.014.337-.033.514-.057.308-.014.641-.033.955-.052.223-.019.442-.033.675-.057.161-.019.328-.033.499-.057.247-.014.494-.033.727-.052.252-.024.49-.043.732-.053.247-.028.485-.042.732-.061l.557-.057c.171-.019.337-.038.508-.052.167-.024.338-.038.504-.057.167-.024.333-.038.509-.062.142-.014.295-.033.437-.052.119-.015.228-.038.347-.057.109-.019.224-.034.338-.057.114-.019.223-.033.327-.057.119-.014.229-.038.348-.057.66-.304 1.369-.29 1.987-.703.836-.565 2.852-3.351 1.782-4.234-.846-.707-5.438-.565-6.864-.678-4.345-.342-8.666-.869-12.953-1.282-6.161-.579-12.284-1.666-18.349-2.445-7.202-.925-14.294-2.098-21.377-3.28-3.289-.564-6.588-1.12-9.868-1.689-1.431-.342-2.496-1.097-4.102-1.097M158.604 225.953c-3.651.641-7.292 1.272-10.943 1.908-5.77 1.054-28.468 4.443-34.064 5.065-3.622.403-7.234.821-10.942 1.115-6.783-.327-7.981.788-7.121 2.597.37.778.737 1.808 1.478 2.368.908.679 8.462 2.208 11.385 2.208 3.518.118 19.114-2.36 21.695-2.996 4.017-.982 34.606-9.203 35.391-9.721.603-.403.109-2.24-.642-3.175-.656-.812-4.554.327-6.237.631M183.285 225.151c-1.093.053-8.552 4.685-9.084 5.383-.366.475-.356 1.049-.176 1.623.143.456.271.931.623 1.282.817.821 2.643.845 3.874.845q.5-.193 1.008-.394c.656-.366 1.183-.921 1.797-1.396 1.259-1.02 2.219-1.742 3.479-2.757.642-.451 2.115-.822 2.529-1.529 1.06-1.832-2.79-3.085-4.05-3.057M326.26 225.151c-1.24.067-3.517.831-3.726 2.468-.057.418.014.845.323 1.097.556.465 4.953 2.677 6.355 3.574 1.065.674 1.888 1.486 3.299 1.486 1.902-.062 2.577-.527 3.042-.807.823-.508 1.812-1.761 1.099-2.739-.628-.873-1.964-1.248-2.876-1.666-1.008-.475-2.011-.949-3.024-1.424-.675-.337-3.394-1.989-4.492-1.989M344.493 228.401c-.66.29-1.316.584-1.977.874-.903.36-3.171.845-2.629 2.216.442 1.125 11.133 4.282 14.408 5.45 8.528 2.947 15.825 5.463 24.814 7.442 6.531 1.439 13.486 3.062 20.716 3.062.294-.014.599-.029.884-.052.214-.019.409-.038.623-.053.118-.023.223-.037.337-.056.494-.252.979-.361 1.445-.679.723-.518 1.127-1.287 1.688-1.908.518-.57 1.293-1.007 1.602-1.69.133-.318.147-.731-.062-1.016-.243-.309-.608-.399-.97-.498q-2.489-.334-4.991-.674c-3.237-.523-6.47-1.045-9.712-1.567-4.344-.726-8.708-1.671-12.962-2.596-6.812-1.476-13.501-2.972-20.136-4.676-3.086-.811-6.176-1.614-9.26-2.42-.652-.205-1.308-.399-1.964-.603-.622-.223-1.136-.508-1.854-.556M189.838 230.407c-1.113 0-4.355 3.303-5.553 4.272-.57.474-1.972 1.699-2.262 2.387-.547 1.348.299 2.07 1.179 2.72.808.603 3.284.218 4.382-.603.804-.603 5.961-5.216 6.27-5.757 1.493-2.635-2.282-3.019-4.016-3.019M169.088 230.42c-.438.119-.889.247-1.326.37-1.156.489-27.985 8.796-40.7 11.497-3.67.778-7.383 1.281-11.167 1.836-1.159.171-3.617.01-4.425.694-.523.469 1.022 2.947 1.464 3.621 1.122 1.666 14.28 2.222 20.131.679 2.368-.693 37.211-12.873 37.924-13.78.732-.935.551-3.265.452-3.688-.252-1.072-1.289-1.229-2.353-1.229M319.912 230.589c-1.051.28-2.676-.171-3.332.812-.361.527-.438 1.381-.1 1.899.409.612 6.089 5.259 6.764 5.605.894.456 2.058.428 3.176.428.941-.019 2.885-.807 2.652-2.298-.057-.394-.323-.745-.623-1.02-.865-.783-1.93-1.287-2.871-1.942-.803-.541-1.706-1.224-2.51-1.765-.732-.551-1.373-.964-2.105-1.515-.319-.156-.661-.18-1.051-.204M311.443 235.071c-.951.232-2.044.631-1.859 1.898.019.242 1.507 1.377 2.073 1.928 1.279 1.281 2.22 3.503 3.846 4.376 1.131.612 2.804 1.357 4.078.707 1.588-.773 1.179-2.33.917-2.667-1.164-1.51-2.747-2.668-4.102-4.021-.656-.655-1.274-1.604-2.091-1.984-.785-.356-1.902-.237-2.862-.237M196.235 235.275c-.861.498-1.925 1.87-2.605 2.601-.504.536-.994 1.073-1.488 1.6-1.003 1.02-3.099 2.772-1.312 4.025.742.517 1.973.939 2.786.702.656-.304 1.274-.361 1.844-.845.565-.474.946-1.172 1.326-1.775.447-.674 1.949-2.777 2.325-3.104.774-.684 1.915-1.201 1.155-2.582-.338-.627-3.218-1.087-4.031-.622M338.428 235.349c-.761.327-3.418 1.258-3.371 2.017.081 1.101 1.678 1.586 2.648 1.918.732.256 1.388.669 2.063 1.016 1.379.731 2.767 1.457 4.14 2.188l6.575 3.304a119 119 0 0 0 9.716 4.58c3.394 1.41 6.864 3.095 10.61 3.783 3.18.584 6.869.413 10.377.413.28-.024.566-.038.841-.057l1.407-.057c.248-.019.485-.038.727-.052.148-.029.3-.038.452-.062.147-.019.299-.033.452-.057.109-.019.214-.033.328-.057.333-.147.675-.299 1.017-.441.78-.551 2.61-2.44 1.839-3.413-.722-.892-3.778-1.106-4.981-1.372a266 266 0 0 1-7.801-1.827c-9.274-2.317-18.177-5.34-27.047-8.345-2.282-.835-4.569-1.671-6.85-2.511-1.013-.375-1.987-.93-3.142-.968M173.914 237.589c-1.74.076-8.01 3.693-10.506 4.733-6.997 2.971-14.294 5.492-21.595 7.922-1.935.588-3.879 1.182-5.818 1.761-1.213.342-2.662.536-3.742 1.134-.318.166-.589.456-.641.821-.11.651.437 1.159.894 1.5.555.409 1.088.883 1.734 1.125 1.013.366 2.192.342 3.375.399 2.762.128 8.253.992 11.837-.574 3.299-1.434 17.246-8.767 20.925-10.756 1.735-.973 9.355-4.524 9.25-5.929-.166-2.216-3.741-2.136-5.713-2.136M331.418 239.89c-.628.413-2.292 1.676-2.078 2.535.247.954 3.347 2.383 3.855 2.753 4.735 3.55 9.455 7.072 14.394 10.276 2.719 1.757 5.481 3.598 8.504 4.733 2.952 1.106 6.465 1.49 9.949 1.49.2-.014.409-.033.618-.047.29-.128.585-.242.88-.361.813-.503 2.747-2.15 2.158-3.199-.147-.252-.395-.432-.651-.551q-1.077-.364-2.154-.736c-1.24-.45-2.486-.911-3.722-1.357a192 192 0 0 1-11.328-5.003 305 305 0 0 1-15.078-7.761c-1.545-.878-3.085-1.766-4.62-2.648-.128-.034-.262-.067-.39-.11-.119 0-.219-.009-.337-.014M324.012 243.14c-.29.147-.556.294-.76.579-.361.503-.485 1.187-.713 1.761-.224.518-.457 1.021-.69 1.529-.071.284-.076.626.043.883.295.588 1.075.602 1.598.873.446.228.855.532 1.235.883 3.456 3.251 6.708 6.678 10.206 9.754 1.298 1.154 2.434 2.578 3.913 3.366 1.183.64 2.619.949 3.954 1.295 2.068.527 4.079 1.258 6.408 1.258.846-.422 3.361-1.196 2.938-2.563a1 1 0 0 0-.072-.157c-.052-.08-.109-.17-.166-.251-.851-.94-2.129-1.419-3.156-2.06-1.925-1.192-3.793-2.445-5.681-3.684-4.592-3.018-8.941-6.484-13.371-9.801-1.636-1.225-2.748-3.128-4.792-3.603-.119-.014-.224-.024-.338-.048-.09-.009-.18-.009-.275-.009-.1-.005-.181-.005-.281-.005M181.383 243.19c-1.255.351-29.952 16.053-30.366 16.731-.689 1.111 1.431 2.834 2.486 3.067 1.573.346 10.268-.494 14.037-2.739 1.098-.821 14.09-11.017 15.112-11.867 1.245-1.063 5.305-3.161 4.853-4.044-.513-1.001-4.939-1.523-6.122-1.148M189.408 247.172c-.794-.1-5.367 5.563-16.262 13.177-.937.645-3.062 2.003-3.527 2.966-.68 1.88 2.429 2.35 3.57 2.35.261-.024 6.17-.779 8.912-2.369 1.26-.735 13.505-13.024 13.886-13.566.171-.242.299-1.49.247-1.599-.647-.978-2.681-.304-3.827-.451-.879-.124-2.134-.375-2.999-.508M315.48 247.228c-1.07.332-2.106 1.6-1.626 2.862.252.679.984.821 1.498 1.249.479.417.831.892 1.183 1.39 2.187 3.019 4.35 6.081 6.693 9.005.899 1.111 1.821 2.525 3.052 3.384 1.592 1.12 4.772 2.226 6.935 2.226.775-.389 2.695-.46 2.734-1.637 0-.048 0-.105-.01-.157-.128-1.12-2.196-2.582-3.014-3.351-3.246-3.109-6.488-6.218-9.745-9.327a438 438 0 0 0-2.034-2.056c-.628-.712-1.155-1.499-1.925-2.112-1.022-.826-2.31-1.433-3.741-1.476M186.737 270.961c-.494.171-.323 1.059-.185 1.514.242.798 3.432 5.991 4.843 8.074 1.213 1.795 2.373 3.636 3.813 5.317 5.443 6.379 12.017 12.042 19.09 15.673 1.079.541 6.964 3.598 8.3 3.475a.36.36 0 0 0 .323-.456c-.09-.337-.385-.536-.66-.712-1.336-.627-2.677-1.258-4.017-1.884-2.306-1.087-4.578-2.402-6.741-3.798a71 71 0 0 1-14.056-11.904c-1.968-2.16-3.285-4.396-5.067-6.978-1.683-2.425-3.917-6.873-4.483-7.789-.295-.484-.708-.798-1.16-.532M322.667 271.486c-.571.303-3.774 6.227-6.532 10.229-3.066 4.433-6.94 8.705-11.223 12.151-3.579 2.886-7.078 4.989-11.061 7.068-2.496 1.21-5.638 2.625-6.227 3.123-.789.65-.39 1.154.532 1.154.808-.337 4.478-1.871 8.176-3.907 7.782-4.281 15.687-11.359 21.111-18.735 2.334-3.185 5.49-9.133 5.832-9.963.267-.65.119-1.049-.608-1.12M224.635 200.664s-.794-1.481.936-2.345c1.75-.868 14.708-5.012 30.029-5.012 16.827 0 31.449 5.444 32.3 6.137 1.16.94.104 2.692-1.203 2.431-1.293-.257-14.555-5.877-30.922-5.877-16.366 0-27.798 4.339-28.806 4.927-1.198.693-2.334-.261-2.334-.261" /><Path stroke="#fff" strokeMiterlimit={3.864} d="M206.908 253.313c0-20.073 21.51-36.345 48.049-36.345 26.544 0 48.059 16.272 48.059 36.345 0 20.078-21.515 36.35-48.059 36.35-26.539 0-48.049-16.272-48.049-36.35Z" /><Path fill="#fff" d="M251.351 224.145c-.375.218-1.012.08-1.459.132-1.944.257-3.888.499-5.771.855-5.452 1.011-10.7 3.137-15.14 6.18-1.127.774-2.415 1.661-3.313 2.767-.024.048-.052.09-.09.143-.324.536-.894.944-1.113 1.533-.085.237-.166.603-.076.868.305.869 1.925 2.364 2.733 2.844.4.242 1.08.702 1.141 1.205.086.769-.085 1.505-.133 2.184-.009.916-.009 1.832-.009 2.748v18.873c-.014.788-.033 1.561-.057 2.345-.105.389-1.655 1.879-2.02 2.297-.485.555-.737 1.253-1.137 1.842-.004.047-.028.09-.047.133.233.218.19.64.351.906.471.774 1.255 1.59 2.002 2.165 6.08 4.742 15.221 7.357 23.349 8.007 3.214.252 6.517.015 9.774.015.275-.28 2.295-.28 2.852-.28.261-.257 1.678-.276 2.134-.276.266-.289 1.155-.289 1.574-.289.161-.166.47-.166.732-.166.261-.276.879-.276 1.283-.276.19-.213.708-.28 1.012-.28.186-.199.661-.285.951-.285.186-.204.718-.275 1.008-.275.29-.318 1.136-.56 1.578-.56.219-.304.613-.351.922-.494q1.177-.569 2.339-1.139c2.714-1.6 5.153-3.759 6.588-6.583.286-.546.699-1.078.699-1.762.224-.223.276-.659.276-1.006.328-.323.28-1.068.28-1.566.362-.408.176-1.657.167-2.241-.081-5.548-4.402-10.888-9.222-12.948-.091-.038-.314-.048-.314-.167.352-.242.832-.731 1.298-.731.356-.531 1.526-.987 2.068-1.452 1.136-.954 3.874-3.65 3.874-5.093.19-.181.275-.451.275-.731.229-.214.286-.631.286-.959.399-.418.28-1.495.28-2.127.357-.384.109-1.295.033-1.737-.484-2.644-1.554-4.856-3.375-6.802-.413-.441-.874-.769-1.283-1.186-1.288-1.334-2.98-2.189-4.559-2.977-4.43-2.211-9.573-3.393-14.94-3.645-2.61-.005-5.205-.009-7.801-.009" /><Path fill="#000" d="M254.092 228.964c3.038 0 6.037.261 8.376 1.633 3.632 2.126 4.711 6.517 4.174 10.694-.333 2.492-1.165 4.898-3.052 6.55-1.844 1.609-4.235 2.003-6.74 2.326-5.548.712-11.29-1.215-12.868-6.536-.385-1.286-.685-2.701-.704-4.134.033-.708.071-1.424.105-2.127.238-.261.276-.921.276-1.291.19-.19.289-.56.289-.84a.9.9 0 0 0 .272-.617.52.52 0 0 0 .171-.394c.304-.237.846-1.063.846-1.457.437-.247.684-.731 1.041-1.068.96-.897 2.757-2.008 4.116-2.008.133-.152.352-.166.561-.166.29-.314 1.122-.285 1.574-.285.337-.366 1.15-.052 1.563-.28M253.373 254.569c3.727 0 7.012.052 9.969 1.415 6.308 2.909 6.892 13.385 2.529 18.189-3.162 3.512-9.969 4.129-14.646 2.9-1.07-.29-2.144-.517-3.095-1.054-1.259-.726-2.253-1.656-3.113-2.843-1.217-1.676-1.916-4.082-2.02-6.285-.057-1.238.104-2.468.104-3.645.233-.228.28-.759.28-1.115.205-.205.276-.599.276-.898.186-.152.29-.427.29-.674.204-.175.442-.602.442-.901.499-.375.827-1.125 1.184-1.624.409-.569 2.015-1.894 2.69-1.894.233-.299.847-.569 1.236-.569.176-.204.613-.276.894-.276.219-.242.78-.28 1.126-.28.409-.436 1.398-.057 1.854-.446M298.065 201.741c.713-.209 1.407-.048 1.882.465.452.493.324 1.324-.256 1.647-.471.261-1.099.285-1.626.422-1.355.352-6.009 1.03-6.265 2.644-.138.931 1.093 2.008 1.563 2.34.642.56-.47-.493.172.067.936.821 3.023 2.259 1.896 3.735-.275.356-.727.523-1.193.475-2.22-.223-5.248-4.623-5.509-5.349-.319-.902-.19-1.828.323-2.573 1.735-2.483 6.346-2.962 9.013-3.873" /><Path fill="#fff" d="M335.095 208.899c-.119 1.884 5.286 1.5 6.602 1.619 1.954.175 5.757 1.58 6.484.93.88-.783 1.816-4.495.238-4.566-2.291-.095-3.157.161-5.709.356-2.624.161-7.497-.176-7.615 1.661M175.098 209.554c.077 1.3-5.452 1.286-6.764 1.405-1.949.175-5.072 1.514-6.122.356-.794-.869-1.812-3.404-.224-3.47 2.282-.1 3.894.057 6.436.251 2.639.162 6.556-.427 6.674 1.458" /><Path fill="#000" d="M216.976 201.357c2.586.646 4.064.575 5.557 3.005.751 1.206.798 3.137-.461 4.808-.813 1.092-1.122 1.434-2.016 2.521-.912 1.101-1.022 1.846-2.566 2.069-.514.076-.956-.047-1.241-.46-1.022-1.476 1.15-3.266 2.296-4.557.437-.494 1.426-1.96 1.264-2.573-.304-2.017-2.728-1.984-4.335-2.482-.589-.19-2.234-.494-2.752-.821-.623-.394-.438-1.154-.067-1.719.29-.441 1.792-.384 4.321.209" /><Path fill="#fff" d="M330.973 208.259c.556.142 1.26.156 1.369.835.124.845-.518 1.647-2.234 1.837-1.193-.123-3.603-2.25-4.54-.375-.803 1.586 4.25 2.217 4.022 3.788-.181 1.315-.661 1.528-1.825 1.528-.528.029-1.773-.731-2.197-.887-1.159-.537-3.907-2.715-4.943-.968-1.022 1.727 5.956 4.072 5.771 5.42-.186 1.277-1.469 2.283-2.439 1.951-1.34-.323-5.633-5.354-7.582-3.38-1.797 1.823 5.381 5.018 5.025 6.128-.609 1.866-2.244 2.421-4.521.532-1.188-.987-3.061-2.824-4.131-1.386-1.317 1.775 2.477 4.011 2.809 4.604.833 1.495-1.078 3.223-2.338 2.938-1.17-.156-2.895-4.561-4.53-3.047-1.255 1.154 1.811 3.902 1.492 4.998-.128 1.021-2.728 2.364-3.936 1.42-1.659-1.102 2.254-6.826-1.587-12.223-1.859-2.293-3.371-5.853-3.475-6.479-.147-1.097-.067-2.981.637-3.921 2.69-3.603 14.897-3.361 20.112-3.603 3.494-.166 5.462.29 9.041.29M178.402 208.791c-.703 0-1.312.151-1.416.854-.134.864-.005 2.236 1.459 2.274 1.725.028 3.831-2.265 4.839-.817 1.141 1.633-4.754 2.616-3.813 4.6 1.213 2.534 3.604.213 4.041.057 1.188-.556 4.896-3.855 6.403-1.681 1.336 1.913-4.753 4.69-5.49 5.601-.209.266-.642 1.7-.476 2.051 1.331 2.952 4.692.123 6.945-2.34.837-.916 1.446-1.419 2.282-1.638 1.155-.299 2.163-.071 2.472.964.185.588.01 1.281-.423 1.685-.471.451-5.719 4.234-5.543 5.364.361 2.292 1.749 2.596 2.767 2.107 1.093-.484 4.164-5.691 5.975-5.003.48.185 1.079.266 1.269.726.266.632.162 1.515-.238 2.046-.508.684-1.468 1.581-2.115 2.15-.551.485-1.165 1.059-1.492 1.662-.856 1.533.413 2.235 1.816 2.235.494 0 .76-.275 1.102-.569.856-.726 1.745-3.964 3.48-3.1 1.816.912-1.545 3.475-1.212 5.293.494 1.372 2.676 1.652 3.28.631.665-1.628.271-4.139.941-6.968.651-2.535 2.477-6.413 3.356-7.941.561-.902 1.241-1.609 1.497-2.687.019-.076.033-.147.048-.223.147-1.134-.571-2.069-1.341-2.762-1.264-1.154-2.971-1.861-4.554-2.388-4.668-1.552-9.664-1.695-15.016-1.941a221 221 0 0 0-10.843-.242M304.207 237.825c.656-1.324 3.636.128 3.912.38.822.721 1.103 1.903 1.711 2.767.746 1.063 2.686 3.313 2.577 4.519-.091.977-3.86 3.897-4.683 3.208-.023-.023-.042-.057-.08-.085-.557-3.636-1.759-7.13-3.523-10.4 0-.142.038-.275.086-.389M308.286 250.534c1.036 0 2.805.404 3.522 1.035.595.518.894 1.296 1.317 1.937l2.187 3.08 5.077 6.812 2.324 2.995c.433.736.314 1.282-.328 1.789l-.395.053c-2.362 0-6.032-.878-7.638-2.293-.804-.712-1.232-1.557-1.745-2.407l-2.481-4.58c-.4-.684-1.826-2.777-2.078-3.522-.028-.085-.066-.199-.095-.332.038-.594.052-1.187.052-1.79q0-1.19-.085-2.373c.085-.228.205-.38.366-.404M196.481 252.821c1.359-1.88 3.128-3.432 4.777-3.18.38.014.656.156.837.37a29 29 0 0 0-.181 3.304l.014.512-.043.114c-.465 1.666-.637 1.282-1.763 3.46-1.711 3.299-3.58 8.017-4.682 8.525-1.607.741-4.055.651-5.823 1.092-2.529.641-4.326-.014-4.326-1.191.01-1.51 10.177-11.478 11.19-13.006M197.15 268.404c1.488.143 1.959 2.122 3.713 2.54 1.112.265 2.4-.333 3.275-.836.566-.327 1.355-.973 2.106-.892 5.038 8.819 14.142 16.001 25.526 20.192l.067.138c.09.441-.038.807-.19.992-.599.683-6.394 9.787-7.577 10.072-1.037.366-5.015-2.179-6.446-2.957-7.554-4.082-14.698-9.55-20.226-16.661-1.75-2.235-6.689-7.974-6.632-10.343.048-1.671 5.51-2.283 6.384-2.245M313.204 269.755c.627-.252 5.139 1.414 5.215 2.52-.043.912-2.805 4.776-5.9 8.919-5.423 7.272-12.15 12.195-19.665 16.376a49 49 0 0 1-5.043 2.421l-1.45.57c-.452 0-.861-.119-1.146-.423-.58-.598-6.441-9.322-6.716-9.697-.224-.299-.162-.812.047-1.168 10.681-4.03 19.318-10.689 24.419-18.863.86-.237 2.367 1.054 3.023 1.377 1.141.56 2.581 1.125 3.989.735 1.473-.403 2.072-2.24 3.227-2.767M262.913 292.993c.594.351.903 1.02 1.126 1.471.452.921 1.883 9.223 2.629 12.465.228 1.077.528 2.743.352 3.878-.152.992-1.303 2.378-2.501 2.539-.993.147-2.98-1.352-3.318-2.102-.437-.993-.366-2.208-.47-3.366-.262-3.493-.775-11.909-.775-12.811 0-.532.176-1.353.732-1.861a67 67 0 0 0 2.225-.213M269.762 291.853c.319.28.556.627.746.878.628.855 3.556 8.986 4.882 12.142.433 1.04 1.032 2.677 1.051 3.85.023 1.034-.889 2.639-2.063 3.009-.989.328-3.257-.826-3.727-1.533-.628-.921-.77-2.16-1.089-3.318-.884-3.484-2.909-11.895-3.071-12.802-.076-.432-.071-1.068.176-1.623a64 64 0 0 0 3.095-.603M276.018 290.151c.409.251.732.607.989.873.722.769 4.625 8.487 6.327 11.454.546.982 1.35 2.53 1.521 3.693.138 1.02-.57 2.72-1.692 3.242-.937.436-3.333-.432-3.889-1.073-.732-.84-1.022-2.051-1.478-3.161-1.307-3.351-4.34-11.454-4.611-12.337-.147-.47-.219-1.215.057-1.851a57 57 0 0 0 2.776-.84M256.051 293.428c.542.432.761 1.125.932 1.591.337.977.751 9.393 1.084 12.706.1 1.087.199 2.787-.115 3.883-.28.968-1.582 2.203-2.79 2.222-1.007.014-2.804-1.704-3.037-2.492-.324-1.04-.091-2.236-.062-3.409.171-3.493.675-11.909.789-12.796.062-.513.318-1.263.879-1.705.419.01.827.01 1.227.01.366 0 .732 0 1.093-.01M249.71 293.246c.437.498.542 1.205.627 1.675.186 1.021-.727 9.389-.908 12.721-.081 1.087-.247 2.782-.727 3.817-.432.911-1.911 1.927-3.099 1.756-1.008-.138-2.496-2.127-2.61-2.938-.152-1.083.257-2.222.466-3.371.718-3.427 2.543-11.662 2.79-12.521.119-.427.418-.997.889-1.377.851.09 1.711.171 2.572.238M243.32 292.465c.537.603.514 1.467.523 2.027 0 1.035-2.353 9.119-3.118 12.36-.266 1.068-.723 2.701-1.379 3.646-.58.816-2.21 1.562-3.351 1.187-.96-.314-2.096-2.521-2.068-3.347.038-1.087.642-2.141 1.06-3.237 1.293-3.251 4.521-11.041 4.915-11.848.205-.398.595-.921 1.141-1.22.742.167 1.507.304 2.277.432M237.064 291.096c.38.665.223 1.462.147 1.989-.152 1.016-3.746 8.644-5.01 11.729-.428 1.011-1.141 2.554-1.93 3.375-.704.726-2.439 1.201-3.508.655-.894-.46-1.664-2.819-1.507-3.631.204-1.063.965-2.013 1.549-3.028 1.788-3.01 6.194-10.196 6.712-10.937a2.9 2.9 0 0 1 1.018-.892c.832.266 1.682.508 2.529.74M203.251 237.526c.879-.219 2.629-.888 2.952-.029-1.873 3.28-3.17 6.783-3.817 10.443-.68.394-2.391-.598-4.145-1.334-2.372-1.011 1.164-3.019 2.396-4.832.665-.983 1.768-3.574 2.614-4.248M202.167 257.365a32.4 32.4 0 0 0 3.08 9.968c-.347.641-3.841 1.965-5.728.375-1.065-1.314 1.44-10.495 2.648-10.343" /><Path fill="#fff" d="M443.695 197.867c.861 0 1.621 0 2.296.347.932.475 3.684 3.199 3.655 4.296-.019.583-3.455 1.656-5 2.24-1.151.517-3.741 1.552-4.183 1.695-.29.104-2.349.123-2.691.114-.466.014-3.674.047-5.02.047-.542.019-10.315.275-13.637.275-3.694 0-7.321.086-11 .086-.823 0-5.025.066-5.272.095h-19.185l-1.345.052-.842.052h-10.154c-.77 0-5.903.152-8.195.285-3.161.261-7.819.655-8.024.669-.618 0-1.854.233-2.039-.455-.195-.736 1.331-1.083 1.811-1.173 5.652-1.111 11.323-2.463 17.721-3.261 10.644-1.334 15.768-1.495 17.503-2.008 1.008-.308.804-1.618 0-1.718-11.413-1.343-36.94 3.655-40.605 4.414-6.807 1.467-11.85 1.833-13.528 1.847h-15.872c-8.828-.014-12.65.954-13.253 1.073-1.707.389-3.318.925-4.835 1.708-3.213 1.647-5.257 3.679-3.902 7.533.48.831.936 1.975 1.402 2.806 1.093 2.169 2.5 4.841 3.636 6.963.823 1.509 1.331 3.403 1.331 5.297l-.456 2.355c-.028.403-1.017 2.14-1.535 1.832a2.4 2.4 0 0 1-.262-.271 41 41 0 0 0-1.987-2.677c-.228-.318-.409-.574-.49-.669-.822-1.073 1.555-2.54 1.336-3.902-.446-2.701-4.42-7.87-7.406-10.333-1.749-1.443-3.37-3.356-4.924-5.122-.642-.878-1.36-1.604-2.011-2.473-.571-.769-.837-1.248-1.07-2.188-.451-1.875.675-3.014 1.887-3.978.723-.574 2.092-1.429 3.209-1.884 3.014-1.239 10.082-2.492 14.265-3.038 1.388-.138 4.782-.541 7.321-.594 2.833 0 5.533.086 8.186.29 5.171.403 10.225 1.367 15.601 1.443 7.824.123 15.354-.366 22.945-.731 3.385-.161 6.954-.384 10.577-.688 5.557-.475 22.498-.261 24.999-.105 1.231.071 12.449.532 18.12.969 1.26.095 2.282.213 3.095.356 2.491-.053 4.962.057 7.401-.091 4.559-.289 9.132-.792 13.633-1.153zM129.901 197.425c7.235 0 13.633.607 20.621.944 3.588.162 7.063.238 10.652.404 3.618.171 7.33.446 11.009.446 6.598 0 12.816-.427 19.238-.726l4.939-.015c3.08-.052 6.484-.18 9.598.119 1.939.18 3.897.195 5.775.413 2.553.294 6.964.816 8.818 1.652 1.711.759 2.957 1.913 3.613 2.639 1.259 1.386 3.137 3.55 2.086 5.183-.432.822-1.635 2.018-2.262 2.739-.837.935-7.373 6.356-8.999 8.663-1.473 2.055-1.901 3.602-2.809 5.216-1.241 2.075.123 3.617-.333 4.832a42 42 0 0 0-3.698 4.496c-.243.132-.457.175-.628.052-1.122-.783-.903-2.459-.632-4.633.119-1.638 1.436-5.022 1.916-5.895.922-1.738 3.898-5.383 4.135-6.043 1.907-5.335-3.403-8.634-7.439-9.949-1.34-.436-2.681-.935-4.088-1.191-5.2-.94-10.771-.836-16.381-1.011-3.855-.119-7.919-.271-11.845-.271l-8.476-.019c-2.705-.213-5.443-.37-7.967-.968-4.326-1.025-7.953-1.965-12.278-2.919-3.68-.807-7.654-1.51-11.585-1.757-2.676-.166-7.335-.46-10.111-.46-2.044 0-17.184-.157-19.423.465-.775.152-.651 1.609-.128 1.737 2.909.831 13.709 1.068 20.868.822 4.207.204 8.908.726 12.887 1.295 5.148.731 9.901 1.667 14.674 3.176l5.096 1.329c.841.261 1.939.821.789 1.609-3.151 0-6.066-.612-9.26-.66-8.043 0-19.646-.242-27.713-.242-.841-.052-39.949-.47-44.617-.735-5.195-.299-9.878-2.787-11.627-3.646-.666-.294-2.624-1.813-2.505-2.112.375-.964 2.505-4.595 4.173-4.728 3.537.332 7.896.802 11.542.964 0 0 26.121-.29 26.891-.347 3.936-.308 13.286-.712 17.327-.783 2.238-.038 6.027-.18 8.157-.085M308.132 259.171c1.208-.152 3.722 10.248 2.125 11.036-1.616.859-5.462-1.111-5.908-1.633a.52.52 0 0 1-.143-.314c1.469-2.762 2.538-5.667 3.161-8.691.209-.213.447-.332.765-.398" /><Path fill="#fff" d="M255.868 198.23c-13.082 0-27.11 3.693-27.633 4.49-1.212 1.904 1.393 1.828 1.327 4.472-.081 3.237-2.601 5.406-3.475 6.341-3.333 3.532-7.582 5.331-10.52 9.275-.224.294-.442 1.623-.143 2.032.775 1.034 2.596-.109 3.033-.456 6.18-4.827 11.979-6.764 18.986-8.938 1.74-.546 10.567-2.387 21.956-1.899 10.068.432 19.352 3.062 27.433 7.799 3.228 1.889 6.108 4.239 9.17 6.778 1.112.935 1.982-.432 2.02-.939.043-.589-.437-1.42-.741-1.913-2.325-3.878-7.454-7.381-11.01-11.549-1.758-2.065-2.638-2.81-3.299-3.992-2.172-3.669 1.151-3.878.733-5.558-.324-1.339-13.211-5.943-27.837-5.943" />
    </Svg>
  );
};

BentleyIcon.displayName = 'BentleyIcon';

export default BentleyIcon;