import * as React from 'react';
import { forwardRef } from 'react';

export interface CitroenIconDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * CitroenIconDark icon component
 */
const CitroenIconDark = forwardRef<SVGSVGElement, CitroenIconDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="124.8,196.9 256,124.8 387.3,196.9" /><polyline points="124.8,239.6 256,167.4 387.3,239.6" /><polyline points="124.8,351.2 256,279 387.3,351.2" /><polyline points="124.8,393.8 256,321.6 387.3,393.8" /></g></svg>
  );
});

CitroenIconDark.displayName = 'CitroenIconDark';

export default CitroenIconDark;