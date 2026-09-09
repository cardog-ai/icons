import * as React from 'react';
import { forwardRef } from 'react';

export interface ZeekrLogoDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * ZeekrLogoDark icon component
 */
const ZeekrLogoDark = forwardRef<SVGSVGElement, ZeekrLogoDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="162.3,80.3 349.8,80.3 349.8,267.8 162.3,267.8 162.3,80.3" /><polyline points="206.8,124.8 305.2,124.8 220.8,223.2 319.3,223.2" /><polyline points="80,382 135.3,382 80,470 135.3,470" /><polyline points="208.2,382 155.4,382 155.4,470 208.2,470" /><polyline points="155.4,426 195.7,426" /><polyline points="282.4,382 229.6,382 229.6,470 282.4,470" /><polyline points="229.6,426 269.8,426" /><polyline points="303.8,382 303.8,470" /><polyline points="354.1,382 303.8,429.8" /><polyline points="322.6,417.2 356.6,470" /><polyline points="377.9,470 377.9,382 411.9,382 427,392.1 430.7,409.7 427,427.3 411.9,437.3 377.9,437.3" /><polyline points="401.8,437.3 430.7,470" /></g></svg>
  );
});

ZeekrLogoDark.displayName = 'ZeekrLogoDark';

export default ZeekrLogoDark;