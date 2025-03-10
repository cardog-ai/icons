import * as React from 'react';
import { forwardRef } from 'react';

/**
 * MaseratiLogo icon component
 */
const MaseratiLogo = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#000" fillRule="evenodd" d="M433.586 312.897h-8.478c.196-.43.391-.821.586-1.211 1.407-2.774 2.852-3.673 5.978-3.673h4.336c-.781 1.602-1.602 3.243-2.422 4.884" clipRule="evenodd" /><path fill="#000" fillRule="evenodd" d="M424.444 331.766c2.579-5.235 5.196-10.47 7.774-15.705h-8.477c-2.227 4.532-4.493 9.025-6.719 13.556-.782 1.524-1.798 2.149-3.595 2.149H392.8a2245 2245 0 0 0 8.361-16.799c1.172-2.344 1.601-2.5 4.375-2.5h2.461c2.383 0 3.516-.664 4.493-2.578.39-.782.742-1.563 1.133-2.305h-8.79c1.25-2.54 2.539-5.079 3.789-7.618h-5.547c-2.422 0-3.555.625-4.493 2.539-.82 1.68-1.68 3.399-2.5 5.079h-4.649c-.781 1.641-1.602 3.242-2.422 4.883h4.649a3509 3509 0 0 0-8.556 17.15c-.742 1.524-1.797 2.149-3.555 2.149h-18.322l9.727-17.814h-6.719c-1.563 0-2.227.507-3.242 1.719 0-1.29-.469-1.719-1.68-1.719h-4.649c-7.657 0-11.955 2.383-15.275 8.438a648 648 0 0 0-3.946 7.266c-.859 1.524-1.875 2.11-3.594 2.11-3.907 0-7.853 0-11.798.039-4.258 0-5.938-.625-6.407-2.891-.508-2.383.547-4.375 6.29-8.165a158 158 0 0 0 3.242-2.148c1.485-.977 2.11-1.524 1.914-2.579-.195-.977-.781-2.07-5.43-2.07-7.423.039-14.806.039-22.229.039-2.344 0-3.438.586-4.492 2.539-2.383 4.375-4.806 8.751-7.189 13.126-.82 1.524-1.836 2.149-3.555 2.149h-35.628c.507-1.485 1.015-3.008 1.523-4.493h17.775c3.516 0 4.962-.898 6.251-3.867.547-1.329 1.133-2.696 1.68-4.024.43-.977.781-2.422.078-3.516-.859-1.25-3.008-1.914-6.211-1.914h-17.112c-5.469 0-7.93 1.523-9.844 6.016-1.211 2.774-2.383 5.586-3.555 8.36-1.211 2.852-3.126 3.438-5.86 3.438h-12.228c.273-.391.547-.781.781-1.172 2.422-3.633 1.953-7.657-1.25-11.095-3.203-3.36-7.384-4.532-11.134-5.547-3.164 0-6.329 0-9.493-.039-2.188 3.984-4.337 7.969-6.524 11.954-2.735 5-5.704 5.86-10.939 5.86H171.02l9.727-17.814h-6.719c-1.602 0-2.266.507-3.243 1.719 0-1.29-.469-1.719-1.719-1.719h-4.61c-7.657 0-11.954 2.383-15.275 8.438-1.328 2.422-2.656 4.844-3.945 7.266-.86 1.524-1.837 2.11-3.595 2.11H124.14c4.961-9.064 9.883-18.127 14.845-27.19.859-1.563-.274-3.516-2.071-3.516H67.298c-4.727 0-7.071 1.211-9.298 5h30.081a21223 21223 0 0 1-16.76 30.667h8.674c5.586-10.196 11.173-20.431 16.759-30.628h12.033c-5.587 10.197-11.174 20.432-16.76 30.628h8.673c5.586-10.196 11.173-20.431 16.759-30.628h12.033l-13.83 25.315c-.625 1.133-1.25 2.735-.586 3.868.586.938 1.993 1.445 4.102 1.445h22.815c1.133 0 1.602-.351 2.305-1.172 0 .899.742 1.172 1.641 1.172h39.262c7.774 0 11.915-2.265 15.275-8.399 1.719-3.125 3.438-6.29 5.156-9.454.079.039.469.117.547.117 6.173 1.172 9.298 3.477 9.572 6.993a5.05 5.05 0 0 1-1.289 3.829c-1.172 1.25-2.93 1.953-4.884 1.992-3.946 0-5.547 1.524-7.071 4.922h33.246c1.094 0 1.602-.351 2.266-1.172.039.899.781 1.172 1.68 1.172h49.145c3.321 0 4.766-.859 6.407-3.906 1.914-3.477 3.829-6.993 5.743-10.509 1.328-2.383 2.969-3.321 5.821-3.321h8.673c-1.485 1.016-3.087 2.305-4.337 3.555-1.641 1.719-3.242 4.024-3.516 7.032-.234 2.11.313 3.907 1.485 5.235 1.133 1.25 2.852 1.914 4.883 1.914h20.237c1.093 0 1.601-.351 2.265-1.172 0 .899.782 1.172 1.68 1.172h42.505c1.133 0 1.601-.351 2.305-1.172 0 .899.742 1.172 1.64 1.172h62.898c3.789 0 5.703-1.211 6.406-4.102.079-.312.157-.586.235-.898-9.923 0-19.846 0-29.73.039m-172.283-10.548c.859-2.461 2.852-2.696 4.649-2.696h9.688c-.234.665-.43 1.329-.664 1.993-.781 2.305-2.578 2.5-4.18 2.5h-10.118c.234-.586.429-1.211.625-1.797m-88.095 7.188c-1.368 2.461-2.93 3.36-5.821 3.36h-4.805c1.719-3.164 3.476-6.29 5.195-9.454 1.329-2.422 2.93-3.36 5.782-3.36h4.805a1977 1977 0 0 1-5.156 9.454m192.168 0c-1.328 2.461-2.891 3.36-5.782 3.36h-4.805c1.719-3.164 3.477-6.29 5.196-9.454 1.289-2.422 2.93-3.36 5.782-3.36h4.805c-1.719 3.164-3.438 6.329-5.196 9.454M248.254 282.034v-4.336h22.307000000000002v4.336h-22.307000000000002M259.427 291.059h7.032V284.3h-14.062999999999999v6.759zM252.395 275.432c-.039-3.711-.977-7.384-3.985-9.845h22.034c-3.008 2.461-3.985 6.134-3.985 9.845h-14.064M233.761 258.399v-3.204h51.294v3.204h-51.294M236.065 270.002c3.009-.664 6.212-2.344 8.361-4.415h-8.907c.195 1.446.351 2.93.546 4.415M282.789 270.002c-3.008-.664-6.251-2.344-8.399-4.415h8.946c-.195 1.446-.391 2.93-.547 4.415M232.901 248.124c-2.813-16.642-8.243-33.987-14.22-45.395 6.446 3.477 13.321 9.024 20.705 16.564a87 87 0 0 0-9.181-1.914c4.259 10.079 7.775 20.354 10.978 30.745zM285.953 248.124c2.774-16.642 8.204-33.987 14.181-45.395-6.407 3.477-13.282 9.024-20.666 16.564a85 85 0 0 1 9.181-1.914c-4.259 10.079-7.775 20.354-10.978 30.745zM231.064 253.516v-3.243h56.724999999999994v3.243h-56.724999999999994M249.856 200.971c4.375-7.54 8.126-16.095 9.571-24.963 1.407 8.868 5.157 17.423 9.571 24.963a272 272 0 0 0-5.078-2.227c-1.563-.742-2.227-.312-2.188 1.329.547 16.017 2.891 34.222 11.251 48.051h-9.844a78 78 0 0 1-3.712-10.899c-.937 3.594-2.188 7.227-3.711 10.899h-9.845c8.36-13.829 10.704-32.034 11.251-48.051.039-1.641-.625-2.071-2.227-1.329-1.836.782-3.476 1.524-5.039 2.227M231.064 263.321v-3.242h56.724999999999994v3.242h-56.724999999999994" clipRule="evenodd" /></svg>
  );
});

MaseratiLogo.displayName = 'MaseratiLogo';

export default MaseratiLogo;