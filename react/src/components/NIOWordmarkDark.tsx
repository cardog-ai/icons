import * as React from 'react';
import { forwardRef } from 'react';

export interface NIOWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * NIOWordmarkDark icon component
 */
const NIOWordmarkDark = forwardRef<SVGSVGElement, NIOWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="84.6,331 84.6,181 174.6,331 174.6,181" /><polyline points="256,181 256,331" /><polyline points="366.4,181 339.6,202.4 333.1,256 339.6,309.6 366.4,331 398.5,331 425.3,309.6 431.7,256 425.3,202.4 398.5,181 366.4,181" /></g></svg>
  );
});

NIOWordmarkDark.displayName = 'NIOWordmarkDark';

export default NIOWordmarkDark;