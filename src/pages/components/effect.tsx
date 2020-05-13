import React from 'react';

const Effect: React.FunctionComponent = ({ children }) => {
  return <>
    <span className="psychedelic">{children}</span>
    <style jsx>{`
      .psychedelic {
        color: #fff;
        padding: 10px;
        -webkit-animation: psychedelia 200ms 10;
        animation: psychedelia 200ms 10;
      }
      .psychedelic:hover {
        -webkit-animation: psychedelia 200ms infinite;
        animation: psychedelia 200ms infinite;
      }
      
      @keyframes psychedelia {
        0% {
          filter: drop-shadow(-7px -7px 0 #f44336);
        }
        25% {
          filter: drop-shadow(6px 3px 0 #2196f3);
        }
        50% {
          filter: drop-shadow(-9px 3px 0 #f44336);
        }
        75% {
          filter: drop-shadow(-6px -3px 0 #2196f3);
        }
        100% {
          filter: drop-shadow(6px -3px 0 #f44336);
        }
      }
    `}</style>
  </>;
};

export default Effect;
