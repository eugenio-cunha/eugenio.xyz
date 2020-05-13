import React from 'react';

const Ticket: React.FunctionComponent = ({ children }) => {
  return <>
    <i className="icon-3d">{children}</i>
    <style jsx>{`
      .icon-3d {
        padding: 10px;
        -webkit-animation: icon3d 200ms 10;
        animation: icon3d 200ms 10;
        color: #fff;
      }
      .icon-3d:hover {
        -webkit-animation: icon3d 200ms infinite;
        animation: icon3d 200ms infinite;
      }
      
      @keyframes icon3d {
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

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
    `}</style>
  </>;
};

export default Ticket;
