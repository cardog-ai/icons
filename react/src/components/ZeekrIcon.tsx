import * as React from 'react';
import { forwardRef } from 'react';

export interface ZeekrIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * ZeekrIcon icon component
 */
const ZeekrIcon = forwardRef<SVGSVGElement, ZeekrIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="124.8,124.8 387.3,124.8 387.3,387.3 124.8,387.3 124.8,124.8" /><polyline points="187.1,187.1 324.9,187.1 206.8,324.9 344.6,324.9" /></g></svg>
  );
});

ZeekrIcon.displayName = 'ZeekrIcon';

export default ZeekrIcon;