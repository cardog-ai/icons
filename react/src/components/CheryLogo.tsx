import * as React from 'react';
import { forwardRef } from 'react';

export interface CheryLogoProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * CheryLogo icon component
 */
const CheryLogo = forwardRef<SVGSVGElement, CheryLogoProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em" ref={ref} {...sizeProps} {...props}><g stroke="#111111" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round"><polyline points="370.8,174 369.8,185.2 366.9,196.1 362.1,206.8 355.4,216.8 347.1,226.1 337.2,234.5 325.9,241.9 313.4,248.1 299.9,253 285.7,256.6 271,258.8 256,259.5 241,258.8 226.3,256.6 212.1,253 198.6,248.1 186.1,241.9 174.8,234.5 164.9,226.1 156.6,216.8 149.9,206.8 145.1,196.1 142.2,185.2 141.2,174 142.2,162.8 145.1,151.9 149.9,141.2 156.6,131.2 164.9,121.9 174.8,113.5 186.1,106.1 198.6,99.9 212.1,95 226.3,91.4 241,89.2 256,88.5 271,89.2 285.7,91.4 299.9,95 313.4,99.9 325.9,106.1 337.2,113.5 347.1,121.9 355.4,131.2 362.1,141.2 366.9,151.9 369.8,162.8 370.8,174" /><polyline points="197.6,158.6 189.6,153.7 178.9,153.7 171.2,160.5 169.3,174 171.2,187.5 178.9,194.3 189.6,194.3 197.6,189.4" /><polyline points="206.8,152.5 206.8,195.5" /><polyline points="232.6,152.5 232.6,195.5" /><polyline points="206.8,174 232.6,174" /><polyline points="268.9,152.5 243.1,152.5 243.1,195.5 268.9,195.5" /><polyline points="243.1,174 262.7,174" /><polyline points="279.4,195.5 279.4,152.5 296,152.5 303.3,157.4 305.2,166 303.3,174.6 296,179.5 279.4,179.5" /><polyline points="291,179.5 305.2,195.5" /><polyline points="314.4,152.5 328.5,175.2" /><polyline points="342.7,152.5 328.5,175.2" /><polyline points="328.5,175.2 328.5,195.5" /><polyline points="136.6,394.6 120.2,384.5 98.2,384.5 82.5,398.3 78.7,426 82.5,453.7 98.2,467.5 120.2,467.5 136.6,457.4" /><polyline points="155.4,382 155.4,470" /><polyline points="208.2,382 208.2,470" /><polyline points="155.4,426 208.2,426" /><polyline points="282.4,382 229.6,382 229.6,470 282.4,470" /><polyline points="229.6,426 269.8,426" /><polyline points="303.8,470 303.8,382 337.7,382 352.8,392.1 356.6,409.7 352.8,427.3 337.7,437.3 303.8,437.3" /><polyline points="327.7,437.3 356.6,470" /><polyline points="375.4,382 404.3,428.5" /><polyline points="433.3,382 404.3,428.5" /><polyline points="404.3,428.5 404.3,470" /></g></svg>
  );
});

CheryLogo.displayName = 'CheryLogo';

export default CheryLogo;