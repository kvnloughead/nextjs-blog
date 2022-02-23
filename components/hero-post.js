import PropTypes from 'prop-types';
import Link from 'next/link';

import DateFormatter from './date-formatter';

export default function HeroPost({ title, excerpt, slug, date }) {
  return (
    <div className="pb-20 mb-20 border-b">
      <h3 className="font-bold font-serif text-3xl md:text-6xl leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a href={`/posts/${slug}`} className="hover:underline">
            {title}
          </a>
        </Link>
      </h3>
      <p className="mt-3 excerpt-text">{excerpt}</p>
      <div className="date-text">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}

HeroPost.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
