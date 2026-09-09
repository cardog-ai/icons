import * as React from 'react';
import { forwardRef } from 'react';

export interface ZeekrLogoHorizontalProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * ZeekrLogoHorizontal icon component
 */
const ZeekrLogoHorizontal = forwardRef<SVGSVGElement, ZeekrLogoHorizontalProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="71.9,202.9 178.10000000000002,202.9 178.10000000000002,309.1 71.9,309.1 71.9,202.9" /><polyline points="97.1,228.1 152.89999999999998,228.1 105.1,283.9 160.89999999999998,283.9" /><polyline points="252.6,225.4 291.1,225.4 252.6,286.6 291.1,286.6" /><polyline points="341.8,225.4 305.1,225.4 305.1,286.6 341.8,286.6" /><polyline points="305.1,256 333,256" /><polyline points="393.4,225.4 356.6,225.4 356.6,286.6 393.4,286.6" /><polyline points="356.6,256 384.6,256" /><polyline points="408.2,225.4 408.2,286.6" /><polyline points="443.2,225.4 408.2,258.6" /><polyline points="421.3,249.9 444.9,286.6" /><polyline points="459.8,286.6 459.8,225.4 483.4,225.4 493.9,232.4 496.5,244.6 493.9,256.9 483.4,263.9 459.8,263.9" /><polyline points="476.4,263.9 496.5,286.6" /></g></svg>
  );
});

ZeekrLogoHorizontal.displayName = 'ZeekrLogoHorizontal';

export default ZeekrLogoHorizontal;