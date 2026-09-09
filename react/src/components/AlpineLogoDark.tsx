import * as React from 'react';
import { forwardRef } from 'react';

export interface AlpineLogoDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * AlpineLogoDark icon component
 */
const AlpineLogoDark = forwardRef<SVGSVGElement, AlpineLogoDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="156.4,270.1 244.3,92 256,68.5 299.4,152.9 355.6,270.1" /><polyline points="193.9,203.3 299.4,203.3" /><polyline points="244.3,92 383.7,29.9" /><polyline points="39.1,470 70.6,382 102,470" /><polyline points="53,439.8 88.2,439.8" /><polyline points="118.3,382 118.3,470 171.1,470" /><polyline points="192.5,470 192.5,382 226.5,382 241.5,392.1 245.3,409.7 241.5,427.3 226.5,437.3 192.5,437.3" /><polyline points="293.1,382 293.1,470" /><polyline points="340.9,470 340.9,382 393.7,470 393.7,382" /><polyline points="467.8,382 415,382 415,470 467.8,470" /><polyline points="415,426 455.3,426" /></g></svg>
  );
});

AlpineLogoDark.displayName = 'AlpineLogoDark';

export default AlpineLogoDark;