/**
 * Template for React SVG icon components
 */
export const componentTemplate = `import * as React from 'react';
import { forwardRef } from 'react';

/**
 * {{componentName}} icon component
 */
const {{componentName}} = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    {{svgContent}}
  );
});

{{componentName}}.displayName = '{{componentName}}';

export default {{componentName}};`;
