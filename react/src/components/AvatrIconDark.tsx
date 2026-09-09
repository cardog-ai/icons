import * as React from 'react';
import { forwardRef } from 'react';

export interface AvatrIconDarkProps extends React.SVGProps<SVGSVGElement> {
  /** Size of the icon (sets both width and height) */
  size?: number | string;
}

/**
 * AvatrIconDark icon component
 */
const AvatrIconDark = forwardRef<SVGSVGElement, AvatrIconDarkProps>(({ size, ...props }, ref) => {
  const sizeProps = size !== undefined ? { width: size, height: size } : {};
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...sizeProps} {...props}><path d="M368.5 44.3L143.5 44.0L140.6 44.5L138.4 46.2L137.6 48.0L137.6 464.0L138.1 465.6L139.8 467.2L142.4 468.0L369.6 468.0L372.2 467.2L373.6 465.8L374.4 464.0L374.4 48.0L372.5 45.1ZM151.1 54.5L360.9 54.2L256.3 396.8L255.7 396.8ZM147.6 77.2L249.5 407.9L247.9 409.2L147.8 455.6ZM364.2 77.2L364.4 455.6L262.5 408.4ZM255.5 416.8L256.5 416.5L347.7 457.8L164.3 458.0L166.2 456.7Z" fill="#FFFFFF" /></svg>
  );
});

AvatrIconDark.displayName = 'AvatrIconDark';

export default AvatrIconDark;