import * as React from 'react';
import { forwardRef } from 'react';

export interface NIOIconDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * NIOIconDark icon component
 */
const NIOIconDark = forwardRef<SVGSVGElement, NIOIconDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="124.8,374.1 223.2,201.9 282.3,303.6" /><polyline points="229.8,303.6 316.7,152.6 425,351.2" /><polyline points="375.8,260.9 425,351.2" /></g></svg>
  );
});

NIOIconDark.displayName = 'NIOIconDark';

export default NIOIconDark;