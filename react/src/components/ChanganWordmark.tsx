import * as React from 'react';
import { forwardRef } from 'react';

export interface ChanganWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * ChanganWordmark icon component
 */
const ChanganWordmark = forwardRef<SVGSVGElement, ChanganWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="80.7,227.5 65.9,218.4 45.9,218.4 31.7,231 28.3,256 31.7,281 45.9,293.6 65.9,293.6 80.7,284.5" /><polyline points="97.7,216.1 97.7,295.9" /><polyline points="145.6,216.1 145.6,295.9" /><polyline points="97.7,256 145.6,256" /><polyline points="160.4,295.9 188.8,216.1 217.3,295.9" /><polyline points="172.9,268.5 204.8,268.5" /><polyline points="232.1,295.9 232.1,216.1 279.9,295.9 279.9,216.1" /><polyline points="349.4,227.5 334.6,218.4 314.6,218.4 300.4,231 297,256 300.4,281 314.6,293.6 334.6,293.6 349.4,284.5 349.4,264 326.6,264" /><polyline points="361.9,295.9 390.4,216.1 418.8,295.9" /><polyline points="374.4,268.5 406.3,268.5" /><polyline points="433.6,295.9 433.6,216.1 481.4,295.9 481.4,216.1" /></g></svg>
  );
});

ChanganWordmark.displayName = 'ChanganWordmark';

export default ChanganWordmark;