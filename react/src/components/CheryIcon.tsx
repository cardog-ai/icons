import * as React from 'react';
import { forwardRef } from 'react';

export interface CheryIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * CheryIcon icon component
 */
const CheryIcon = forwardRef<SVGSVGElement, CheryIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="416.8,256 415.4,271.7 411.3,287 404.6,301.9 395.2,315.9 383.6,328.9 369.7,340.7 353.9,351 336.4,359.7 317.5,366.7 297.6,371.7 277,374.8 256,375.8 235,374.8 214.4,371.7 194.5,366.7 175.6,359.7 158.1,351 142.3,340.7 128.4,328.9 116.8,315.9 107.4,301.9 100.7,287 96.6,271.7 95.2,256 96.6,240.3 100.7,225 107.4,210.1 116.8,196.1 128.4,183.1 142.3,171.3 158.1,161 175.6,152.3 194.5,145.3 214.4,140.3 235,137.2 256,136.2 277,137.2 297.6,140.3 317.5,145.3 336.4,152.3 353.9,161 369.7,171.3 383.6,183.1 395.2,196.1 404.6,210.1 411.3,225 415.4,240.3 416.8,256" /><polyline points="174.2,234.5 163.1,227.6 148,227.6 137.2,237.1 134.7,256 137.2,274.9 148,284.4 163.1,284.4 174.2,277.5" /><polyline points="187.2,225.9 187.2,286.1" /><polyline points="223.3,225.9 223.3,286.1" /><polyline points="187.2,256 223.3,256" /><polyline points="274,225.9 238,225.9 238,286.1 274,286.1" /><polyline points="238,256 265.4,256" /><polyline points="288.7,286.1 288.7,225.9 311.9,225.9 322.3,232.8 324.8,244.8 322.3,256.8 311.9,263.7 288.7,263.7" /><polyline points="305.1,263.7 324.8,286.1" /><polyline points="337.8,225.9 357.6,257.7" /><polyline points="377.3,225.9 357.6,257.7" /><polyline points="357.6,257.7 357.6,286.1" /></g></svg>
  );
});

CheryIcon.displayName = 'CheryIcon';

export default CheryIcon;