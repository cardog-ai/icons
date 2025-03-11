import * as React from 'react';
import { forwardRef } from 'react';

/**
 * LotusLogoHorizontal icon component
 */
const LotusLogoHorizontal = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#000" d="M162.705 290.369c-18.939 6.547-38.871-3.636-44.483-22.532-5.593-18.834 5.676-38.358 24.865-43.077 16.666-4.099 34.276 5.363 40.149 21.573 5.966 16.466-1.435 34.964-17.043 42.566-1.058.515-2.162.936-3.488 1.47m-23.182-16.017c7.691 4.888 16.198 4.863 23.195-.066 6.451-4.545 9.586-12.975 7.724-20.771-2.004-8.388-9.468-14.832-17.766-15.337-8.995-.547-16.911 4.414-20.08 12.583-3.337 8.6-.877 17.355 6.927 23.591M320.029 278.141c-7.06 10.782-18.642 16.141-30.192 13.837-12.848-2.563-20.864-10.403-23.935-23.128-.671-2.779-.706-5.753-.732-8.639-.093-10.528-.04-21.057-.087-31.585-.01-2.294.894-3.307 3.274-3.181 2.673.142 5.37.172 8.037-.019 2.786-.2 3.743.778 3.707 3.645-.139 11.172-.168 22.348-.018 33.519.153 11.459 12.092 18.518 21.757 12.903 4.782-2.777 7.42-7.019 7.425-12.7.01-11.281.089-22.562-.027-33.842-.031-3.032.901-4.334 4.055-4.074 2.77.229 5.572.071 8.359.079 1.663.005 2.686.74 2.663 2.492-.171 13.309.652 26.632-.456 39.926-.317 3.802-1.838 7.263-3.83 10.767M341.523 238.06c3.418-8.752 10.436-12.37 18.777-13.509 8.923-1.219 17.751-.521 26.051 3.624 2.286 1.142 3.4 2.227 1.981 4.892-1.445 2.715-2.034 5.846-3.601 8.438-1.482.355-2.413-.533-3.432-1.028q-7.361-3.575-15.525-3.56c-2.63.004-5.121.663-7.312 2.123-4.057 2.701-3.713 7.61.651 9.73 4.677 2.274 9.86 2.873 14.76 4.411 2.146.673 4.315 1.293 6.41 2.103 6.729 2.601 11.209 7.128 11.706 14.669.559 8.467-2.923 15.173-10.462 18.769-13.032 6.215-26.056 4.416-38.729-1.668-.873-.42-1.895-.984-1.786-2.078.42-4.223.978-8.433 1.474-12.561 2.095-.328 3.003.951 4.129 1.633 7.125 4.311 14.765 6.191 23.049 4.974 1.347-.198 2.7-.728 3.918-1.36 4.047-2.1 4.293-6.408.602-9.021-2.061-1.458-4.442-2.085-6.82-2.751-4.641-1.3-9.318-2.496-13.899-3.988-10.959-3.57-15.448-12.5-11.942-23.842M203.857 239.472c-2.466-.001-4.619-.127-6.753.026-2.708.194-3.387-1.125-3.04-3.504.418-2.865.888-5.727 1.143-8.608.177-1.996 1.247-2.48 2.992-2.477 16.085.026 32.169.041 48.253.009 2.132-.004 3.117.871 3.295 3.001.241 2.882.553 5.769 1.038 8.619.37 2.173-.404 2.956-2.514 2.934-4.932-.051-9.87.12-14.796-.059-2.816-.103-3.718.866-3.697 3.694.109 14.825-.035 29.653.103 44.478.029 3.159-1.058 4.234-4.084 4.008-2.453-.184-4.936-.155-7.394-.02-2.838.157-3.729-1.133-3.711-3.845.083-12.139.038-24.28.036-36.42-.001-3.116-.043-6.232-.008-9.347.02-1.748-.708-2.554-2.5-2.51-2.679.065-5.361.019-8.363.021M60.293 239.23c.013-3.868.036-7.413.035-10.959 0-2.387 1.031-3.512 3.543-3.376 2.673.144 5.368.154 8.039-.017 2.748-.176 3.472 1.049 3.458 3.617-.08 14.827-.037 29.656-.035 44.484v2.968c1.26 1.17 2.502.729 3.626.732 9.223.025 18.446-.025 27.669-.006 3.867.008 4.021.251 3.564 4.043-.308 2.556-.627 5.112-.822 7.677-.168 2.204-1.082 3.202-3.439 3.19a3588 3588 0 0 0-42.146.007c-2.994.019-3.553-1.451-3.543-4.007.064-16.01.043-32.02.05-48.353M422.91 223.799c12.049-6.056 27.865-.582 29.282 9.984-2.031 1.16-3.039-.043-4.124-1.599-6.745-9.668-20.055-10.456-27.729-1.657-2.223 2.55-3.546 5.522-3.302 9.325 2.773-2.737 5.554-5.466 8.318-8.213 3.752-3.727 12.64-4.747 17.067-1.945 3.24 2.052 4.375 6.242 2.424 9.882-.843 1.572-.966 2.645-.028 4.323 2.975 5.317-.425 10.886-6.545 11.051-.965.026-1.946-.099-2.893.036-2.782.395-4.058-.653-3.703-3.54.16-1.297-.391-2.271-1.575-2.904-1.452-.776-2.516-1.912-3.347-3.371-1.029-1.808-6.532-2.706-8.419-1.347-2.441 1.757-1.115 3.891-.172 5.75 5.992 11.806 21.705 12.984 29.544 2.241 1.14-1.562 2.034-3.487 4.47-1.967-.201 4.747-7.413 11.281-15.159 12.609-9.375 1.606-17.22-2.876-23.326-13.546-3.784 1.085-4.908 7.43-11 5.443 2.973-2.984 5.543-5.645 8.21-8.205 1.32-1.268 2.006-2.615 1.96-4.516-.19-7.806 3.511-13.509 10.047-17.834m19.434 23.085c-1.907-3.595-4.123-4.394-6.845-2.409.762 1.875 3.138.085 3.979 1.639-.307 2.504-3.696 2.107-4.107 4.459 3.791 1.826 5.913.823 6.973-3.689m-4.329-8.716c-.835.262-1.942-.376-2.544.746 2.553 1.431 5.057 1.087 6.309-.947 1.304-2.12.637-3.972-1.238-5.279-1.415-.986-3.5-1.797-4.664-.302-1.618 2.076 1.269 2.002 2.062 2.962.469.567 1.146 1.008 1.467 1.64.441.87-.313 1.044-1.392 1.18m-12.563-1.731c-.818 1-2.158 1.622-2.485 3.13 2.42.082 7.995-4.825 8.38-7.332-2.739.123-3.812 2.523-5.895 4.202m4.134 6.471c.403.669.526 1.73 1.882 1.231.18-1.764.611-3.556-.307-5.421-1.536 1.021-1.856 2.287-1.575 4.19" /></svg>
  );
});

LotusLogoHorizontal.displayName = 'LotusLogoHorizontal';

export default LotusLogoHorizontal;