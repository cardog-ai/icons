import * as React from 'react';
import { forwardRef } from 'react';

/**
 * HondaLogo icon component
 */
const HondaLogo = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#C00" d="m97.558 344.746 6.285.748c2.844.299 3.143 2.693 3.143 4.188v7.329H78.103v-7.329c0-1.495.299-3.889 3.142-4.188l6.286-.748v-6.282H50.117v6.282l6.286.748c2.843.299 3.142 2.693 3.142 4.188v24.231c0 1.495-.299 3.888-3.142 4.188l-6.286.747v6.282h37.414v-6.282l-6.286-.747c-2.843-.3-3.142-2.693-3.142-4.188v-7.329h28.733v7.329c0 1.495-.299 3.888-3.142 4.188l-6.286.747v6.282h37.414v-6.282l-6.286-.747c-2.843-.3-3.142-2.693-3.142-4.188v-24.231c0-1.495.299-3.889 3.142-4.188l6.286-.748v-6.282H97.408v6.282zM346.733 338.464H300.64v6.282l5.537.599c1.945.299 3.292 1.047 3.292 3.739v24.679c0 1.496-.299 3.889-3.142 4.188l-6.286.748v6.282h46.692c16.762 0 30.53-6.731 30.53-23.333s-13.768-23.184-30.53-23.184m-3.442 37.692h-15.713v-28.717h15.713c9.279 0 12.422 4.337 12.422 14.358 0 9.872-3.143 14.359-12.422 14.359" /><path fill="#C00" d="M455.682 378.101c-2.993-.3-3.891-2.244-4.789-3.59l-21.55-32.906c-1.497-2.393-2.694-3.141-4.939-3.141h-35.318v6.282l8.53.898c1.197.149 2.843 1.795 1.496 3.889l-16.013 25.875c-.598 1.047-1.496 2.244-3.292 2.543l-6.286.748v6.282h29.782v-6.282l-5.088-.449c-2.245-.299-3.443-1.795-2.245-3.59l2.394-3.888h28.734l2.095 3.141c1.946 2.841-.449 4.038-2.544 4.188l-5.238.598v6.282h40.407v-6.282zm-52.379-15.556 8.829-14.358 9.429 14.358zM267.267 344.746l6.286.748c2.843.299 3.143 2.693 3.143 4.188v23.333l-24.693-32.606c-1.048-1.496-2.096-1.945-4.789-1.945h-32.026v6.282l6.285.748c2.843.299 3.143 2.693 3.143 4.188v24.231c0 1.495-.3 3.888-3.143 4.188l-6.285.747v6.282h29.93v-6.282l-6.285-.747c-2.843-.3-3.143-2.693-3.143-4.188V350.58l24.693 32.456c1.198 1.496 2.095 1.945 4.789 1.945h22.748v-35.448c0-1.496.299-3.889 3.143-4.188l6.285-.748v-6.282h-29.781zM174.93 336.819c-30.38 0-38.162 13.312-38.162 24.829s7.782 24.978 38.162 24.978 38.162-13.312 38.162-24.829c0-11.666-7.782-24.978-38.162-24.978m0 40.982c-11.823 0-16.612-4.935-16.612-16.004 0-11.068 4.938-16.004 16.612-16.004 11.822 0 16.611 4.936 16.611 16.004s-4.789 16.004-16.611 16.004M307.673 141.78c-5.088 22.884-7.183 33.503-11.374 49.956-4.04 15.854-7.183 30.662-12.571 37.841-5.387 7.329-12.72 8.825-17.659 9.423-2.544.299-4.49.449-10.027.449s-7.483-.15-10.027-.449c-4.938-.598-12.271-2.094-17.659-9.423-5.387-7.179-8.53-21.987-12.421-37.841-4.191-16.602-6.286-27.072-11.374-49.956 0 0-5.088.149-7.333.299-3.143.149-5.537.448-8.082.748 0 0 2.994 47.114 4.34 67.157 1.347 20.939 3.892 56.388 6.136 83.161 0 0 4.34.747 11.524 1.047 7.483.448 10.925.448 10.925.448 3.142-11.816 6.884-28.119 11.224-35.149 3.591-5.683 8.979-6.282 12.122-6.73 4.789-.599 8.979-.748 10.775-.748 1.945 0 5.986 0 10.775.748 3.143.448 8.53 1.047 12.122 6.73 4.34 7.03 8.231 23.333 11.224 35.149 0 0 3.293 0 10.775-.448 7.184-.449 11.524-1.047 11.524-1.047 2.245-26.773 4.789-62.072 6.136-83.161 1.347-19.893 4.34-67.157 4.34-67.157-2.544-.3-5.089-.599-8.082-.748-2.245-.15-7.333-.299-7.333-.299" /><path fill="#C00" d="M367.087 169.6c-2.993-29.914-23.047-36.196-40.557-39.188-8.829-1.495-24.543-2.692-34.57-3.141-8.83-.598-29.482-.897-35.768-.897-6.285 0-26.937.299-35.767.897-10.027.449-25.741 1.646-34.57 3.141-17.51 2.992-37.564 9.274-40.557 39.188-.898 8.226-1.047 18.846-.898 30.213.299 18.995 1.946 31.709 2.844 40.683.598 6.132 3.142 24.38 6.435 33.803 4.489 13.012 8.53 16.752 13.319 20.641 8.68 7.029 23.047 9.273 26.04 9.871 16.163 2.842 48.788 3.44 63.304 3.44 14.367 0 47.141-.448 63.304-3.44 2.993-.598 17.36-2.692 26.04-9.871 4.789-3.889 8.83-7.629 13.319-20.641 3.293-9.423 5.837-27.82 6.435-33.803.898-8.825 2.545-21.688 2.844-40.683-.15-11.517-.449-22.137-1.197-30.213m-11.075 50.255c-1.796 23.932-3.891 38.29-6.884 48.611-2.694 9.123-5.986 15.106-10.775 19.444-8.081 7.329-19.156 8.824-25.741 9.871-14.067 2.094-37.862 2.842-56.42 2.842-18.706 0-42.352-.748-56.42-2.842-6.584-1.047-17.659-2.542-25.74-9.871-4.789-4.338-8.082-10.47-10.775-19.444-2.993-10.321-5.238-24.679-6.884-48.611-1.048-14.358-.898-37.691.748-50.255 2.245-18.846 11.523-28.269 31.427-31.709 9.279-1.645 21.85-2.842 33.673-3.44 9.578-.599 25.142-.898 33.971-.898 8.68-.149 24.394.299 33.822.898 11.823.598 24.394 1.795 33.673 3.44 19.904 3.589 29.182 13.012 31.577 31.709 1.646 12.414 1.796 35.747.748 50.255" /></svg>
  );
});

HondaLogo.displayName = 'HondaLogo';

export default HondaLogo;