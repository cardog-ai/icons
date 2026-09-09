import * as React from 'react';
import { forwardRef } from 'react';

export interface SEATLogoHorizontalProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * SEATLogoHorizontal icon component
 */
const SEATLogoHorizontal = forwardRef<SVGSVGElement, SEATLogoHorizontalProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="178.5,286.9 125,317.8 71.5,286.9 71.5,225.1 125,194.2 178.5,225.1 178.5,286.9" /><polyline points="143.89999999999998,225.1 115,221.1 105.1,231.1 105.1,247 116,255 134,257 144.89999999999998,265 144.89999999999998,280.9 134,290.9 106.1,286.9" /><polyline points="289,228.5 263.3,225 254.4,233.9 254.4,248 264.2,255.1 280.1,256.9 289.9,264 289.9,278.1 280.1,287 255.3,283.5" /><polyline points="343,225 305.8,225 305.8,287 343,287" /><polyline points="305.8,256 334.1,256" /><polyline points="354.5,287 376.7,225 398.8,287" /><polyline points="364.3,265.7 389.1,265.7" /><polyline points="406.8,225 451.1,225" /><polyline points="428.9,225 428.9,287" /></g></svg>
  );
});

SEATLogoHorizontal.displayName = 'SEATLogoHorizontal';

export default SEATLogoHorizontal;