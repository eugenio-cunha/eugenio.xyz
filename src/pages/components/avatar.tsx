import * as React from 'react';

interface IProps {
  alt: string;
  src: string;
}

const Avatar: React.FunctionComponent<IProps> = ({ alt, src }) => {
  return <figure className="wrapper" >
    <img className="profile" src={src} alt={alt} />
    <style jsx>{`
    
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        height: 160px;
        background-color: rgba(243,246,248,.94);
        box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15),0 1.5px 3px 0 rgba(0,0,0,.15);
        margin: auto;
        border-radius: 50%;
      }

      .profile {
        width: 152px;
        height: 152px;
        border-radius: 50%;
      }
    `}</style>
  </figure>
};

export default Avatar;