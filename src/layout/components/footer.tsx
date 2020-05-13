import React from 'react';

const Footer = () => (
  <>
    <footer>
      <span>footer</span>
    </footer>
    <style jsx global>{`
      footer {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
    </style>
  </>
);

export default Footer;
