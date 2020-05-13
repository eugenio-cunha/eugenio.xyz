import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { GA_TRACKING_ID } from '../lib/analytics';

export default class Page extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='cleartype' content='on' />
          <meta name='HandheldFriendly' content='True' />
          <meta name='description' content='Sou apaixonado por desenvolvimento, minha missão é transformar ideias em serviços e problemas em soluções.' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
          <title>Eugenio Cunha | Desenvolvedor Web Full-Stack Node.js, JavaScript, React, Python, PostgreSQL, MongoDB, Redis, Microsserviços, RabbitMQ, Docker e Linux</title>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `
          }} />
        </Head>
        <>
          <Component {...pageProps} />
        </>
      </>
    );
  }
}