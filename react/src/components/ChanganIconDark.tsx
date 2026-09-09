import * as React from 'react';
import { forwardRef } from 'react';

export interface ChanganIconDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * ChanganIconDark icon component
 */
const ChanganIconDark = forwardRef<SVGSVGElement, ChanganIconDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="198.6,316.7 256,375.8 313.4,316.7" /><polyline points="141.2,169 223.2,264.2 198.6,316.7" /><polyline points="370.8,169 288.8,264.2 313.4,316.7" /></g></svg>
  );
});

ChanganIconDark.displayName = 'ChanganIconDark';

export default ChanganIconDark;