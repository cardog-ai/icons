import * as React from 'react';
import { forwardRef } from 'react';

export interface LiautoLogoProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * LiautoLogo icon component
 */
const LiautoLogo = forwardRef<SVGSVGElement, LiautoLogoProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="162.3,80.3 349.8,80.3 349.8,267.8 162.3,267.8 162.3,80.3" /><polyline points="179.1,120.7 179.1,227.3 243.1,227.3" /><polyline points="300.9,120.7 300.9,227.3" /><polyline points="30.8,385.3 30.8,470 81.7,470" /><polyline points="127.7,385.3 127.7,470" /><polyline points="211.2,470 241.5,385.3 271.7,470" /><polyline points="224.5,440.9 258.4,440.9" /><polyline points="287.5,385.3 287.5,455.5 300.8,470 325,470 338.3,455.5 338.3,385.3" /><polyline points="354.1,385.3 414.6,385.3" /><polyline points="384.3,385.3 384.3,470" /><polyline points="446.7,385.3 431.5,397.4 427.9,427.6 431.5,457.9 446.7,470 464.8,470 479.9,457.9 483.6,427.6 479.9,397.4 464.8,385.3 446.7,385.3" /></g></svg>
  );
});

LiautoLogo.displayName = 'LiautoLogo';

export default LiautoLogo;