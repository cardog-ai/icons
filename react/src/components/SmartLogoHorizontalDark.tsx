import * as React from 'react';
import { forwardRef } from 'react';

export interface SmartLogoHorizontalDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * SmartLogoHorizontalDark icon component
 */
const SmartLogoHorizontalDark = forwardRef<SVGSVGElement, SmartLogoHorizontalDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="98.4,214.2 98.4,297.8 170.2,256 98.4,214.2" /><polyline points="116.4,236.1 116.4,275.9" /><polyline points="288.5,228.9 263.1,225.4 254.4,234.1 254.4,248.1 264,255.1 279.7,256.9 289.3,263.9 289.3,277.9 279.7,286.6 255.2,283.1" /><polyline points="305.1,286.6 305.1,225.4 323.4,263 341.8,225.4 341.8,286.6" /><polyline points="353.1,286.6 375,225.4 396.9,286.6" /><polyline points="362.8,265.6 387.2,265.6" /><polyline points="408.2,286.6 408.2,225.4 431.8,225.4 442.3,232.4 444.9,244.6 442.3,256.9 431.8,263.9 408.2,263.9" /><polyline points="424.8,263.9 444.9,286.6" /><polyline points="456.3,225.4 500,225.4" /><polyline points="478.1,225.4 478.1,286.6" /></g></svg>
  );
});

SmartLogoHorizontalDark.displayName = 'SmartLogoHorizontalDark';

export default SmartLogoHorizontalDark;