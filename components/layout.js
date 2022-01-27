import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

import Footer from './footer';
import Header from './header';
import Meta from './meta';

require('prismjs/components/prism-bash');
require('prismjs/components/prism-jsx');
require('../styles/prism-plain-text');

export default function Layout({ children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-10 px-6 max-w-6xl mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.objectOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
