import * as React from 'react';
import { forwardRef } from 'react';

export interface DaciaLogoHorizontalDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * DaciaLogoHorizontalDark icon component
 */
const DaciaLogoHorizontalDark = forwardRef<SVGSVGElement, DaciaLogoHorizontalDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="73.19999999999999,255.4 117.19999999999999,232 130.3,256.6 86.30000000000001,280 73.19999999999999,255.4" /><polyline points="119.69999999999999,255.4 163.7,232 176.8,256.6 132.8,280 119.69999999999999,255.4" /><polyline points="253.5,225.4 253.5,286.6" /><polyline points="253.5,225.4 272.7,225.4 285.8,235 291.1,256 285.8,277 272.7,286.6 253.5,286.6" /><polyline points="301.6,286.6 323.4,225.4 345.3,286.6" /><polyline points="311.2,265.6 335.7,265.6" /><polyline points="395.1,234.1 383.7,227.2 368.4,227.2 357.5,236.8 354.9,256 357.5,275.2 368.4,284.8 383.7,284.8 395.1,277.9" /><polyline points="426.6,225.4 426.6,286.6" /><polyline points="456.3,286.6 478.1,225.4 500,286.6" /><polyline points="465.9,265.6 490.4,265.6" /></g></svg>
  );
});

DaciaLogoHorizontalDark.displayName = 'DaciaLogoHorizontalDark';

export default DaciaLogoHorizontalDark;