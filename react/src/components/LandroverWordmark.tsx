import * as React from 'react';
import { forwardRef } from 'react';

/**
 * LandroverWordmark icon component
 */
const LandroverWordmark = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><g clipPath="url(#prefix__a)"><path fill="#000" d="m288.296 258.394-17.96 35.276h-.373l-.909-35.276h-15.022l-.586 1.27 1.288.786c1.243.876 1.591 1.765 1.752 4.213l2.036 42.808h16.736l27.01-49.077zm-53.461 25.405c-1.681 4.826-3.002 7.931-4.953 9.98-1.534 1.611-3.556 2.764-8.214 2.764-3.652 0-5.688-1.495-5.688-4.323-.026-1.823.47-4.594 2.422-9.987 1.688-4.819 3.009-7.925 4.967-9.973 1.514-1.611 3.543-2.771 8.207-2.771 3.652 0 5.682 1.495 5.675 4.31.039 1.85-.457 4.62-2.416 10m-.779-26.01h-1.559c-9.244 0-14.526 2.493-18.862 7.1-5.391 5.702-10.455 21.12-10.358 29.277.103 8.318 5.482 14.084 16.787 14.084h1.656c9.27 0 14.552-2.493 18.887-7.1 5.386-5.715 10.346-21.127 10.249-29.277-.109-8.311-5.488-14.084-16.8-14.084m-45.389 18.42c-.844 2.094-1.772 2.597-2.989 3.093-.818.322-2.551.438-4.22.438h-6.461l3.517-10.141h7.808c2.338 0 3.292 1.217 3.324 2.603.013.882-.393 2.499-.979 4.007m-1.16-17.815H166.32l-.425 1.27.857.844c.902.889.869 1.945.077 4.213l-14.803 42.75h13.528l5.784-16.971 4.58.006 5.089 16.965H194.6l-6.391-17.364c3.711-.6 5.573-1.663 7.434-3.318 2.551-2.333 4.316-5.606 5.779-10.425 2.138-6.991.843-10.986-.529-13.034-1.887-2.822-5.862-4.936-13.386-4.936m141.927 29.393 3.749-10.263h-17.245l2.673-7.835h18.682l4.103-11.327h-35.269l-.489 1.443.843.831c.909.883.87 1.933.084 4.214l-14.687 42.601h32.956l3.981-11.404H309.58l2.834-8.26zm39.572-11.578c-.844 2.094-1.785 2.597-2.983 3.093-.837.322-2.544.438-4.213.438h-6.454l3.485-10.141h7.82c2.325 0 3.292 1.217 3.311 2.603.026.882-.393 2.499-.966 4.007m-1.179-17.815h-21.181l-.412 1.27.85.844c.909.889.863 1.945.084 4.213l-14.816 42.75h13.547l5.778-16.965h4.574l5.095 16.965h13.58l-6.378-17.364c3.704-.6 5.566-1.663 7.421-3.318 2.558-2.333 4.329-5.606 5.792-10.425 2.138-6.991.843-10.986-.522-13.034-1.888-2.822-5.869-4.936-13.412-4.936m27.777 65.861c-37.163 19.206-86.733 29.785-139.601 29.785-52.861 0-102.425-10.579-139.594-29.785-35.746-18.479-55.445-42.544-55.445-67.749 0-25.224 19.7-49.288 55.445-67.754 37.169-19.2 86.733-29.792 139.594-29.792 52.868 0 102.438 10.592 139.601 29.792 35.752 18.466 55.432 42.53 55.432 67.754 0 25.205-19.68 49.27-55.432 67.749m5.031-145.245C361.933 159.011 310.572 148 256.003 148s-105.936 11.011-144.625 31.01C88.458 190.859 50 216.682 50 256.506c0 39.805 38.458 65.635 61.378 77.484C150.061 353.989 201.422 365 256.003 365c54.575 0 105.936-11.011 144.632-31.01C423.555 322.141 462 296.318 462 256.506c0-39.83-38.445-65.647-61.365-77.496m-10.236 135.174c-39.984 20.656-89.722 28.51-134.396 28.51-44.68 0-94.405-7.854-134.402-28.51-21.161-10.947-49.293-31.113-49.293-57.678 0-26.59 28.125-46.737 49.293-57.677 39.997-20.656 89.722-28.51 134.402-28.51 44.674 0 94.412 7.841 134.396 28.51 21.181 10.94 49.299 31.087 49.299 57.677 0 26.578-28.125 46.731-49.299 57.678m2.074-119.382c-40.596-20.998-91.145-29.032-136.47-29.032-45.331 0-95.867 8.041-136.483 29.032-22.804 11.778-51.747 33.04-51.747 61.704 0 28.64 28.943 49.914 51.747 61.705 40.616 20.978 91.165 29.019 136.483 29.019 45.325 0 95.874-8.028 136.47-29.019 22.817-11.791 51.76-33.065 51.76-61.705 0-28.664-28.936-49.926-51.76-61.704m-238.869 69.919-37.021 12.178-4.522 12.409h32.647l4.251-11.694h-22.63l25.69-8.698zm147.312-54.372h5.366c3.652 0 5.669 1.224 5.714 4.053.032 1.823-.458 4.323-2.352 9.703-1.675 4.813-3.014 7.602-4.915 9.645-1.527 1.611-3.556 2.326-8.213 2.326h-4.484zm-11.763-5.316-14.649 42.75h21.613c9.263 0 14.552-2.056 18.842-6.656 5.385-5.696 10.307-20.514 10.146-28.671-.161-8.325-5.534-13.743-16.839-13.743h-19.635l-.412 1.263.85.831c.902.895.87 1.952.084 4.226m81.553 11.276h-32.647l-4.251 11.681h22.623l-25.696 8.724-1.585 4.181 37.021-12.177zm-145.913 31.448h12.303l10.733-31.745 6.274 31.745h12.317l16.787-49.064-12.871.02-8.967 26.667-5.121-26.667H238.9l-.425 1.263.85.831c.915.895.87 1.952.091 4.226zm-88.215.026 33.478-.013 4.046-11.694h-19.461l12.858-37.363h-16.787l-.419 1.263.837.831c.915.895.876 1.952.09 4.226zm71.227-35.508h.439l.231 14.819h-9.031zm-34.276 35.482h14.242l6.172-10.844h14.745l.148 10.844h12.922l-2.789-49.044h-19.345l-.431 1.263.625.625c1.017.998.599 2.435-3.17 8.414z" /></g><defs><clipPath id="prefix__a"><path fill="#fff" d="M50 148h412v217H50z" /></clipPath></defs></svg>
  );
});

LandroverWordmark.displayName = 'LandroverWordmark';

export default LandroverWordmark;