import * as React from 'react';
import { forwardRef } from 'react';

export interface SEATIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * SEATIcon icon component
 */
const SEATIcon = forwardRef<SVGSVGElement, SEATIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="388.2,332.3 256,408.6 123.8,332.3 123.8,179.7 256,103.4 388.2,179.7 388.2,332.3" /><polyline points="302.8,179.7 231.4,169.9 206.8,194.5 206.8,233.9 233.9,253.5 278.1,258.5 305.2,278.1 305.2,317.5 278.1,342.1 209.2,332.3" /></g></svg>
  );
});

SEATIcon.displayName = 'SEATIcon';

export default SEATIcon;