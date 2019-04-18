import React from 'react';
import Helmet from 'react-helmet';
import { OpenSansRegular } from 'fonts/OpenSans';

const FontPreloader = () => (
  <>
    <Helmet>
      <link
        rel="preload"
        href={OpenSansRegular.ttf}
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </Helmet>
  </>
);

export default FontPreloader;
