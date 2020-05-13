import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../layout';
import Effect from './components/effect';
import Github from './components/github';
import Linkedin from './components/linkedin';

const IndexPage: NextPage = () => {

  return <Layout title='Eugenio Cunha'>
    <div>      
      <a className="icon-3d" href="https://www.linkedin.com/in/eugenio-cunha-68309315b/" title="linkedin">
        <Effect>
          <Linkedin />
        </Effect>
      </a>

      <a className="icon-3d" href="https://github.com/eugenio-cunha" title="github">
        <Effect>
          <Github />
        </Effect>
      </a>

    </div>
  </Layout>;
};

export default IndexPage;