import React from 'react';
import App from 'next/app';
import Head from 'next/head';

export default class Stick extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <link rel="icon" href="/favicon.ico" />
          <meta httpEquiv='cleartype' content='on' />
          <meta name='HandheldFriendly' content='True' />
          <meta name='description' content='Eugenio Cunha' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
          <title>Eugenio Cunha</title>
        </Head>
        <>
          <Component {...pageProps} />
        </>
      </>
    );
  }
}
