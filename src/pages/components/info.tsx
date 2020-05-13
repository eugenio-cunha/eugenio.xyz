import * as React from 'react';
import Effect from './effect';

interface IProps {
  title: string;
  width: string | number;
  height: string | number;
  fill: string;
}

const Info: React.FunctionComponent<IProps> = ({ title, width, height, fill }) => {
  return <i>
    <Effect>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512" fill={fill}>
        <title>{title}</title>
        <path d="M224 152c0-13.2 10.8-24 24-24h16c13.2 0 24 10.8 24 24v16c0 13.2-10.8 24-24 24h-16c-13.2 0-24-10.8-24-24v-16z"></path>
        <path d="M320 384h-128v-32h32v-96h-32v-32h96v128h32z"></path>
        <path d="M256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM256 464c-114.875 0-208-93.125-208-208s93.125-208 208-208 208 93.125 208 208-93.125 208-208 208z"></path>
      </svg>
    </Effect>
  </i>
};

export default Info;