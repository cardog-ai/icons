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
 * FerrariLogoHorizontal icon component for React Native
 */
const FerrariLogoHorizontal = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#000" d="M114.692 199.926c.425.212.584.372 1.009.478.372.106.903.372 1.009.053.16-.319-.053-.744-.318-1.116-.425-.69-.638-.849-1.222-1.806-.107-.212-.213-.425-.425-.425 0 0-.053.691-.266 1.116-.159.372-.584.637-.531.903s.319.584.744.797" /><Path fill="#000" d="M159.101 245.451c-.478.637-.691 1.912-1.381 2.974-.957 1.488-2.338 3.294-3.028 3.294-.372 0-.478-.85-.478-.85s-.479-1.434.318-3.24c.585-1.275.903-1.647 1.647-2.603.691-.903 1.116-1.381 1.594-2.338.425-.85.531-1.009.797-2.337.053-.319-.054-1.009-.372-.956-.425 0-1.594 2.55-2.816 3.984-1.168 1.328-3.346 3.028-3.346 3.028s-.213.159-.213-.266a8.5 8.5 0 0 1 .106-2.496c.213-1.01.532-2.019 1.435-3.56 1.009-1.753 2.284-2.974 2.921-3.612.266-.265 1.063-.743.638-1.009-.372-.213-1.488.744-2.338 1.381-1.062.797-1.434 1.009-2.496 2.284s-1.328 1.806-1.328 1.806-1.01 1.647-1.275 3.241c-.266 1.593-.266 2.496-.266 2.496s0 1.435.16 2.285c.106.903.478 2.284.478 2.284s.531 1.54.743 2.497c.213.956.585 3.771.585 3.771s.265 2.019.106 3.931c-.159 1.913-.319 3.028-.531 3.612s-.797 2.125-1.753 3.188c-.903 1.009-1.116 1.168-1.116 1.168s-.956.797-1.753 1.222-1.965.956-2.497 1.116c-.531.106-1.274.159-1.328.159h-.69l-.213-.159-.106-.425s-.531-2.072-1.169-3.4c-.531-1.116-1.646-2.656-1.646-2.656s-1.913-2.603-3.4-4.037c-1.7-1.7-3.612-2.975-4.781-3.878-.425-.319-1.381-.903-1.381-.903s-3.878-3.878-5.259-6.959c-.956-2.125-1.594-3.665-1.328-6.003.053-.531.265-1.54.372-1.54l.69.212c.053.053.691.638 1.275.85.319.106.903.213.903.213s.478.053.744.106c.265.106.744.265 1.062.425s.797.478.797.478l.903.69.956.744s.532.372.691.425.266.106.319.106h.212s.213-.053.266-.265c.053-.266-.266-.053-.744-.585-.531-.478-.744-.903-.744-.903s-.106-.425-.531-.903-.956-.903-.956-.903-.372-.265-.903-.425-.691-.159-.744-.372c-.053-.212.638-.106.638-.106s.796.106 1.434.425a4.2 4.2 0 0 1 1.009.691l.425.372.266.265.265.16s.266.265.319-.107c.053-.318-.053-.584-.106-.637l-.266-.266-1.062-.903c-.319-.319-.531-.531-.85-.743-.319-.213-.797-.532-1.381-.744-.531-.213-.85-.16-1.381-.425-.372-.16-.691-.266-.903-.584-.054-.054-.319-.266.159-.16s.797.266 1.328.372c.85.212 1.381.212 2.178.478.319.106.744.319.744.319l1.009.425s1.381.743 2.337.797c.956.053 1.753-.16 2.072-.319.319-.106.903-.478 1.062-.638.16-.159.266-.318.266-.318l.106-.266v-.212c-.265-.319-.797.531-1.646.69-.904.16-.85.266-1.435.16-.637-.107-1.009-.266-1.487-.744-.85-.797-1.169-1.541-2.284-2.019-.478-.212-1.328-.425-1.328-.425s-1.169-.372-1.807-.743c-.478-.266-1.487-.425-1.168-.85.159-.213 1.434.531 2.39.637.691.106 1.169.053 1.7.053s1.275-.159 1.381-.159c.107-.053.532 0 .903.106.372.106.585.266.957.425.371.159.796.425.903.425l.212.053.106-.106.053-.106-.053-.107-.159-.106-.319-.212s-.478-.266-.903-.691-.797-.903-1.434-1.115c-.638-.213-1.381-.319-1.381-.319l-.744-.053-.319-.053s-.531-.16-.106-.266.638-.159.744-.159c.053-.053.797-.107 1.222.053.425.159 1.115.531 1.168.531.053.053.691.531 1.381.691s1.594.212 1.594.212l.425-.106.213-.053.159-.107-.053-.265s0-.213-.319-.266-.956-.159-1.54-.584-1.01-.85-1.01-.85-.425-.372-1.275-.584c-.797-.213-1.062-.213-1.062-.213l-.266-.106-.584-.266s-.266-.159-.478-.425c-.213-.265-.531-.743.372-.478.903.266 1.115.425 1.115.425s.478.478.903.531c.266.053.478.107.638-.106.265-.265-.478-.584-1.01-.956-.425-.266-.849-.956-.849-.956s-.319-.266.159-.16 1.328.638 1.328.638.425.212.637.265c.16.054.585.319.797.425.16.054.638.16.956.319.425.266.638.691.85.85.213.159.372.425.638.478.265.053.318.16.478.053.159-.106.212-.159.212-.159s.053-.106-.212-.266c-.266-.159-.584-.584-.584-.584l-.107-.212-.053-.213-.265-.425-.479-.691s-.743-1.009-1.434-1.381c-.637-.372-1.115-.584-1.115-.584s-.319-.159-.478-.266c-.266-.212-.372-.371-.585-.637-.265-.319-.372-.531-.69-.85-.585-.584-2.391-.903-1.7-1.328.372-.213.85-.106 1.062-.053s.691.265 1.169.425c.319.106.531.106.85.212.319.107.69.16.85.266.159.106.318.319.425.372.053.053.478.743 1.221 1.115s1.116.638 1.86.691c.584.053 1.54-.159 1.54-.159s.266-.107.053-.372c-.265-.266-.265-.319-.478-.372-.85-.319-1.54-.213-2.178-.85-.265-.266-.372-.319-.584-.744-.213-.425-.106-.531-.266-.797-.106-.265-.371-.637-.371-.637s-.797-.956-1.647-1.434c-.903-.478-1.541-.957-1.647-1.063-.159-.106-.478-.531-.478-.531l-.266-.425-.159-.319c-.106-.584.956.16 1.54.372.957.319 1.435.744 2.391 1.063.531.159.85.159 1.381.371.903.372 1.169 1.275 2.125 1.382.531.053 1.594.265 1.381-.213-.212-.531-1.275-.531-1.806-1.169-.266-.265-.266-.531-.531-.796-.425-.532-1.435-1.01-1.435-1.01s-.318-.265-.69-1.009c-.319-.744-1.116-1.275-2.55-1.965-.956-.479-2.869-.585-2.125-1.063.425-.319.797-.266 1.381-.106.585.212.797.478 1.275.69.478.213.691.266.797.319s.478.213.638.213c.106.053.903.159 1.115.212l1.063.266.849.318s.425.16.691.16.691-.106.691-.106l.318-.213.053-.106s.16-.266-.265-.319c-.372-.053-.584-.053-.638-.053l-.371-.106-.16-.053s-.744-.585-1.381-.85c-.691-.266-.797-.319-.797-.319l-.265-.053-.319-.053s-.266 0-.691-.372-.584-.584-.956-.956l-.478-.478s-.425-.319-.425-.585c.053-.425.956.478.956.478l.638.425s.531.372 1.487.425 2.125-.265 2.125-.265.159-.107.691.053c.531.159.956.478.956.478l.425.372.637.69.106-.053c.053-.053.319-.319-.159-.903s-1.275-1.115-1.275-1.115-1.062-.638-2.125-.85c-1.062-.213-1.54-.213-1.54-.213s-.797 0-1.275-.531a8 8 0 0 1-.797-1.062l-.159-.744s-.266-.319-.797-.531a11 11 0 0 1-1.009-.532s-.797-.265-.85-.637c-.16-.691 1.328 0 2.124.159.744.16 1.063.425 1.807.585.637.159 1.009.212 1.699.159.372 0 .585-.053.957-.106.371 0 .637-.053 1.009 0 .531.106.744.372 1.275.584.319.159.478.319.85.372.318.053.956.266.85-.053l-.16-.213c-.265-.372-.584-.372-.903-.637-.69-.531-1.009-.956-1.806-1.328a4.6 4.6 0 0 0-1.434-.478c-.425-.053-.744.053-1.169-.053-.478-.16-.637-.372-1.115-.638-.744-.425-1.169-.797-1.966-1.115-.531-.213-1.434-.425-1.434-.425l-.372-.053-.159-.054c-.744-.265 1.328-.85 2.284-1.115.478-.106.69-.213 1.169-.159.425.053.903.637 1.381.371.69-.371-.797-1.381-1.275-1.54-.638-.266-1.753-.053-1.753-.053l-2.444-.053-.69-.107s-.425 0-.744-.371c-.319-.372-1.541-1.86-2.922-2.072-1.434-.213-1.859 0-1.965-.106-1.222-1.913-2.497-2.338-3.453-3.241-.266-.265-.691-.85-.797-.797s-.266.85-.531 1.541c-.319.797-.106 1.169.053 1.487.212.319.478.531-.053.85s-1.222.213-1.222.213-.584-.107-1.062-.372c-.478-.213-1.488-.638-1.488-.638s-.956-.265-1.593-.212c-.638.053-.691.106-1.169.159-.266 0-.372 0-.637.053-.213.053-.479-.106-.479.16 0 .265.532.265.903.425.372.159 1.222.159 1.063.372-.213.212-1.009.265-1.063.212-.053 0-.584-.106-1.009-.106-.69.053-.744.053-1.753.531-.159.053-.106.425.213.319a5.5 5.5 0 0 1 1.487-.213c.638 0 1.009.213 1.647.372.531.159.584.266 1.381.372.159 0 .478-.106.478.106 0 .106-.212.266-.212.266s-.479.106-.425.265c.106.213.531 0 .743 0 .213 0 .532.054.478.266l-.106.159c-.584.16-.903.266-1.434.478-1.328.532-1.859 1.169-3.134 1.807-1.222.584-3.188 1.328-3.188 1.328s-.584.318-1.434.531c-.85.212-.903.159-1.487.265-.585.054-.85.16-1.328.425-.319.16-.478.319-.744.585l-.744 1.115-.425.638c-.106.212-.212.318-.265.531-.107.266-.16.372-.213.637-.16.638 0 1.01.106 1.647.054.16.054.266.107.425.053.16.265.319.265.319l.213.053s.744-.053 1.222-.159 1.168-.266 1.168-.266l.903-.266.585-.212s.372 0 .425.212c.053.16-.107.425-.107.425s-.318.16-.584.266-.903.266-.956.319l-.691.212-.584.053s-.106.053-.212.213c-.107.159-.107.159-.107.265.107.107.16.213.266.319.212.16.319.266.584.319.372.159.585.106.956.106.532 0 .85-.106 1.328-.319.425-.265.585-.265 1.169-.478.159-.053.478-.106.584-.106 1.01-.106 1.594.053 2.603.213 1.01.159 1.488.478 2.497.637 1.063.159 1.7.478 2.816.212.531-.106.849-.371 1.115.16.266.478.213.744.213.744s0 .318-.372 1.328c-.372 1.009-1.541 3.506-1.541 3.506l-.797 1.593s-.637 1.275-2.124 2.922a133 133 0 0 1-1.594 1.753s-.797.584-1.594 1.594c-.797 1.009-.797 1.381-1.54 2.124-.478.478-.744.744-1.328 1.116s-1.275.266-3.134 1.54c-1.594 1.116-2.444 2.019-2.55 1.966s-.638-.478-.85-.584l-3.24-2.178-1.276-.85-.584-.372-.106-.213-.319-.425s-.478-.584-1.062-1.062c-.585-.531-1.222-.956-2.178-1.169-.903-.265-1.488-.425-2.39-.106-.585.213-.904.425-1.329.85-.531.531-.637.956-1.062 1.594-.425.637-.85 1.221-1.063 1.54s-.637 1.169-.637 1.169-1.062 1.7-1.647 2.815c-.69 1.222-.956 1.966-1.594 3.134-1.009 1.86-2.443 3.772-2.815 4.622s-.425.956-.425.956-.106.478-.16.797c-.052.319-.052.85-.106 1.062-.053.266-.212.532-.265.585s-.638 1.275-.85 2.071c-.213.797-.69 3.294-.106 3.613s4.887-1.541 5.471-3.347c.372-1.169-1.168-1.753-.743-2.815.159-.372.265-.425.53-.797.426-.691.266-2.125 1.063-3.453.584-.956 1.753-2.178 3.347-3.984 1.01-1.116 1.965-2.922 1.965-2.922s.213-.637.638-.531c.478.106.903.053.903.053l.212.159.425.425.638.957s1.062 1.54 1.434 1.965.744.744 1.275 1.169c.584.531.797.797 1.54 1.381 1.063.85.691 1.169-.69.425-.478-.266-1.222-.531-1.806-.691-.638-.159-3.028-.797-4.25-.956-1.169-.159-1.381-.106-1.381-.106s-.584-.053-1.275.372c-.69.425-1.062.743-1.062.743s-.797.903-.85 1.063-.425.797-.425.797-.213.318-.266.69c-.106.372-.053.744-.053.744l.053.797.053.743s.16 1.86.531 3.719c.107.531.213 1.381.213 1.381l.266 1.912s.159 2.019.318 2.71c.16.637.266.69.372 1.115.212.797-.16 1.169.212 2.125s.691.85 1.063 1.434c.266.425.372.532.584 1.063.213.531.903 2.284 1.7 3.559.85 1.328 1.966 2.975 2.71 2.815.743-.159 1.274-1.328 1.274-1.328s.85-2.284.319-4.515c-.531-2.284-2.975-1.222-3.293-2.869-.054-.371 0-.956 0-.956s-.054-.69-.16-.903c-.106-.212-.956-1.806-1.275-3.134-.265-1.009-.212-4.25-.425-5.153-.584-2.337-.637-2.125-.319-2.55.372-.425.691-.318.691-.318l.478.053.372.159s.425.266.69.425c.213.159.957.744.957.744l1.806 1.168s1.01.585 1.434.797c.425.213.797.478.797.478l.478.319.797.584.16.16.105.212s.372.85 1.966 1.753c1.275.744 2.39.532 2.868 1.116.107.106 1.01 1.328 1.435 2.072.531.85 1.168 1.859 1.381 2.178.212.318 1.54 1.965 1.54 1.965l1.753 1.912 2.285 2.125 2.071 1.753 1.328 1.063s1.169 1.115 2.497 2.018c1.275.85 1.328.957 2.178 1.541a52 52 0 0 1 2.337 1.647c.85.69 1.807 1.965 1.435 2.39-.266.159-.744-.531-1.647-1.328-.744-.637-1.116-.956-1.859-1.487-.956-.744-1.435-1.116-2.497-1.753-.531-.319-1.487-.903-1.54-.797-.372 1.115-.319 2.178-.266 3.559.053.956.212 1.912.531 3.134.266 1.169.531 1.806.956 2.922.425 1.115 1.222 2.868 1.222 2.868l1.222 2.444 1.115 1.859.585.956.212.319s.266.637 0 1.062c-.265.425-.584 1.328-1.062 1.382-.478.106-1.594.159-1.594.159l-6.321-.106-3.294-.266s-.372-.212-2.284-.212c-1.116 0-2.019.478-2.656.531-.531.053-3.134-.16-4.887.531-1.647.691-2.39.85-2.975 1.912-.425.797 2.072 2.072 4.144 2.55 3.346.744 2.39-.69 3.665-1.593.159-.107.212-.213.372-.266.85-.266 1.328.425 2.178.425.956 0 1.487-.319 2.443-.478 4.834-.638 12.378 1.647 12.378 1.647s1.859.584 2.709.425c1.009-.213.797-.585 1.115-1.169.266-.478.16-.584.213-1.116 0-.318-.053-.478-.107-.796-.212-.903-.796-2.178-.796-2.178s-.425-.957-.585-1.435c-.212-.69-.425-1.115-.531-1.859-.319-1.965-.265-1.806-.265-2.922 0-2.018.212-3.134.743-5.099.797-2.869 2.284-4.091 3.4-6.853.319-.744.319-1.806.691-1.912.425-.053.371 1.328.159 2.125-.691 2.762-2.391 3.931-3.187 6.746-.585 2.178-.903 3.453-.744 5.684.053 1.222.531 3.134.531 3.134s.638 2.125.956 2.922c.319.797.957 2.125.957 2.125l1.434 2.55.743 1.221s.532.478.266 1.275-.797 1.275-1.434 1.966c-1.806 2.125-6.003 5.259-7.065 6.002-1.488 1.116-1.435 1.435-1.541 1.753-.584 1.7-2.284 1.753-4.143 3.772-.425.425-1.541 1.594-1.328 2.603.106.372 4.674 1.169 7.33.053 2.072-.903.266-1.912.85-2.922.425-.743 1.488-.743 1.966-1.381.797-1.062.265-1.009.956-1.859 2.284-2.762 3.772-4.356 7.862-6.853.372-.212 1.062-.531 1.062-.531s.585-.265.797-.584c.266-.425.213-.797.213-1.275 0-.319-.053-.478-.053-.797 0-.372.053-.584-.054-.956-.106-.584-.478-1.063-.69-1.381-.213-.266-.584-.744-.797-1.753-.266-1.01-.266-1.859.159-2.975s1.382-2.019 1.382-2.019l2.39-1.593s2.072-1.488 2.709-2.072c.691-.584 2.019-1.806 2.975-3.187 1.116-1.541 1.7-2.497 2.178-4.356.159-.691.319-1.753.319-1.753s0-.744.425-.797.531.106.531.106.372.213.478 1.275c.053 1.063-.266 2.284-.266 2.284s-.318 1.222-.425 1.966c-.053.478-.053.743-.053 1.275 0 .903.372 1.646.372 1.646s.213.16.213-.212c0-.425.106-1.062.265-1.7.16-.531.266-.425.585-1.328.425-1.169.053-1.062.265-1.753.106-.319.372-.637.691-.637s.372.425.372.425.318 1.381.053 2.656c-.266 1.275-1.222 3.028-1.222 3.028l-.744 1.274s-.531.904-.743 1.488c-.213.637-.266.903-.16 1.487.16.638.638 1.488.903 1.328.213-.159-.318-.69.319-1.965s1.487-2.072 1.487-2.072 1.169-1.381 1.7-2.444c.478-.956.956-2.496.956-2.496s.372-1.381.266-2.55c-.053-1.116-.266-1.7-.266-1.7l-.478-.85-.265-.637.106-.372c.106-.053.478.212.797.637s.637.956.797 1.7c.159.531.212 1.009.212 1.488 0 .425-.159 2.178.478 3.293.266.531.903 1.753.956 1.222.107-1.222-.425-1.806-.371-2.922.053-1.275.371-.956.478-1.593.106-.691.265-.85.159-1.753-.106-.85-.478-1.966-.478-1.966l-.372-.85-.159-.319s.106-.159.265-.159l1.275-.425s1.647-.744 2.284-1.275c.691-.478 1.488-1.328 1.488-1.328s1.062-1.328 1.593-2.284c1.275-2.391 1.275-5.418 1.222-6.8-.053-1.328-.425-3.081-.425-3.081s-.425-2.124-.318-3.506.212-2.018.212-2.018-.053-1.381 1.116-2.869c1.168-1.487 1.699-2.443 1.912-3.559.212-.956-.106-2.497-.531-1.912m-35.167-9.562c-.159 0-.371-.213-.371-.213s-.054-.053.106-.159c.159-.106.372-.053.372-.053l.159.053.266.372c-.053.159-.372.053-.532 0m.638-1.753c-.159-.053-.425-.213-.425-.213s-.053-.106.106-.212c.16-.106.425-.053.425-.053l.159.106c.054.053.319.319.319.425 0 .159-.372 0-.584-.053m.584-1.806c-.212-.053-.531-.266-.531-.266s-.053-.106.159-.212c.213-.107.532-.053.532-.053l.212.106c.106.106.372.372.372.531-.053.159-.531-.053-.744-.106m.478-1.647c-.212-.053-.531-.266-.531-.266s-.053-.106.159-.212c.213-.106.532-.053.532-.053l.212.106c.106.106.372.372.372.531-.053.106-.531-.106-.744-.106m.478-1.966c-.265-.053-.584-.318-.584-.318s-.053-.106.159-.266c.213-.159.585-.053.585-.053l.212.106c.106.107.425.425.425.585 0 .212-.584-.054-.797-.054m.319-2.124c-.319-.053-.744-.372-.744-.372s-.106-.16.213-.319c.266-.159.69-.106.69-.106l.266.159c.106.106.478.531.531.744 0 .212-.637-.053-.956-.106m.213-2.125c-.372-.053-.903-.478-.903-.478s-.107-.16.212-.372c.319-.213.85-.106.85-.106s.159.053.319.159c.159.159.584.637.637.903s-.744-.053-1.115-.106m.318-2.444c-.425-.053-1.009-.531-1.009-.531s-.106-.212.266-.425c.371-.266.956-.106.956-.106s.212.053.372.212c.159.16.69.744.743 1.01 0 .318-.903-.107-1.328-.16m-.212-9.88c-.319-.053-.744-.372-.744-.372s-.106-.106.213-.266c.318-.159.743-.053.743-.053s.16.053.266.159.531.479.531.691c0 .159-.69-.106-1.009-.159m1.169 2.39c.053.213-.691-.053-1.063-.106-.319-.053-.797-.425-.797-.425s-.106-.159.213-.319c.318-.212.743-.106.743-.106s.16.053.319.159c.16.16.531.585.585.797m-1.541 3.931c.319-.212.85-.106.85-.106s.159.053.319.159c.159.16.584.638.637.903.053.266-.744-.053-1.115-.159-.372-.053-.903-.478-.903-.478s-.107-.106.212-.319m.691-1.806c-.372-.053-.903-.478-.903-.478s-.107-.159.212-.372c.319-.212.85-.106.85-.106s.159.053.319.159c.159.16.584.638.637.903.053.319-.744 0-1.115-.106m.69-7.968c.425.106.531.372.319.372-.213.053-.319.053-.478.053-.478 0-.425-.213-1.063.106s-.159.159-1.062.478c-.85.319-.638-.531-.638-.531s.054-.16.16-.584c.106-.425.637 0 1.009 0 .691 0 1.275 0 1.753.106m-2.39-3.294.265.16c.107.106.478.531.532.743.053.213-.638-.053-.904-.106-.318-.053-.743-.372-.743-.372s-.106-.159.212-.319c.266-.212.638-.106.638-.106m-1.913-2.55c.266-.159.691-.106.691-.106l.266.16c.106.106.478.531.531.743.053.213-.638-.053-.903-.106-.319-.053-.744-.372-.744-.372s-.106-.159.159-.319m-.531 34.423c.159-.106.372-.053.372-.053l.159.053.266.372c0 .106-.319-.053-.478-.053-.16 0-.372-.213-.372-.213s-.106-.053.053-.106m-21.302-25.286c-.159.107-.265.16-.478.319-.265.213-.531.744-.69.584-.213-.159-.106-.743-.106-.743s.159-.425.371-.85c.266-.425.585-.425.585-.425.318 0 .903.212.903.69.053.478-.319.266-.585.425m4.356 1.647s-.212.053-.265-.319.265-.425.265-.425.638-.318.638.107c.053.371-.638.637-.638.637m5.684-7.224s-.69 1.115-1.646 1.54c-.957.425-1.594.638-3.4.797-.266 0-.159-.159-.159-.159s2.071-.585 3.24-1.222c.637-.372 1.381-.85 1.594-1.063.743-.637.371.107.371.107M75.966 252.41c0 .265-.319.743-.425.743s-.319-.478-.266-.743c.053-.266.107-1.01.531-.903.32.053.16.637.16.903m1.381-6.003s-.478 1.009-.637.584c-.16-.372.159-1.062.159-1.062.425-.372.584-.903.797-.691.16.213-.319 1.169-.319 1.169m6.587-10.359c-.478.531-1.965 3.347-2.284 2.869-.319-.372 1.434-3.028 1.806-3.559.372-.585.69-.478.69-.478l.107.106c-.053 0 .16.531-.319 1.062m3.984-4.196s-1.062.212-.903-.16c.213-.372.956-.531.956-.531.585.106.69.159.638.425.053.266-.69.266-.69.266m4.303 7.437c-.478.478-.637-.16-1.328-.957-.69-.743-.531-1.381-.531-1.381h.106l.106.053.266.107.16.159.53.531c.213.319.797 1.381.691 1.488m-8.234 15.883c-.16 0-.319-.319-.319-.319s-.425-.637-.584-1.115c-.16-.425-.212-1.116-.212-1.116s-.107-.903-.107-1.222c.054-.425.054-.797.107-1.009.053-.213.265-.159.265-.159.319 0 .319.265.319.265v.16s0 .956.053 1.699c0 .213.585 2.603.585 2.603s.106.213-.107.213m-.106-11.156c-.372.585-.638.585-.638.585 0-.053-.106-.266.213-.903.319-.638.638-.585.638-.585l.106.107s.053.212-.319.796m3.772 22.258c.106-.212.796.319.796.319.266.053.532.531.532.531s.106.372-.213.478c-.319.16-.531-.159-.531-.159s-.69-.956-.584-1.169m4.993-16.255c-.744-.159-2.337-1.381-2.975-1.7s-1.7-.425-1.222-.85c.053-.053.107-.159.213-.159s.584.159.584.159l1.169.478c.053 0 .637.266 1.115.532.425.265 1.17.743 1.17.743l.318.266c0 .106.372.691-.372.531m6.48-10.571s-.902 1.222-1.434 1.965c-.69 1.01-1.54 2.55-1.7 2.391s.744-1.859 1.222-2.762c.532-1.116 1.329-1.7 1.647-1.806.69-.319.266.212.266.212m-2.868 53.174s0 .213-.372.478c-.371.266-.53.107-.584.107s-.425-.213-.425-.425c.053-.213.638-.372.638-.372 1.009-.053.743.212.743.212m8.234-.318c-.372-.053-.425-.16-.372-.213 0-.053.106-.159.531-.159s.425.212.425.212c0 .16-.159.213-.584.16m9.456.531c-.797.212-1.116.106-1.806.159-.585.053-.85.106-1.435.106-1.009 0-1.115.054-2.55-.371-.265-.107-.584-.425-.478-.532.107-.159.319-.106.319-.106s1.806.319 2.975.372c.85.053 1.275.106 2.125.053.478 0 .212-.053.956-.053.265-.053.106.319-.106.372m5.046-1.488c-.053.054-.372.16-.637.213-.319.053-.16-.213-.16-.213s.213-.318.478-.478c.319-.159.479 0 .479 0 .106.213-.107.425-.16.478m3.931-10.199c-.372.797-.478 1.063-.531 1.806-.106.797.372 3.028-.372 2.178-.266-.372-.531-2.125-.319-2.974.372-1.913 1.913-2.444 1.222-1.01m-10.73 32.457c-.319.213.318.85-.691.797-.584-.053-.266-.584-.212-.637l.371-.532c.266-.371.425-.425.691-.584s.478.266.478.266.106.159.106.372c0 .159-.478.106-.743.318m5.577-5.365-.478.372c-.053 0-.372.266-.478.106-.106-.159.053-.372.053-.425s.319-.425.585-.531c.265-.159.425 0 .425 0 .159.372-.107.478-.107.478m2.497-93.068s-.212.69-.637.85c-.532.159-2.55.212-2.603.053-.053-.16 2.337-.372 3.24-1.275.213-.213 0 .372 0 .372m-.744-1.753c.16-.266.053.425.053.425s-.159.69-.531.903c-.478.265-1.646.584-1.753.425 0-.107 1.541-.585 2.231-1.753m-3.293-7.969s.212 0 .531.16c.319.212.531.85.531.85s.053.106-.212.106c-.16 0-.16-.266-.319-.372-.212-.159-.372-.212-.637-.319-.266-.106-.638.053-.691-.212 0-.319.797-.213.797-.213m-2.444 1.753s.107-.318.585-.584c.425-.266 1.009-.266 1.009-.266s.319 0 .69.266c.372.266.691 1.169.691 1.169s.106.584-.159.797c-.266.212-.691-.16-.903-.479-.266-.318-.425-.425-.797-.531-.425-.159-1.063.319-1.169 0 0-.106.053-.372.053-.372m-.159 7.331c-.319.053-.106-.265-.106-.265s.903-.372 1.487-.691c.956-.478 2.762-2.391 2.284-1.487-.212.425-.85.956-.85.956s-.743 1.062-.903 1.222c-.69.531-1.54.212-1.912.265m-7.49 20.611.053-.106s1.594-1.062 4.09-.744c1.488.213 2.922 1.541 2.709 1.7-.212.159-.531 0-.637 0l-.531-.265-.797-.213s-1.434-.319-2.497-.266a7.3 7.3 0 0 0-2.018.425s-.425.213-.532-.053a.5.5 0 0 1 .16-.478m3.931 29.907c-3.666-2.815-8.128-8.552-7.597-9.083.479-.425 2.285 2.231 4.994 5.152 2.868 3.082 6.215 6.003 6.321 6.375.213.637-2.337-1.381-3.718-2.444m8.34-39.681c-1.541 2.656-3.666 4.675-3.666 4.675-.743.531-.265-.425-.265-.425s2.072-2.869 3.028-4.888c.69-1.434 1.115-3.346 1.434-3.718.744-.903.372 2.762-.531 4.356m4.25 29.11c-1.594-1.912-2.763-3.984-3.135-6.587-.106-.584-.106-1.434.425-1.328.478.053.425.956.425 1.169.16 1.54.797 3.081 1.966 4.94 1.647 2.603 4.303 4.622 4.196 4.781-.265.266-2.921-1.806-3.877-2.975m.478 49.669c-.903.85-2.444 2.018-2.444 2.018h-.212v-.265l.053-.107.106-.159.106-.159.106-.16.319-.371.744-.691.744-.691 1.168-1.168s.425-.478.585-.585.265-.212.424-.318c.213-.107.479-.266.585-.16v.213c.053.159-1.328 1.7-2.284 2.603m3.293-39.31c-.69.478-.956.425-1.381.903-.478.584-.637 2.55-1.116 1.753-.478-.797-.159-1.912.638-2.762.956-1.116 3.028-.744 1.859.106m2.497 34.954c.319-.106.478-.053.478-.053l.106.212c0 .053-.425.638-.637.638-.266-.054-.16-.372-.16-.372s-.106-.319.213-.425m9.084-21.621c-.479-.318.265-1.275.265-2.071 0-.638-.106-1.116-.106-1.647s.531-.691.531-.691c.106 0 .319.107.584.638.266.531-.424 4.303-1.274 3.771m16.255-15.192c-.107 2.231-.213 3.824-1.541 5.524-1.593 2.072-4.356 4.197-3.771 2.497.371-1.009 2.815-2.284 3.771-5.1.531-1.699.638-3.293.638-3.293l-.107-3.241s-.053-.265-.053-.637c.16-.425.372-.106.372-.106l.106.159c0 .106.638 2.603.585 4.197M188.493 283.537c-.271-.271-.493-2.037-.493-3.924v-3.43l4.124-.216 4.124-.215.19-19.902.191-19.902H188v-7.888999999999999l17.392-.044c9.565-.024 44.017-.019 76.56.011s77.007.05 98.81.044l39.642-.011-.196 3.766-.197 3.765-105.63.181-105.631.182.204 7.707c.193 7.298.286 7.72 1.765 7.93 1.246.177 1.609-.186 1.793-1.793.208-1.815.535-2.037 3.279-2.236l3.048-.22v15.143h-2.51c-1.38 0-2.752.081-3.048.179-.296.099-.642-.727-.769-1.836-.184-1.607-.547-1.97-1.793-1.793-1.501.214-1.562.544-1.562 8.47v8.248l4.16.216 4.16.216-.215 3.728-.216 3.729-14.03.194c-7.716.107-14.252-.027-14.523-.298m39.146-.6c-1.274-.554-2.967-2.075-3.763-3.379-1.325-2.175-1.446-3.597-1.448-17.156-.003-14.083.071-14.879 1.552-16.762 2.604-3.31 5.27-3.954 16.375-3.954 16.14 0 17.213.982 17.213 15.755v8.629h-23.011000000000003l.21 5.559.209 5.558 3.945.427c5.519.597 6.454-.04 6.454-4.397v-3.561h12.193000000000001v3.622c0 4.869-1.569 7.658-5.247 9.328-2.479 1.126-4.685 1.36-12.683 1.35-6.711-.008-10.393-.321-11.999-1.019m17.736-27.566c0-7.764-.108-7.948-4.679-7.948-6.097 0-6.078-.021-6.078 7.249v6.378h10.757zm16.496 24.425c0-4.097.045-4.195 1.793-3.861l1.793.343v-27.42h-1.793c-1.674 0-1.793-.239-1.793-3.586v-3.586h15.778v2.51c0 1.381.152 2.51.338 2.51.185 0 1.718-.967 3.406-2.15 3.596-2.519 8.822-3.483 11.919-2.201 3.394 1.406 4.06 3.576 4.06 13.241v8.681l-6.251.207-6.251.207-.204-7.737-.204-7.738-3.427 3.333-3.428 3.333.201 9.935c.195 9.688.24 9.941 1.813 10.164 1.447.206 1.614.631 1.614 4.124V284h-19.364zm39.445-.052c0-4.148.046-4.247 1.793-3.93l1.793.325v-27.281h-1.793c-1.673 0-1.793-.239-1.793-3.586v-3.586h15.778v2.51c0 1.381.152 2.51.338 2.51s1.735-.985 3.443-2.188c2.193-1.547 4.259-2.308 7.037-2.595 3.538-.365 4.165-.211 6.24 1.535l2.306 1.941v19.237000000000002h-12.192v-7.13c0-3.921-.285-7.306-.634-7.521-.349-.216-1.971 1.059-3.606 2.832l-2.972 3.224.199 9.856c.195 9.605.241 9.861 1.814 10.084 1.447.206 1.613.631 1.613 4.124V284h-19.364zm43.982 3.21c-3.579-1.557-4.76-4.046-5.113-10.774-.327-6.239.529-10.317 2.512-11.969.743-.619 4.07-1.08 9.467-1.313l8.32-.358.222-3.906c.36-6.338-.085-7.211-3.678-7.211-3.861 0-4.791.933-4.791 4.806v3.083h-12.193000000000001v-3.25c0-4.878 1.613-8.073 4.733-9.376 2.065-.863 4.933-1.051 13.28-.871 10.544.227 10.666.248 12.633 2.217l1.987 1.988.244 14.771c.228 13.824.332 14.794 1.614 15.129 1.133.297 1.369 1.022 1.369 4.219V284l-14.165-.028c-10.418-.022-14.766-.29-16.441-1.018m15.392-12.401-.206-6.993-3.101-.223c-4.48-.322-5.146.546-5.146 6.707 0 7.296.13 7.501 4.764 7.501h3.894zm19.517 9.237c0-3.913.114-4.203 1.614-4.124 1.612.086 1.614.077 1.809-13.361l.195-13.447h-1.809c-1.693 0-1.809-.231-1.809-3.586v-3.586h15.778v4.961l3.61-2.244c2.517-1.565 4.789-2.342 7.5-2.567 3.581-.297 4.062-.15 6.072 1.86l2.182 2.183v18.756999999999998h-12.192v-7.13c0-4.261-.307-7.319-.762-7.6-.42-.26-2.033.905-3.586 2.587l-2.824 3.058v20.56h1.793c1.695 0 1.793.215 1.793 3.944V284h-19.364zm41.597.265c0-4.022.321-4.398 3.407-3.998.69.09.896-3.031.896-13.541v-13.658h-2.151c-2.104 0-2.152-.08-2.152-3.586v-3.586h20.081v3.586c0 3.355-.116 3.586-1.808 3.586h-1.809l.195 13.447c.193 13.332.209 13.449 1.809 13.676 1.447.206 1.613.631 1.613 4.124V284h-20.081zm2.869-45.363c-5.535-2.765-1.313-6.63 7.244-6.632 2.604 0 5.757.356 7.008.792 4.322 1.507 4.255 4.717-.134 6.347-3.252 1.207-11.263.919-14.118-.507" />
    </Svg>
  );
};

FerrariLogoHorizontal.displayName = 'FerrariLogoHorizontal';

export default FerrariLogoHorizontal;