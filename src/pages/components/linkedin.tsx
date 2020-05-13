import * as React from 'react';
import Effect from './effect';

interface IProps {
  title: string;
  width: string | number;
  height: string | number;
  fill: string;
}

const Linkedin: React.FunctionComponent<IProps> = ({ title, width, height, fill }) => {
  return <i>
    <Effect>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512" fill={fill}>
        <title>{title}</title>
        <path d="M192 192h88.553v45.391h1.266c12.32-22.097 42.479-45.391 87.421-45.391 93.473 0 110.76 58.188 110.76 133.867v154.133h-92.305v-136.639c0-32.592-0.667-74.513-48.014-74.513-48.074 0-55.41 35.493-55.41 72.146v139.006h-92.271v-288z"></path>
        <path d="M32 192h96v288h-96v-288z"></path>
        <path d="M128 112c0 26.51-21.49 48-48 48s-48-21.49-48-48c0-26.51 21.49-48 48-48s48 21.49 48 48z"></path>
      </svg>
    </Effect>
  </i>
};

export default Linkedin;