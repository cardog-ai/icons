import * as React from 'react';
import { forwardRef } from 'react';

/**
 * ChevroletLogo icon component
 */
const ChevroletLogo = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#141414" d="M64.819 321.809h24.618v-6.027H59.72c-6.14 0-9.485 2.134-9.485 9.601 0 0-.11 4.373-.11 8.48s.055 8.533.055 8.533c0 7.414 3.344 9.548 9.54 9.548h30.594v-6.134H64.819c-1.755 0-2.193-.427-2.193-2.133v-19.734c0-1.707.384-2.08 2.193-2.134M127.048 351.944h12.501v-36.162h-12.555v14.188h-19.848v-14.188H94.59v36.162h12.556v-16.161h19.902zM226.999 315.782l-12.117 29.548c-.219.534-.493.587-1.315.587-.823 0-1.097-.053-1.316-.587l-12.007-29.548H155.23c-6.141 0-9.485 2.134-9.485 9.601 0 0-.055 4.373-.055 8.48s.055 8.533.055 8.533c0 7.414 3.344 9.548 9.485 9.548h31.581v-6.134h-26.482c-1.754 0-2.193-.427-2.193-2.133v-7.84h26.317v-5.974h-26.317v-5.92c0-1.654.439-2.08 2.193-2.08h28.236c3.893 9.066 10.801 24.747 11.404 26.08.878 1.867 2.358 4.054 5.647 4.054h11.679c3.235 0 4.386-2.133 5.208-4 .878-1.867 13.982-32.161 13.982-32.161zM301.949 321.755h15.955000000000002c1.755 0 2.139.428 2.139 2.081v19.894c0 1.707-.384 2.133-2.139 2.133h-16.009c-1.755 0-2.139-.426-2.139-2.133v-19.894c0-1.653.439-2.027 2.193-2.081m30.539 3.627c0-7.52-3.344-9.6-9.485-9.6 0 0-7.401-.053-13.049-.053-5.756 0-13.104.053-13.104.053-6.14 0-9.485 2.134-9.485 9.6 0 0-.109 4.374-.109 8.481s.055 8.587.055 8.587c.054 7.413 3.399 9.547 9.539 9.547h26.099c6.14 0 9.539-2.134 9.539-9.547 0 0 .056-4.48.056-8.587 0-4.16-.056-8.481-.056-8.481M338.793 351.944h38.599v-6.134h-26.098v-30.028h-12.501zM388.139 315.782c-6.141 0-9.486 2.134-9.486 9.601 0 0-.054 4.32-.054 8.48 0 4.107.054 8.533.054 8.533 0 7.414 3.345 9.548 9.486 9.548h31.58v-6.08h-26.481c-1.755 0-2.193-.427-2.193-2.134v-7.893h26.208v-6.028h-26.208v-5.92c0-1.653.438-2.08 2.193-2.08l41.285-.053v30.134h12.501v-30.081h14.31v-6.027z" /><path fill="#141414" d="M268.12 336.476c-.384-.267-.164-.426.22-.426h5.592c4.167 0 8.06-1.281 8.334-6.774.274-1.493.054-5.12.054-5.12 0-5.974-3.179-8.161-7.894-8.161h-36.625v36.001h12.336v-30.134h18.258c1.151 0 1.425.32 1.48.96.054.747.11 2.293.11 3.627 0 1.547 0 2.72-.056 3.307-.054.586-.712.96-1.534.96h-14.749v5.493l18.203 15.787h17.161s-20.725-15.413-20.89-15.52M95.103 245.857l21.202-40.908h88.957v-28.42h99.51v28.54h110.43L394 245.978h-89.228v28.516h-99.51v-28.637zm226.479-85.86H188.355v28.54H88.354l-38.356 73.925h138.357v28.443h133.227v-28.443h100.319l38.356-73.853H321.631z" /></svg>
  );
});

ChevroletLogo.displayName = 'ChevroletLogo';

export default ChevroletLogo;