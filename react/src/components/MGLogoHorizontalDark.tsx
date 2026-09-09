import * as React from 'react';
import { forwardRef } from 'react';

export interface MGLogoHorizontalDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * MGLogoHorizontalDark icon component
 */
const MGLogoHorizontalDark = forwardRef<SVGSVGElement, MGLogoHorizontalDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="68.6,199.6 181.39999999999998,199.6 181.39999999999998,312.4 68.6,312.4 68.6,199.6" /><polyline points="164.3,272.3 141.3,295.3 108.69999999999999,295.3 85.69999999999999,272.3 85.69999999999999,239.7 108.69999999999999,216.7 141.3,216.7 164.3,239.7 164.3,272.3" /><polyline points="97.5,275.1 97.5,236.9 108.9,260.3 120.4,236.9 120.4,275.1" /><polyline points="153.60000000000002,242.4 146.5,238 137,238 130.2,244 128.60000000000002,256 130.2,268 137,274 146.5,274 153.60000000000002,269.6 153.60000000000002,259.8 142.7,259.8" /><polyline points="253.5,287 253.5,225 272.1,263.1 290.7,225 290.7,287" /><polyline points="344.8,233.9 333.3,226.8 317.8,226.8 306.7,236.5 304,256 306.7,275.5 317.8,285.2 333.3,285.2 344.8,278.1 344.8,262.2 327.1,262.2" /></g></svg>
  );
});

MGLogoHorizontalDark.displayName = 'MGLogoHorizontalDark';

export default MGLogoHorizontalDark;