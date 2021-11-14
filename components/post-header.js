import PropTypes from 'prop-types';

import DateFormatter from './date-formatter';
import PostTitle from './post-title';

export default function PostHeader({ title, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="date-text">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
