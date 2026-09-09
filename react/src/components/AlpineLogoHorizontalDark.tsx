import * as React from 'react';
import { forwardRef } from 'react';

export interface AlpineLogoHorizontalDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * AlpineLogoHorizontalDark icon component
 */
const AlpineLogoHorizontalDark = forwardRef<SVGSVGElement, AlpineLogoHorizontalDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#FFFFFF" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="68.6,310.5 118.4,209.5 125,196.2 149.60000000000002,244 181.39999999999998,310.5" /><polyline points="89.80000000000001,272.6 149.60000000000002,272.6" /><polyline points="118.4,209.5 197.39999999999998,174.3" /><polyline points="250,281.4 268.1,230.6 286.2,281.4" /><polyline points="258,264 278.3,264" /><polyline points="295.7,230.6 295.7,281.4 326.1,281.4" /><polyline points="338.4,281.4 338.4,230.6 358,230.6 366.7,236.4 368.8,246.6 366.7,256.7 358,262.5 338.4,262.5" /><polyline points="396.4,230.6 396.4,281.4" /><polyline points="423.9,281.4 423.9,230.6 454.3,281.4 454.3,230.6" /><polyline points="497.1,230.6 466.7,230.6 466.7,281.4 497.1,281.4" /><polyline points="466.7,256 489.9,256" /></g></svg>
  );
});

AlpineLogoHorizontalDark.displayName = 'AlpineLogoHorizontalDark';

export default AlpineLogoHorizontalDark;