import * as React from 'react';
import Link from 'next/link';
import { Layout } from '../layout';
import Back from './components/back';
import Avatar from './components/avatar';

const AboutPage: React.FunctionComponent = () => (
  <>
    <Layout title='Eugenio Cunha | Desenvolvedor Web Full-Stack Node.js, JavaScript, React, Python, PostgreSQL, MongoDB, Redis, Microsserviços, RabbitMQ, Docker e Linux'>
    <div>
      <Avatar alt="Eugenio Cunha" src="./eugenio-cunha.jpeg" />
    </div>
    <h2>Eugênio Cunha</h2>
    <p>Graduado em Ciência da Computação pela Universidade de Itaúna, possuo experiência na área de tecnologia, com uma sólida atuação no desenvolvimento Full Stack e arquitetura de microsserviços.</p>
    <p>Sou apaixonado pelo ambiente de desenvolvimento tecnológico, minha missão é transformar ideias em serviços e problemas em soluções.
    Dentre as minhas principais competências, as que mais se destacam são: Linux, Docker, Node.js, Express.js, PostgreSQL e React. </p>
    <div>
      <Link href='/'>
         <a>
          <Back title="Voltar" width="48" height="48" fill="#fff"/>
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

export default AboutPage;