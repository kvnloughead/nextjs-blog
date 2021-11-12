import PropTypes from 'prop-types';
import Link from 'next/link';

import DateFormatter from './date-formatter';

export default function HeroPost({ title, excerpt, slug, date }) {
  return (
    <div className="pb-10 mb-8 heavy-bottom-border">
      <h3 className="text-3xl md:text-6xl font-bold leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a href={`/posts/${slug}`} className="hover:underline">
            {title}
          </a>
        </Link>
      </h3>
      <div className="date-text">
        <DateFormatter dateString={date} />
      </div>
      <p className="mt-3 excerpt-text">{excerpt}</p>
    </div>
  );
}

HeroPost.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
