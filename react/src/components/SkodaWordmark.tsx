import * as React from 'react';
import { forwardRef } from 'react';

export interface SkodaWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * SkodaWordmark icon component
 */
const SkodaWordmark = forwardRef<SVGSVGElement, SkodaWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="96.8,206.1 50.1,199.7 34,215.8 34,241.5 51.7,254.4 80.7,257.6 98.4,270.5 98.4,296.2 80.7,312.3 35.7,305.9" /><polyline points="48.5,191.7 66.2,169.1" /><polyline points="66.2,169.1 83.9,191.7" /><polyline points="127.3,199.7 127.3,312.3" /><polyline points="191.7,199.7 127.3,260.8" /><polyline points="151.5,244.7 194.9,312.3" /><polyline points="243.9,199.7 223.8,215.8 219,256 223.8,296.2 243.9,312.3 268.1,312.3 288.2,296.2 293,256 288.2,215.8 268.1,199.7 243.9,199.7" /><polyline points="317.1,199.7 317.1,312.3" /><polyline points="317.1,199.7 352.5,199.7 376.6,217.4 386.3,256 376.6,294.6 352.5,312.3 317.1,312.3" /><polyline points="405.6,312.3 445.8,199.7 486,312.3" /><polyline points="423.3,273.7 468.3,273.7" /></g></svg>
  );
});

SkodaWordmark.displayName = 'SkodaWordmark';

export default SkodaWordmark;