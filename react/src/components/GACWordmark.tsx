import * as React from 'react';
import { forwardRef } from 'react';

export interface GACWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * GACWordmark icon component
 */
const GACWordmark = forwardRef<SVGSVGElement, GACWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="178.9,202.4 151,185.3 113.5,185.3 86.7,208.9 80.3,256 86.7,303.1 113.5,326.7 151,326.7 178.9,309.6 178.9,271 136,271" /><polyline points="202.4,331 256,181 309.6,331" /><polyline points="226,279.6 286,279.6" /><polyline points="431.7,202.4 403.9,185.3 366.4,185.3 339.6,208.9 333.1,256 339.6,303.1 366.4,326.7 403.9,326.7 431.7,309.6" /></g></svg>
  );
});

GACWordmark.displayName = 'GACWordmark';

export default GACWordmark;