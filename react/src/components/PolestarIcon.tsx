import * as React from 'react';
import { forwardRef } from 'react';

/**
 * PolestarIcon icon component
 */
const PolestarIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#000" fillRule="evenodd" d="M254.66 260.73v195.91l-8 9.73-33.06-164.64zM257.92 251.67V55.73l8-9.73 33.06 164.61z" clipRule="evenodd" /><path fill="#000" fillRule="evenodd" d="m213.6 301.73-164.6-33 9.72-8h195.94zM299.01 210.62l164.6 33.11-9.72 8H257.92z" clipRule="evenodd" /></svg>
  );
});

PolestarIcon.displayName = 'PolestarIcon';

export default PolestarIcon;