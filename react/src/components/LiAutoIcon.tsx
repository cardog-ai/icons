import * as React from 'react';
import { forwardRef } from 'react';

export interface LiautoIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * LiautoIcon icon component
 */
const LiautoIcon = forwardRef<SVGSVGElement, LiautoIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="124.8,124.8 387.3,124.8 387.3,387.3 124.8,387.3 124.8,124.8" /><polyline points="148.3,181.4 148.3,330.6 237.9,330.6" /><polyline points="318.9,181.4 318.9,330.6" /></g></svg>
  );
});

LiautoIcon.displayName = 'LiautoIcon';

export default LiautoIcon;