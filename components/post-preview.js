import PropTypes from 'prop-types';

import Link from 'next/link';
import DateFormatter from './date-formatter';

export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a href="/posts/[slug]" className="hover:underline">
            {title}
          </a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
