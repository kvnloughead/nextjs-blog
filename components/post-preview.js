import PropTypes from 'prop-types';

import Link from 'next/link';

export default function PostPreview({ title, excerpt, slug }) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a href="/posts/[slug]" className="hover:underline">
            {title}
          </a>
        </Link>
      </h3>
      <p className="excerpt-text mt-3">{excerpt}</p>
    </div>
  );
}

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
