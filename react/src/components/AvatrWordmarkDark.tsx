import * as React from 'react';
import { forwardRef } from 'react';

export interface AvatrWordmarkDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * AvatrWordmarkDark icon component
 */
const AvatrWordmarkDark = forwardRef<SVGSVGElement, AvatrWordmarkDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...sizeProps} {...props}><path d="M73.6 233.6L72.3 233.4L70.0 234.3L26.0 278.6L34.1 278.6L36.8 277.9L39.7 276.3L71.8 244.7L74.1 244.7L75.2 245.3L106.2 276.3L108.5 277.7L111.8 278.6L119.9 278.6L76.6 235.0L74.5 233.6Z" fill="#FFFFFF" /><path d="M125.8 233.6L119.0 233.4L119.0 233.9L163.1 277.7L165.1 278.6L166.9 278.6L168.9 277.7L213.0 233.9L213.0 233.4L203.8 233.6L199.3 235.7L168.0 266.9L165.8 267.6L164.2 267.1L133.0 235.9L128.9 233.9Z" fill="#FFFFFF" /><path d="M259.5 233.6L258.1 233.4L256.3 234.1L211.8 278.6L219.9 278.6L222.2 278.1L225.3 276.6L254.1 247.8L257.9 244.7L260.8 245.1L292.7 276.8L297.7 278.6L306.0 278.6L261.7 234.3Z" fill="#FFFFFF" /><path d="M374.3 233.6L297.9 233.4L304.0 239.7L309.4 241.7L386.7 241.7L379.7 235.0L377.0 233.9Z" fill="#FFFFFF" /><path d="M475.4 233.9L405.3 233.6L410.5 239.0L415.4 241.5L473.9 241.7L477.0 243.8L477.7 247.1L475.9 250.0L473.2 250.9L406.2 250.9L405.1 252.1L405.1 277.5L406.4 278.6L411.8 278.6L413.2 277.5L413.4 259.0L454.8 259.0L470.7 275.2L473.4 277.2L477.7 278.6L485.8 278.6L466.4 259.3L475.0 259.0L477.7 258.4L481.3 256.3L484.0 253.4L485.3 250.7L486.0 248.0L486.0 244.7L484.7 240.4L480.4 235.7L478.4 234.5Z" fill="#FFFFFF" /><path d="M345.1 250.7L339.5 250.5L338.1 251.8L338.1 277.2L339.7 278.6L344.9 278.6L346.2 277.5L346.2 251.6Z" fill="#FFFFFF" /></svg>
  );
});

AvatrWordmarkDark.displayName = 'AvatrWordmarkDark';

export default AvatrWordmarkDark;