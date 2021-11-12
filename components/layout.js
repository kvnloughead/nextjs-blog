import PropTypes from 'prop-types';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-10 px-6 max-w-4xl mx-auto">{children}</main>
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
