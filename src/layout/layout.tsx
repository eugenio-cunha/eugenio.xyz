import React from 'react';
import Head from 'next/head';
import { Header, Footer } from './components';

const Layout: React.FunctionComponent<{ title: string }> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: black;
        }

        * {
          box-sizing: border-box;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

      `}</style>
  </>
);

export default Layout;
