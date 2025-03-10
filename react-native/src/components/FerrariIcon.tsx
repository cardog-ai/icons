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
 * FerrariIcon icon component for React Native
 */
const FerrariIcon = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#000" d="M249.155 79.143c1.328.664 1.826 1.162 3.154 1.494 1.162.332 2.822 1.162 3.154.166.498-.996-.166-2.324-.996-3.486-1.328-2.158-1.992-2.656-3.818-5.644-.332-.664-.664-1.328-1.328-1.328 0 0-.166 2.158-.83 3.486-.498 1.162-1.826 1.992-1.66 2.822s.996 1.826 2.324 2.49" /><Path fill="#000" d="M387.929 221.403c-1.494 1.992-2.158 5.976-4.316 9.296-2.987 4.648-7.303 10.292-9.461 10.292-1.162 0-1.494-2.656-1.494-2.656s-1.494-4.482.996-10.126c1.826-3.984 2.822-5.146 5.146-8.134 2.158-2.822 3.486-4.316 4.979-7.303 1.328-2.656 1.66-3.154 2.49-7.304.166-.996-.166-3.154-1.162-2.988-1.327 0-4.979 7.968-8.797 12.45-3.652 4.149-10.458 9.461-10.458 9.461s-.664.498-.664-.83c-.166-1.162-.332-4.648.332-7.802s1.66-6.307 4.482-11.121c3.154-5.478 7.138-9.296 9.13-11.288.83-.83 3.32-2.324 1.992-3.154-1.162-.664-4.648 2.324-7.304 4.316-3.32 2.49-4.482 3.154-7.802 7.138s-4.15 5.644-4.15 5.644-3.154 5.146-3.984 10.125c-.83 4.98-.83 7.802-.83 7.802s0 4.482.498 7.138c.332 2.822 1.494 7.138 1.494 7.138s1.66 4.814 2.324 7.802 1.826 11.786 1.826 11.786.83 6.308.332 12.284-.996 9.462-1.66 11.288-2.49 6.64-5.478 9.96c-2.822 3.154-3.486 3.652-3.486 3.652s-2.988 2.49-5.478 3.818-6.142 2.988-7.802 3.486c-1.66.332-3.984.498-4.15.498h-2.158l-.664-.498-.332-1.328s-1.66-6.474-3.652-10.624c-1.66-3.486-5.146-8.3-5.146-8.3s-5.976-8.134-10.624-12.616c-5.312-5.312-11.288-9.296-14.94-12.118-1.328-.996-4.316-2.822-4.316-2.822s-12.117-12.118-16.433-21.746c-2.988-6.64-4.98-11.454-4.15-18.758.166-1.659.83-4.813 1.162-4.813l2.158.664c.166.166 2.158 1.992 3.984 2.656.996.332 2.822.664 2.822.664s1.494.165 2.324.331c.83.332 2.324.83 3.32 1.328s2.49 1.494 2.49 1.494l2.821 2.158 2.988 2.324s1.66 1.162 2.158 1.328.83.332.996.332h.664s.664-.166.83-.83c.166-.83-.83-.166-2.324-1.826-1.66-1.494-2.324-2.822-2.324-2.822s-.332-1.328-1.66-2.822-2.988-2.821-2.988-2.821-1.161-.83-2.821-1.328-2.158-.498-2.324-1.162 1.992-.332 1.992-.332 2.489.332 4.481 1.328 3.154 2.158 3.154 2.158l1.328 1.162.83.829.83.498s.83.83.996-.332c.166-.995-.166-1.825-.332-1.991l-.83-.83-3.32-2.822c-.996-.996-1.66-1.66-2.656-2.324s-2.489-1.66-4.315-2.324c-1.66-.664-2.656-.498-4.316-1.328-1.162-.498-2.158-.83-2.822-1.826-.166-.166-.996-.83.498-.498s2.49.83 4.15 1.162c2.656.664 4.316.664 6.805 1.494.996.332 2.324.996 2.324.996l3.154 1.328s4.316 2.324 7.304 2.49 5.478-.498 6.474-.996c.996-.332 2.822-1.494 3.32-1.992s.83-.996.83-.996l.332-.83v-.664c-.83-.996-2.49 1.66-5.146 2.158-2.822.498-2.656.83-4.482.498-1.992-.332-3.154-.83-4.648-2.324-2.656-2.49-3.652-4.814-7.138-6.308-1.494-.664-4.15-1.328-4.15-1.328s-3.651-1.162-5.643-2.324c-1.494-.83-4.648-1.328-3.652-2.656.498-.664 4.482 1.66 7.47 1.992 2.157.332 3.651.166 5.311.166s3.984-.498 4.316-.498c.332-.166 1.66 0 2.822.332s1.826.83 2.988 1.328 2.49 1.328 2.822 1.328l.664.166.332-.332.166-.332-.166-.332-.498-.332-.996-.664s-1.494-.83-2.822-2.158-2.49-2.822-4.482-3.486-4.316-.996-4.316-.996l-2.324-.166-.996-.166s-1.659-.498-.332-.83c1.328-.332 1.992-.498 2.324-.498.166-.166 2.49-.332 3.818.166s3.486 1.66 3.652 1.66c.166.166 2.158 1.66 4.316 2.158s4.98.664 4.98.664l1.328-.332.664-.166.498-.332-.166-.83s0-.664-.996-.83-2.988-.498-4.814-1.826a29.5 29.5 0 0 1-3.154-2.656s-1.328-1.162-3.984-1.826c-2.49-.664-3.32-.664-3.32-.664l-.83-.332-1.826-.83s-.83-.498-1.494-1.328c-.663-.83-1.66-2.324 1.162-1.494s3.486 1.328 3.486 1.328 1.494 1.494 2.822 1.66c.83.166 1.494.332 1.992-.332.83-.83-1.494-1.826-3.154-2.988-1.328-.83-2.656-2.988-2.656-2.988s-.996-.83.498-.498 4.15 1.992 4.15 1.992 1.328.664 1.992.83c.498.166 1.826.996 2.49 1.328.498.166 1.992.498 2.988.996 1.328.83 1.992 2.158 2.656 2.656s1.162 1.328 1.992 1.494.996.498 1.494.166.664-.498.664-.498.166-.332-.664-.83-1.826-1.826-1.826-1.826l-.332-.664-.166-.664-.83-1.328-1.494-2.158s-2.324-3.154-4.482-4.316c-1.992-1.162-3.486-1.826-3.486-1.826s-.996-.498-1.494-.83c-.83-.664-1.162-1.162-1.826-1.992-.83-.996-1.162-1.66-2.158-2.656-1.826-1.826-7.469-2.822-5.312-4.15 1.162-.664 2.656-.332 3.32-.166s2.158.83 3.652 1.328c.996.332 1.66.332 2.656.664s2.158.498 2.656.83.996.996 1.328 1.162c.166.166 1.494 2.324 3.818 3.486s3.486 1.992 5.81 2.158c1.826.166 4.814-.498 4.814-.498s.83-.332.166-1.162c-.83-.83-.83-.996-1.494-1.162-2.656-.996-4.814-.664-6.806-2.656-.83-.83-1.162-.996-1.826-2.324s-.332-1.66-.83-2.49c-.332-.83-1.162-1.992-1.162-1.992s-2.49-2.988-5.146-4.482c-2.822-1.494-4.814-2.988-5.146-3.32-.498-.332-1.494-1.66-1.494-1.66l-.83-1.328-.498-.996c-.332-1.826 2.988.498 4.814 1.162 2.988.996 4.482 2.324 7.47 3.32 1.66.498 2.656.498 4.316 1.162 2.822 1.162 3.652 3.984 6.64 4.316 1.66.166 4.98.83 4.316-.664-.664-1.66-3.984-1.66-5.644-3.652-.83-.83-.83-1.66-1.66-2.49-1.328-1.66-4.482-3.154-4.482-3.154s-.996-.83-2.158-3.154c-.996-2.324-3.486-3.984-7.968-6.142-2.988-1.494-8.964-1.826-6.64-3.32 1.328-.996 2.49-.83 4.316-.332 1.826.664 2.49 1.494 3.984 2.158s2.158.83 2.49.996 1.494.664 1.992.664c.332.166 2.822.498 3.486.664l3.32.83 2.656.996s1.328.498 2.158.498 2.158-.332 2.158-.332l.996-.664.166-.332s.498-.83-.83-.996c-1.162-.166-1.826-.166-1.992-.166l-1.162-.332-.498-.166s-2.324-1.826-4.316-2.656c-2.158-.83-2.49-.996-2.49-.996l-.83-.166-.996-.166s-.83 0-2.158-1.162-1.826-1.826-2.988-2.988l-1.494-1.494s-1.328-.996-1.328-1.826c.166-1.327 2.988 1.494 2.988 1.494l1.992 1.328s1.66 1.162 4.648 1.328 6.64-.83 6.64-.83.498-.332 2.158.166 2.988 1.494 2.988 1.494l1.328 1.162 1.992 2.158.332-.166c.166-.166.996-.996-.498-2.822s-3.984-3.486-3.984-3.486-3.32-1.992-6.64-2.656c-3.32-.663-4.814-.663-4.814-.663s-2.49 0-3.984-1.66-2.49-3.32-2.49-3.32l-.498-2.324s-.83-.996-2.49-1.66c-1.494-.664-3.154-1.66-3.154-1.66s-2.49-.83-2.656-1.992c-.498-2.158 4.15 0 6.64.498 2.324.498 3.32 1.328 5.644 1.826 1.992.498 3.154.664 5.312.498 1.162 0 1.826-.166 2.988-.332 1.162 0 1.992-.166 3.154 0 1.66.332 2.324 1.162 3.984 1.826.996.498 1.494.996 2.656 1.162.996.166 2.988.83 2.656-.166l-.498-.664c-.83-1.162-1.826-1.162-2.822-1.992-2.158-1.66-3.154-2.988-5.644-4.15-1.66-.83-2.656-1.162-4.482-1.494-1.328-.166-2.324.166-3.652-.166-1.494-.498-1.992-1.162-3.486-1.992-2.324-1.328-3.652-2.49-6.142-3.486-1.66-.664-4.482-1.328-4.482-1.328l-1.162-.166-.498-.166c-2.324-.83 4.15-2.656 7.138-3.486 1.494-.332 2.158-.664 3.652-.498 1.328.166 2.822 1.992 4.316 1.162 2.158-1.162-2.49-4.316-3.984-4.814-1.992-.83-5.478-.166-5.478-.166l-7.636-.166-2.157-.332s-1.328 0-2.324-1.162-4.814-5.81-9.13-6.474c-4.482-.664-5.81 0-6.142-.332-3.818-5.976-7.802-7.304-10.79-10.126-.83-.83-2.158-2.656-2.49-2.49s-.83 2.656-1.66 4.814c-.996 2.49-.332 3.652.166 4.648.664.996 1.494 1.66-.166 2.656s-3.818.664-3.818.664-1.826-.332-3.32-1.162a369 369 0 0 0-4.648-1.992s-2.988-.83-4.98-.664-2.158.332-3.652.498c-.83 0-1.162 0-1.992.166-.664.166-1.494-.332-1.494.498s1.66.83 2.822 1.328 3.818.498 3.32 1.162c-.664.664-3.154.83-3.32.664-.166 0-1.826-.332-3.154-.332-2.158.166-2.324.166-5.478 1.66-.498.166-.332 1.328.664.996a17.3 17.3 0 0 1 4.648-.664c1.992 0 3.154.664 5.146 1.162 1.66.498 1.826.83 4.316 1.162.498 0 1.494-.332 1.494.332 0 .332-.664.83-.664.83s-1.494.332-1.328.83c.332.664 1.66 0 2.324 0s1.66.166 1.494.83l-.332.498c-1.826.498-2.822.83-4.482 1.494-4.15 1.66-5.81 3.652-9.794 5.644-3.818 1.826-9.96 4.15-9.96 4.15s-1.826.996-4.482 1.66-2.822.498-4.648.83c-1.826.166-2.656.498-4.15 1.328-.996.498-1.494.996-2.324 1.826l-2.324 3.486-1.328 1.992c-.332.664-.664.996-.83 1.66-.332.83-.498 1.162-.664 1.992-.498 1.992 0 3.154.332 5.146.166.498.166.829.332 1.327s.83.996.83.996l.664.166s2.324-.166 3.818-.498 3.652-.83 3.652-.83l2.822-.829 1.826-.664s1.162 0 1.328.664c.166.497-.332 1.327-.332 1.327s-.996.498-1.826.83-2.822.83-2.988.996l-2.158.664-1.826.166s-.332.166-.664.664-.332.498-.332.83c.332.332.498.664.83.996.664.498.996.83 1.826.996 1.162.498 1.826.332 2.988.332 1.66 0 2.656-.332 4.15-.996 1.328-.83 1.826-.83 3.652-1.494.498-.166 1.494-.332 1.826-.332 3.154-.332 4.98.166 8.134.664s4.648 1.494 7.802 1.992c3.32.498 5.312 1.494 8.798.664 1.66-.332 2.656-1.162 3.486.498.83 1.494.664 2.324.664 2.324s0 .996-1.162 4.15-4.814 10.956-4.814 10.956l-2.49 4.98s-1.992 3.984-6.64 9.13-4.98 5.478-4.98 5.478-2.49 1.826-4.98 4.98-2.49 4.316-4.814 6.64c-1.494 1.494-2.324 2.324-4.15 3.486s-3.984.83-9.794 4.814c-4.98 3.486-7.635 6.308-7.967 6.142s-1.992-1.494-2.656-1.826c-.498-.332-10.126-6.806-10.126-6.806l-3.984-2.656-1.826-1.162-.332-.664-.996-1.328s-1.494-1.826-3.32-3.32c-1.826-1.66-3.818-2.988-6.806-3.652-2.822-.83-4.648-1.328-7.47-.332-1.826.664-2.822 1.328-4.15 2.656-1.66 1.66-1.992 2.988-3.32 4.98s-2.656 3.818-3.32 4.814-1.992 3.652-1.992 3.652-3.32 5.312-5.146 8.798c-2.158 3.818-2.988 6.142-4.98 9.794-3.154 5.81-7.636 11.785-8.798 14.441s-1.328 2.988-1.328 2.988-.332 1.494-.498 2.49-.166 2.656-.332 3.32c-.166.83-.664 1.66-.83 1.826s-1.992 3.984-2.656 6.474-2.158 10.292-.332 11.288 15.272-4.814 17.098-10.458c1.162-3.652-3.652-5.478-2.324-8.798.498-1.162.83-1.328 1.66-2.49 1.328-2.158.83-6.64 3.32-10.79 1.826-2.987 5.478-6.805 10.458-12.449 3.154-3.486 6.142-9.13 6.142-9.13s.664-1.992 1.992-1.66c1.494.332 2.822.166 2.822.166l.664.498 1.328 1.328 1.992 2.988s3.32 4.814 4.482 6.142 2.324 2.324 3.984 3.652c1.826 1.66 2.49 2.49 4.814 4.316 3.32 2.655 2.158 3.651-2.158 1.327-1.494-.829-3.818-1.659-5.644-2.157-1.992-.498-9.462-2.49-13.28-2.988-3.652-.498-4.316-.332-4.316-.332s-1.826-.166-3.984 1.162-3.32 2.324-3.32 2.324-2.49 2.821-2.656 3.319-1.328 2.49-1.328 2.49-.664.996-.83 2.158c-.332 1.162-.166 2.324-.166 2.324l.166 2.49.166 2.324s.498 5.81 1.66 11.62c.332 1.66.664 4.316.664 4.316l.83 5.976s.498 6.308.996 8.466c.498 1.992.83 2.158 1.162 3.486.664 2.49-.498 3.652.664 6.64s2.158 2.656 3.32 4.482c.83 1.328 1.162 1.66 1.826 3.32s2.822 7.138 5.312 11.122c2.656 4.15 6.142 9.296 8.466 8.798s3.984-4.15 3.984-4.15 2.656-7.138.996-14.11c-1.66-7.138-9.296-3.818-10.292-8.964-.166-1.162 0-2.988 0-2.988s-.166-2.158-.498-2.822-2.988-5.644-3.984-9.794c-.83-3.154-.664-13.28-1.328-16.102-1.826-7.304-1.992-6.64-.996-7.968 1.162-1.328 2.158-.996 2.158-.996l1.494.166 1.162.498s1.328.83 2.158 1.328a319 319 0 0 1 2.988 2.324l5.644 3.652s3.154 1.826 4.482 2.49a21 21 0 0 1 2.49 1.494l1.494.996 2.49 1.826.498.498.332.664s1.162 2.656 6.142 5.478c3.984 2.324 7.47 1.66 8.963 3.486.332.332 3.154 4.15 4.482 6.474 1.66 2.656 3.652 5.81 4.316 6.806s4.814 6.142 4.814 6.142l5.478 5.976 7.138 6.64 6.474 5.478 4.15 3.32s3.652 3.486 7.802 6.308c3.984 2.656 4.15 2.988 6.806 4.814a165 165 0 0 1 7.304 5.145c2.656 2.158 5.644 6.142 4.482 7.47-.83.498-2.324-1.66-5.146-4.15-2.324-1.992-3.486-2.988-5.81-4.648-2.988-2.324-4.482-3.486-7.802-5.477-1.66-.996-4.648-2.822-4.814-2.49-1.162 3.486-.996 6.805-.83 11.121.166 2.988.664 5.976 1.66 9.794.83 3.652 1.66 5.644 2.988 9.13s3.818 8.964 3.818 8.964l3.818 7.636 3.486 5.81 1.826 2.988.664.996s.83 1.992 0 3.32-1.826 4.15-3.32 4.316c-1.494.332-4.98.498-4.98.498l-19.754-.332-10.292-.83s-1.162-.664-7.138-.664c-3.486 0-6.308 1.494-8.3 1.66-1.66.166-9.793-.498-15.271 1.66-5.146 2.158-7.47 2.656-9.296 5.976-1.328 2.49 6.474 6.474 12.948 7.968 10.457 2.324 7.47-2.158 11.453-4.98.498-.332.664-.664 1.162-.83 2.656-.83 4.15 1.328 6.806 1.328 2.988 0 4.648-.996 7.636-1.494 15.106-1.992 38.678 5.146 38.678 5.146s5.81 1.826 8.466 1.328c3.154-.664 2.49-1.826 3.486-3.652.83-1.494.498-1.826.664-3.486 0-.996-.166-1.494-.332-2.49-.664-2.822-2.49-6.806-2.49-6.806s-1.328-2.988-1.826-4.482c-.664-2.158-1.328-3.486-1.66-5.81-.996-6.142-.83-5.644-.83-9.13 0-6.308.664-9.794 2.324-15.936 2.49-8.964 7.138-12.782 10.624-21.414.996-2.324.996-5.643 2.158-5.975 1.328-.166 1.162 4.149.498 6.639-2.158 8.632-7.47 12.284-9.96 21.082-1.826 6.806-2.822 10.79-2.324 17.762.166 3.818 1.66 9.794 1.66 9.794s1.992 6.64 2.988 9.13 2.988 6.64 2.988 6.64l4.482 7.968 2.324 3.818s1.66 1.494.83 3.984-2.49 3.984-4.482 6.141c-5.644 6.64-18.758 16.434-22.078 18.758-4.648 3.486-4.482 4.482-4.814 5.478-1.826 5.312-7.138 5.478-12.948 11.786-1.328 1.328-4.814 4.98-4.15 8.134.332 1.162 14.608 3.652 22.908.166 6.474-2.822.83-5.976 2.656-9.13 1.328-2.324 4.648-2.324 6.142-4.316 2.49-3.32.83-3.154 2.988-5.81 7.138-8.632 11.786-13.612 24.567-21.414 1.162-.664 3.32-1.66 3.32-1.66s1.826-.829 2.49-1.825c.83-1.328.664-2.49.664-3.984 0-.996-.166-1.494-.166-2.49 0-1.162.166-1.826-.166-2.988-.332-1.826-1.494-3.32-2.158-4.316-.664-.83-1.826-2.324-2.49-5.478-.83-3.154-.83-5.81.498-9.296s4.316-6.308 4.316-6.308l7.47-4.98s6.474-4.648 8.466-6.474c2.158-1.826 6.308-5.644 9.296-9.96 3.486-4.814 5.312-7.802 6.806-13.612.498-2.158.996-5.478.996-5.478s0-2.324 1.328-2.49 1.66.332 1.66.332 1.162.664 1.494 3.984c.166 3.32-.83 7.138-.83 7.138s-.996 3.818-1.328 6.142c-.166 1.494-.166 2.324-.166 3.984 0 2.822 1.162 5.146 1.162 5.146s.664.498.664-.664c0-1.328.332-3.32.83-5.312.498-1.66.83-1.328 1.826-4.15 1.328-3.652.166-3.32.83-5.478.332-.996 1.162-1.992 2.158-1.992s1.162 1.328 1.162 1.328.996 4.316.166 8.3-3.818 9.462-3.818 9.462l-2.324 3.984s-1.66 2.822-2.324 4.648c-.664 1.992-.83 2.822-.498 4.648.498 1.992 1.992 4.648 2.822 4.15.664-.498-.996-2.158.996-6.142s4.648-6.474 4.648-6.474 3.652-4.316 5.312-7.636c1.494-2.988 2.988-7.802 2.988-7.802s1.162-4.316.83-7.968c-.166-3.486-.83-5.312-.83-5.312l-1.494-2.656-.83-1.992.332-1.162c.332-.166 1.494.664 2.49 1.992s1.992 2.988 2.49 5.312c.498 1.66.664 3.154.664 4.648 0 1.328-.498 6.806 1.494 10.292.83 1.66 2.822 5.478 2.988 3.818.332-3.818-1.328-5.644-1.162-9.13.166-3.984 1.162-2.988 1.494-4.98.332-2.158.83-2.656.498-5.478-.332-2.656-1.494-6.142-1.494-6.142l-1.162-2.656-.498-.996s.332-.498.83-.498l3.984-1.328s5.146-2.324 7.138-3.984c2.158-1.494 4.648-4.149 4.648-4.149s3.32-4.15 4.98-7.138c3.984-7.47 3.984-16.932 3.818-21.248-.166-4.15-1.328-9.628-1.328-9.628s-1.328-6.64-.996-10.956.664-6.308.664-6.308-.166-4.316 3.485-8.964c3.652-4.648 5.312-7.636 5.976-11.122.664-2.988-.332-7.802-1.66-5.976m-109.89-29.879c-.498 0-1.162-.664-1.162-.664s-.166-.166.332-.498 1.162-.166 1.162-.166l.498.166.83 1.162c-.166.498-1.162.166-1.66 0m1.992-5.478c-.498-.166-1.328-.664-1.328-.664s-.166-.332.332-.664 1.328-.166 1.328-.166l.498.332c.166.166.996.996.996 1.328 0 .498-1.162 0-1.826-.166m1.826-5.644c-.664-.166-1.66-.83-1.66-.83s-.166-.332.498-.664 1.66-.166 1.66-.166l.664.332c.332.332 1.162 1.162 1.162 1.66-.166.498-1.66-.166-2.324-.332m1.494-5.146c-.664-.166-1.66-.83-1.66-.83s-.166-.332.498-.664 1.66-.166 1.66-.166l.664.332c.332.332 1.162 1.162 1.162 1.66-.166.332-1.66-.332-2.324-.332m1.494-6.142c-.83-.166-1.826-.996-1.826-.996s-.166-.332.498-.83 1.826-.166 1.826-.166l.664.332c.332.332 1.328 1.328 1.328 1.826 0 .664-1.826-.166-2.49-.166m.996-6.64c-.996-.166-2.324-1.162-2.324-1.162s-.332-.498.664-.996c.83-.498 2.158-.332 2.158-.332l.83.498c.332.332 1.494 1.66 1.66 2.324 0 .664-1.992-.166-2.988-.332m.664-6.64c-1.162-.166-2.822-1.494-2.822-1.494s-.332-.498.664-1.162 2.656-.332 2.656-.332.498.166.996.498c.498.498 1.826 1.992 1.992 2.822s-2.324-.166-3.486-.332m.996-7.636c-1.328-.166-3.154-1.66-3.154-1.66s-.332-.664.83-1.328c1.162-.83 2.988-.332 2.988-.332s.664.166 1.162.664 2.157 2.324 2.323 3.154c0 .996-2.821-.332-4.149-.498m-.664-30.875c-.996-.166-2.324-1.162-2.324-1.162s-.332-.332.664-.83 2.324-.166 2.324-.166.498.166.83.498 1.66 1.494 1.66 2.158c0 .498-2.158-.332-3.154-.498m3.652 7.469c.166.664-2.158-.166-3.32-.332-.996-.166-2.49-1.328-2.49-1.328s-.332-.497.664-.995c.996-.664 2.324-.332 2.324-.332s.498.166.996.498c.498.498 1.66 1.825 1.826 2.489m-4.814 12.284c.996-.664 2.656-.332 2.656-.332s.498.166.996.498c.498.498 1.826 1.992 1.992 2.822s-2.324-.166-3.486-.498c-1.162-.166-2.822-1.494-2.822-1.494s-.332-.332.664-.996m2.158-5.644c-1.162-.166-2.822-1.494-2.822-1.494s-.332-.498.664-1.162 2.656-.332 2.656-.332.498.166.996.498c.498.498 1.826 1.992 1.992 2.822.166.996-2.324 0-3.486-.332m2.158-24.899c1.327.332 1.66 1.162.996 1.162-.664.166-.996.166-1.494.166-1.494 0-1.328-.664-3.32.332s-.498.498-3.32 1.494c-2.656.996-1.992-1.66-1.992-1.66s.166-.498.498-1.826 1.992 0 3.154 0c2.158 0 3.984 0 5.478.332m-7.47-10.292.83.498c.332.332 1.494 1.66 1.66 2.324s-1.992-.166-2.822-.332c-.996-.166-2.324-1.162-2.324-1.162s-.332-.498.664-.996c.83-.664 1.992-.332 1.992-.332m-5.976-7.968c.83-.498 2.158-.332 2.158-.332l.83.498c.332.332 1.494 1.66 1.66 2.324s-1.992-.166-2.822-.332c-.996-.166-2.324-1.162-2.324-1.162s-.332-.498.498-.996m-1.66 107.567c.498-.332 1.162-.166 1.162-.166l.498.166.83 1.162c0 .332-.996-.166-1.494-.166s-1.162-.664-1.162-.664-.332-.166.166-.332m-66.566-79.015c-.498.332-.83.498-1.494.996-.83.664-1.66 2.324-2.158 1.826-.664-.498-.332-2.324-.332-2.324s.498-1.328 1.162-2.656c.83-1.328 1.826-1.328 1.826-1.328.996 0 2.822.664 2.822 2.158.166 1.494-.996.83-1.826 1.328m13.612 5.146s-.664.166-.83-.996.83-1.328.83-1.328 1.992-.996 1.992.332c.166 1.162-1.992 1.992-1.992 1.992m17.762-22.576s-2.158 3.486-5.146 4.814-4.98 1.992-10.624 2.49c-.83 0-.498-.498-.498-.498s6.474-1.826 10.126-3.818c1.992-1.162 4.316-2.656 4.98-3.32 2.324-1.992 1.162.332 1.162.332M128.142 243.149c0 .83-.996 2.324-1.328 2.324s-.996-1.494-.83-2.324.332-3.154 1.66-2.822c.996.166.498 1.992.498 2.822m4.316-18.758s-1.494 3.154-1.992 1.826c-.498-1.162.498-3.32.498-3.32 1.328-1.162 1.826-2.822 2.49-2.158.498.664-.996 3.652-.996 3.652m20.584-32.369c-1.494 1.66-6.142 10.458-7.138 8.964-.996-1.162 4.482-9.462 5.644-11.122 1.162-1.826 2.158-1.494 2.158-1.494l.332.332c-.166 0 .498 1.66-.996 3.32m12.45-13.114s-3.32.664-2.822-.498c.664-1.162 2.988-1.66 2.988-1.66 1.826.332 2.158.498 1.992 1.328.166.83-2.158.83-2.158.83m13.446 23.24c-1.494 1.494-1.992-.498-4.15-2.988-2.158-2.324-1.66-4.316-1.66-4.316h.332l.332.166.83.332.498.498 1.66 1.66c.664.996 2.49 4.316 2.158 4.648m-25.73 49.633c-.498 0-.996-.996-.996-.996s-1.328-1.992-1.826-3.486c-.498-1.328-.664-3.486-.664-3.486s-.332-2.822-.332-3.818c.166-1.328.166-2.49.332-3.154s.83-.498.83-.498c.996 0 .996.83.996.83v.498s0 2.988.166 5.312c0 .664 1.826 8.134 1.826 8.134s.332.664-.332.664m-.332-34.86c-1.162 1.826-1.992 1.826-1.992 1.826 0-.166-.332-.83.664-2.822s1.992-1.825 1.992-1.825l.332.332s.166.663-.996 2.489m11.786 69.554c.332-.664 2.49.996 2.49.996.83.166 1.66 1.66 1.66 1.66s.332 1.162-.664 1.494c-.996.498-1.66-.498-1.66-.498s-2.158-2.988-1.826-3.652m15.604-50.796c-2.324-.498-7.304-4.316-9.296-5.312s-5.312-1.328-3.818-2.656c.166-.166.332-.498.664-.498s1.826.498 1.826.498l3.652 1.494c.166 0 1.992.83 3.486 1.66 1.328.83 3.652 2.324 3.652 2.324l.996.83c0 .332 1.162 2.158-1.162 1.66m20.251-33.033s-2.821 3.818-4.481 6.142c-2.158 3.154-4.814 7.967-5.312 7.469s2.324-5.809 3.818-8.631c1.66-3.486 4.15-5.312 5.146-5.644 2.157-.996.829.664.829.664m-8.963 166.164s0 .664-1.162 1.494-1.66.332-1.826.332-1.328-.664-1.328-1.328c.166-.664 1.992-1.162 1.992-1.162 3.154-.166 2.324.664 2.324.664m25.729-.996c-1.162-.166-1.328-.498-1.162-.664 0-.166.332-.498 1.66-.498s1.328.664 1.328.664c0 .498-.498.664-1.826.498m29.548 1.66c-2.49.664-3.486.332-5.644.498-1.826.166-2.656.332-4.482.332-3.154 0-3.486.166-7.968-1.162-.83-.332-1.826-1.328-1.494-1.66.332-.498.996-.332.996-.332s5.644.996 9.296 1.162c2.656.166 3.984.332 6.64.166 1.494 0 .664-.166 2.988-.166.83-.166.332.996-.332 1.162m15.77-4.648c-.166.166-1.162.498-1.992.664-.996.166-.498-.664-.498-.664s.664-.996 1.494-1.494c.996-.498 1.494 0 1.494 0 .332.664-.332 1.328-.498 1.494m12.284-31.872c-1.162 2.49-1.494 3.32-1.66 5.644-.332 2.49 1.162 9.462-1.162 6.806-.83-1.162-1.66-6.64-.996-9.296 1.162-5.976 5.976-7.636 3.818-3.154m-33.532 101.425c-.996.664.996 2.656-2.158 2.49-1.826-.166-.83-1.826-.664-1.992l1.162-1.66c.83-1.162 1.328-1.328 2.158-1.826s1.494.83 1.494.83.332.498.332 1.162c0 .498-1.494.332-2.324.996m17.43-16.766-1.494 1.162c-.166 0-1.162.83-1.494.332s.166-1.162.166-1.328.996-1.328 1.826-1.66c.83-.498 1.328 0 1.328 0 .498 1.162-.332 1.494-.332 1.494m7.802-290.829s-.664 2.158-1.992 2.656c-1.66.498-7.968.664-8.134.166s7.304-1.162 10.126-3.984c.664-.664 0 1.162 0 1.162m-2.324-5.477c.498-.83.166 1.328.166 1.328s-.498 2.157-1.66 2.821c-1.494.83-5.146 1.826-5.478 1.328 0-.332 4.814-1.826 6.972-5.477m-10.292-24.9s.664 0 1.66.498c.996.664 1.66 2.656 1.66 2.656s.166.332-.664.332c-.498 0-.498-.83-.996-1.162-.664-.498-1.162-.664-1.992-.996s-1.992.166-2.158-.664c0-.996 2.49-.664 2.49-.664m-7.636 5.478s.332-.996 1.826-1.826c1.328-.83 3.154-.83 3.154-.83s.996 0 2.158.83 2.158 3.652 2.158 3.652.332 1.826-.498 2.49-2.158-.498-2.822-1.494c-.83-.996-1.328-1.328-2.49-1.66-1.328-.498-3.32.996-3.652 0 0-.332.166-1.162.166-1.162m-.498 22.907c-.996.166-.332-.83-.332-.83s2.822-1.161 4.648-2.157c2.988-1.494 8.632-7.47 7.138-4.648-.664 1.328-2.656 2.988-2.656 2.988s-2.324 3.319-2.822 3.817c-2.158 1.66-4.814.664-5.976.83M222.429 189.2l.166-.332s4.98-3.32 12.782-2.324c4.648.664 9.13 4.814 8.466 5.312s-1.66 0-1.992 0l-1.66-.83-2.49-.664s-4.482-.996-7.802-.83-6.308 1.328-6.308 1.328-1.328.664-1.66-.166c-.166-.996.498-1.494.498-1.494m12.284 93.457c-11.454-8.798-25.398-26.726-23.738-28.386 1.494-1.328 7.138 6.972 15.604 16.102 8.964 9.628 19.422 18.758 19.754 19.92.664 1.992-7.304-4.316-11.62-7.636m26.062-124.001c-4.814 8.3-11.454 14.608-11.454 14.608-2.324 1.66-.83-1.328-.83-1.328s6.474-8.964 9.462-15.272c2.158-4.482 3.486-10.458 4.482-11.62 2.324-2.822 1.162 8.632-1.66 13.612m13.28 90.967c-4.98-5.976-8.632-12.45-9.794-20.584-.332-1.826-.332-4.482 1.328-4.15 1.494.166 1.328 2.988 1.328 3.652.498 4.814 2.49 9.628 6.142 15.438 5.146 8.134 13.446 14.442 13.114 14.94-.83.83-9.13-5.644-12.118-9.296m1.494 155.208c-2.822 2.656-7.636 6.308-7.636 6.308h-.664v-.83l.166-.332.332-.498.332-.498.332-.498.996-1.162 2.324-2.158 2.324-2.158 3.652-3.652s1.328-1.494 1.826-1.826.83-.664 1.328-.996c.664-.332 1.494-.829 1.826-.497v.664c.166.497-4.15 5.311-7.138 8.133m10.292-122.838c-2.158 1.494-2.988 1.328-4.316 2.822-1.494 1.826-1.992 7.968-3.486 5.478s-.498-5.976 1.992-8.632c2.988-3.486 9.462-2.324 5.81.332m7.801 109.227c.996-.332 1.494-.166 1.494-.166l.332.664c0 .166-1.328 1.992-1.992 1.992-.83-.166-.498-1.162-.498-1.162s-.332-.996.664-1.328m28.386-67.562c-1.494-.996.83-3.984.83-6.474 0-1.992-.332-3.486-.332-5.146s1.66-2.158 1.66-2.158c.332 0 .996.332 1.826 1.992s-1.328 13.446-3.984 11.786m50.796-47.475c-.332 6.972-.664 11.952-4.814 17.264-4.98 6.474-13.612 13.113-11.786 7.802 1.162-3.154 8.798-7.138 11.786-15.936 1.66-5.312 1.992-10.292 1.992-10.292l-.332-10.126s-.166-.83-.166-1.992c.498-1.328 1.162-.332 1.162-.332l.332.498c0 .332 1.992 8.134 1.826 13.114" />
    </Svg>
  );
};

FerrariIcon.displayName = 'FerrariIcon';

export default FerrariIcon;