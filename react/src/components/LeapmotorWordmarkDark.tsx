import * as React from 'react';
import { forwardRef } from 'react';

export interface LeapmotorWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * LeapmotorWordmarkDark icon component
 */
const LeapmotorWordmarkDark = forwardRef<SVGSVGElement, LeapmotorWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="29.5,225.2 29.5,286.8 66.5,286.8" /><polyline points="118.5,225.2 81.5,225.2 81.5,286.8 118.5,286.8" /><polyline points="81.5,256 109.7,256" /><polyline points="130,286.8 152,225.2 174,286.8" /><polyline points="139.7,265.7 164.4,265.7" /><polyline points="185.5,286.8 185.5,225.2 209.3,225.2 219.9,232.2 222.5,244.5 219.9,256.9 209.3,263.9 185.5,263.9" /><polyline points="237.5,286.8 237.5,225.2 256,263 274.5,225.2 274.5,286.8" /><polyline points="301.4,225.2 290.4,234 287.7,256 290.4,278 301.4,286.8 314.6,286.8 325.6,278 328.3,256 325.6,234 314.6,225.2 301.4,225.2" /><polyline points="338,225.2 382,225.2" /><polyline points="360,225.2 360,286.8" /><polyline points="405.4,225.2 394.4,234 391.7,256 394.4,278 405.4,286.8 418.6,286.8 429.6,278 432.2,256 429.6,234 418.6,225.2 405.4,225.2" /><polyline points="445.5,286.8 445.5,225.2 469.3,225.2 479.8,232.2 482.5,244.5 479.8,256.9 469.3,263.9 445.5,263.9" /><polyline points="462.2,263.9 482.5,286.8" /></g></svg>
  );
});

LeapmotorWordmarkDark.displayName = 'LeapmotorWordmarkDark';

export default LeapmotorWordmarkDark;