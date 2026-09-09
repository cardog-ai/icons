import * as React from 'react';
import { forwardRef } from 'react';

export interface SAICWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * SAICWordmark icon component
 */
const SAICWordmark = forwardRef<SVGSVGElement, SAICWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="115.2,193.2 56.4,185.1 36.1,205.3 36.1,237.8 58.4,254 94.9,258 117.2,274.2 117.2,306.7 94.9,326.9 38.2,318.8" /><polyline points="145.6,326.9 196.2,185.1 246.9,326.9" /><polyline points="167.9,278.3 224.6,278.3" /><polyline points="315.8,185.1 315.8,326.9" /><polyline points="481.9,205.3 455.6,189.1 420.1,189.1 394.8,211.4 388.7,256 394.8,300.6 420.1,322.9 455.6,322.9 481.9,306.7" /></g></svg>
  );
});

SAICWordmark.displayName = 'SAICWordmark';

export default SAICWordmark;