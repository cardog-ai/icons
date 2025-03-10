import * as React from 'react';
import { forwardRef } from 'react';

/**
 * InfinitiIcon icon component
 */
const InfinitiIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#231F20" d="M343.751 301.748 256 183.584l-87.751 118.164c-29.634-2.882-80.56-22.192-80.56-56.488 0-43.231 74.805-83.579 168.599-83.579 98.684 0 168.597 40.348 168.597 83.579 0 34.584-51.212 53.894-80.558 56.2M256 149c-121.413 0-206 47.554-206 108.941 0 28.82 18.413 61.099 57.542 80.697 36.539 18.157 87.751 24.497 94.944 25.362L256 207.505 309.514 364a330.4 330.4 0 0 0 94.944-25.362C443.587 319.04 462 286.761 462 257.941 461.712 196.265 377.413 149 256 149" /></svg>
  );
});

InfinitiIcon.displayName = 'InfinitiIcon';

export default InfinitiIcon;