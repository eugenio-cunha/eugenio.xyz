import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { Layout } from '../layout';
import Info from './components/info';
import { event } from '../lib/analytics';
import Github from './components/github';
import Avatar from './components/avatar';
import Youtube from './components/youtube';
import Linkedin from './components/linkedin';
import Whatsapp from './components/whatsapp';

const IndexPage: NextPage = () => {

  return <Layout title='Eugenio Cunha | Desenvolvedor Web Full-Stack Node.js, JavaScript, React, Python, PostgreSQL, MongoDB, Redis, Microsserviços, RabbitMQ, Docker e Linux'>
    <div>
      <Avatar alt="Eugenio Cunha" src="./eugenio-cunha.jpeg" />
    </div>
    <div>
      <h2>Eugênio Cunha</h2>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/eugenio-cunha-68309315b/" title="Linkedin"
        onClick={() => event('navigate', 'networks', 'Linkedin', 'linkedin')}>
        <Linkedin title="Linkedin" width="48" height="48" fill="#fff" />
      </a>

      <a href="https://github.com/eugenio-cunha" title="Github"
        onClick={() => event('navigate', 'networks', 'Github', 'github')}>
        <Github title="Github" width="48" height="48" fill="#fff" />
      </a>

      <a href="https://www.youtube.com/channel/UCp7wtzTltOZIf-F20bIfx7g" title="Youtube"
        onClick={() => event('navigate', 'networks', 'Youtube', 'youtube')}>
        <Youtube title="Youtube" width="48" height="48" fill="#fff" />
      </a>

      <a href="https://web.whatsapp.com/send?phone=5531997427487&text=Hello" title="Whatsapp"
        onClick={() => event('navigate', 'networks', 'Whatsapp', 'whatsapp')}>
        <Whatsapp title="Contato" width="48" height="48" fill="#fff" />
      </a>

      <Link href="/about">
        <a title="About" onClick={() => event('navigate', 'networks', 'About', 'about')}>
          <Info title="Sobre" width="48" height="48" fill="#fff" />
        </a>
      </Link>

    </div>
  </Layout>;
};

export default IndexPage;