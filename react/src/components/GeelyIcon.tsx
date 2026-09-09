import * as React from 'react';
import { forwardRef } from 'react';

export interface GeelyIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * GeelyIcon icon component
 */
const GeelyIcon = forwardRef<SVGSVGElement, GeelyIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="133,206.8 256,154.3 379,206.8 379,305.2 256,357.7 133,305.2 133,206.8" /><polyline points="165.8,246.2 256,210.1 346.2,246.2" /><polyline points="165.8,265.8 256,301.9 346.2,265.8" /></g></svg>
  );
});

GeelyIcon.displayName = 'GeelyIcon';

export default GeelyIcon;