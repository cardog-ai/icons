import * as React from 'react';
import { forwardRef } from 'react';

export interface HavalIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * HavalIcon icon component
 */
const HavalIcon = forwardRef<SVGSVGElement, HavalIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="108.3,165.8 403.7,165.8 403.7,346.2 108.3,346.2 108.3,165.8" /><polyline points="142,227.3 142,284.7" /><polyline points="176.4,227.3 176.4,284.7" /><polyline points="142,256 176.4,256" /><polyline points="187.1,284.7 207.6,227.3 228.1,284.7" /><polyline points="196.1,265 219.1,265" /><polyline points="237.1,227.3 256,284.7 274.9,227.3" /><polyline points="283.9,284.7 304.4,227.3 324.9,284.7" /><polyline points="292.9,265 315.9,265" /><polyline points="335.6,227.3 335.6,284.7 370,284.7" /></g></svg>
  );
});

HavalIcon.displayName = 'HavalIcon';

export default HavalIcon;