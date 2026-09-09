import * as React from 'react';
import { forwardRef } from 'react';

export interface PeugeotIconDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * PeugeotIconDark icon component
 */
const PeugeotIconDark = forwardRef<SVGSVGElement, PeugeotIconDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="133,100.1 379,100.1 379,257.6 256,418.4 133,257.6 133,100.1" /><polyline points="200.2,377.4 213.3,300.3 247.8,236.3" /><polyline points="247.8,236.3 288.8,206.8 301.9,246.2 269.1,254.4 247.8,236.3" /><polyline points="257.6,265.8 316.7,223.2" /><polyline points="200.2,377.4 246.2,377.4" /><polyline points="213.3,300.3 167.4,282.3 160.8,229.8" /></g></svg>
  );
});

PeugeotIconDark.displayName = 'PeugeotIconDark';

export default PeugeotIconDark;