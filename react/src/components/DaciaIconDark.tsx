import * as React from 'react';
import { forwardRef } from 'react';

export interface DaciaIconDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * DaciaIconDark icon component
 */
const DaciaIconDark = forwardRef<SVGSVGElement, DaciaIconDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="128.1,254.4 236.7,196.7 269,257.6 160.4,315.3 128.1,254.4" /><polyline points="243,254.4 351.6,196.7 383.9,257.6 275.3,315.3 243,254.4" /></g></svg>
  );
});

DaciaIconDark.displayName = 'DaciaIconDark';

export default DaciaIconDark;