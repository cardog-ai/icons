import * as React from 'react';
import { forwardRef } from 'react';

export interface VoyahWordmarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * VoyahWordmark icon component
 */
const VoyahWordmark = forwardRef<SVGSVGElement, VoyahWordmarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...sizeProps} {...props}><path d="M411.6 225.5L399.6 226.9L400.6 286.5L413.5 286.1L414.4 263.2L467.4 262.7L472.2 264.1L472.2 286.1L486.0 286.1L485.0 225.5L472.2 226.4L471.2 249.8L414.4 249.8Z" fill="#111111" /><path d="M39.8 225.9L26.0 227.8L68.9 286.5L113.8 227.8L97.6 226.9L68.9 264.6Z" fill="#111111" /><path d="M196.4 225.9L128.1 228.3L122.4 237.4L124.8 280.8L134.3 287.0L202.6 284.2L208.3 275.1L208.3 237.4ZM141.5 238.8L193.0 239.8L194.4 270.8L189.7 274.1L138.6 273.2L135.8 242.2Z" fill="#111111" /><path d="M232.1 225.9L216.9 227.4L251.7 261.7L254.6 287.0L266.5 285.6L267.0 261.7L301.8 227.4L283.7 226.9L258.4 250.3Z" fill="#111111" /><path d="M339.5 225.9L293.7 286.5L309.4 286.1L338.1 247.4L366.7 286.1L382.5 286.5Z" fill="#111111" /></svg>
  );
});

VoyahWordmark.displayName = 'VoyahWordmark';

export default VoyahWordmark;