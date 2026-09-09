import * as React from 'react';
import { forwardRef } from 'react';

export interface LiautoLogoHorizontalDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * LiautoLogoHorizontalDark icon component
 */
const LiautoLogoHorizontalDark = forwardRef<SVGSVGElement, LiautoLogoHorizontalDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="71.9,202.9 178.10000000000002,202.9 178.10000000000002,309.1 71.9,309.1 71.9,202.9" /><polyline points="81.4,225.8 81.4,286.2 117.69999999999999,286.2" /><polyline points="150.5,225.8 150.5,286.2" /><polyline points="252.6,233 252.6,279 280.3,279" /><polyline points="305.3,233 305.3,279" /><polyline points="350.7,279 367.1,233 383.6,279" /><polyline points="357.9,263.2 376.3,263.2" /><polyline points="392.1,233 392.1,271.1 399.3,279 412.5,279 419.7,271.1 419.7,233" /><polyline points="428.3,233 461.2,233" /><polyline points="444.7,233 444.7,279" /><polyline points="478.6,233 470.4,239.6 468.4,256 470.4,272.4 478.6,279 488.5,279 496.7,272.4 498.7,256 496.7,239.6 488.5,233 478.6,233" /></g></svg>
  );
});

LiautoLogoHorizontalDark.displayName = 'LiautoLogoHorizontalDark';

export default LiautoLogoHorizontalDark;