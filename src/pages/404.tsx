import * as React from 'react';
import Link from 'next/link';
import { Layout } from '../layout';
import Back from './components/back';
import Effect from './components/effect';

const NotFound: React.FunctionComponent = () => (
  <>
    <Layout title='Eugenio Cunha | Desenvolvedor Web Full-Stack Node.js, JavaScript, React, Python, PostgreSQL, MongoDB, Redis, Microsserviços, RabbitMQ, Docker e Linux'>
      <Effect>
        <h1>404</h1>
      </Effect>
      <div>
        <Link href='/'>
          <a>
            <Back title="Voltar" width="48" height="48" fill="#fff" />
          </a>
        </Link>
      </div>
    </Layout>
    <style jsx>{`
      p {
        padding: 10px;
        max-width: 600px;
        text-align: justify;
      }
    `}</style>
  </>
);

export default NotFound;