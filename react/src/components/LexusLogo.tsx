import * as React from 'react';
import { forwardRef } from 'react';

/**
 * LexusLogo icon component
 */
const LexusLogo = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#000" fillRule="evenodd" d="m223.51 355.175 15.666-10.243-23.714-17.587v4.306h-35.077c-4.577 0-8.342 3.241-9.025 7.46l40.666-.042v7.675l-31.091.043c-4.912 0-8.935 3.715-9.15 8.388zm148.965-23.653h35.96v-7.546h-36.163c-13.524 0-24.574 10.288-25.128 23.19l43.592-.046c2.831 0 5.118 1.858 5.118 4.095 0 2.277-2.29 4.092-5.118 4.092l-47.993-.004v-31.327h-14.235v31.122h-28.585c-4.196-.679-5.512-3.712-5.512-9.618l.003-21.504H271.46l-20.637 13.321-17.957-13.321h-55.235c-12.243 0-22.448 8.388-24.695 19.561h11.097c-4.187 2.827-7.408 6.836-9.188 11.565l-35.12-.004c-4.14-.679-5.499-3.712-5.499-9.618l.003-21.504h-14.195v20.069c-.596 13.29 6.646 18.052 14.908 18.808l110.344-.003 20.333-13.073 17.751 13.247h21.719l-27.652-20.705 22.74-14.674.043 16.4c-.584 13.29 7.371 18.052 15.636 18.808l103.262-.003c7.116 0 12.882-5.181 12.882-11.635 0-6.414-5.769-11.595-12.882-11.595h-35.665c.335-4.514 4.239-8.098 9.022-8.098M259.016 115.198c4.03.111 3.602 2.924 2.935 3.894-11.895 18.379-40 50.74-60.465 86.245-3.388 5.753-5.911 9.985-5.911 16.299 0 8.559 5.38 18.678 16.187 23.021 7.11 2.829 11.585 2.916 19.258 3.026 56.966 1.75 79.803.221 130.778-1.497 2.944-.008 5.681-1.978 6.666-3.169C378.319 232.811 384 214.463 384 198.275c0-36.057-26.146-68.536-66.932-84.156l-6.546 8.338c35.747 14.675 54.22 43.985 54.22 75.377 0 7.062-1.206 13.902-3.389 20.436-1.618 4.556-3.61 7.172-9.402 7.259-41.541.882-65.06 1.529-106.711.441-5.372-.11-7.109-2.057-7.983-6.282-.666-2.506-.111-4.587 1.627-7.731 22.091-38.87 60.576-83.298 68.131-93.835 1.436-1.947.761-5.871-4.167-7.172-14.418-4.232-30.597-5.95-46.999-5.95-74.264.299-126.643 41.786-127.849 93.275C130.976 260.081 185.084 292 255.849 292c43.302 0 82.969-15.203 106.179-39.312l-21.441.859c-19.797 17.488-51.514 26.836-84.317 26.836-59.791 0-108.472-29.532-108.472-82.549 0-45.601 48.673-82.746 108.472-82.746z" clipRule="evenodd" /></svg>
  );
});

LexusLogo.displayName = 'LexusLogo';

export default LexusLogo;