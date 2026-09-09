import * as React from 'react';
import { forwardRef } from 'react';

export interface HavalLogoProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * HavalLogo icon component
 */
const HavalLogo = forwardRef<SVGSVGElement, HavalLogoProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="150.5,109.5 361.5,109.5 361.5,238.5 150.5,238.5 150.5,109.5" /><polyline points="174.6,153.5 174.6,194.5" /><polyline points="199.2,153.5 199.2,194.5" /><polyline points="174.6,174 199.2,174" /><polyline points="206.8,194.5 221.4,153.5 236.1,194.5" /><polyline points="213.2,180.4 229.6,180.4" /><polyline points="242.5,153.5 256,194.5 269.5,153.5" /><polyline points="275.9,194.5 290.6,153.5 305.2,194.5" /><polyline points="282.4,180.4 298.8,180.4" /><polyline points="312.8,153.5 312.8,194.5 337.4,194.5" /><polyline points="81.3,382 81.3,470" /><polyline points="134.1,382 134.1,470" /><polyline points="81.3,426 134.1,426" /><polyline points="150.4,470 181.8,382 213.3,470" /><polyline points="164.2,439.8 199.4,439.8" /><polyline points="227.1,382 256,470 284.9,382" /><polyline points="298.7,470 330.2,382 361.6,470" /><polyline points="312.6,439.8 347.8,439.8" /><polyline points="377.9,382 377.9,470 430.7,470" /></g></svg>
  );
});

HavalLogo.displayName = 'HavalLogo';

export default HavalLogo;