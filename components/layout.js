import PropTypes from 'prop-types';
import Footer from './footer';
import Meta from './meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
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
