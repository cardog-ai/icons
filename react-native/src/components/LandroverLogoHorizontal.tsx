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
 * LandroverLogoHorizontal icon component for React Native
 */
const LandroverLogoHorizontal = (props: IconComponentProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      {...props}
    >
      <Path fill="#004E25" d="M256 148c-113.772 0-206 48.384-206 108s92.228 108 206 108 206-48.384 206-108-92.228-108-206-108" /><Path fill="#F5F0CC" d="M334.905 225.026h20.159l-23.014 8.38-1.471 4.58 35.3-12.183 3.979-12.096h-31.146zM174.673 232.715l-4.239 12.096h-30.282s.692-.259 1.731-2.333c.951-2.073 14.967-42.854 14.967-42.854s1.904-4.234-.259-5.357h17.563s-1.038-.259-2.682 4.061c-.952 2.506-12.718 35.165-12.718 35.165h12.631c0 .086 2.856.432 3.288-.778M224.594 244.725h14.275s-.951-1.555-.346-3.197c.865-2.333 8.392-23.846 8.392-23.846l3.288 27.043h12.978l16.957-48.039s.693-2.246 1.644-2.246h-13.756s.433 1.642-.087 2.938c-.519 1.296-8.305 23.068-8.305 23.068l-3.028-26.006h-14.795s.779 1.296.259 2.678c-.432 1.124-15.659 44.842-15.659 44.842s-1.039 2.765-1.817 2.765M306.094 194.44h-16.265s1.211 2.074-.346 6.739c-1.558 4.752-14.016 39.744-14.016 39.744s-.952 3.283-2.336 3.888h19.553s23.706.951 30.974-25.056c0 .087 9.344-25.574-17.564-25.315m1.731 27.562c-4.153 10.54-10.296 11.318-13.584 11.318h-2.249l9.517-27.994h3.634s9.43-.604 2.682 16.676M153.303 274.187h-20.159l23.014-8.381 1.471-4.579-35.386 12.183-3.893 12.096h31.146zM206.944 274.878c5.884-19.526-13.842-19.008-13.842-19.008h-20.159c1.471 1.728.346 5.271.346 5.271s-12.545 37.411-13.497 40.349c-.952 2.851-2.769 4.924-2.769 4.924h15.92c-.519 0-.519-1.641-.519-1.641l5.71-15.811s7.094 14.601 7.614 15.638.259 1.901.259 1.901h17.044c-1.644 0-3.288-3.197-3.288-3.197l-8.478-15.898c11.853-.259 15.659-12.528 15.659-12.528m-13.842-1.728c-2.25 5.012-8.22 4.407-8.22 4.407h-3.114l3.287-10.109h3.375c7.267 0 4.672 5.702 4.672 5.702M383.096 275.57c6.229-20.477-13.67-19.527-13.67-19.527H349.44c1.471 1.728.346 5.271.346 5.271s-13.064 37.584-14.016 40.435-2.855 4.752-2.855 4.752h16.612c-1.212 0-.347-3.111-.347-3.111l5.105-14.428s6.835 14.601 7.354 15.638.26 1.901.26 1.901h17.649c-1.643 0-3.46-3.197-3.46-3.197l-8.479-15.898c11.853 0 15.487-11.836 15.487-11.836m-14.189-2.16c-1.817 4.838-7.787 4.406-7.787 4.406h-3.115l3.288-10.022h4.412s5.365-.173 3.202 5.616M238.61 254.574c-15.573 0-25.782 12.356-28.378 27.648-2.423 14.084 5.191 25.402 17.823 25.402 17.563 0 28.118-18.058 28.118-31.018 0-13.564-5.364-22.032-17.563-22.032m2.336 28.08c-2.509 10.541-7.354 13.824-11.767 12.96-5.969-1.123-4.931-10.8-3.979-15.292 2.076-9.764 7.354-14.429 11.247-13.997 1.298.259 8.306.345 4.499 16.329M260.326 256.043s1.211.691 1.211 3.888v43.718s-.173 2.42-1.038 2.938h13.151s0-1.037 1.298-2.765 28.464-39.744 28.464-39.744 6.143-7.949 7.787-7.949h-18.775s1.471 1.037.347 2.852c-1.125 1.9-17.823 27.907-17.823 27.907l.173-26.266s0-4.233 1.557-4.579zM339.491 267.966l4.239-11.923h-31.752s1.125 1.037-.346 5.27c-1.471 4.234-14.362 40.436-14.362 40.436s-2.336 4.752-2.942 4.752h32.704l3.893-12.096s-.519.691-3.547.691h-13.843l2.942-8.122h10.815s2.249-.173 2.768.519l4.413-12.874s-.346 1.21-3.288 1.21h-10.382l3.114-8.986h13.151c0-.086 1.731-.346 2.423 1.123M222.95 244.811s-1.125-.691-1.384-2.678l-1.99-44.323s-.087-2.852 1.211-3.456H205.3s1.125 1.382-.952 4.579-28.551 44.15-28.551 44.15-.519 1.037-1.817 1.642h15.66s-.086-1.296.346-2.074c.779-1.469 2.682-5.011 2.682-5.011h15.747v4.406s.086 1.556-1.038 2.679c-.087.086 15.573.086 15.573.086m-23.62-18.489 8.652-14.775.087 14.775z" /><Path stroke="#004E25" d="M255.567 168.261c-102.437 0-185.495 39.657-185.495 88.473s83.058 88.474 185.495 88.474c102.438 0 185.496-39.658 185.496-88.474s-83.058-88.473-185.496-88.473Z" /><Path stroke="#F5F0CC" d="M255.567 163.077c-105.206 0-190.426 41.645-190.426 92.966 0 51.322 85.307 92.88 190.426 92.88 105.207 0 190.514-41.645 190.514-92.88-.087-51.321-85.307-92.966-190.514-92.966Z" />
    </Svg>
  );
};

LandroverLogoHorizontal.displayName = 'LandroverLogoHorizontal';

export default LandroverLogoHorizontal;