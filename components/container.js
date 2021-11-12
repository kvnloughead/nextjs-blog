import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <div className="container mx-auto">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.objectOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
