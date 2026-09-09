import * as React from 'react';
import { forwardRef } from 'react';

export interface MGIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * MGIcon icon component
 */
const MGIcon = forwardRef<SVGSVGElement, MGIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="116.5,116.5 395.5,116.5 395.5,395.5 116.5,395.5 116.5,116.5" /><polyline points="353,296.2 296.2,353 215.8,353 159,296.2 159,215.8 215.8,159 296.2,159 353,215.8 353,296.2" /><polyline points="188.1,303.1 188.1,208.9 216.3,266.7 244.6,208.9 244.6,303.1" /><polyline points="326.6,222.4 309.2,211.6 285.6,211.6 268.8,226.4 264.8,256 268.8,285.6 285.6,300.4 309.2,300.4 326.6,289.6 326.6,265.4 299.7,265.4" /></g></svg>
  );
});

MGIcon.displayName = 'MGIcon';

export default MGIcon;