import * as React from 'react';
import { forwardRef } from 'react';

export interface OpelWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * OpelWordmarkDark icon component
 */
const OpelWordmarkDark = forwardRef<SVGSVGElement, OpelWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="61.5,185.1 36.1,205.3 30.1,256 36.1,306.7 61.5,326.9 91.9,326.9 117.2,306.7 123.3,256 117.2,205.3 91.9,185.1 61.5,185.1" /><polyline points="153.7,326.9 153.7,185.1 208.4,185.1 232.7,201.3 238.8,229.7 232.7,258 208.4,274.2 153.7,274.2" /><polyline points="358.3,185.1 273.2,185.1 273.2,326.9 358.3,326.9" /><polyline points="273.2,256 338.1,256" /><polyline points="392.8,185.1 392.8,326.9 477.9,326.9" /></g></svg>
  );
});

OpelWordmarkDark.displayName = 'OpelWordmarkDark';

export default OpelWordmarkDark;