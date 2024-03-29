import PropTypes from 'prop-types';

import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
  return (
    <div className="mx-auto">
      <div
        className={markdownStyles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

PostBody.propTypes = {
  content: PropTypes.string.isRequired,
};
