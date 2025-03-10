import * as React from 'react';
import Svg, { 
  Path, 
  G, 
  Circle, 
  Rect, 
  Ellipse, 
  Line, 
  Polygon, 
  Polyline, 
  Defs, 
  ClipPath, 
  LinearGradient, 
  RadialGradient, 
  Stop, 
  Use, 
  Symbol,
  Mask,
  Pattern,
  Image,
  ForeignObject,
  TSpan,
  TextPath,
  Text,
  SvgProps
} from 'react-native-svg';
import { IconComponentProps } from '../types';

/**
 * RAMIcon icon component for React Native
 */
const RAMIcon = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#000" d="M255.835 89.033h31.572c14.612.26 29.355.782 43.967 1.304 13.307.522 26.484 1.174 39.791 2.088 8.48.391 16.96 1.304 25.31 2.87 1.826.391 3.522.913 5.218 1.435 4.306 1.435 7.567 4.958 8.741 9.393A46.6 46.6 0 0 1 412 118.126v65.101c0 14.09-.391 28.18-.783 42.401-.391 13.177-.913 26.354-1.696 39.53s-1.435 25.963-3.261 38.878a81.2 81.2 0 0 1-17.352 42.532 110.8 110.8 0 0 1-29.354 24.005 1000 1000 0 0 1-82.584 43.836c-4.827 2.217-9.784 4.566-14.481 7.045a13.62 13.62 0 0 1-13.047 0c-12.133-5.61-24.005-11.742-35.877-17.874-21.266-10.959-42.531-22.048-63.014-34.312-12.263-6.914-22.831-16.438-31.181-27.658-6.914-10.437-11.48-22.179-13.176-34.573-1.566-9.785-2.218-19.569-2.871-29.485a1743 1743 0 0 1-1.957-36.79c-.391-6.654-.391-13.308-.521-20.092-.914-33.398-.914-66.797-.783-100.196q-.195-6.457 1.174-12.916c.913-5.609 5.218-10.176 10.698-11.61 4.958-1.305 10.046-2.088 15.264-2.48 16.569-1.696 33.529-2.348 50.359-3 12.916-.522 25.701-.913 38.617-1.305 12.655-.26 26.354-.13 39.661-.13m0 8.35c-14.742 0-29.485 0-44.227.39q-15.851.392-31.703 1.175c-16.568.652-32.746 1.435-49.184 2.74-4.827.261-9.524.913-14.221 2.087-3.914.783-7.045 3.914-7.697 7.828a34 34 0 0 0-.783 7.306c0 9.654 0 19.308-.391 28.963-.261 23.222-.392 46.445.391 69.667 0 4.175 0 8.219.391 12.655.914 15.786 1.566 31.703 2.871 47.489.782 9.915 1.304 19.83 3 29.615 1.566 10.829 5.741 21.135 11.872 30.268 8.22 10.959 18.787 20.091 30.79 26.745 20.744 12.394 42.4 23.483 63.927 34.572 10.568 5.48 21.135 10.959 31.964 15.917a6.63 6.63 0 0 0 5.87 0c6.524-3.131 13.047-6.132 19.57-9.263 21.787-10.567 43.053-21.787 64.058-33.92a205 205 0 0 0 28.571-18.396c12.916-10.045 21.918-24.396 25.44-40.313 2.218-11.22 3.523-22.57 4.175-33.92.783-10.046 1.174-20.222 1.827-30.399 1.174-17.482 1.696-34.833 1.957-52.315 0-15.395.261-30.92 0-46.315-.261-9.915 0-19.961-.261-29.876q0-3.131-.392-6.262c-.391-5.088-4.174-9.133-9.132-10.046-4.175-1.174-8.48-1.826-12.786-2.087-14.09-.914-28.049-1.827-42.009-2.48-16.96-.782-34.051-1.304-51.141-1.695-11.09-.522-21.918-.13-32.747-.13" /><Path fill="#000" d="M214.87 278.074c1.696 4.697 3.261 8.741 4.697 12.786.391.783 1.174 1.435 1.957 1.696 4.174 2.348 8.219 4.696 12.394 7.045 1.435.652 2.348 1.957 2.478 3.522 1.696 11.612 3.523 23.092 5.219 34.704.13 1.826-.131 3.783-.522 5.61-.391 2.739-.783 5.479-1.305 8.219-.261.913.261 1.826 1.175 2.087 4.174 1.696 8.219 3.523 12.655 5.349.782.392 1.826.392 2.609 0 4.436-1.696 9.002-3.522 13.438-5.218.913-.131 1.565-1.044 1.435-1.957 0-.131 0-.261-.131-.392-.652-3.783-1.304-7.567-1.696-11.35 0-2.479.261-4.958.913-7.306 1.436-9.915 3.001-19.83 4.567-29.746.13-1.565 1.043-2.87 2.478-3.522 4.175-2.218 8.22-4.697 12.395-6.915 1.174-.522 1.956-1.565 2.348-2.739 1.304-3.784 2.74-7.567 4.305-11.742-3.001.522-5.61 1.174-8.219 1.565-1.957.261-3.653 1.305-4.697 3.001a139 139 0 0 1-5.349 6.915c-.261.391-.522.913-1.043.782-.522-.13-.392-.782-.261-1.304 1.043-6.654 1.957-13.308 2.87-19.961.13-1.305 1.044-2.479 2.348-2.74 4.566-1.565 9.002-3.261 13.568-4.697 1.044-.261 1.957-1.174 2.088-2.217.783-4.958 1.696-9.785 2.609-14.743.261-.913-.13-1.826-.913-2.218-1.696-1.043-3.262-2.087-4.958-3.131-.913-.391-1.304-1.435-.913-2.218 4.305-15.525 11.742-30.006 21.657-42.792 6.001-7.697 14.22-13.177 23.483-15.916 16.569-4.436 29.616 1.435 37.574 16.96 3.914 7.697 5.871 16.177 5.61 24.788 0 1.696-.653 2.348-2.349 2.479l-11.741 1.304c-1.566 0-2.349.783-2.74 2.479-2.74 15.917-5.088 31.833-9.002 47.489-1.305 6.001-3.523 11.872-6.262 17.482-1.174 2.348-2.87 4.305-5.088 5.61-3.001 1.566-5.219.652-6.002-2.609a32.7 32.7 0 0 1 0-14.221c1.435-8.219 3.914-16.047 4.958-24.266 1.305-7.567 1.435-15.264.522-22.831-.392-3.131-1.566-6.132-3.523-8.611-3.522-3.783-9.654-4.044-13.438-.522a15 15 0 0 0-1.826 2.218c-.261.783-.261 1.566 0 2.218.783 5.349.913 10.829.522 16.178-.522 7.175-4.175 13.698-9.915 17.743-2.61 1.826-4.958 4.175-7.437 6.132-.783.652-1.304 1.696-1.565 2.609-3.131 12.655-6.524 25.31-9.655 37.965-1.957 6.001-4.827 11.611-8.219 16.829a49 49 0 0 1-4.175 7.176c-3.522 4.827-3.653 10.567-4.696 16.047-1.044 5.479-1.696 10.046-2.479 15.003-.522 5.349-4.566 9.524-9.915 10.437-7.828 1.957-16.047 1.957-24.006 0-5.088-1.043-9.002-5.218-9.523-10.437-1.305-8.219-2.74-16.177-4.175-24.266a15.3 15.3 0 0 0-1.175-3.131 2428 2428 0 0 1-10.828-18.787c-1.696-2.87-2.87-6.001-3.783-9.263-3.001-12.394-6.263-24.788-9.263-37.312-.392-1.435-1.175-2.87-2.349-3.784-2.478-2.087-4.957-4.175-7.567-6.262-5.349-4.044-8.61-10.307-9.132-16.96a57.9 57.9 0 0 1 .391-15.004 6.815 6.815 0 0 0-4.696-7.827c-4.827-2.088-10.307.13-12.394 4.957 0 0 0 .131-.131.131-1.435 3-2.218 6.392-2.218 9.654-.261 12.003 1.305 23.875 4.436 35.486 1.696 5.74 2.348 11.742 2.218 17.743 0 1.566-.261 3.001-.783 4.566-.261 1.957-2.087 3.392-4.175 3.131-.652-.13-1.174-.26-1.696-.652-2.348-1.304-4.175-3.261-5.349-5.74-3.261-6.523-5.61-13.568-7.045-20.744-3.522-14.612-5.74-29.485-8.219-44.227 0-1.435-1.174-2.609-2.609-2.479l-11.872-1.304c-1.305 0-2.218-.522-2.218-2.088-.653-12.133 3.261-24.005 10.959-33.268 7.045-8.741 18.656-12.525 29.484-9.524 11.351 2.74 21.396 9.393 28.05 19.048 8.219 11.089 14.482 23.614 18.526 36.79 1.696 4.958 1.696 4.958-2.87 7.828-3.131 1.957-3.131 1.957-2.479 5.61a607 607 0 0 1 2.087 12.394c.131 1.305 1.044 2.479 2.349 2.74 4.566 1.435 9.002 3.131 13.568 4.697 1.174.261 1.957 1.174 2.087 2.218 1.044 6.914 2.088 13.698 3.001 20.743 0 .392.261.913-.261 1.044-.522.13-.652-.391-.913-.652-2.088-2.61-4.175-5.219-6.132-7.828q-1.174-1.566-3.131-1.957c-2.609-.392-5.61-1.044-9.002-1.827m-12.786-21.396c-.391-3.392-.782-7.306-1.304-11.22 0-.782-.392-1.435-.783-2.087l-7.436-9.785c-.261-.391-.522-.782-.914-.652-.391.261-.391.522-.391.913-.913 3.914-1.305 7.959-1.305 12.003-.13 5.218 3.262 9.915 8.22 11.481.782.391 1.696.652 2.478 1.043 1.305.783 1.696.131 1.435-1.696m117.548-24.396c-2.609 3.392-4.827 6.523-7.306 9.393a8.6 8.6 0 0 0-2.218 5.219c-.261 2.739-.652 5.349-.913 8.219-.391 4.175-.391 4.175 3.653 2.479 4.436-1.305 7.697-5.088 8.219-9.785.522-5.088 0-10.437-1.435-15.525" /><Path fill="#000" d="M121.196 225.758c.783 1.174 1.435 2.349 2.088 3.653.521 1.566 2.087 2.479 3.783 2.349 1.826 0 3.783.391 5.61.391 1.826.13 2.218.652 2.479 2.348 2.478 20.222 7.827 39.922 16.047 58.578 3 7.306 7.436 13.96 13.046 19.57 2.479 2.609 5.871 4.305 9.524 4.566 2.348.522 4.697-1.043 5.218-3.522 1.044-3.392 1.566-6.915 1.436-10.568.391-5.479 0-11.089-1.044-16.569v-1.043c1.044 0 1.044 1.043 1.174 1.565 2.87 8.611 4.305 17.613 4.175 26.615-.392 14.481-9.915 20.352-22.44 19.569-9.002-.522-17.352-4.566-23.222-11.22l-.522-.521h-.522c2.087 4.044 4.566 7.827 7.697 11.089 7.176 7.567 15.656 13.96 24.788 18.917 27.006 15.525 54.664 29.746 82.584 43.444a4.7 4.7 0 0 0 4.175 0c17.612-7.697 34.703-16.307 51.533-25.309 12.394-6.524 24.788-13.438 36.66-20.744 10.437-5.741 19.439-13.96 26.223-23.744a28 28 0 0 0 3.131-6.263c-3.653 4.827-8.35 8.611-13.829 11.22a32.2 32.2 0 0 1-21.787 2.218c-7.176-1.696-12.525-7.958-12.916-15.395-.653-10.306.652-20.613 4.175-30.398 0-.522.26-1.304 1.304-1.565-.261 1.304-.391 2.479-.652 3.783a84 84 0 0 0 0 21.396c.783 6.654 3.914 8.741 10.828 5.61 3.653-1.957 6.784-4.827 9.133-8.219 6.523-9.263 11.611-19.439 14.873-30.268a217 217 0 0 0 9.784-42.4c0-1.696.783-2.479 2.61-2.479s4.174-.652 6.001-.522c1.826.131 3.653-1.174 4.175-3.001.261-.652.522-1.435 1.304-1.826.522.522.261 1.044.261 1.566v19.178c0 17.221-2.218 34.442-6.392 51.141-1.044 5.741-2.479 11.481-4.175 16.961-4.305 11.219-11.872 21.004-21.657 28.049-8.611 6.263-17.743 11.872-27.137 16.83-17.351 9.915-35.225 19.309-53.229 27.919-6.653 3.262-13.568 6.132-20.352 9.263a3.9 3.9 0 0 1-3.783 0c-18.787-9.002-37.313-18.656-55.708-28.441-10.698-5.61-21.135-11.35-31.572-17.612-9.524-5.219-17.874-12.264-24.789-20.744-4.827-6.262-8.349-13.568-10.306-21.266-2.218-7.958-4.827-15.655-6.393-23.744-1.957-10.307-3.261-20.744-3.522-31.311-.392-8.872 0-17.743 0-26.745-.522-.522-.392-1.566.13-2.349M376.253 182.053l-3.784-6.523c-4.827-8.872-10.828-17.091-18.134-24.136-6.915-7.176-16.308-11.35-26.223-11.872a44.1 44.1 0 0 0-22.962 6.001c-10.437 6.262-19.309 14.742-26.223 24.788a202 202 0 0 0-17.221 28.963c-.261.913-.914 1.827-1.696 2.348-.783-2.609-1.305-5.218-1.696-7.958-.392-1.957-.522-4.175-1.175-6.001-.782-2.74-.391-5.61 1.175-7.958 5.218-11.22 12.263-21.527 20.743-30.529 9.394-9.915 21.918-16.177 35.356-17.873 11.35-1.436 22.961 1.956 31.703 9.262 13.046 10.698 23.222 24.397 29.615 39.922.13.261.13.522.261.783.261.261.522.391.261.783M132.547 182.053c2.087-5.219 4.566-10.307 7.567-15.134a97.7 97.7 0 0 1 21.135-25.049c11.481-10.046 27.397-13.307 41.879-8.741 11.872 3.522 22.309 10.437 30.267 19.961 7.567 8.871 13.829 18.787 18.526 29.354.522.913.652 1.957.391 3.001-.913 4.827-1.826 9.785-2.609 14.612 0 .522 0 1.304-.522 1.435-.522.13-.913-.783-1.174-1.305-5.218-10.959-11.481-21.396-18.526-31.181-7.045-10.437-16.569-18.917-27.788-24.788-15.656-7.567-30.529-6.392-44.228 4.958-4.174 3.522-7.827 7.567-11.089 11.872a159 159 0 0 0-11.742 18.526c-.522 1.174-1.174 1.957-2.087 2.479" /><Path fill="#000" d="M127.199 183.88v37.312c-.131 1.044-1.044 1.696-2.088 1.696-.913 0-.522-1.174-.652-1.696-.653-10.045-.261-20.222-.392-30.267v-33.138c0-9.002 0-18.134.392-27.136 0-1.566.13-3.001.522-4.567.391-4.827 4.566-8.61 9.523-8.219 6.132-.522 12.394-.913 18.265-1.304l36.791-1.957c7.567-.392 15.003-.653 22.57-.914 19.178-.522 38.226-.652 57.404-.391 14.743.261 29.615.783 44.358 1.305 12.263.391 24.396.913 36.66 1.565 9.002.131 17.874.913 26.876 1.957 5.349.131 9.523 4.436 9.523 9.785 0 .391 0 .783-.13 1.044 1.044 28.962.913 57.925.652 87.28 0 1.826 0 3.653-.261 5.349 0 .652.392 1.696-.522 1.826-1.043 0-1.957-.652-2.217-1.565-.131-.783-.131-1.566 0-2.218v-68.233c0-7.828 0-15.525-.653-23.353-.391-4.175-1.565-5.61-5.61-6.523a92 92 0 0 0-16.96-1.565c-17.873-.914-35.877-1.566-53.881-2.218-7.437-.261-15.004-.522-22.571-.783-18.786-.652-37.704-.652-56.49-.391-19.57.26-39.27 1.043-58.839 2.348-10.568.652-21.266 1.174-31.833 1.826-1.566 0-3.001.261-4.567.522-2.609.261-4.696 2.218-5.088 4.827-.391 1.566-.522 3.131-.522 4.697v53.229h-.26z" />
    </Svg>
  );
};

RAMIcon.displayName = 'RAMIcon';

export default RAMIcon;