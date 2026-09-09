import * as React from 'react';
import { forwardRef } from 'react';

export interface NIOLogoProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * NIOLogo icon component
 */
const NIOLogo = forwardRef<SVGSVGElement, NIOLogoProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="162.3,258.4 232.6,135.3 274.8,208" /><polyline points="237.3,208 299.4,100.2 376.7,242" /><polyline points="341.5,177.5 376.7,242" /><polyline points="155.4,470 155.4,382 208.2,470 208.2,382" /><polyline points="256,382 256,470" /><polyline points="320.7,382 305,394.6 301.3,426 305,457.4 320.7,470 339.6,470 355.3,457.4 359.1,426 355.3,394.6 339.6,382 320.7,382" /></g></svg>
  );
});

NIOLogo.displayName = 'NIOLogo';

export default NIOLogo;