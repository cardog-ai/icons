import * as React from 'react';
import { forwardRef } from 'react';

/**
 * AcuraLogo icon component
 */
const AcuraLogo = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#000" d="M69.034 312.358h17.929l40.156 66.383h-19.034l-29.964-50.648-15.964 26.799h25.788l7.737 12.539H55.28l-7.245 11.187H29zm315.847 66.506h19.034l7.246-11.187h40.402l-7.737-12.539h-25.788l15.964-26.799 29.963 50.648H483l-40.156-66.383h-17.93zm-258.867-33.192v8.852c.368 17.456 10.193 24.832 25.42 24.463h50.103v-13.645h-49.98c-8.351.245-8.965-5.532-9.211-11.31v-17.087c.246-5.164.86-11.064 9.211-10.941h49.98v-13.645h-50.103c-15.227-.369-24.929 7.13-25.42 24.463zm190.22-19.054h40.279c5.649 0 8.474 2.459 8.474 7.253 0 4.917-2.825 7.253-8.474 7.253H320.41l3.192 14.26h30.824c6.017-.123 9.455 4.057 9.947 9.835l.491 13.645h15.964s-.123-12.785-.491-15.366c-.368-2.582-1.474-9.712-7.737-13.154 14.736-9.711 9.333-37.862-11.789-37.862h-60.787v66.382h16.21zm-65.944 52.246h14.122c17.438-.369 24.806-10.203 24.438-25.447v-41.059h-15.965v44.378c.246 8.36-5.649 8.974-11.298 9.22h-23.209c-5.158-.246-11.052-.86-10.929-9.22v-44.378h-16.333v41.182c-.368 15.244 7.122 24.955 24.438 25.324zm75.892-178.126c-1.351-24.833-9.824-43.026-21.367-52.984-12.526-10.695-35.859-14.874-53.911-14.751-18.052-.123-41.384 4.056-53.91 14.751-11.544 9.958-20.017 28.152-21.368 52.984-1.228 23.356 3.807 48.803 17.069 63.186 12.772 14.137 38.315 18.562 58.086 18.562 19.771.123 45.314-4.425 58.085-18.562 13.263-14.506 18.421-39.953 17.316-63.186m-79.577-61.466c2.456-.123 3.07-.123 4.176-.123 1.105 0 1.596 0 4.175.123l.123 54.335h-8.596s0-54.335.122-54.335m-61.032 84.33c-.737-9.343-3.561-43.395 9.947-62.818 5.772-8.482 14.245-14.137 22.841-17.087 11.912-4.179 26.157-4.425 26.157-4.425-5.526 13.645-16.946 42.903-19.157 49.418-2.701 7.99-5.035 12.538-7.368 26.921-1.474 11.802-4.053 41.182-4.789 53.967-15.965-7.621-25.543-22.127-27.631-45.976m65.085 52.615c-11.175-.123-24.929-1.229-35.858-5.901 3.684-9.834 21.245-52.122 30.946-68.595h9.947c9.579 16.473 27.262 58.761 30.947 68.595-11.053 4.794-24.684 5.778-35.982 5.901m65.208-52.737c-2.087 23.972-11.666 38.354-27.63 46.099-.737-12.785-3.316-42.165-4.789-53.967-2.334-14.506-4.667-18.931-7.369-26.922-2.21-6.515-13.631-35.773-19.157-49.418 0 0 14.245.246 26.157 4.426 8.596 2.95 17.069 8.727 22.841 17.087 13.508 19.423 10.684 53.475 9.947 62.695" /><path fill="#000" d="M86.963 312.358h-17.93L29 378.618h19.035l7.245-11.187h40.402l-7.737-12.539H62.157l15.964-26.799 29.964 50.648h19.034zM403.915 378.864h-19.034l40.033-66.26h17.93L483 378.987h-19.035l-29.963-50.648-15.964 26.799h25.788l7.737 12.539h-40.402zM126.014 354.524v-17.701999999999998c.491-17.333 10.193-24.832 25.42-24.463h50.103v13.645h-49.98c-8.351-.123-8.965 5.777-9.211 10.941v17.087c.246 5.778.86 11.555 9.211 11.31h49.98v13.645h-50.103c-15.227.369-25.052-7.007-25.42-24.463M356.513 326.618h-40.279v52.246h-16.21v-66.382h60.787c21.122 0 26.525 28.151 11.789 37.862 6.263 3.442 7.369 10.572 7.737 13.154.368 2.581.491 15.366.491 15.366h-15.964l-.491-13.645c-.492-5.778-3.93-9.958-9.947-9.835h-30.824l-3.192-14.26h36.103c5.649 0 8.474-2.336 8.474-7.253 0-4.794-2.825-7.253-8.474-7.253M264.412 378.864h-28.858c-17.316-.369-24.806-10.08-24.438-25.324v-41.182h16.333v44.378c-.123 8.36 5.771 8.974 10.929 9.22h23.209c5.649-.246 11.544-.86 11.298-9.22v-44.378h15.965v41.059c.368 15.244-7 25.078-24.438 25.447" /></svg>
  );
});

AcuraLogo.displayName = 'AcuraLogo';

export default AcuraLogo;