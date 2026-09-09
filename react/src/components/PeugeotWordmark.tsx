import * as React from 'react';
import { forwardRef } from 'react';

export interface PeugeotWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * PeugeotWordmark icon component
 */
const PeugeotWordmark = forwardRef<SVGSVGElement, PeugeotWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="30.6,295.9 30.6,216.1 61.3,216.1 75,225.3 78.4,241.2 75,257.1 61.3,266.2 30.6,266.2" /><polyline points="145.6,216.1 97.7,216.1 97.7,295.9 145.6,295.9" /><polyline points="97.7,256 134.2,256" /><polyline points="164.9,216.1 164.9,282.2 177.4,295.9 200.2,295.9 212.7,282.2 212.7,216.1" /><polyline points="282.2,227.5 267.4,218.4 247.5,218.4 233.2,231 229.8,256 233.2,281 247.5,293.6 267.4,293.6 282.2,284.5 282.2,264 259.4,264" /><polyline points="347.1,216.1 299.3,216.1 299.3,295.9 347.1,295.9" /><polyline points="299.3,256 335.7,256" /><polyline points="381.8,216.1 367.6,227.5 364.2,256 367.6,284.5 381.8,295.9 398.9,295.9 413.1,284.5 416.5,256 413.1,227.5 398.9,216.1 381.8,216.1" /><polyline points="429.1,216.1 486,216.1" /><polyline points="457.5,216.1 457.5,295.9" /></g></svg>
  );
});

PeugeotWordmark.displayName = 'PeugeotWordmark';

export default PeugeotWordmark;