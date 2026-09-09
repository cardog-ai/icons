import * as React from 'react';
import { forwardRef } from 'react';

export interface XPENGWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * XPENGWordmark icon component
 */
const XPENGWordmark = forwardRef<SVGSVGElement, XPENGWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="30.8,199.7 101.6,312.3" /><polyline points="101.6,199.7 30.8,312.3" /><polyline points="127.3,312.3 127.3,199.7 170.8,199.7 190.1,212.6 194.9,235.1 190.1,257.6 170.8,270.5 127.3,270.5" /><polyline points="289.8,199.7 222.2,199.7 222.2,312.3 289.8,312.3" /><polyline points="222.2,256 273.7,256" /><polyline points="317.1,312.3 317.1,199.7 384.7,312.3 384.7,199.7" /><polyline points="482.8,215.8 461.9,202.9 433.7,202.9 413.6,220.6 408.8,256 413.6,291.4 433.7,309.1 461.9,309.1 482.8,296.2 482.8,267.3 450.6,267.3" /></g></svg>
  );
});

XPENGWordmark.displayName = 'XPENGWordmark';

export default XPENGWordmark;