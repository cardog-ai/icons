import * as React from 'react';
import { forwardRef } from 'react';

export interface RenaultLogoDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * RenaultLogoDark icon component
 */
const RenaultLogoDark = forwardRef<SVGSVGElement, RenaultLogoDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...sizeProps} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M256 128C189.73 128 136 185.32 136 256C136 326.68 189.73 384 256 384C322.27 384 376 326.68 376 256C376 185.32 322.27 128 256 128ZM145 256C145 190.49 194.85 137 256 137C317.15 137 367 190.49 367 256C367 321.51 317.15 375 256 375C194.85 375 145 321.51 145 256Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M256 246.5C189.73 246.5 136 303.82 136 374.5C136 445.18 189.73 502.5 256 502.5C322.27 502.5 376 445.18 376 374.5C376 303.82 322.27 246.5 256 246.5ZM145 374.5C145 308.99 194.85 255.5 256 255.5C317.15 255.5 367 308.99 367 374.5C367 440.01 317.15 493.5 256 493.5C194.85 493.5 145 440.01 145 374.5Z" fill="white" /></svg>
  );
});

RenaultLogoDark.displayName = 'RenaultLogoDark';

export default RenaultLogoDark;