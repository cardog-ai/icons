import * as React from 'react';
import { forwardRef } from 'react';

export interface LiautoWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * LiautoWordmark icon component
 */
const LiautoWordmark = forwardRef<SVGSVGElement, LiautoWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="30.8,213.6 30.8,298.4 81.7,298.4" /><polyline points="127.7,213.6 127.7,298.4" /><polyline points="211.2,298.4 241.5,213.6 271.7,298.4" /><polyline points="224.5,269.3 258.4,269.3" /><polyline points="287.5,213.6 287.5,283.8 300.8,298.4 325,298.4 338.3,283.8 338.3,213.6" /><polyline points="354.1,213.6 414.6,213.6" /><polyline points="384.3,213.6 384.3,298.4" /><polyline points="446.7,213.6 431.5,225.7 427.9,256 431.5,286.3 446.7,298.4 464.8,298.4 479.9,286.3 483.6,256 479.9,225.7 464.8,213.6 446.7,213.6" /></g></svg>
  );
});

LiautoWordmark.displayName = 'LiautoWordmark';

export default LiautoWordmark;