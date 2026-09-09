import * as React from 'react';
import { forwardRef } from 'react';

export interface MGWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * MGWordmarkDark icon component
 */
const MGWordmarkDark = forwardRef<SVGSVGElement, MGWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="147.8,331 147.8,181 192.8,273.1 237.8,181 237.8,331" /><polyline points="368.5,202.4 340.6,185.3 303.1,185.3 276.4,208.9 269.9,256 276.4,303.1 303.1,326.7 340.6,326.7 368.5,309.6 368.5,271 325.6,271" /></g></svg>
  );
});

MGWordmarkDark.displayName = 'MGWordmarkDark';

export default MGWordmarkDark;