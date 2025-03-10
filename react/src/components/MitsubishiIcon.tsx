import * as React from 'react';
import { forwardRef } from 'react';

/**
 * MitsubishiIcon icon component
 */
const MitsubishiIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#EE1D23" d="m253.724 107.818-57.816 92.87 116.087 202.583L434 402.816l-61.913-100.154H138.092L78 404.182h113.811l122.005-205.315z" /></svg>
  );
});

MitsubishiIcon.displayName = 'MitsubishiIcon';

export default MitsubishiIcon;