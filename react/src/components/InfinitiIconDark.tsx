import * as React from 'react';
import { forwardRef } from 'react';

/**
 * InfinitiIconDark icon component
 */
const InfinitiIconDark = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#fff" d="M343.751 301.694 256 183.672l-87.751 118.022c-29.634-2.879-80.56-22.165-80.56-56.42 0-43.179 74.805-83.479 168.599-83.479 98.684 0 168.597 40.3 168.597 83.479 0 34.543-51.212 53.829-80.558 56.132M256 149.129c-121.413 0-206 47.497-206 108.811 0 28.785 18.413 61.026 57.542 80.6 36.539 18.135 87.751 24.468 94.944 25.332L256 207.564l53.514 156.308a330.7 330.7 0 0 0 94.944-25.332C443.587 318.966 462 286.725 462 257.94c-.288-61.602-84.587-108.811-206-108.811" /></svg>
  );
});

InfinitiIconDark.displayName = 'InfinitiIconDark';

export default InfinitiIconDark;