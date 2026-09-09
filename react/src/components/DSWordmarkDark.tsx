import * as React from 'react';
import { forwardRef } from 'react';

export interface DSWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * DSWordmarkDark icon component
 */
const DSWordmarkDark = forwardRef<SVGSVGElement, DSWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="28.3,235.7 28.3,276.3" /><polyline points="28.3,235.7 41.1,235.7 49.8,242.1 53.3,256 49.8,269.9 41.1,276.3 28.3,276.3" /><polyline points="85.7,238 68.9,235.7 63.1,241.5 63.1,250.8 69.5,255.4 79.9,256.6 86.3,261.2 86.3,270.5 79.9,276.3 63.7,274" /><polyline points="114.8,276.3 129.3,235.7 143.8,276.3" /><polyline points="121.1,262.4 137.4,262.4" /><polyline points="151.3,235.7 151.3,269.3 157.7,276.3 169.3,276.3 175.7,269.3 175.7,235.7" /><polyline points="183.2,235.7 212.2,235.7" /><polyline points="197.7,235.7 197.7,276.3" /><polyline points="227.6,235.7 220.3,241.5 218.6,256 220.3,270.5 227.6,276.3 236.3,276.3 243.5,270.5 245.3,256 243.5,241.5 236.3,235.7 227.6,235.7" /><polyline points="254,276.3 254,235.7 266.2,260.6 278.3,235.7 278.3,276.3" /><polyline points="296,235.7 288.8,241.5 287,256 288.8,270.5 296,276.3 304.7,276.3 312,270.5 313.7,256 312,241.5 304.7,235.7 296,235.7" /><polyline points="322.4,235.7 322.4,276.3" /><polyline points="322.4,235.7 335.8,235.7 343.3,240.3 343.3,249 335.8,253.7 322.4,253.7" /><polyline points="322.4,253.7 337.5,253.7 345.6,258.9 345.6,271.1 336.3,276.3 322.4,276.3" /><polyline points="368.8,235.7 368.8,276.3" /><polyline points="390.9,235.7 390.9,276.3 415.2,276.3" /><polyline points="449.5,235.7 425.1,235.7 425.1,276.3 449.5,276.3" /><polyline points="425.1,256 443.7,256" /><polyline points="482.5,238 465.7,235.7 459.9,241.5 459.9,250.8 466.3,255.4 476.7,256.6 483.1,261.2 483.1,270.5 476.7,276.3 460.5,274" /></g></svg>
  );
});

DSWordmarkDark.displayName = 'DSWordmarkDark';

export default DSWordmarkDark;