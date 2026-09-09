import * as React from 'react';
import { forwardRef } from 'react';

export interface OraWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * OraWordmarkDark icon component
 */
const OraWordmarkDark = forwardRef<SVGSVGElement, OraWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="113.5,181 86.7,202.4 80.3,256 86.7,309.6 113.5,331 145.6,331 172.4,309.6 178.9,256 172.4,202.4 145.6,181 113.5,181" /><polyline points="211,331 211,181 268.9,181 294.6,198.1 301,228.1 294.6,258.1 268.9,275.3 211,275.3" /><polyline points="251.7,275.3 301,331" /><polyline points="328.9,331 382.4,181 436,331" /><polyline points="352.4,279.6 412.4,279.6" /></g></svg>
  );
});

OraWordmarkDark.displayName = 'OraWordmarkDark';

export default OraWordmarkDark;