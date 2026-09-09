import * as React from 'react';
import { forwardRef } from 'react';

export interface PeugeotLogoProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * PeugeotLogo icon component
 */
const PeugeotLogo = forwardRef<SVGSVGElement, PeugeotLogoProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="168.1,62.7 343.9,62.7 343.9,175.2 256,290 168.1,175.2 168.1,62.7" /><polyline points="216.2,260.7 225.5,205.6 250.1,159.9" /><polyline points="250.1,159.9 279.4,138.8 288.8,167 265.4,172.8 250.1,159.9" /><polyline points="257.2,181 299.4,150.6" /><polyline points="216.2,260.7 249,260.7" /><polyline points="225.5,205.6 192.7,192.8 188,155.3" /><polyline points="30.6,470 30.6,390.3 61.3,390.3 75,399.4 78.4,415.3 75,431.3 61.3,440.4 30.6,440.4" /><polyline points="145.6,390.3 97.7,390.3 97.7,470 145.6,470" /><polyline points="97.7,430.1 134.2,430.1" /><polyline points="164.9,390.3 164.9,456.3 177.4,470 200.2,470 212.7,456.3 212.7,390.3" /><polyline points="282.2,401.7 267.4,392.6 247.5,392.6 233.2,405.1 229.8,430.1 233.2,455.2 247.5,467.7 267.4,467.7 282.2,458.6 282.2,438.1 259.4,438.1" /><polyline points="347.1,390.3 299.3,390.3 299.3,470 347.1,470" /><polyline points="299.3,430.1 335.7,430.1" /><polyline points="381.8,390.3 367.6,401.7 364.2,430.1 367.6,458.6 381.8,470 398.9,470 413.1,458.6 416.5,430.1 413.1,401.7 398.9,390.3 381.8,390.3" /><polyline points="429.1,390.3 486,390.3" /><polyline points="457.5,390.3 457.5,470" /></g></svg>
  );
});

PeugeotLogo.displayName = 'PeugeotLogo';

export default PeugeotLogo;