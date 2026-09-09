import * as React from 'react';
import { forwardRef } from 'react';

export interface CupraIconDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * CupraIconDark icon component
 */
const CupraIconDark = forwardRef<SVGSVGElement, CupraIconDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="183.8,151 292.1,256 183.8,361 183.8,306.9 239.6,256 183.8,205.1 183.8,151" /><polyline points="328.2,151 219.9,256 328.2,361 328.2,306.9 272.4,256 328.2,205.1 328.2,151" /></g></svg>
  );
});

CupraIconDark.displayName = 'CupraIconDark';

export default CupraIconDark;