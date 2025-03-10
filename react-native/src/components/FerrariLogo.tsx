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
 * FerrariLogo icon component for React Native
 */
const FerrariLogo = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#fff" d="M358.902 72.025c6.358 0 11.499 5.09 11.499 11.385v344.853c0 6.289-5.141 11.384-11.499 11.384h-205.92c-6.351 0-11.494-5.094-11.494-11.384V83.41c0-6.295 5.143-11.385 11.494-11.385z" /><Path fill="#FFF200" d="M145.957 123.146h220.124v304.427c0 2.532-.432 4.097-2.138 5.795-1.852 1.842-3.477 2.008-6.409 2.008l-205.005.02c-1.615 0-2.854-.515-4.191-1.647-1.656-1.42-2.381-3.191-2.381-5.064z" /><Path fill="#ED1C24" d="M366.081 107.831H145.957v15.64h220.124z" /><Path fill="#fff" d="M366.081 92.16H145.957v15.64h220.124z" /><Path fill="#009A4E" d="M152.18 76.251h207.535c3.323 0 6.388 3.206 6.388 6.336v9.984H145.957l.02-8.78v-.731c0-3.54 2.726-6.46 6.203-6.809" /><Path fill="#000" d="M358.902 72.025c6.358 0 11.499 5.09 11.499 11.385v344.853c0 6.289-5.141 11.384-11.499 11.384h-205.92c-6.351 0-11.494-5.094-11.494-11.384V83.41c0-6.295 5.143-11.385 11.494-11.385zm0 4.545h-205.92c-3.816 0-6.901 3.067-6.901 6.84v344.853c0 3.777 3.086 6.824 6.901 6.824h205.92c3.818 0 6.902-3.047 6.902-6.824V83.41c0-3.772-3.084-6.84-6.902-6.84" /><Path fill="#000" d="M251.896 142.467s-.139 1.328-.442 2.105c-.298.72-1.075 1.205-1.024 1.688.052.473.556 1.045 1.337 1.44.767.402 1.075.711 1.862.912.73.18 1.656.715 1.918.103.263-.623-.133-1.38-.576-2.105-.771-1.266-1.162-1.575-2.298-3.315-.242-.375-.432-.777-.777-.828" /><Path fill="#000" d="M246.13 279.238c.077-.227 1.897.927 2.843 1.483 1.991 1.194 2.885 1.904 4.644 3.221a62 62 0 0 1 3.467 2.81c1.717 1.482 2.643 2.748 3.106 2.46.669-.802-1.095-3.15-2.654-4.425-1.516-1.256-3.085-2.275-4.294-3.068-1.558-1.04-1.697-1.276-4.027-2.841-2.504-1.678-4.664-3.787-4.664-3.787l-2.433-1.915-3.81-3.217-4.238-3.906-3.199-3.567s-2.489-3.046-2.885-3.634c-.401-.581-1.573-2.465-2.54-4.06-.864-1.431-2.54-3.653-2.695-3.844-.905-1.097-2.972-.654-5.375-2.069-2.915-1.724-3.62-3.299-3.62-3.299s-.108-.231-.221-.355c-.109-.129-.329-.288-.329-.288l-1.528-1.065-.875-.577s-.663-.551-1.496-.906c-.838-.371-2.705-1.457-2.705-1.457l-3.338-2.13s-1.306-1.05-1.738-1.4c-.442-.334-1.265-.813-1.265-.813s-.525-.263-.684-.273-.853-.072-.853-.072-.644-.17-1.297.597c-.653.773-.493.36.571 4.704.421 1.708.381 7.735.833 9.572.576 2.357 2.232 5.404 2.402 5.764.165.356.283 1.673.283 1.673s-.072 1.066.041 1.74c.504 3.114 5.055 1.065 6.059 5.337.988 4.215-.592 8.42-.592 8.42s-.977 2.09-2.36 2.419c-1.378.319-3.518-2.738-5.066-5.213-1.527-2.435-2.777-5.626-3.178-6.64s-.612-1.235-1.075-1.971c-.684-1.096-1.234-.895-2-2.625-.772-1.729-.088-2.424-.432-3.931-.201-.834-.381-.927-.643-2.121-.252-1.189-.591-4.972-.591-4.972l-.484-3.52s-.17-1.605-.39-2.614c-.767-3.521-1.034-6.928-1.034-6.928l-.144-1.399-.051-1.446s-.046-.695.123-1.411c.17-.714.515-1.306.515-1.306s.71-1.189.833-1.488c.119-.283 1.569-1.971 1.569-1.971s.761-.633 2-1.39c1.245-.756 2.361-.705 2.361-.705s.329-.031 2.531.242 6.727 1.477 7.869 1.771c1.126.304 2.474.777 3.347 1.266 2.515 1.369 3.277.788 1.276-.782-1.348-1.055-1.728-1.529-2.813-2.516-.916-.845-1.636-1.406-2.32-2.183-.684-.793-2.633-3.669-2.633-3.669l-1.219-1.801s-.653-.741-.761-.793c-.102-.062-.432-.314-.432-.314s-.807.041-1.641-.118c-.843-.17-1.234 1.014-1.234 1.014s-1.811 3.381-3.651 5.45c-2.983 3.361-5.122 5.646-6.218 7.437-1.537 2.481-1.198 5.198-1.99 6.454-.463.736-.715.844-.967 1.487-.771 1.951 2.031 3.021 1.389 5.182-1.024 3.429-9.046 6.82-10.112 6.253-1.105-.581-.2-5.218.17-6.716.381-1.507 1.507-3.731 1.61-3.844.098-.108.371-.633.452-1.076.088-.442.119-1.446.17-2.002.052-.561.283-1.445.283-1.445s.031-.191.74-1.729c.715-1.549 3.328-5.152 5.2-8.59 1.234-2.244 1.748-3.603 2.982-5.852 1.137-2.064 3.086-5.214 3.086-5.214s.822-1.605 1.208-2.202c.391-.613 1.214-1.771 1.985-2.914.777-1.137.967-1.991 1.98-2.928.838-.782 1.409-1.199 2.505-1.549 1.63-.541 2.746-.252 4.412.211 1.728.473 2.916 1.266 4.048 2.203a16 16 0 0 1 1.965 1.992l.55.813.339.201 1.049.674 2.402 1.59s5.699 3.88 6.018 4.091c.303.201 1.326 1.04 1.527 1.107.211.061 1.728-1.586 4.706-3.639 3.445-2.393 4.664-2.213 5.807-2.835 1.126-.623 1.588-1.138 2.474-2.023 1.337-1.338 1.347-2.053 2.864-3.921 1.528-1.863 2.957-2.908 2.957-2.908s.211-.211 2.932-3.289c2.715-3.067 3.919-5.389 3.919-5.389l1.491-2.99s2.16-4.647 2.855-6.485c.699-1.842.699-2.455.699-2.455s.102-.483-.422-1.42c-.54-.932-1.096-.51-2.129-.298-1.98.422-3.184-.093-5.184-.443-1.831-.304-2.788-.854-4.624-1.158-1.861-.314-2.946-.622-4.813-.442a7 7 0 0 0-1.127.241c-1.054.35-1.347.433-2.129.886-.905.422-1.502.556-2.504.581-.695.021-1.116.041-1.759-.211-.443-.17-.695-.298-1.044-.612a2.5 2.5 0 0 1-.484-.561c-.02-.196-.082-.186.109-.504.185-.325.416-.382.416-.382l.854-.21s1.203-.314 1.316-.346c.109-.03 1.255-.401 1.759-.56.509-.16 1.065-.453 1.065-.453s.308-.494.19-.777c-.149-.32-.833-.35-.833-.35s-.957.35-1.065.381c-.103.02-1.63.504-1.63.504s-1.198.262-2.129.483c-.936.211-2.273.319-2.273.319l-.402-.108s-.452-.304-.524-.622a10 10 0 0 1-.16-.819c-.2-1.184-.442-1.899-.159-3.067.109-.489.222-.762.432-1.214.18-.376.298-.592.53-.947l.736-1.205 1.389-2.053a5.4 5.4 0 0 1 1.393-1.065c.884-.494 1.399-.633 2.505-.757 1.085-.119 1.234-.108 2.772-.453a11 11 0 0 0 2.643-.962s3.698-1.359 5.95-2.466c2.36-1.157 3.389-2.393 5.832-3.35a20 20 0 0 1 2.7-.865.5.5 0 0 0 .242-.329c.103-.386-.493-.566-.905-.526-.37.031-1.214.423-1.404 0-.145-.323.771-.514.771-.514s.432-.201.442-.442c.011-.371-.621-.13-.905-.16-1.435-.16-1.548-.423-2.541-.664-1.167-.293-1.799-.654-3.013-.705-1.07-.042-2.073.185-2.746.344-.663.17-.684-.483-.422-.612 1.878-.875 1.918-.947 3.246-1.009.724-.031 1.738.124 1.851.18.108.062 1.558-.01 1.929-.391.38-.37-1.188-.35-1.929-.643-.683-.273-1.728-.35-1.707-.803.036-.453.54-.201.9-.293.452-.109.715-.098 1.177-.16.834-.113.906-.19 2.14-.293 1.219-.118 2.978.402 2.978.402s1.846.819 2.751 1.251c.905.422 2.001.643 2.001.643s1.285.18 2.263-.432c.992-.608.432-1.009.087-1.57-.34-.525-.771-1.287-.139-2.728.561-1.256.853-2.722 1.013-2.856.202-.159.978.967 1.481 1.431 1.805 1.688 4.192 2.522 6.445 6.052.175.283 1.008-.17 3.62.231 2.613.402 4.897 3.201 5.473 3.871.597.674 1.368.638 1.368.638l1.255.17 4.556.077s2.068-.371 3.261.083c.833.313 3.61 2.172 2.345 2.876-.885.495-1.718-.591-2.52-.643-.947-.061-1.358.119-2.202.329-1.769.443-5.564 1.591-4.186 2.054.102.041.298.071.298.071l.679.119s1.667.38 2.674.777c1.522.602 2.243 1.266 3.642 2.089.801.463 1.152.927 2.026 1.189.802.232 1.316 0 2.139.139 1.08.191 1.686.412 2.674.886 1.471.705 2.006 1.559 3.323 2.506.658.478 1.213.551 1.707 1.194.113.144.206.222.258.391.175.587-.968.242-1.574.145-.669-.114-.946-.443-1.563-.726-.916-.433-1.348-.906-2.346-1.086-.72-.14-1.152-.031-1.892.01-.72.03-1.1.139-1.821.149-1.224.021-1.913-.087-3.117-.34-1.347-.282-2.016-.808-3.353-1.086-1.512-.314-4.186-1.61-3.929-.314.134.623 1.553 1.148 1.553 1.148s.977.525 1.903.936c.926.402 1.44 1.015 1.44 1.015l.637.474s.658.905 1.523 1.929c.843 1.009 2.345.978 2.345.978s.905 0 2.859.401c1.944.402 3.95 1.605 3.95 1.605s1.511 1.04 2.396 2.085c.874 1.045.37 1.57.257 1.678-.102.113-.062.061-.185.113-.102.051-1.193-1.318-1.193-1.318l-.781-.663s-.762-.536-1.749-.855c-.987-.314-1.317-.103-1.317-.103s-2.098.587-3.929.535c-1.81-.051-2.756-.777-2.756-.777l-1.152-.772s-1.729-1.622-1.791-.854c-.041.52.762 1.096.762 1.096s.555.561.926.917c.699.689.988 1.034 1.79 1.749.802.721 1.295.721 1.295.721s.432.102.597.134c.165.03.453.108.453.108s.268.103 1.522.613c1.244.504 2.592 1.6 2.592 1.6s.124.103.309.14c.185.02.555.206.658.236.113.026.432.026 1.152.129.731.108.453.571.453.571l-.124.175-.597.401s-.771.222-1.296.247c-.535.031-1.296-.267-1.296-.267l-1.615-.607s-1.635-.432-1.985-.489c-.35-.052-1.81-.345-2.057-.396-.236-.057-.967-.32-1.162-.433-.196-.107-.555-.18-1.44-.612-.875-.432-1.224-.931-2.314-1.277-1.101-.349-1.769-.421-2.592.15-1.42.978 2.139 1.138 3.908 2.022 2.613 1.287 4.084 2.234 4.701 3.624.627 1.395 1.255 1.899 1.255 1.899s1.841.927 2.663 1.899c.453.524.515.957.967 1.482 1.008 1.184 2.963 1.117 3.354 2.12.37.936-1.585.515-2.603.422-1.831-.18-2.273-1.858-3.981-2.532-.966-.386-1.583-.386-2.571-.725-1.8-.592-2.643-1.369-4.444-1.93-1.09-.334-3.065-1.77-2.818-.664.041.267.205.473.277.633.093.16.545.746.545.746s.607.803.884 1.015c.258.221 1.42 1.096 3.086 2.002 1.646.906 3.086 2.645 3.086 2.645s.494.711.73 1.205c.247.556.072.725.463 1.498.36.766.535.916 1.028 1.389 1.214 1.169 2.49.936 4.032 1.57.422.18.453.242.905.725.453.479-.083.684-.083.684s-1.717.443-2.828.35c-1.439-.113-2.088-.556-3.487-1.256-1.419-.694-2.159-1.945-2.303-2.022-.124-.083-.473-.453-.741-.644-.267-.19-.957-.334-1.574-.504-.627-.169-.977-.201-1.604-.371-.853-.242-1.739-.617-2.14-.746-.401-.139-1.316-.303-1.985.093-1.337.792 2.077 1.327 3.137 2.465.545.572.771.973 1.286 1.575.391.463.556.788 1.04 1.148.328.241.935.504.935.504s.822.381 2.026 1.045 2.612 2.542 2.612 2.542l.854 1.307.504.746.134.345.184.422s.618.803 1.07 1.065c.453.273.37.51.37.51s-.05.165-.37.345c-.308.191-.483.031-.935-.103-.453-.128-.751-.561-1.142-.875-.412-.329-.843-1.127-1.574-1.58-.647-.391-1.491-.53-1.82-.633-.319-.118-1.121-.622-1.44-.761-.309-.124-1.142-.505-1.142-.505s-1.604-.895-2.49-1.137c-.883-.247-.318.294-.318.294s.793 1.235 1.553 1.728c.988.654 2.376 1.231 1.923 1.76-.309.345-.72.222-1.172.17-.741-.087-1.636-.973-1.636-.973s-.37-.241-2.026-.767c-1.646-.54-1.039.366-.658.855.371.474.875.746.875.746l1.121.504.514.16s.454.082 1.945.432c1.491.34 2.314 1.066 2.314 1.066s.802.746 1.913 1.569a6.06 6.06 0 0 0 2.859 1.128c.617.077.597.509.597.509s.082.397.042.525a.304.304 0 0 1-.289.243c-.124 0-.185.051-.349.139-.165.082-.803.185-.803.185s-1.666-.051-2.982-.376c-1.296-.319-2.449-1.225-2.572-1.276-.103-.051-1.317-.725-2.16-.993-.812-.273-2.119-.154-2.263-.103-.133.052-.586.124-1.357.35-.782.206.195.504.195.504l.555.051 1.327.103s1.379.16 2.541.592c1.162.422 1.923 1.277 2.695 2.059.771.766 1.625 1.271 1.625 1.271l.617.401.319.242.083.211s-.031.108-.083.241c-.051.139-.246.242-.246.242s-.289-.052-.412-.052c-.144 0-1.018-.463-1.666-.746-.668-.293-1.008-.571-1.728-.746-.617-.15-1.44-.217-1.626-.16-.184.052-1.543.242-2.592.314-1.048.082-1.954.098-3.188-.051-1.759-.211-4.093-1.602-4.392-1.215-.607.813 1.245 1.045 2.15 1.565 1.234.715 3.374 1.358 3.374 1.358s1.563.345 2.478.777c2.006.932 2.613 2.311 4.228 3.763.884.812 1.604 1.162 2.797 1.338 1.029.15 1.008.026 2.633-.293 1.636-.324 2.624-1.874 3.096-1.307.093.108.052.211.031.371a3 3 0 0 1-.164.453s-.185.262-.473.56c-.298.293-1.419.906-2.006 1.148s-2.026.643-3.836.587c-1.811-.052-4.361-1.442-4.361-1.442l-1.83-.772s-.844-.396-1.42-.612c-1.522-.577-2.489-.525-4.053-.937-.967-.262-1.604-.535-2.479-.715-.884-.19-.38.16-.298.283.411.561.966.741 1.666 1.065.926.453 1.574.361 2.52.762 1.06.428 1.986 1.03 2.573 1.411.575.37 1.008.793 1.573 1.379l1.944 1.668s.453.37.504.525c.051.16.267.561.165 1.204-.114.644-.638.191-.638.191l-.514-.329-.515-.474-.813-.674s-.699-.633-1.903-1.245c-1.193-.623-2.633-.778-2.633-.778s-1.276-.19-1.234.211c.061.397.348.433 1.356.695 1.019.263 1.687.778 1.687.778s1.04.772 1.79 1.625c.74.855.957 1.684.957 1.684s.38.7 1.337 1.626c.957.936 1.461.612 1.409 1.066-.052.453-.474.535-.474.535s-.246-.022-.349-.022-.349-.138-.617-.241c-.267-.103-1.275-.803-1.275-.803s-1.584-1.286-1.759-1.41c-.196-.139-1.687-1.256-1.687-1.256s-.884-.566-1.512-.885a19 19 0 0 0-1.985-.803c-.473-.154-1.358-.206-1.358-.206s-1.059-.159-1.707-.401c-1.018-.392-2.202-1.478-2.335-1.529-.144-.056-1.09-.381-1.276-.35-.184.021-.617 1.812-.719 2.846-.432 4.334.719 7.21 2.509 11.184 2.582 5.774 9.771 12.954 9.771 12.954s1.811 1.024 2.572 1.636c2.15 1.684 5.709 4.066 8.867 7.216 2.694 2.701 6.275 7.493 6.275 7.493s2.076 2.892 3.044 4.94c1.173 2.512 2.119 6.342 2.119 6.342s.083.658.144.803c.082.133.267.308.391.308l1.254.042c.124 0 1.554-.102 2.5-.34.936-.237 3.158-1.256 4.639-2.027 1.46-.783 3.22-2.265 3.22-2.265s.338-.289 2.047-2.203c1.728-1.914 2.839-4.786 3.26-5.872.412-1.075.751-3.149.998-6.691.267-3.555-.216-7.303-.216-7.303s-.648-5.229-1.04-7.01c-.39-1.77-1.336-4.673-1.336-4.673s-.658-2.583-.864-4.214c-.217-1.632-.247-4.287-.247-4.287s0-1.626.524-4.632c.545-2.99 2.377-6.006 2.377-6.006s.514-1.015 2.49-3.382c2.026-2.424 2.673-2.805 4.669-4.251 1.584-1.138 3.63-2.97 4.3-2.537.74.463-.721 1.389-1.215 1.873-1.244 1.235-3.568 3.417-5.451 6.706-1.645 2.846-2.263 4.73-2.673 6.588-.413 1.853-.237 3.89-.185 4.586.062.695.442.442.442.442s4.001-3.217 6.171-5.651c2.355-2.635 4.453-7.324 5.276-7.364.555-.036.813 1.219.679 1.801-.513 2.434-.688 2.738-1.481 4.354-.905 1.852-1.748 2.676-3.003 4.385-1.317 1.791-1.965 2.475-3.024 4.847-1.531 3.413-.637 6.048-.637 6.048s.185 1.601.904 1.58c1.205-.041 3.847-3.382 5.576-6.115 1.276-2.002 1.738-4.317 2.572-5.532.761-1.076 1.43 1.75 1.1 3.417-.381 1.981-1.358 3.763-3.507 6.567-2.098 2.738-2.037 5.342-2.037 5.342s-.216 1.189-.391 3.783c-.164 2.583.576 6.506.576 6.506s.658 3.278.793 5.764c.123 2.501.041 8.178-2.295 12.599-.925 1.77-2.911 4.22-2.911 4.22s-1.532 1.575-2.787 2.491c-1.256.916-4.269 2.347-4.269 2.347s-2.088.72-2.376.783c-.309.082-.493.339-.493.339s.184.402.266.566c.072.166.658 1.606.658 1.606s.627 2.038.864 3.654-.041 1.987-.267 3.222c-.226 1.184-.74.637-.874 2.964-.113 2.059.813 3.088.648 5.394-.071 1.009-1.214-1.276-1.769-2.243-1.173-2.101-.896-5.333-.916-6.135-.031-.803-.093-1.689-.391-2.697-.36-1.318-.905-2.337-1.512-3.14-.617-.793-1.265-1.245-1.481-1.163-.216.073-.237.494-.237.7-.011.227.421.989.514 1.154.113.154.885 1.564.885 1.564s.339 1.091.472 3.212c.135 2.1-.514 4.714-.514 4.714s-.843 2.934-1.727 4.664c-.989 1.903-3.179 4.497-3.179 4.497s-1.574 1.442-2.757 3.809c-1.162 2.367-.164 3.397-.597 3.705-.452.299-1.378-1.369-1.625-2.491-.237-1.05-.124-1.544.309-2.718.401-1.132 1.348-2.769 1.348-2.769l1.409-2.398s1.707-3.252 2.242-5.62c.535-2.347-.082-4.961-.082-4.961s-.072-.864-.658-.824c-.597.031-1.008.546-1.255 1.174-.484 1.297.206 1.06-.536 3.222-.575 1.698-.74 1.472-1.049 2.48-.37 1.204-.565 2.439-.544 3.191.031.741-.38.433-.38.433s-.72-1.339-.72-3.006c0-.906.041-1.42.144-2.327.164-1.451.761-3.674.761-3.674s.638-2.193.504-4.19c-.153-2.017-.853-2.387-.853-2.387s-.185-.268-.967-.227c-.771.062-.73 1.451-.73 1.451s-.237 1.988-.545 3.222c-.854 3.407-1.995 5.198-4.012 8.07-1.83 2.594-4.309 4.88-5.554 5.95-1.235 1.091-5.04 3.86-5.04 3.86l-4.464 2.974s-1.769 1.73-2.572 3.789c-.822 2.048-.782 3.654-.309 5.537.474 1.894 1.153 2.759 1.512 3.293.35.516 1.04 1.442 1.266 2.534.144.668.042 1.069.082 1.749.042.597.124.926.103 1.534-.02.947.154 1.615-.391 2.387-.391.587-1.461 1.101-1.461 1.101s-1.213.535-1.934.978c-7.591 4.581-10.285 7.555-14.564 12.66-1.358 1.637-.36 1.535-1.81 3.47-.88 1.153-2.911 1.153-3.647 2.532-1.023 1.883 2.304 3.736-1.537 5.394-4.953 2.141-13.475.607-13.645-.062-.462-1.832 1.666-3.952 2.423-4.797 3.466-3.788 6.562-3.881 7.699-7.02.246-.669.149-1.245 2.91-3.294 1.939-1.431 9.684-7.267 13.069-11.157 1.162-1.338 2.159-2.223 2.663-3.665a2.24 2.24 0 0 0-.504-2.378l-1.388-2.265-2.664-4.766s-1.121-2.532-1.728-3.993c-.627-1.462-1.79-5.395-1.79-5.395s-.853-3.54-.998-5.846c-.257-4.138.309-6.546 1.4-10.56 1.409-5.209 4.607-7.391 5.883-12.559.371-1.502.453-4.076-.309-3.952-.72.134-.781 2.161-1.336 3.521-2.058 5.126-4.773 7.37-6.264 12.68-.998 3.593-1.409 5.724-1.4 9.45.012 2.13-.071 1.74.474 5.435.216 1.358.544 2.089.946 3.416.288.948 1.059 2.718 1.059 2.718s1.06 2.337 1.43 3.973c.113.567.258.885.216 1.452-.072.977.103 1.184-.37 2.068-.586 1.102-.227 1.751-2.099 2.162-1.666.349-5.07-.762-5.07-.762s-13.994-4.241-22.928-3.016c-1.769.237-2.72.885-4.499.854-1.62-.02-2.443-1.287-4.063-.803-.329.093-.432.33-.73.526-2.366 1.646-.556 4.384-6.789 2.964-3.826-.875-8.46-3.221-7.658-4.694 1.074-1.956 2.515-2.275 5.539-3.521 3.235-1.317 8.09-.947 9.047-1.008 1.167-.093 2.844-.906 4.931-.958 3.611-.062 4.253.371 4.253.371l6.13.545 11.731.145s2.098-.155 2.932-.32c.843-.165 1.507-1.822 1.969-2.615.453-.781-.021-1.935-.021-1.935l-.349-.545-1.116-1.801-2.062-3.479-2.289-4.57s-1.496-3.181-2.293-5.27c-.792-2.08-1.255-3.253-1.78-5.404-.55-2.214-.89-4.004-.961-5.785-.087-2.556-.257-4.542.458-6.632" /><Path fill="#fff" d="M322.285 274.997c2.467-3.17 2.705-6.114 2.848-10.262.113-3.016-1.027-7.663-1.027-7.663l-.155-.34s-.432-.561-.698.18c.04.654.123 1.179.123 1.179l.143 5.986s-.185 3.015-1.212 6.124c-1.729 5.249-6.316 7.586-6.984 9.48-1.144 3.139 4.01-.865 6.962-4.684M296.408 284.684s-1.008.288-1.029 1.286c-.02.999.247 1.863.216 3.068-.02 1.534-1.43 3.304-.524 3.881 1.553.988 2.889-5.971 2.417-7-.474-1.03-.936-1.246-1.08-1.235M278.983 332.927s-.289-.154-.854.062c-.555.216-.515.793-.515.793s-.113.618.34.68c.453.082 1.193-1.03 1.193-1.153 0-.124-.164-.382-.164-.382M262.588 344.59s-.165.165-.021.277c.154.135.37-.03.37-.03s2.829-2.213 4.506-3.767c1.769-1.668 4.32-4.539 4.32-4.539s.175-.217-.021-.402c-.206-.185-.689.103-1.09.288-.35.185-.556.381-.823.597a56 56 0 0 0-1.09 1.092l-2.181 2.12-1.379 1.297-1.336 1.276-.556.639s-.144.247-.184.308c-.043.072-.186.257-.186.257s-.206.196-.206.258c0 .051-.062.103-.062.165-.02.082-.061.164-.061.164M257.697 347.802s-.303-.247-.781-.011c-.484.258-.998.916-1.04.988-.046.093-.308.443-.128.752s.792-.145.884-.165c.088 0 .885-.637.885-.637s.463-.289.18-.927M248.333 357.292s-.402-.741-.926-.433c-.525.309-.813.412-1.296 1.081-.082.113-.602.783-.695.957-.092.166-.612 1.154.443 1.225 1.81.103.622-1.059 1.244-1.513.504-.349 1.45-.257 1.461-.628.01-.37-.231-.689-.231-.689M216.239 319.371s-1.085.268-1.167.639c-.088.391.632.761.745.782.129.02.371.309 1.095-.186.715-.483.684-.895.684-.895s.422-.494-1.357-.34M233.891 318.795s-.011-.402-.777-.349c-.782.041-.946.184-.967.308-.025.113.041.309.735.371.705.041.988-.001 1.009-.33M250.578 319.279c-1.404-.011-.961.031-1.825.072-1.568.082-2.422.02-3.97-.083-2.171-.144-5.529-.679-5.529-.679s-.422-.103-.591.175c-.155.257.411.854.915 1.009 2.751.854 2.9.711 4.772.741 1.045.01 1.626-.093 2.665-.155 1.316-.102 1.928.103 3.363-.278.375-.093.735-.792.2-.802M259.98 316.489s-.282-.329-.864-.041c-.575.278-.925.905-.925.905s-.273.433.309.372a3.7 3.7 0 0 0 1.208-.412c.149-.083.571-.474.272-.824M251.797 203.568s3.97-3.721 6.814-8.641c1.686-2.934 2.422-9.763.972-8.065-.654.777-1.446 4.318-2.701 6.942-1.789 3.736-5.61 9.028-5.61 9.028s-.822 1.76.525.736M235.927 213.022s-.422.33-.231.855c.2.535 1.008.134 1.008.134s1.836-.695 3.76-.767c1.928-.082 4.602.494 4.602.494s1.275.35 1.487.432c.21.088.905.422 1.023.463.103.046.767.371 1.137.036.37-.34-2.319-2.784-5.065-3.155-4.573-.623-7.576 1.348-7.576 1.348zM217.095 229.136c.323.278 1.851-2.635 3.126-4.478.936-1.348 2.645-3.602 2.645-3.602s.77-1.035-.535-.458c-.53.237-1.98 1.343-3.004 3.376-.864 1.729-2.572 4.889-2.232 5.162M206.531 216.48s-.33 1.128.987 2.537c1.327 1.416 1.667 2.584 2.51 1.74.232-.231-.823-2.136-1.358-2.666-.55-.525-.941-.957-.941-.957l-.344-.283-.443-.247-.252-.102s-.067-.063-.159-.022M202.251 205.672s-1.429.268-1.779.963c-.355.695 1.645.273 1.645.273s1.327.071 1.358-.433c.031-.514-.169-.566-1.224-.803M179.534 243.346c-.73-.211-.853 1.225-.951 1.688-.082.463.33 1.389.499 1.389.164-.01.745-.916.776-1.358.031-.453.32-1.518-.324-1.719M203.127 271.405s-1.306-1.035-1.507-.623c-.195.412 1.075 2.228 1.075 2.228s.391.598.992.329c.591-.287.381-.946.381-.946s-.401-.844-.941-.988M193.278 241.061s-.334-.087-.452.314c-.124.401-.113 1.055-.201 1.847-.071.618.16 2.265.16 2.265s.128 1.307.39 2.085c.283.853 1.034 2.068 1.034 2.068s.283.623.632.593c.345-.037.263-.443.263-.443s-1.096-4.343-1.126-4.786c-.129-1.446-.129-3.207-.129-3.207l-.01-.263s-.011-.463-.561-.473M194.985 227.809s-.602-.113-1.157 1.044c-.56 1.174-.442 1.647-.391 1.699.041.051.483.041 1.193-1.044.705-1.076.545-1.489.545-1.489s-.041-.21-.19-.21M211.535 239.815s.725 1.086-.663.834c-1.393-.252-4.32-2.563-5.513-3.185-1.178-.623-3.117-.819-2.304-1.549.149-.124.19-.243.421-.253.242-.01 1.044.303 1.095.34.042.02 2.104.874 2.181.895.072.031 1.229.525 2.051 1.008.824.489 2.16 1.425 2.16 1.425zM250.111 273.053c.38 1.193-4.392-2.523-6.948-4.494-6.773-5.219-15.064-15.918-14.03-16.865.854-.778 4.253 4.122 9.237 9.52 5.328 5.755 11.52 11.128 11.741 11.839M270.034 267.936c-1.48 1.58-2.005 3.603-1.152 5.116.834 1.471 1.091-2.152 2.017-3.217.802-.932 1.296-.782 2.612-1.719 2.243-1.58-1.604-2.192-3.477-.18M261.558 234.164c-1.018-.164-.987 1.385-.844 2.481.68 4.91 2.881 8.693 5.822 12.254 1.79 2.172 6.697 6.042 7.262 5.42.206-.222-4.67-3.994-7.776-8.842-2.201-3.437-3.374-6.345-3.652-9.181-.03-.361.052-1.992-.812-2.132M242.561 161.396c-2.212 1.199-6.048 2.255-6.048 2.255s-.176.38.319.339c3.286-.263 4.541-.674 6.29-1.446 1.748-.756 3.018-2.857 3.018-2.857s.711-1.307-.606-.231c-.412.329-1.76 1.276-2.973 1.94M269.242 152.961s-.751-.165-1.255.15c-.504.319-.361.571-.361.571s.783.597 1.338.695c.555.082 1.748.602 1.708.201-.052-.412-.72-1.148-.958-1.348a1.1 1.1 0 0 0-.472-.269M256.684 176.018c.127.263 2.37-.35 3.234-.834.674-.381.941-1.657.941-1.657s.185-1.236-.102-.757c-1.281 2.095-4.198 2.98-4.073 3.248M256.612 170.259c.905-1.74-2.485 1.806-4.212 2.722-1.055.556-2.772 1.297-2.772 1.297s-.453.566.179.514c.633-.041 2.243.505 3.549-.504.309-.247 1.667-2.223 1.667-2.223s1.156-.983 1.589-1.806M256.087 177.659c.071.283 3.872.19 4.824-.097.751-.206 1.162-1.534 1.162-1.534s.452-1.163.061-.772c-1.722 1.76-6.114 2.12-6.047 2.403M195.046 212.497s-.576-.211-1.291.865c-.71 1.07-3.908 5.934-3.343 6.649.674.844 3.446-4.344 4.29-5.311.853-.983.504-1.971.504-1.971s-.01-.222-.16-.232M264.727 300.185c-.35 1.616.061 4.921.618 5.569 1.357 1.636.524-2.563.719-4.036.165-1.368.329-1.842 1.008-3.304 1.214-2.635-1.634-1.667-2.345 1.771M253.052 159.647s-1.054.031-1.877.484c-.833.453-1.039 1.096-1.039 1.096s-.169.463-.056.716c.242.55 1.384-.284 2.181-.011.642.231.951.422 1.444 1.013.432.516 1.188 1.256 1.662.834.488-.411.309-1.466.309-1.466s-.561-1.719-1.296-2.203c-.741-.494-1.328-.463-1.328-.463M235.536 171.736s-.591.093-.452.813c.139.705.525.597.525.597s1.224-.525 1.152-1.261c-.088-.741-1.225-.149-1.225-.149M226.983 167.897s-.643.026-1.096.823a10 10 0 0 0-.704 1.616s-.211 1.04.159 1.369c.376.324.787-.674 1.326-1.065.324-.232.525-.335.86-.571.458-.315 1.203.087 1.152-.839-.067-.933-1.054-1.375-1.697-1.333M254.621 157.938s-1.455-.211-1.399.35c.052.525.788.211 1.261.422.462.211.771.293 1.141.633.273.242.241.716.576.726.463.01.371-.18.371-.18s-.422-1.256-.972-1.611c-.545-.361-.978-.34-.978-.34M270.856 163.81c-.206.793-.329 1.065-.329 1.065s-.411 1.611 1.214 1.019c1.625-.597.782-.345 1.954-.916 1.152-.566 1.132-.252 1.975-.211.288.01.473.02.906-.061.369-.083.215-.515-.607-.737-.884-.231-1.965-.18-3.219-.191-.741-.009-1.678-.76-1.894.032M271.578 157.856s-.741-.17-1.255.149c-.504.314-.35.566-.35.566s.772.613 1.338.695c.555.098 1.748.612 1.707.201-.062-.402-.72-1.148-.956-1.348-.236-.202-.484-.263-.484-.263M274.438 169.04s-.793-.16-1.338.143c-.535.299-.391.541-.391.541s.844.567 1.44.654c.597.082 1.872.566 1.821.18-.051-.381-.772-1.086-1.008-1.276-.237-.192-.524-.242-.524-.242M274.684 173.094s-.844-.19-1.42.16c-.575.345-.401.623-.401.623s.875.664 1.513.757c.627.098 1.985.654 1.923.211-.051-.442-.813-1.245-1.08-1.461-.247-.228-.535-.29-.535-.29M275.064 177.047s-.915-.21-1.533.18c-.627.391-.432.706-.432.706s.946.74 1.625.854c.69.109 2.16.741 2.099.242-.062-.494-.885-1.411-1.173-1.652-.267-.258-.586-.33-.586-.33M274.982 181.936s-.915-.195-1.533.191c-.627.381-.452.694-.452.694s.966.741 1.646.855c.679.108 2.149.741 2.088.247-.072-.499-.885-1.415-1.162-1.658a1.6 1.6 0 0 0-.587-.329M274.314 191.468s-.926-.201-1.544.191c-.617.386-.431.695-.431.695s.946.746 1.625.854c.689.103 2.16.746 2.099.242-.062-.494-.884-1.405-1.173-1.658-.278-.252-.576-.324-.576-.324M274.93 186.702s-1.049-.241-1.79.211c-.71.442-.494.803-.494.803s1.101.864 1.892.988c.783.129 2.49.854 2.428.288-.082-.581-1.029-1.636-1.357-1.919-.33-.289-.679-.371-.679-.371M273.861 195.781s-.762-.181-1.275.144c-.515.319-.35.571-.35.571s.782.623 1.337.706c.566.093 1.77.612 1.728.2-.061-.412-.73-1.158-.966-1.359a1.1 1.1 0 0 0-.474-.262M273.139 199.908s-.617-.134-1.049.129c-.41.262-.288.473-.288.473s.648.505 1.111.582c.462.072 1.481.515 1.44.165-.042-.335-.617-.958-.802-1.127a1.1 1.1 0 0 0-.412-.222M272.257 203.676s-.556-.129-.947.113c-.371.231-.268.432-.268.432s.587.453 1.009.515c.422.077 1.326.463 1.286.159-.031-.303-.535-.875-.711-1.024-.175-.154-.369-.195-.369-.195M271.372 206.763s-.576-.129-.946.103c-.392.242-.278.432-.278.432s.586.463 1.008.525c.422.067 1.327.463 1.286.15-.031-.304-.535-.864-.72-1.014a.84.84 0 0 0-.35-.196M270.293 210.346s-.453-.108-.772.082c-.309.201-.206.35-.206.35s.473.372.813.433c.339.051 1.079.371 1.039.113-.031-.242-.442-.695-.576-.823-.144-.124-.298-.155-.298-.155M269.005 213.696s-.391-.093-.658.072c-.267.17-.185.308-.185.308s.412.314.7.355c.288.057.925.33.894.109-.02-.211-.38-.602-.493-.705a.8.8 0 0 0-.258-.139M267.68 216.882s-.402-.087-.668.083c-.259.159-.166.293-.166.293s.391.319.69.371c.298.041.925.313.894.108-.02-.227-.38-.613-.493-.721-.123-.103-.257-.134-.257-.134M181.576 233.089s-.663 1.286-.334 1.992c.324.71 1.219-1.128 1.219-1.128s.925-1.832.55-2.166c-.38-.34-.601.607-1.435 1.302" /><Path fill="#000" d="M275.197 398.33v-2.5c0-5.683 2.87-6.794 11.253-6.835 7.715.041 10.44 1.008 10.44 5.908v18.909h2.849v4.261h-18.843c-3.971 0-6.562-2.728-6.562-6.083v-3.83c0-3.304 1.686-6.186 7.591-6.217h7.364v-5.754c0-3.006-.206-3.366-3.218-3.366h-.032c-3.61 0-3.846.474-3.846 3.366v2.141zm8.744 6.784c-1.481 0-2.355 1.194-2.355 2.676v3.654c0 1.472.627 2.645 2.355 2.666h2.654c1.461 0 2.654-.453 2.654-2.666l.02-6.33h-5.327999999999999M257.275 396.118v-6.609h-10.511v3.933h2.802v20.359h-2.802v4.272h13.166v-4.272h-2.655v-10.91c0-1.018 6.198-8.851 6.198-7.947v10.839h7.283v-12.197c0-2.789-1.821-4.59-5.144-4.59-3.95-.001-6.619 4.971-8.337 7.122M341.068 413.781v-24.272H330.34v3.933h3.004v20.339h-3.004v4.292h13.546v-4.292zM230.229 396.118v-6.609h-10.512v3.933h2.803v20.359h-2.803v4.272h13.155v-4.272h-2.643v-10.91c0-1.018 6.192-8.851 6.192-7.947v10.839h7.277v-12.197c0-2.789-1.811-4.59-5.138-4.59-3.94-.001-6.614 4.971-8.331 7.122M215.694 408.717h-7.375v2.141c0 2.903-.483 3.026-4.078 3.067h-.052c-4.12.02-3.888-.391-3.842-3.067v-5.075h15.346v-11.024c0-3.995-3.013-5.672-10.964-5.702h-1.141c-8.584.04-10.867 1.996-10.867 6.937v16.14c0 5.434 3.208 6.351 11.026 6.567h.853c8.533-.196 11.093-.783 11.093-5.858zM200.43 395.17c0-1.502.453-2.244 2.171-2.265h3.234c1.338 0 2.083.598 2.083 1.668v8.266h-7.488z" /><Path stroke="#000" strokeMiterlimit={10} d="M337.18 383.642v-5.167" /><Path fill="#000" d="M313.112 396.118v-6.609H302.59v3.933h2.798v20.359h-2.798v4.272h13.165v-4.272h-2.643v-10.91c0-1.018 6.182-8.851 6.182-7.947v10.839h7.293v-12.197c0-2.789-1.832-4.59-5.165-4.59-3.928-.001-6.603 4.971-8.31 7.122" /><Path fill="#000" d="M183.527 404.187v-3.808h-4.099v13.433h7.102v4.261h-20.823v-4.261h5.539v-30.17h-4.351v-5.188h162.19v5.188H179.428v12.115h4.099v-3.582h4.716v12.012zM340.963 378.269h-7.734v5.106h7.734z" />
    </Svg>
  );
};

FerrariLogo.displayName = 'FerrariLogo';

export default FerrariLogo;