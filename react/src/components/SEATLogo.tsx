import * as React from 'react';
import { forwardRef } from 'react';

export interface SEATLogoProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * SEATLogo icon component
 */
const SEATLogo = forwardRef<SVGSVGElement, SEATLogoProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="350.4,228.5 256,283 161.6,228.5 161.6,119.5 256,65 350.4,119.5 350.4,228.5" /><polyline points="289.4,119.5 238.4,112.5 220.8,130.1 220.8,158.2 240.2,172.2 271.8,175.8 291.2,189.8 291.2,217.9 271.8,235.5 222.6,228.5" /><polyline points="168.6,387 132.2,382 119.6,394.6 119.6,414.7 133.4,424.7 156.1,427.3 169.9,437.3 169.9,457.4 156.1,470 120.9,465" /><polyline points="245.3,382 192.5,382 192.5,470 245.3,470" /><polyline points="192.5,426 232.7,426" /><polyline points="261.7,470 293.1,382 324.5,470" /><polyline points="275.5,439.8 310.7,439.8" /><polyline points="335.8,382 398.7,382" /><polyline points="367.3,382 367.3,470" /></g></svg>
  );
});

SEATLogo.displayName = 'SEATLogo';

export default SEATLogo;