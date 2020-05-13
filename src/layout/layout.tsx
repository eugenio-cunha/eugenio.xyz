import React from 'react';
import Head from 'next/head';
import { pageview } from '../lib/analytics';
import { Header, Footer } from './components';

const Layout: React.FunctionComponent<{ title: string }> = ({ children, title }) => {

  if (process.browser) {
    pageview(window.location.pathname);
  }
  
  return <>
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
          font-family: Roboto, Helvetica, sans-serif;
          background-color: #24292e;
          color: #fff;
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
          height: 90vh;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

      `}</style>
  </>
};

export default Layout;
