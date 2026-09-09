import * as React from 'react';
import { forwardRef } from 'react';

export interface ZeekrWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * ZeekrWordmark icon component
 */
const ZeekrWordmark = forwardRef<SVGSVGElement, ZeekrWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="30.8,199.7 101.6,199.7 30.8,312.3 101.6,312.3" /><polyline points="194.9,199.7 127.3,199.7 127.3,312.3 194.9,312.3" /><polyline points="127.3,256 178.8,256" /><polyline points="289.8,199.7 222.2,199.7 222.2,312.3 289.8,312.3" /><polyline points="222.2,256 273.7,256" /><polyline points="317.1,199.7 317.1,312.3" /><polyline points="381.5,199.7 317.1,260.8" /><polyline points="341.2,244.7 384.7,312.3" /><polyline points="412,312.3 412,199.7 455.4,199.7 474.7,212.6 479.6,235.1 474.7,257.6 455.4,270.5 412,270.5" /><polyline points="442.6,270.5 479.6,312.3" /></g></svg>
  );
});

ZeekrWordmark.displayName = 'ZeekrWordmark';

export default ZeekrWordmark;