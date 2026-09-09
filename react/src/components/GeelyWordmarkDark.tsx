import * as React from 'react';
import { forwardRef } from 'react';

export interface GeelyWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * GeelyWordmarkDark icon component
 */
const GeelyWordmarkDark = forwardRef<SVGSVGElement, GeelyWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="103.2,215.8 82.3,202.9 54.1,202.9 34,220.6 29.2,256 34,291.4 54.1,309.1 82.3,309.1 103.2,296.2 103.2,267.3 71,267.3" /><polyline points="194.9,199.7 127.3,199.7 127.3,312.3 194.9,312.3" /><polyline points="127.3,256 178.8,256" /><polyline points="289.8,199.7 222.2,199.7 222.2,312.3 289.8,312.3" /><polyline points="222.2,256 273.7,256" /><polyline points="317.1,199.7 317.1,312.3 384.7,312.3" /><polyline points="408.8,199.7 445.8,259.2" /><polyline points="482.8,199.7 445.8,259.2" /><polyline points="445.8,259.2 445.8,312.3" /></g></svg>
  );
});

GeelyWordmarkDark.displayName = 'GeelyWordmarkDark';

export default GeelyWordmarkDark;