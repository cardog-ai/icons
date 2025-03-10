import * as React from 'react';
import { forwardRef } from 'react';

/**
 * ChevroletIcon icon component
 */
const ChevroletIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#141414" d="M78.133 279.103 101.7 233.79h98.875v-31.478H311.18v31.612h122.742l-23.567 45.312H311.18v31.586H200.575v-31.719zM329.863 184H181.782v31.612H70.632L28 297.495h153.782V329h148.081v-31.505h111.505L484 215.692H329.918z" /></svg>
  );
});

ChevroletIcon.displayName = 'ChevroletIcon';

export default ChevroletIcon;