import * as React from 'react';
import { forwardRef } from 'react';

export interface DSIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * DSIcon icon component
 */
const DSIcon = forwardRef<SVGSVGElement, DSIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="142.8,169 282.3,169 282.3,169 295.9,170.1 309.2,173.3 321.7,178.6 333.4,185.6 343.8,194.5 352.6,204.9 359.7,216.5 364.9,229.1 368.1,242.4 369.2,256 368.1,269.6 364.9,282.9 359.7,295.5 352.6,307.1 343.8,317.5 333.4,326.4 321.7,333.4 309.2,338.7 295.9,341.9 282.3,343 229.8,343 229.8,343 216.1,341.9 202.8,338.7 190.3,333.4 178.6,326.4 168.2,317.5 159.4,307.1 152.3,295.5 147.1,282.9 143.9,269.6 142.8,256 143.9,242.4 147.1,229.1 152.3,216.5 159.4,204.9 168.2,194.5 178.6,185.6 190.3,178.6 202.8,173.3 216.1,170.1 229.8,169 142.8,169" /><polyline points="181.4,204.3 181.4,307.7" /><polyline points="181.4,204.3 213.9,204.3 236.1,220.6 244.9,256 236.1,291.4 213.9,307.7 181.4,307.7" /><polyline points="327.6,210.2 284.8,204.3 270,219.1 270,242.7 286.3,254.5 312.8,257.5 329.1,269.3 329.1,292.9 312.8,307.7 271.5,301.8" /></g></svg>
  );
});

DSIcon.displayName = 'DSIcon';

export default DSIcon;