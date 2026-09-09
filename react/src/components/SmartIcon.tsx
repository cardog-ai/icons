import * as React from 'react';
import { forwardRef } from 'react';

export interface SmartIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * SmartIcon icon component
 */
const SmartIcon = forwardRef<SVGSVGElement, SmartIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="190.4,152.6 190.4,359.4 367.6,256 190.4,152.6" /><polyline points="234.7,206.8 234.7,305.2" /></g></svg>
  );
});

SmartIcon.displayName = 'SmartIcon';

export default SmartIcon;