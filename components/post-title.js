import PropTypes from 'prop-types';

export default function PostTitle({ children }) {
  return (
    <h1 className="mx-auto max-w-2xl text-4xl text-left font-bold tracking-tighter leading-tight md:leading-none mb-2 md:text-left light-bottom-border">
      {children}
    </h1>
  );
}

PostTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
