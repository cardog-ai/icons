import * as React from 'react';
import { forwardRef } from 'react';

export interface SmartWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * SmartWordmarkDark icon component
 */
const SmartWordmarkDark = forwardRef<SVGSVGElement, SmartWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="96.8,206.1 50.1,199.7 34,215.8 34,241.5 51.7,254.4 80.7,257.6 98.4,270.5 98.4,296.2 80.7,312.3 35.7,305.9" /><polyline points="127.3,312.3 127.3,199.7 161.1,268.9 194.9,199.7 194.9,312.3" /><polyline points="215.8,312.3 256,199.7 296.2,312.3" /><polyline points="233.5,273.7 278.5,273.7" /><polyline points="317.1,312.3 317.1,199.7 360.5,199.7 379.8,212.6 384.7,235.1 379.8,257.6 360.5,270.5 317.1,270.5" /><polyline points="347.7,270.5 384.7,312.3" /><polyline points="405.6,199.7 486,199.7" /><polyline points="445.8,199.7 445.8,312.3" /></g></svg>
  );
});

SmartWordmarkDark.displayName = 'SmartWordmarkDark';

export default SmartWordmarkDark;