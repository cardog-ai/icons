import * as React from 'react';
import { forwardRef } from 'react';

export interface XPENGIconDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * XPENGIconDark icon component
 */
const XPENGIconDark = forwardRef<SVGSVGElement, XPENGIconDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="152.6,152.6 256,256 152.6,359.4" /><polyline points="359.4,152.6 256,256 359.4,359.4" /><polyline points="206.8,119.8 305.2,218.3" /><polyline points="206.8,392.2 305.2,293.7" /></g></svg>
  );
});

XPENGIconDark.displayName = 'XPENGIconDark';

export default XPENGIconDark;