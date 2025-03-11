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
 * LotusIcon icon component for React Native
 */
const LotusIcon = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <G clipPath="url(#prefix__a)"><Path fill="#FEF100" d="M255.126 49.97q1.092.001 2.184-.001c3.561-.006 7.109.059 10.664.263l.242.014q1.435.082 2.868.19l.393.029c13.228.985 26.37 3.22 82.461 24.133q.483.266.97.527a125 125 0 0 1 4.569 2.577l.974.572a200 200 0 0 1 21.102 14.275q.128.097.259.2a131 131 0 0 1 3.024 2.394q.738.602 1.491 1.184c.66.513 1.293 1.053 1.922 1.604q.637.558 1.296 1.091c.544.44 1.058.906 1.573 1.38.296.266.6.516.912.764.68.547 1.309 1.144 1.94 1.747q.696.664 1.422 1.293c.376.33.741.672 1.107 1.014l.218.203q.536.498 1.049 1.018c.263.265.532.514.817.755.658.572 1.268 1.192 1.883 1.809l.389.389.811.811 1.032 1.032a303 303 0 0 1 1.183 1.182c.623.622 1.24 1.246 1.811 1.918.214.249.445.478.681.706.381.377.739.764 1.088 1.171.346.392.705.773 1.063 1.154.488.521.972 1.043 1.438 1.584q.344.393.698.778c.459.508.892 1.033 1.322 1.566.254.307.517.603.785.897.449.493.872 1.002 1.292 1.52q.456.557.924 1.103.67.786 1.312 1.595.287.362.577.722.99 1.23 1.951 2.482.41.537.825 1.072a193 193 0 0 1 5.089 6.948l.533.75c1.955 2.748 3.787 5.594 5.574 8.454l.216.345c2.279 3.654 4.412 7.387 6.46 11.174l.376.691a159 159 0 0 1 5.209 10.415q.275.606.554 1.209c2.701 5.88 5.067 11.902 7.181 18.017l.113.327c2.528 7.322 4.595 14.783 6.281 22.342l.069.312c2.534 11.365 4.031 23.016 4.568 35.188l.028.651c.118 2.781.124 5.561.123 8.345v.358c-.001 3.654-.031 7.299-.254 10.947l-.048.797c-.775 12.878-2.68 25.633-19.134 75.581l-.152.325a240 240 0 0 1-2.454 5.024l-.361.726a122 122 0 0 1-2.46 4.692q-.262.475-.522.954a149 149 0 0 1-3.122 5.452q-.343.572-.685 1.146a151 151 0 0 1-2.509 4.077q-.266.419-.528.839c-2.223 3.544-4.621 6.984-7.086 10.362l-.2.274a177 177 0 0 1-2.768 3.689l-.479.624a151 151 0 0 1-3.578 4.492q-.365.444-.728.89c-.922 1.128-1.873 2.233-2.822 3.338q-.353.41-.702.823a71 71 0 0 1-2.132 2.393q-.358.386-.702.785c-.457.528-.936 1.035-1.413 1.544q-.499.53-.99 1.066a55 55 0 0 1-2.164 2.243c-.349.344-.684.693-1.004 1.065-.519.602-1.081 1.158-1.644 1.718l-.318.319a29 29 0 0 1-1.617 1.511c-.403.357-.776.743-1.153 1.127a25 25 0 0 1-1.649 1.559c-.215.189-.417.387-.617.592-.34.345-.696.662-1.062.978-.349.308-.69.624-1.031.94a90 90 0 0 1-2.659 2.345q-.659.564-1.314 1.133c-1.175 1.022-2.352 2.037-3.582 2.993-.554.432-1.096.877-1.636 1.325a69 69 0 0 1-2.287 1.811q-.345.265-.686.534a130 130 0 0 1-3.821 2.879l-.269.196q-1.753 1.275-3.528 2.52l-.564.397c-5.469 3.858-11.185 7.38-17.028 10.642l-.727.407a182 182 0 0 1-6.8 3.608l-.79.401a152 152 0 0 1-7.044 3.367q-.647.29-1.293.584c-4.622 2.102-9.347 3.979-14.129 5.687l-.538.192c-11.59 4.158-23.545 7.191-58.427 11.641l-.357.019c-11.625.593-23.33.205-97.993-19.2l-.33-.155a245 245 0 0 1-5.018-2.451l-.727-.361a122 122 0 0 1-4.692-2.46 110 110 0 0 0-.954-.522 148 148 0 0 1-5.426-3.107q-.532-.32-1.065-.636a182 182 0 0 1-7.851-4.963l-.312-.209c-3.541-2.36-7.01-4.798-10.39-7.384q-.647-.495-1.301-.981a103 103 0 0 1-3.441-2.715 66 66 0 0 0-1.314-1.046 55 55 0 0 1-2.536-2.118q-.515-.449-1.035-.893l-.202-.173q-.506-.434-1.016-.865a71 71 0 0 1-2.393-2.132 30 30 0 0 0-.8-.717c-.601-.521-1.182-1.064-1.765-1.606l-.655-.607a58 58 0 0 1-2.179-2.102 15 15 0 0 0-.71-.646 28 28 0 0 1-1.405-1.331l-.248-.248-.515-.515-.782-.781-.504-.505-.233-.232a25 25 0 0 1-1.282-1.389c-.297-.339-.618-.652-.94-.966a23 23 0 0 1-1.357-1.443c-.369-.421-.757-.825-1.143-1.231a50 50 0 0 1-1.56-1.707 39 39 0 0 0-.75-.828 34 34 0 0 1-1.377-1.621 25 25 0 0 0-.847-.959 32 32 0 0 1-1.355-1.584 60 60 0 0 0-.897-1.068c-.494-.58-.97-1.171-1.437-1.773a81 81 0 0 0-1.244-1.547 56 56 0 0 1-1.625-2.091 82 82 0 0 0-1.34-1.745 82 82 0 0 1-2.146-2.895l-.55-.762a192 192 0 0 1-6.61-9.727l-.156-.243c-3.27-5.109-6.273-10.385-9.063-15.77l-.46-.872a131 131 0 0 1-2.02-3.975q-.075-.152-.15-.308a148 148 0 0 1-2.606-5.677q-.332-.76-.674-1.514c-1.57-3.469-2.956-7.019-4.286-10.586l-.09-.242c-4.193-11.246-7.335-22.859-12.57-62.021l-.027-.585c-.13-2.703-.123-5.407-.123-8.112q0-.798-.002-1.597c-.014-4.724.115-9.433.467-14.146l.03-.403c.912-12.385 2.92-24.663 9.99-50.072l.102-.309a184 184 0 0 1 4.649-12.492 202 202 0 0 1 6.234-13.71c1.047-2.119 2.094-4.236 3.25-6.298q.313-.563.62-1.127a178 178 0 0 1 3.048-5.358l.177-.3a195 195 0 0 1 2.758-4.491q.269-.428.535-.857a137 137 0 0 1 2.511-3.858 193 193 0 0 1 3.072-4.488l.173-.244.539-.758.179-.252c.89-1.25 1.81-2.476 2.744-3.695q.596-.78 1.182-1.568c.582-.779 1.178-1.545 1.782-2.306q.24-.305.477-.611a62 62 0 0 1 1.784-2.192q.466-.547.912-1.11a50 50 0 0 1 1.345-1.607q.537-.623 1.053-1.263c.477-.588.983-1.143 1.497-1.697q.463-.505.91-1.023.485-.552.979-1.095l.519-.577q.985-1.097 1.989-2.177l.384-.415c1.473-1.597 3.011-3.13 4.549-4.665l1.113-1.113.869-.869.41-.411c.65-.65 1.298-1.297 1.999-1.893.227-.194.436-.402.643-.617.359-.363.73-.701 1.117-1.033.37-.327.731-.664 1.092-1.001a60 60 0 0 1 1.922-1.722l.621-.531.215-.183q.616-.527 1.217-1.074c.483-.438.983-.852 1.49-1.262a63 63 0 0 0 1.169-.99 49 49 0 0 1 1.651-1.368q.371-.295.737-.596a68 68 0 0 1 2.62-2.054 62 62 0 0 0 1.495-1.148c1.468-1.162 2.981-2.263 4.501-3.355q.393-.284.785-.57c3.414-2.484 6.952-4.812 10.524-7.061l.31-.195a184 184 0 0 1 7.401-4.396l.638-.361a211 211 0 0 1 6.074-3.3l.653-.344c1.653-.87 3.315-1.708 5.005-2.502q.517-.243 1.033-.49a197 197 0 0 1 21.9-8.872l.341-.116a203 203 0 0 1 24.537-6.627l.324-.066c8.425-1.714 16.941-2.857 25.51-3.527l.272-.021c4.838-.368 9.671-.494 14.522-.485" /><Path fill="#000" d="m255.616 110.647.793.001c2.629.003 5.232.074 7.845.385l.739.08c2.697.309 5.351.88 7.98 1.547l.31.078c1.171.296 2.331.619 3.479.994q.303.099.606.194c4.523 1.432 8.932 3.337 13.043 5.709l.275.158a67 67 0 0 1 9.405 6.536q.272.223.548.443a33 33 0 0 1 1.889 1.649q.478.45.975.877c.553.482 1.071.996 1.589 1.515l.303.303.629.63.959.959.615.615.287.286c.492.494.967.997 1.421 1.528.237.272.492.525.751.777.422.417.819.844 1.204 1.294.251.285.52.548.791.813.206.209.398.425.589.647.439.505.894.99 1.354 1.474a88 88 0 0 1 1.736 1.881q.466.517.938 1.026a312 312 0 0 1 3.29 3.609q.719.801 1.448 1.593.62.674 1.22 1.366.424.477.858.945.635.689 1.251 1.396c.41.47.83.931 1.248 1.394.996 1.103.996 1.103 1.446 1.62q.491.561.995 1.112.603.66 1.189 1.333.362.411.729.817.57.631 1.127 1.272.364.413.734.821a84 84 0 0 1 1.648 1.878 56 56 0 0 0 1.803 2.038c.414.443.812.892 1.191 1.366.533.664 1.112 1.281 1.694 1.901.509.544.993 1.105 1.476 1.672l.354.416.182.213q.59.687 1.206 1.349c.392.422.766.852 1.126 1.301.471.585.976 1.131 1.491 1.677.47.502.906 1.023 1.336 1.56.309.372.635.726.966 1.079.516.551.999 1.118 1.471 1.707.311.373.638.728.97 1.083.516.551.999 1.118 1.472 1.707.311.373.638.728.97 1.083.516.551.998 1.118 1.471 1.707.311.374.638.728.97 1.083a30 30 0 0 1 1.479 1.715c.29.35.595.684.904 1.017.496.533.96 1.085 1.417 1.653.343.413.707.804 1.073 1.198.345.373.672.756.99 1.152a25 25 0 0 0 1.228 1.403 29 29 0 0 1 1.479 1.715c.291.35.595.684.905 1.016a31 31 0 0 1 1.424 1.661c.271.328.554.642.842.955.381.414.745.834 1.098 1.272.425.527.873 1.025 1.334 1.52.439.476.846.972 1.252 1.477.292.351.597.686.908 1.021a30 30 0 0 1 1.425 1.66c.271.328.554.642.842.955.381.414.745.834 1.098 1.272.374.464.763.908 1.169 1.344.499.536.966 1.09 1.425 1.661.271.328.554.642.842.955.476.517.921 1.052 1.363 1.598.273.329.556.645.846.959a32 32 0 0 1 1.362 1.599c.273.329.557.644.847.959.476.517.921 1.052 1.362 1.598.273.329.557.645.847.959a32 32 0 0 1 1.362 1.599c.273.329.557.644.846.959.476.517.922 1.052 1.363 1.598.273.33.557.645.846.96.478.519.927 1.056 1.37 1.606.253.306.514.6.781.893.36.395.703.798 1.039 1.213.358.443.727.868 1.112 1.286.478.52.926 1.057 1.37 1.607.252.305.513.6.78.893q.538.591 1.039 1.213c.358.442.727.868 1.112 1.286.478.52.927 1.057 1.37 1.607.252.305.514.6.781.893.455.5.882 1.018 1.307 1.544.337.406.692.794 1.047 1.185.269.301.524.611.777.925.358.443.727.868 1.112 1.286.478.52.927 1.057 1.37 1.607.252.306.513.6.781.893.455.5.882 1.018 1.307 1.544.254.307.517.603.785.897.456.5.883 1.019 1.308 1.544.254.307.516.603.785.898a34 34 0 0 1 1.307 1.544c.255.306.517.602.785.897.456.5.883 1.018 1.308 1.544.254.307.516.603.785.897.444.488.862.993 1.277 1.506q.512.616 1.041 1.219l.762.879.302.348c5.585 6.556 9.172 14.894 10.975 23.251l.069.322q.214.998.396 2.003l.048.262c.121.685.216 1.373.301 2.063l.048.389a55.8 55.8 0 0 1-.048 13.562l-.049.418c-.254 2.149-.702 4.229-1.23 6.324l-.073.292a48 48 0 0 1-.973 3.312l-.119.365c-.628 1.911-1.328 3.762-2.173 5.589q-.206.45-.41.902c-1.947 4.276-4.626 8.271-7.645 11.861l-.153.183c-1.627 1.939-3.351 3.898-5.289 5.532q-.317.267-.628.544a51 51 0 0 1-3.346 2.692l-.275.206c-5.763 4.319-12.275 7.604-18.907 10.373l-.223.094a169 169 0 0 1-7.345 2.848l-.956.351a230 230 0 0 1-4.953 1.733 96 96 0 0 1-5.051 1.579q-1.528.432-3.044.901c-1.349.418-2.714.767-4.083 1.114q-.602.156-1.203.317c-3.161.846-6.33 1.651-9.529 2.34l-.379.082-2.968.638-.692.148a212 212 0 0 1-8.473 1.646l-1.16.201-.284.049q-.857.15-1.712.312c-2.09.394-4.183.735-6.289 1.029l-1.13.159-.772.109q-1.248.176-2.494.362c-4.071.602-8.154 1.084-12.243 1.543l-.398.044c-9.184 1.031-18.414 1.695-35.313 2.458q-1.373.04-2.746.085c-5.576.183-11.147.24-16.726.233h-2.27c-4.651.006-9.3-.018-13.95-.139l-.286-.007c-3.464-.091-6.928-.2-10.39-.361l-.26-.012c-10.481-.482-20.951-1.263-40.86-3.602l-.406-.055a381 381 0 0 1-10.42-1.587l-.253-.041c-3.75-.616-7.491-1.266-11.204-2.082-.814-.179-1.632-.339-2.45-.5-6.538-1.294-13.082-2.871-19.451-4.838a88 88 0 0 0-2.467-.721 132 132 0 0 1-11.039-3.639l-.268-.102c-6.984-2.647-14.141-5.444-20.514-9.387q-.466-.286-.933-.57c-1.307-.799-2.56-1.632-3.769-2.571-.341-.259-.693-.502-1.044-.747-.747-.526-1.438-1.106-2.129-1.704-.259-.221-.526-.431-.792-.643-1.305-1.065-2.498-2.263-3.69-3.451l-.277-.275a31 31 0 0 1-1.577-1.708l-.331-.378a53 53 0 0 1-2.575-3.226l-.191-.257c-1.535-2.063-2.87-4.235-4.11-6.486l-.173-.312c-1.48-2.7-2.676-5.527-3.672-8.439q-.149-.435-.302-.868c-1.224-3.506-1.998-7.261-2.331-10.958q-.047-.501-.104-1.002c-.41-4.006-.302-8.141.188-12.134l.05-.429c.777-6.385 2.784-12.432 5.646-18.172l.162-.325a47.5 47.5 0 0 1 6.859-10.157q.46-.526.913-1.056l.175-.204q.528-.617 1.039-1.249c.413-.509.846-.996 1.288-1.481.26-.292.508-.591.754-.895.606-.749 1.239-1.473 1.872-2.199q.45-.52.896-1.041l.173-.202.345-.403.695-.812.348-.406.885-1.031a81 81 0 0 0 1.579-1.877c.413-.508.845-.994 1.286-1.478.271-.305.529-.617.785-.934.42-.519.858-1.014 1.308-1.507.27-.305.528-.617.784-.934.42-.519.859-1.015 1.308-1.508.271-.304.529-.617.785-.933.42-.519.858-1.015 1.308-1.508.27-.305.528-.617.784-.934a34 34 0 0 1 1.308-1.507c.271-.305.529-.617.785-.934.42-.519.858-1.015 1.308-1.508.271-.304.528-.617.785-.933.419-.519.858-1.015 1.308-1.508.268-.302.523-.612.777-.926.449-.555.922-1.081 1.405-1.606.375-.417.725-.851 1.077-1.287.334-.405.688-.792 1.042-1.18.269-.302.524-.612.777-.926.449-.555.923-1.081 1.406-1.606.374-.416.724-.851 1.076-1.286.335-.406.688-.793 1.043-1.181.268-.302.523-.612.777-.926.448-.555.922-1.081 1.406-1.606.28-.312.546-.632.81-.959.446-.553.917-1.076 1.398-1.598.281-.313.547-.633.81-.959.447-.553.918-1.076 1.399-1.599.281-.312.547-.632.81-.959.446-.553.918-1.076 1.399-1.599.28-.312.546-.632.81-.959.446-.553.918-1.076 1.399-1.598.28-.313.546-.632.81-.959.446-.553.918-1.076 1.399-1.599.28-.312.546-.632.81-.959.446-.553.918-1.076 1.399-1.599.278-.309.541-.627.802-.951.425-.527.873-1.025 1.334-1.521.442-.477.852-.977 1.261-1.484.363-.439.75-.855 1.137-1.275.278-.31.541-.627.802-.951.425-.528.873-1.026 1.334-1.521.348-.376.677-.761.998-1.16.423-.526.869-1.021 1.328-1.514.345-.374.672-.756.99-1.153.447-.555.922-1.076 1.409-1.596.456-.489.879-1 1.298-1.522.342-.411.705-.802 1.069-1.193.345-.374.672-.756.991-1.153.446-.555.922-1.076 1.408-1.595.456-.49.88-1 1.299-1.522.341-.412.704-.803 1.069-1.194.343-.371.667-.751.983-1.146.471-.585.976-1.13 1.491-1.677.47-.502.906-1.023 1.336-1.56.365-.44.756-.855 1.147-1.272.36-.387.701-.781 1.032-1.194a28 28 0 0 1 1.484-1.671c.377-.402.736-.812 1.081-1.243.53-.662 1.106-1.275 1.686-1.894.509-.543.993-1.105 1.476-1.671a77 77 0 0 1 2.074-2.344q.456-.498.897-1.009.36-.409.726-.813.469-.519.93-1.046c.394-.453.796-.898 1.198-1.344q.334-.372.662-.748.593-.678 1.198-1.345.334-.371.662-.748c.566-.65 1.146-1.288 1.723-1.927q.59-.651 1.168-1.314c.402-.461.816-.91 1.23-1.36q.446-.483.878-.979a60 60 0 0 1 1.215-1.346q.445-.483.877-.979c.391-.451.795-.89 1.199-1.33q.509-.553 1.01-1.111a251 251 0 0 1 2.456-2.689l.162-.177q.486-.53.964-1.065c.509-.567 1.028-1.124 1.549-1.68q.66-.705 1.314-1.415.803-.871 1.613-1.737l.215-.23c.337-.36.677-.715 1.028-1.061.267-.263.517-.534.759-.82.547-.628 1.138-1.214 1.728-1.802l.365-.366.762-.761.969-.969.753-.753.357-.357a34 34 0 0 1 2.037-1.905l.381-.332c3.691-3.187 7.67-6.027 11.942-8.387l.39-.216c4.781-2.647 9.897-4.785 15.188-6.178l.369-.098a69 69 0 0 1 6.024-1.297l.346-.059q1.306-.22 2.619-.406l.385-.058c2.773-.393 5.563-.451 8.357-.444" /><Path fill="#FDF000" d="m261.58 141.956.3.036c1.658.207 3.298.545 4.931.894l.328.07c1.557.338 3.057.784 4.555 1.325l.349.126c5.822 2.119 11.048 5.203 15.694 9.291l.326.286a64 64 0 0 1 2.311 2.213l.31.305a23 23 0 0 1 1.707 1.909q.272.34.557.667c.893 1.024 1.685 2.109 2.462 3.222l.155.223c4.727 6.796 4.727 6.796 4.727 8.961h-6.742l-1.395-2.557c-2.597-4.396-5.859-8.453-9.882-11.626l-.227-.182a37 37 0 0 0-4.077-2.869c-2.412-1.478-4.913-2.679-7.554-3.691l-.305-.12c-3.784-1.469-8.078-2.323-12.135-2.349l-.435-.004q-.694-.004-1.388-.005h-.237c-2.367-.004-4.675.05-7.007.502l-.311.056q-.816.148-1.622.343-.45.106-.902.205c-2.975.68-5.825 1.765-8.557 3.116l-.315.154c-3.405 1.682-6.473 3.885-9.275 6.438q-.306.28-.616.554a30 30 0 0 0-3.745 4.014l-.189.244c-1.592 2.059-3.013 4.196-4.228 6.499l-.152.281c-2.683 5.017-4.258 10.744-4.571 16.423l-.014.254c-.027.56-.031 1.118-.031 1.678l.001.442v.336l.166-.167 10.927-10.945.236-.236 3.773-3.781 3.876-3.882 2.389-2.393q.82-.824 1.641-1.644.474-.472.945-.947c2.885-2.901 2.885-2.901 4.682-3.928l.25-.144c2.622-1.484 5.411-2.217 8.417-2.204l.561-.002q.752-.002 1.503 0h1.586q1.331-.001 2.662.002 1.53.002 3.061-.001 1.322-.003 2.645-.001.786.002 1.572-.001c5.066-.009 5.066-.009 7.293.811l.337.122c1.879.7 3.529 1.671 5.069 2.951l.204.17c3.218 2.723 5.309 6.803 5.725 10.991.189 3.061-.239 5.811-1.512 8.602l-.168.379c-1.12 2.382-2.913 4.598-5.063 6.132h-.233v.232l.2.091c2.866 1.524 5.051 5.153 5.999 8.164q.165.578.312 1.161l.119.404c1.116 4.066.061 8.551-1.943 12.155a17.24 17.24 0 0 1-6.895 6.391l-.209.107c-1.37.685-2.831 1.083-4.325 1.404l-.258.057c-.886.182-1.737.207-2.639.202h-.475q-.638 0-1.276-.003l-1.339-.002q-1.264-.001-2.529-.005-1.712-.004-3.422-.005-2.692-.005-5.384-.012V206.36l-1.511-.232a13 13 0 0 1-1.061-.349l-.28-.106c-2.379-.932-4.41-2.284-6.216-4.079l-.171-.17c-.895-.9-1.617-1.882-2.27-2.969l-.149-.246c-.923-1.563-1.972-3.602-1.944-5.45a287 287 0 0 0-7.301-.202 124 124 0 0 1-3.392-.091c-5.675-.447-5.675-.447-10.654 1.773-1.775 1.592-1.775 1.592-2.735 3.663.026.279.026.279.134.669l.089.442c1.535 6.708 4.735 13.025 9.328 18.159l.234.264c.632.71 1.287 1.395 1.96 2.068l.31.309c.686.68 1.383 1.301 2.146 1.893l.632.544c6.59 5.476 15.679 8.973 24.275 9.012l.366.002c3.769.026 3.769.026 7.51-.374l.424-.069c6.243-1.032 12.347-3.407 17.479-7.139l.196-.142a54 54 0 0 0 2.362-1.834l.336-.271c.96-.787 1.843-1.651 2.723-2.527l.18-.178a28 28 0 0 0 2.225-2.488q.176-.215.354-.429c1.958-2.388 3.483-5.023 4.993-7.709h6.743c-.158.475-.31.887-.524 1.332l-.172.36-.183.379-.191.394c-1.315 2.707-2.818 5.238-4.626 7.649l-.157.21a46 46 0 0 1-2.401 2.929l-.287.327c-.719.8-1.475 1.563-2.234 2.325l-.314.315a30 30 0 0 1-2.039 1.874c-2.493 2.114-5.176 3.917-8.03 5.505l-.283.158c-9.313 5.151-20.519 6.859-35.924 3.946-2.946-.866-5.835-1.972-8.554-3.403q-.377-.195-.755-.386c-2.821-1.44-5.452-3.234-7.88-5.266-.272-.227-.551-.445-.829-.665-1.589-1.302-3.152-2.779-4.484-4.343a43 43 0 0 0-.568-.651c-1.991-2.25-3.691-4.721-5.226-7.301a34 34 0 0 0-.349-.571c-1.589-2.607-4.202-7.077-4.202-10.232-.793.639-1.467 1.38-2.147 2.134a258 258 0 0 1-4.592 4.931c-.893.938-1.776 1.883-2.64 2.849a89 89 0 0 1-3.084 3.28l-.259.261c-2.329 2.322-4.349 3.683-7.711 3.704a28.7 28.7 0 0 1-5.027-.535 24 24 0 0 1 1.656-1.775l.286-.284.62-.612 1.009-.998.353-.349.18-.179.553-.546q1.347-1.332 2.689-2.666l.197-.195 1.806-1.794 1.236-1.229.207-.206q1.666-1.652 3.336-3.3 1.716-1.695 3.424-3.397 1.052-1.048 2.112-2.091.727-.714 1.445-1.435.415-.416.835-.826.456-.445.903-.9l.27-.256c.493-.512.652-.852.657-1.571q-.022-.368-.058-.734l-.03-.376a51 51 0 0 0-.059-.673c-.047-.593-.048-1.185-.051-1.78l-.002-.402c-.05-10.241 2.348-20.003 8.28-28.506l.153-.221c2.171-3.128 4.731-6.144 7.636-8.614l.337-.299c6.008-5.289 13.471-9.043 21.305-10.676q.44-.094.878-.198c4.777-1.1 10.065-1.159 14.913-.569" /><Path fill="#FEF100" d="m204.268 265.649.278.103c3.843 1.439 7.239 3.545 10.184 6.407l.213.204a24.3 24.3 0 0 1 2.81 3.168l.15.201a30 30 0 0 1 2.059 3.17l.14.243c3.823 6.719 4.42 14.702 2.465 22.104-.56 2.013-1.391 3.946-2.373 5.786l-.12.229c-.986 1.865-2.204 3.54-3.6 5.119l-.259.298c-1.096 1.244-2.259 2.413-3.577 3.422l-.19.146a30.9 30.9 0 0 1-8.18 4.504l-.384.146c-1.459.525-2.98.836-4.499 1.133l-.33.064c-3.27.607-6.768.45-10.017-.181l-.584-.101c-4.962-.902-9.626-3.422-13.366-6.758l-.188-.166c-4.998-4.439-8.454-10.747-9.345-17.388l-.03-.222a30 30 0 0 1-.238-4.028v-.291c.03-6.391 2.087-12.638 6.081-17.663l.248-.316c.691-.862 1.434-1.673 2.193-2.474l.251-.266c.608-.626 1.277-1.166 1.958-1.71l.267-.224c2.829-2.353 6.232-4.033 9.731-5.124l.304-.095c5.744-1.743 12.332-1.525 17.948.56M293.201 264.951h12.322l.006 3.064q.008 4.86.021 9.72l.004 1.512.001.304.009 4.863.012 4.995.006 3.078q0 1.059.005 2.116.003.609.002 1.218c-.001 3.771.669 7.024 3.19 9.935l.154.179c1.819 2.055 4.281 3.311 6.937 3.89l.363.079c3.285.608 6.726-.228 9.49-2.075 2.113-1.485 3.504-3.353 4.562-5.677l.149-.318c.656-1.512.798-3.157.8-4.785l.002-.416.003-1.139.004-1.231.006-2.13.01-3.079.015-4.996.014-4.853.001-.302.005-1.502.038-12.45h12.206q.008 6.498.012 12.994l.001 1.537v.309l.005 4.943q.004 2.538.004 5.078l.003 3.129.003 3.388c.012 4.273.012 4.273-.507 6.31l-.076.302c-1.187 4.605-3.369 8.576-6.653 11.999l-.275.29c-.64.658-1.326 1.24-2.05 1.803l-.187.148c-4.351 3.407-9.832 5.263-15.347 5.236l-.276-.001c-6.934-.031-13.23-2.98-18.088-7.858a21 21 0 0 1-1.907-2.292l-.141-.193a42 42 0 0 1-.906-1.318l-.226-.332c-1.835-2.814-3.011-6.213-3.445-9.534a38 38 0 0 0-.107-.745c-.217-1.553-.206-3.1-.201-4.665v-1.233l.002-2.129q.003-1.538.003-3.077 0-2.498.004-4.995l.005-4.848v-.302l.001-1.503q.004-6.22.012-12.441M385.854 264.37l.253.023c2.614.239 5.184.979 7.652 1.837l.263.089c5.056 1.714 5.056 1.714 5.666 2.934-.081.272-.081.272-.22.623l-.159.407-.18.452-.185.47q-.206.526-.414 1.052-.394 1-.783 2l-.565 1.448-.14.358-.518 1.326q-.321.82-.672 1.629c-.45-.163-.857-.378-1.276-.607-1.391-.76-2.83-1.373-4.304-1.951l-.277-.109c-4.795-1.86-10.931-2.545-15.777-.557-1.44.66-2.718 1.801-3.288 3.304-.141.439-.267.854-.305 1.315l-.026.299c-.064 1.278.35 2.447 1.184 3.423.718.696 1.611 1.107 2.511 1.517l.234.107c1.569.686 3.232 1.144 4.886 1.572l.836.218c1.003.263 2.008.508 3.023.723.82.176 1.618.416 2.42.661q.508.15 1.019.292c5.011 1.428 5.011 1.428 7.28 2.581l.35.171c3.21 1.646 5.857 4.476 7.04 7.892 1.308 4.067.836 8.64-1.093 12.418-.621 1.176-1.313 2.253-2.231 3.223-.247.254-.247.254-.506.6-3.304 3.698-8.811 5.459-13.558 6.038l-.243.03c-1.568.188-3.119.244-4.698.239l-.352-.001c-1.899-.004-3.754-.096-5.635-.384l-.279-.042a29 29 0 0 1-1.439-.256q-.437-.086-.875-.166c-4.26-.812-8.204-2.352-11.938-4.535.066-1.677.29-3.33.508-4.992l.214-1.645.053-.407q.204-1.588.391-3.178c.069-.585.142-1.169.229-1.752.424.119.69.316 1.009.608 3.644 3.236 8.808 4.947 13.522 5.786l.32.058c2.82.496 5.941.547 8.748-.058l.276-.059c1.787-.397 3.649-1.104 4.745-2.644q.168-.274.327-.553l.147-.243c.339-.677.366-1.346.376-2.089l.007-.295c-.011-1.097-.476-2.046-1.228-2.836-3.197-2.847-8.193-3.513-12.238-4.512-5.089-1.263-10.28-2.65-14.1-6.431l-.26-.256c-2.783-2.828-3.573-6.591-3.552-10.433.02-1.12.114-2.162.39-3.247l.053-.229c.641-2.75 2.076-5.184 4.015-7.211l.233-.254c5.745-6.083 15.372-6.55 23.134-5.791M233.098 264.951h45.92l.698 5.813q.214 1.702.437 3.405l.132 1.011.04.298.035.275.031.237c.025.272.022.546.022.819h-18.252v44.758h-12.322v-44.758h-18.136c.134-2.401.134-2.401.293-3.585l.052-.399.164-1.24.213-1.631.053-.403a138 138 0 0 0 .431-3.772l.034-.332c.039-.263.039-.263.155-.496" /><Path fill="#FDF000" d="M116.613 264.951h12.323v44.641h30.342c-.534 5.07-.534 5.07-.829 7.295l-.132 1.016-.081.614c-.133 1.015-.24 2.031-.353 3.05h-41.27z" /><Path fill="#000" d="m198.804 276.112.277.075c3.668 1.009 7.082 3.19 9.364 6.268l.183.245a18 18 0 0 1 1.452 2.363l.118.224c1.29 2.469 1.793 5.031 1.786 7.798v.305c-.005 1.495-.065 2.908-.509 4.345l-.081.279c-.614 2.069-1.576 4.085-2.941 5.766l-.241.311c-1.632 2.068-3.589 3.597-5.921 4.804l-.354.191c-.824.414-1.677.682-2.559.942l-.35.104c-1.384.394-2.704.545-4.138.537q-.384-.001-.768.002c-1.419.001-2.8-.144-4.175-.512l-.279-.074c-4.425-1.24-8.261-4.288-10.525-8.278-2.083-3.827-2.907-8.401-1.793-12.663q.087-.344.161-.692c.582-2.509 1.926-4.84 3.622-6.76l.15-.173a15.5 15.5 0 0 1 2.408-2.268l.186-.143c4.162-3.16 9.846-4.462 14.927-2.996" /><Path fill="#010100" d="M259.139 192.758c2.318-.014 2.318-.014 3.315-.017q1.016-.002 2.031-.009.82-.006 1.639-.007l.622-.003c2.727-.024 5.159.687 7.273 2.478l.23.179c1.57 1.27 2.679 3.216 3.141 5.168l.122.4c.437 1.761.263 3.947-.354 5.645l-.154.425c-1.082 2.728-3.127 4.687-5.781 5.874-.565.238-1.143.416-1.738.56l-.216.059c-1.018.246-2.054.203-3.094.197l-.621-.001q-.812-.002-1.622-.006-.976-.004-1.953-.005l-2.957-.011v-7.324l1.977-.465c.397-.131.772-.261 1.155-.421l.291-.12c1.637-.692 3.126-1.565 4.483-2.714l.178-.151c1.095-.936 2.067-1.983 2.863-3.187l.188-.283.142-.215a359 359 0 0 0-3.281.003q-.761.005-1.523.002-.737-.002-1.475.004-.279.002-.558-.001c-1.171-.01-2.002.125-3.018.725-.375.197-.375.197-1.305.429z" /><Path fill="#000" d="M259.139 165.555c2.304-.018 2.304-.018 3.297-.022q1.011-.004 2.022-.013.816-.007 1.633-.009.309-.001.618-.005c3.106-.037 5.807.988 8.044 3.159 2.102 2.132 2.91 4.81 2.914 7.74-.015 1.134-.187 2.153-.596 3.21l-.093.241c-1.048 2.663-3.03 4.669-5.618 5.847-1.671.657-3.177.845-4.956.823l-.633-.002q-.823-.003-1.646-.011-.993-.008-1.987-.011-1.5-.007-2.999-.021v-7.208c.571.095.838.176 1.315.451 1.109.635 2.048.728 3.306.712l.57.003q.741.005 1.482-.002.76-.002 1.52.003 1.484.004 2.967-.004l-.501-.73-.142-.207a11 11 0 0 0-1.057-1.316l-.303-.322-.514-.53c-2.35-2.401-5.426-3.695-8.643-4.452zM252.861 165.555v7.324l-1.976.465c-.402.134-.782.267-1.17.429l-.292.12c-2.005.846-3.7 2.026-5.281 3.52l-.285.263c-1.681 1.601-2.912 3.643-3.769 5.79l-.092.227c-.345.913-.509 1.822-.736 2.788h-12.905c.466-.543.929-1.062 1.433-1.566l.214-.215.705-.708.508-.51 1.663-1.668.575-.576 2.703-2.708q1.555-1.558 3.109-3.118 1.203-1.209 2.41-2.415.719-.72 1.436-1.44.675-.68 1.353-1.356.247-.246.493-.495c2.935-2.962 5.67-4.151 9.904-4.151M252.861 179.273v20.693c-.786-.131-.786-.131-1.127-.298l-.228-.112-.236-.12-.248-.126a11.8 11.8 0 0 1-1.997-1.32l-.27-.212c-2.097-1.742-3.349-4.379-3.637-7.062-.259-3.057.645-5.863 2.585-8.218 1.153-1.341 2.502-2.277 4.112-2.992l.309-.138c.272-.095.272-.095.737-.095" /></G><Defs><ClipPath id="prefix__a"><Path fill="#fff" d="M50 50h412v412H50z" /></ClipPath></Defs>
    </Svg>
  );
};

LotusIcon.displayName = 'LotusIcon';

export default LotusIcon;