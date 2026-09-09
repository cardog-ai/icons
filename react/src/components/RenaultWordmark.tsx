import * as React from 'react';
import { forwardRef } from 'react';

export interface RenaultWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * RenaultWordmark icon component
 */
const RenaultWordmark = forwardRef<SVGSVGElement, RenaultWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...sizeProps} {...props}><g transform="translate(6 127.5) scale(1)"><path fillRule="evenodd" clipRule="evenodd" d="m 79.9942,374.10754 v 62.23127 h 54.2125 V 423.79185 H 96.1104 V 411.1899 h 33.3725 V 398.80857 H 96.1104 v -12.31994 h 37.3091 v -12.38109 z" fill="#0B0B0B" /><path fillRule="evenodd" clipRule="evenodd" d="m 0,374.10754 v 62.23127 h 16.1162 v -19.49003 h 19.4006 l 11.2528,19.49003 h 18.5865 l -13.496,-22.89223 c 6.5534,-3.61768 11.2722,-10.20709 11.2722,-18.31429 0,-16.64605 -12.6179,-21.02475 -22.8701,-21.02475 z m 16.1162,12.38109 h 22.8561 c 2.9512,0 6.2357,2.29429 6.2357,9.38713 0,2.40483 -0.702,8.59169 -6.2357,8.59169 H 16.1162 Z" fill="#0B0B0B" /><path d="m 148.8468,374.10754 v 62.23127 h 16.1162 v -40.08544 l 35.6286,40.08544 h 16.116 v -62.23127 h -16.116 v 39.7587 l -35.6286,-39.7587 z" fill="#0B0B0B" /><path fillRule="evenodd" clipRule="evenodd" d="m 253.3119,374.10754 -27.4231,62.23127 h 18.4797 l 4.1814,-10.59523 h 31.3448 l 4.1814,10.59523 h 18.4797 l -27.4231,-62.23127 z m 10.9103,11.92151 10.7866,27.33332 h -21.5729 z" fill="#0B0B0B" /><path d="m 391.7109,374.10754 v 62.23127 H 443.34 v -12.54696 h -35.5131 v -49.68431 z" fill="#0B0B0B" /><path d="m 435.4432,374.10754 v 12.38109 h 24.2204 v 49.85018 h 16.1161 V 386.48863 H 500 v -12.38109 z" fill="#0B0B0B" /><path d="m 310.1242,374.10754 v 42.05703 c 0,17.62353 17.8765,21.35867 32.0531,21.35867 14.1766,0 32.0533,-3.73514 32.0533,-21.35867 v -42.05703 h -16.1162 v 41.26999 c 0,6.40728 -9.6883,8.55893 -15.9371,8.55893 -6.2488,0 -15.937,-2.15165 -15.937,-8.55893 v -41.26999 z" fill="#0B0B0B" /></g></svg>
  );
});

RenaultWordmark.displayName = 'RenaultWordmark';

export default RenaultWordmark;