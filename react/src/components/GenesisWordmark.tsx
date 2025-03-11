import * as React from 'react';
import { forwardRef } from 'react';

/**
 * GenesisWordmark icon component
 */
const GenesisWordmark = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><g fill="#000" clipPath="url(#prefix__a)"><path d="M246.204 184.968c-4.864 1.017-16.183 4.333-30.862 9.02l-6.411 2.034-11.937-.044c-12.513-.089-30.596-.796-94.839-3.714-56.019-2.565-52.393-2.476-51.951-1.725 2.299 3.891 6.853 7.03 11.54 7.87 4.775.929 21.443 2.52 75.561 7.34 15.077 1.37 30.994 2.829 35.371 3.316 22.903 2.52 27.634 4.731 34.133 15.873 6.544 11.274 9.639 15.828 14.989 21.885 6.587 7.473 18.569 16.536 29.048 21.93l4.731 2.432 4.731-2.432c10.346-5.305 22.46-14.457 29.048-21.93 5.35-6.057 8.445-10.611 14.989-21.885 6.499-11.142 11.23-13.353 34.133-15.873 4.377-.487 20.294-1.946 35.371-3.316 54.118-4.82 70.786-6.411 75.561-7.34 4.687-.84 9.241-3.979 11.54-7.87.442-.751 4.068-.84-51.951 1.725-51.951 2.343-79.275 3.492-92.849 3.802-13.264.309-11.275.663-30.64-5.306-17.244-5.35-22.461-6.543-29.049-6.72-4.156-.133-6.057.044-10.257.928m20.957 8.224c9.329 2.343 20.913 6.19 25.865 8.578 4.952 2.431 6.146 3.802 6.013 7.074-.132 5.305-6.941 20.824-12.424 28.473-3.36 4.731-10.125 11.717-15.342 15.917-4.2 3.405-13.706 9.683-15.165 10.081-1.813.442-11.938-6.278-19.631-12.999-7.826-6.853-13.751-14.59-18.305-23.875-2.476-5.085-5.703-14.016-6.146-17.155-.574-3.802 2.167-6.19 10.833-9.55 7.383-2.874 22.505-7.163 30.065-8.534 2.343-.397 7.561.31 14.237 1.99" /><path d="M223.699 211.408c-2.078 1.371-2.918 4.024-2.078 6.588 1.017 3.316 4.775 4.775 8.71 3.404 1.327-.486 1.371-.574 1.371-3.095v-2.608h-1.99c-1.945 0-2.653.663-1.326 1.149.398.177.663.841.663 1.769 0 1.371-.088 1.503-1.326 1.503-3.14 0-4.687-4.156-2.609-6.853.84-1.017 1.238-1.149 2.785-1.017 1.017.133 2.167.354 2.609.531.619.309.752.132.752-.752 0-1.238-.885-1.636-4.024-1.636-1.37 0-2.52.31-3.537 1.017M233.338 210.701c-.177.132-.133.486.132.796.221.265.487 2.652.531 5.349l.132 4.82 3.891.132c3.626.133 3.847.089 3.847-.795 0-.796-.265-.885-2.697-.885h-2.653l.133-1.68c.132-1.636.132-1.636 2.254-1.768 1.46-.089 2.079-.31 2.079-.796 0-.442-.575-.619-2.211-.619h-2.211v-3.0949999999999998h2.697c2.299 0 2.653-.089 2.432-.708-.133-.398-.265-.795-.265-.884 0-.309-7.782-.177-8.091.133M243.374 210.922c-.177.265-.088.619.177.707.354.089.531 1.725.531 5.262 0 4.996 0 5.04 1.017 4.907.884-.132.972-.442 1.193-3.183l.221-3.095 2.565 3.228c1.989 2.431 2.83 3.139 3.537 3.05.928-.132.973-.353.973-5.659 0-5.35-.045-5.527-.973-5.659-.929-.133-.973.044-1.105 3.404l-.133 3.581-2.786-3.537c-2.078-2.697-3.006-3.537-3.802-3.537-.619 0-1.238.221-1.415.531M255.577 211.01c0 .354.221.796.442.929.266.177.442 2.343.442 5.129v4.819h3.759c3.448 0 3.758-.089 3.758-.884 0-.796-.31-.885-2.432-.885h-2.432v-3.537h2.211c1.68 0 2.211-.177 2.211-.663s-.531-.663-2.211-.663h-2.211v-3.0949999999999998h2.476c2.078 0 2.432-.133 2.299-.796-.132-.619-.751-.752-4.244-.884-3.36-.089-4.068 0-4.068.53M267.161 210.833c-.531.221-1.194.929-1.415 1.592-.663 1.724.309 3.272 2.874 4.687 2.564 1.37 2.962 2.697.973 2.918-.708.088-1.857-.044-2.565-.31-1.282-.442-1.326-.398-1.194.752s.266 1.194 2.83 1.326c2.167.089 2.874-.044 3.847-.795 2.255-1.769 1.459-4.289-1.902-5.969-1.591-.796-2.21-1.371-2.21-2.078 0-.84.177-.885 2.432-.664 2.166.221 2.431.133 2.431-.574 0-.442-.309-.929-.707-1.061-1.017-.398-4.2-.266-5.394.176M275.208 210.922c-.177.265-.088.619.177.707.354.089.531 1.725.531 5.217v5.041h2.652v-11.496h-1.503c-.84 0-1.68.221-1.857.531M282.503 211.054c-2.565 1.415-1.813 4.157 1.591 5.925 1.504.796 2.211 1.459 2.211 2.034 0 1.061-1.813 1.415-3.802.707-1.282-.442-1.327-.398-1.194.752s.265 1.194 2.83 1.326c3.36.177 5.04-.928 5.04-3.183 0-1.592-.575-2.255-3.404-3.802-1.238-.664-1.902-1.371-1.902-1.902 0-.795.221-.84 2.432-.619 2.167.222 2.432.133 2.432-.574 0-.442-.31-.929-.708-1.061-1.238-.487-4.333-.266-5.526.397M62.893 204.113c.088.221 1.636 1.724 3.449 3.404 13.087 11.938 22.637 15.564 46.866 17.642 11.054.972 26.131 1.901 44.435 2.697 8.755.398 16.978.928 18.305 1.193 1.636.31 2.829.885 3.979 1.902.884.796 1.459 1.591 1.326 1.724-.265.265-32.143-.265-50.138-.84-5.659-.177-8.268-.133-7.959.177 1.017 1.017 23.124 7.207 35.327 9.904l6.234 1.37 17.244.045c18.702.044 18.57.044 20.957 2.564l1.017 1.105-1.901.266c-2.167.265-14.325 1.149-15.917 1.149-.619 0-.84.177-.575.398.487.531 16.182 4.819 23.168 6.411 6.5 1.415 17.686 3.493 17.907 3.272.088-.089-.929-1.061-2.299-2.122-5.704-4.554-12.159-12.38-20.516-24.76-4.332-6.455-8.754-11.275-11.805-12.955-4.111-2.21-13.441-3.846-33.248-5.836-51.377-5.04-93.38-9.064-95.281-9.064-.398 0-.663.177-.575.354M429.337 205.351c-8.622.796-25.954 2.476-38.466 3.714s-28.828 2.83-36.255 3.581c-21.975 2.122-31.215 3.714-35.46 6.013-3.051 1.68-7.472 6.5-11.805 12.955-8.356 12.38-14.812 20.206-20.515 24.76-1.371 1.061-2.388 2.033-2.299 2.122.221.221 11.407-1.857 17.906-3.272 6.986-1.592 22.682-5.88 23.168-6.411.266-.221.044-.398-.575-.398-1.591 0-13.75-.884-15.917-1.149l-1.901-.266 1.017-1.105c2.388-2.52 2.255-2.52 20.958-2.564l17.243-.045 6.234-1.37c12.159-2.697 34.31-8.887 35.327-9.904.309-.31-2.255-.354-7.737-.177-17.332.531-50.095 1.105-50.36.84-.133-.133.442-.928 1.326-1.724 1.15-1.017 2.344-1.592 3.98-1.902 1.326-.265 9.55-.795 18.304-1.193 18.305-.796 33.337-1.725 44.435-2.697 24.185-2.078 33.779-5.704 46.867-17.642 1.812-1.68 3.404-3.183 3.448-3.404.221-.531-1.68-.398-18.923 1.238M182.138 298.819c-7.295 1.238-12.38 8.047-11.761 15.74.398 5.217 3.537 9.904 8.18 12.159 1.768.884 2.741 1.061 6.499 1.061 3.891 0 4.731-.133 6.942-1.194 1.415-.663 3.272-1.724 4.112-2.387l1.547-1.15v-10.965h-9.727v3.537h5.748v2.565c0 1.945-.221 2.785-.752 3.271-1.68 1.459-4.023 2.255-7.074 2.476-2.83.177-3.493.045-5.571-.972-3.802-1.857-5.615-5.085-5.615-9.993.044-6.145 4.156-10.302 10.169-10.302 3.405 0 5.792 1.062 7.914 3.449l1.415 1.636 1.503-1.061c.84-.531 1.548-1.15 1.548-1.282s-.708-1.061-1.548-2.078c-2.918-3.405-8.665-5.306-13.529-4.51M291.346 298.775c-5.35 1.061-8.268 6.145-6.234 10.788 1.105 2.476 3.183 3.935 7.162 4.996 5.173 1.371 6.19 2.255 6.19 5.261 0 1.194-.354 1.946-1.326 2.963-1.283 1.238-1.548 1.326-4.112 1.149-3.184-.177-4.643-1.061-6.057-3.537l-.929-1.636-1.503.929c-.84.486-1.548 1.149-1.548 1.415 0 1.061 2.609 4.2 4.51 5.438 1.503 1.017 2.388 1.282 5.173 1.371 2.83.132 3.67-.045 5.306-.885 2.962-1.503 4.554-3.802 4.819-6.764.398-4.731-1.99-7.473-8.18-9.285-4.244-1.283-5.88-2.521-5.88-4.554 0-4.156 6.146-5.218 9.55-1.636l1.371 1.459 1.37-.884c1.636-1.017 1.681-1.062.619-2.698-2.033-3.006-6.322-4.642-10.301-3.89M329.016 298.863c-2.476.486-4.819 2.255-5.836 4.554-2.299 5.085.398 9.373 6.986 11.142 5.261 1.371 6.323 2.211 6.323 5.217 0 2.476-1.548 3.891-4.51 4.156-3.184.266-5.394-.751-6.986-3.271l-1.15-1.857-1.414.884c-.796.486-1.415 1.061-1.415 1.282 0 1.857 3.758 5.704 6.411 6.588.928.309 2.962.442 4.642.354 3.758-.222 6.323-1.769 7.87-4.776 2.741-5.438 0-9.992-7.295-12.203-4.466-1.326-5.881-2.387-5.881-4.377 0-1.901 1.062-3.227 3.095-3.758 2.255-.619 5.129.354 6.544 2.167l1.061 1.326 1.503-.973c.796-.53 1.504-1.105 1.504-1.282s-.619-1.017-1.415-1.901c-2.476-2.83-6.102-4.024-10.037-3.272M205.615 313.409v14.149h15.033000000000001v-3.537h-11.054v-8.843h10.213999999999999l-.133-1.901-.132-1.857-4.952-.133-4.997-.132v-8.357h11.054v-3.537h-15.033000000000001zM228.606 313.409v14.149h3.98l.088-9.771.133-9.772 9.417 9.993c5.173 5.482 9.683 9.992 10.037 9.992.575 0 .663-2.078.663-14.369v-14.37h-3.979v9.815l-.044 9.86-9.595-9.86c-5.261-5.394-9.859-9.859-10.125-9.815-.442 0-.575 3.139-.575 14.148M262.209 313.409v14.149h15.033000000000001v-3.537h-11.054v-8.843h10.169v-3.979h-10.169v-8.401h11.054v-3.537h-15.033000000000001zM309.96 313.409v14.149h4.420999999999999v-28.296999999999997h-4.420999999999999z" /></g><defs><clipPath id="prefix__a"><path fill="#fff" d="M50 184h411.149v144H50z" /></clipPath></defs></svg>
  );
});

GenesisWordmark.displayName = 'GenesisWordmark';

export default GenesisWordmark;