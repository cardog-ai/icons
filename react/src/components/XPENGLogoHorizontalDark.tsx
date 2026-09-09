import * as React from 'react';
import { forwardRef } from 'react';

export interface XPENGLogoHorizontalDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * XPENGLogoHorizontalDark icon component
 */
const XPENGLogoHorizontalDark = forwardRef<SVGSVGElement, XPENGLogoHorizontalDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="83.19999999999999,214.2 125,256 83.19999999999999,297.8" /><polyline points="166.8,214.2 125,256 166.8,297.8" /><polyline points="105.1,200.9 144.89999999999998,240.7" /><polyline points="105.1,311.1 144.89999999999998,271.3" /><polyline points="252.6,225.4 291.1,286.6" /><polyline points="291.1,225.4 252.6,286.6" /><polyline points="305.1,286.6 305.1,225.4 328.7,225.4 339.2,232.4 341.8,244.6 339.2,256.9 328.7,263.9 305.1,263.9" /><polyline points="393.4,225.4 356.6,225.4 356.6,286.6 393.4,286.6" /><polyline points="356.6,256 384.6,256" /><polyline points="408.2,286.6 408.2,225.4 444.9,286.6 444.9,225.4" /><polyline points="498.3,234.1 486.9,227.2 471.6,227.2 460.7,236.8 458,256 460.7,275.2 471.6,284.8 486.9,284.8 498.3,277.9 498.3,262.1 480.8,262.1" /></g></svg>
  );
});

XPENGLogoHorizontalDark.displayName = 'XPENGLogoHorizontalDark';

export default XPENGLogoHorizontalDark;