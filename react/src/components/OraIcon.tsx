import * as React from 'react';
import { forwardRef } from 'react';

export interface OraIconProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * OraIcon icon component
 */
const OraIcon = forwardRef<SVGSVGElement, OraIconProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="411.9,256 410.5,271 406.5,285.7 400,300 390.9,313.4 379.6,325.9 366.3,337.2 350.9,347.1 333.9,355.4 315.6,362.1 296.4,366.9 276.3,369.9 256,370.8 235.7,369.9 215.6,366.9 196.4,362.1 178.1,355.4 161.1,347.1 145.8,337.2 132.4,325.9 121.1,313.4 112,300 105.5,285.7 101.5,271 100.1,256 101.5,241 105.5,226.3 112,212 121.1,198.6 132.4,186.1 145.8,174.8 161.1,164.9 178.1,156.6 196.4,149.9 215.6,145.1 235.7,142.1 256,141.2 276.3,142.1 296.4,145.1 315.6,149.9 333.9,156.6 350.9,164.9 366.3,174.8 379.6,186.1 390.9,198.6 400,212 406.5,226.3 410.5,241 411.9,256" /><polyline points="188.3,220.4 175.6,230.6 172.6,256 175.6,281.4 188.3,291.6 203.6,291.6 216.3,281.4 219.4,256 216.3,230.6 203.6,220.4 188.3,220.4" /><polyline points="234.7,291.6 234.7,220.4 262.1,220.4 274.3,228.5 277.3,242.8 274.3,257 262.1,265.2 234.7,265.2" /><polyline points="253.9,265.2 277.3,291.6" /><polyline points="290.6,291.6 316,220.4 341.5,291.6" /><polyline points="301.8,267.2 330.2,267.2" /></g></svg>
  );
});

OraIcon.displayName = 'OraIcon';

export default OraIcon;