import * as React from 'react';
import { forwardRef } from 'react';

export interface AlpineIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * AlpineIcon icon component
 */
const AlpineIcon = forwardRef<SVGSVGElement, AlpineIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="116.5,390.5 239.6,141.2 256,108.3 316.7,226.5 395.5,390.5" /><polyline points="169,297 316.7,297" /><polyline points="239.6,141.2 434.8,54.2" /></g></svg>
  );
});

AlpineIcon.displayName = 'AlpineIcon';

export default AlpineIcon;