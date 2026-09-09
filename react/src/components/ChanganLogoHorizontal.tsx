import * as React from 'react';
import { forwardRef } from 'react';

export interface ChanganLogoHorizontalProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * ChanganLogoHorizontal icon component
 */
const ChanganLogoHorizontal = forwardRef<SVGSVGElement, ChanganLogoHorizontalProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="101.80000000000001,280.6 125,304.5 148.2,280.6" /><polyline points="78.5,220.8 111.69999999999999,259.3 101.80000000000001,280.6" /><polyline points="171.5,220.8 138.3,259.3 148.2,280.6" /><polyline points="279.7,240.5 271.7,235.6 260.8,235.6 253.1,242.4 251.2,256 253.1,269.6 260.8,276.4 271.7,276.4 279.7,271.5" /><polyline points="289,234.3 289,277.7" /><polyline points="315,234.3 315,277.7" /><polyline points="289,256 315,256" /><polyline points="323,277.7 338.5,234.3 354,277.7" /><polyline points="329.8,262.8 347.2,262.8" /><polyline points="362,277.7 362,234.3 388,277.7 388,234.3" /><polyline points="425.7,240.5 417.7,235.6 406.9,235.6 399.1,242.4 397.3,256 399.1,269.6 406.9,276.4 417.7,276.4 425.7,271.5 425.7,260.3 413.4,260.3" /><polyline points="432.5,277.7 448,234.3 463.5,277.7" /><polyline points="439.4,262.8 456.7,262.8" /><polyline points="471.5,277.7 471.5,234.3 497.5,277.7 497.5,234.3" /></g></svg>
  );
});

ChanganLogoHorizontal.displayName = 'ChanganLogoHorizontal';

export default ChanganLogoHorizontal;