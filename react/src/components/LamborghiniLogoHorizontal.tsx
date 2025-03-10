import * as React from 'react';
import { forwardRef } from 'react';

/**
 * LamborghiniLogoHorizontal icon component
 */
const LamborghiniLogoHorizontal = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#231F20" d="M139.651 208.86c-10.026-.089-19.494 4.958-19.494 4.958s-9.538 5.754-13.023 14.377c-.18.838-19.078 37.349-19.078 37.349-23.954-6.9-35.536 7.081-35.17 12.477 5.787 14.462 34.086 4.175 36.912.827 1.564-.836 2.571.165 2.571.165s6.931 4.596 7.715 4.958c.782.362 4.728-.166 4.728-.166 3.069-.232 8.545-6.222 9.207-6.28 1.023.003 2.258 6.637 6.47 6.528 5.055.973 10.535-4.71 10.535-4.71.721-1.016.995-.248.995-.248-.116 6.234 4.966 5.134 6.47 4.958 4.994-2.025 17.226-14.029 15.844-10.494-.481.958-4.231 7.933-4.231 7.933-.42 1.857.913 1.735.913 1.735l8.792-.083c1.504-.895 9.196-17.397 8.295-15.121 2.773-4.997 9.042-6.776 9.042-6.776.602-.178.332.661.332.661l-10.286 20.327c-.18.538.829 1.075.829 1.075l8.959-.166c1.203-.116 8.71-15.451 8.71-15.451 2.043-3.892 9.29-6.115 9.29-6.115 1.323-.236.415 1.074.415 1.074l-7.051 14.708c-1.072 6.678 4.561 7.069 6.968 6.776 2.407-.353 6.321-1.703 14.018-7.437 1.565-1.193 1.908.007 1.908.248.066 8.212 9.125 7.272 9.125 7.272 2.707.666 13.7.408 22.894-17.849-3.362 12.399 3.491 15.775 3.732 16.196.242.419 3.926 1.701 5.309 1.405 14.022 1.238 19.908-20.493 19.908-20.493 3.155-2.358 3.956-3.034 5.226-3.718 3.13.307 3.97.395 5.475.578 1.203.424.112 1.543-.249 1.901-14.314 11.11-8.031 19.678-7.549 19.501 6.264 8.469 19.266-6.294 21.733-6.528 3.138 12.477 12.684 7.045 13.106 7.106-.841 2.455-3.289 8.527-5.392 12.477-4.389 6.162-11.281-.744-11.281-.744l-1.742-.082c-.841 1.076-.332 2.313-.332 2.313 1.807 2.883 4.12 6.872 11.282 7.85 7.221.32 11.364-7.602 11.364-7.602s10.123-18.606 10.783-20.822c3.067-2.749 8.39-6.719 12.36-9.585 2.586-.532-6.474 14.182-7.134 16.278-.18 1.198.249 1.239.249 1.239s6.888.342 8.212.165c1.323-.175 7.752-15.39 10.037-18.261 1.983-3.291 8.378-6.362 8.378-6.362 1.384-.296.912 1.322.912 1.322l-8.461 17.021c-2.04 7.127 3.705 7.164 4.728 7.107 2.768-.174 13.106-6.115 13.106-6.115 1.443-1.075 1.411.661 1.411.661-.12 2.278 2.35 6.01 4.396 5.536 7.341.679 18.445-11.469 18.747-10.328.061.239-4.148 8.51-4.148 8.51.181.66.912.992.912.992s7.109.078 8.793.083c1.685.005 9.349-18.238 11.032-19.253 3.428-3.527 7.179-3.862 7.3-3.801 1.264-.056-7.152 13.335-7.631 16.03-1.86 7.728 3.649 7.602 3.649 7.602 4.393.672 15.165-6.939 15.346-6.28 1.262-1.254 1.41.248 1.41.248v.578c.728 6.238 4.397 5.537 4.397 5.537 4.212 1.09 20.654-12.643 20.654-12.643l-2.489-2.727-10.285 7.437c-.842.418-1.327-.496-1.327-.496l11.53-22.144c.54-.538-.249-1.157-.249-1.157h-10.369a28 28 0 0 0-1.161 1.322l-9.374 18.178-10.285 5.041c-1.083.296-.83-.826-.83-.826s8.57-16.753 9.29-19.088c.481-1.077.249-2.809.249-2.809-2.833-6.543-14.278 1.927-15.843 1.983-.061.06 1.41-2.975 1.41-2.975.421-.898-.415-.909-.415-.909l-9.622-.083s.029-.68-.332-.082-6.553 12.146-6.553 12.146l-15.511 11.651c-1.324.237-.996-.661-.996-.661l11.365-21.897.083-.909-10.95-.248-9.041 17.353c-.481.538-9.954 5.867-9.954 5.867-1.445.416-1.493-.827-1.493-.827l8.378-16.195c1.897-6.318-5.032-8.176-8.461-6.941-2.319.832-4.48 1.57-4.48 1.57s-.684.177-.083-.661c1.022-1.436 11.613-22.31 11.613-22.31.241-.6-.331-.992-.331-.992l-9.623-.083c-.782.357-.912.909-.912.909l-13.687 25.864-11.281 8.428c-.722.478-.746-.331-.746-.331l5.64-10.659v-1.074l-10.12-.083-1.659 1.322c-1.144-2.401-6.952-2.373-7.133-2.313-12.156-.394-18.996 16.774-18.996 16.774-6.764 5.84-9.888 7.658-12.11 8.015-1.849.103-2.406-1.405-2.406-1.405-2.575-7.86 13.604-15.287 13.604-15.287.541-.299 2.873-7.27 2.571-7.271-.301-.001-19.893-.023-20.074-.083-1.083-.421-6.316 4.484-7.88 5.619-4.582-13.38-22.338-3.26-24.802 2.727-1.058.281-1.532.085-2.073.083.178-4.555-.43-7.395-3.318-8.842-1.566-.843-7.964 0-7.964 0l10.867-21.566c.541-.659-.498-1.322-.498-1.322h-9.788c-.421.239-.912.826-.912.826s-18.495 35.681-19.577 37.597c-1.081 1.914-14.599 9.089-14.599 9.089.119-1.318 8.826-16.399 9.125-19.336.355-7.611-8.378-5.205-8.378-5.205s-4.946 3.27-9.456 5.536c-.97-8.335-8.295-5.454-8.295-5.454l-8.295 5.371 1.493-3.883.332-1.488-9.954-.247c-1.142.836-3.152 5.37-3.152 5.37l-3.153 5.785-14.184 10.659c-1.383.775-.663-1.074-.663-1.074s9.576-18.711 9.788-18.84c.781-.478.165-1.653.165-1.653l-9.622-.082s-1.629 2.757-1.99 3.057c-4.578-6.428-19.686-3.819-27.789 15.204-1.035 1.272-1.836 2.162-2.405 2.396-9.5 11.064-14.931.083-14.931.083l17.005-32.308s7.737-17.244 12.608-22.145c12.33-8.298 15.843-.496 15.843-.496 1.066 2.459 4.314 11.336-12.442 15.617-2.198.217-1.493 1.239-1.493 1.239 4.877 4.15 10.866 3.719 10.866 3.719 5.898 1.155 21.88-7.606 16.092-21.649-4.517-5.879-10.74-7.797-16.755-7.85m253.079 21.897c-8.785.335-9.299 12.08-.332 13.303 8.725.265 10.383-12.915.332-13.303m59.806 0c-9.507.034-8.799 13.398.166 13.303 8.966-.693 8.199-12.981-.166-13.303m-313.881 25.037c2.813.064 2.321 3.421 1.825 4.049.302 1.02-4.894 9.75-4.894 9.75-6.011 7.476-8.876 6.115-8.876 6.115s-2.06-.286-.497-4.297c1.682-2.813 4.951-10.132 8.378-14.378 1.804-.924 3.127-1.261 4.064-1.239m94.314.826c2.949.369 1.493 3.057 1.493 3.057l-8.129 15.948c-2.585 3.17-4.977 2.066-4.977 2.066-1.324-.964.912-4.628.912-4.628l7.632-14.873c1.502-1.555 3.069-1.57 3.069-1.57m84.608.083c2.302-.407 3.235 1.487 3.235 1.487s.135.305-.165 1.983c-.66 2.576-7.798 14.874-7.798 14.874-3.005 2.989-5.64 2.396-5.64 2.396-1.505-.424-.913-2.644-.913-2.644s5.78-11.806 8.544-16.774c1.083-.791 1.97-1.187 2.737-1.322m-55.327.082c1.271-.213 2.478.309 2.24 2.975-1.502 3.173-7.425 14.828-8.627 16.443-.24 1.379-6.289 3.626-4.728-1.404 0 0 8.484-15.807 8.544-16.526.029-.36 1.3-1.274 2.571-1.488M71.217 269.758c4.96-.118 9.456 1.488 9.456 1.488s-1.16 3.851-12.11 5.618c-5.175-.313-7.88-.289-7.88-2.148 2.524-3.743 6.677-4.866 10.534-4.958" /></svg>
  );
});

LamborghiniLogoHorizontal.displayName = 'LamborghiniLogoHorizontal';

export default LamborghiniLogoHorizontal;