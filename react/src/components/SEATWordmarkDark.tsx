import * as React from 'react';
import { forwardRef } from 'react';

export interface SEATWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * SEATWordmarkDark icon component
 */
const SEATWordmarkDark = forwardRef<SVGSVGElement, SEATWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="115.2,193.2 56.4,185.1 36.1,205.3 36.1,237.8 58.4,254 94.9,258 117.2,274.2 117.2,306.7 94.9,326.9 38.2,318.8" /><polyline points="238.8,185.1 153.7,185.1 153.7,326.9 238.8,326.9" /><polyline points="153.7,256 218.5,256" /><polyline points="265.1,326.9 315.8,185.1 366.4,326.9" /><polyline points="287.4,278.3 344.1,278.3" /><polyline points="384.7,185.1 486,185.1" /><polyline points="435.3,185.1 435.3,326.9" /></g></svg>
  );
});

SEATWordmarkDark.displayName = 'SEATWordmarkDark';

export default SEATWordmarkDark;