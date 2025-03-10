import * as React from 'react';
import { forwardRef } from 'react';

/**
 * MiniWordmark icon component
 */
const MiniWordmark = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#120A08" d="M430.447 188.172v133.61h29.892v-133.61zM282.203 188.172v133.61h27.772v-87.127l59.683 87.127h29.993v-133.61h-27.77v89.224l-60.59-89.224zM223.635 188.172v133.61h29.891v-133.61zM51.662 188.172v133.61H79.43V216.609l29.288 105.173h28.78l29.387-105.173v105.173h27.771v-133.61h-44.839l-26.557 91.139-26.861-91.139z" /></svg>
  );
});

MiniWordmark.displayName = 'MiniWordmark';

export default MiniWordmark;