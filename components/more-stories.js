import { string, objectOf, arrayOf, shape } from 'prop-types';

import PostPreview from './post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="post-index-text">Older Posts</h2>
      <div className="grid grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

MoreStories.propTypes = {
  posts: arrayOf(
    shape({
      title: string.isRequired,
      coverImage: string.isRequired,
      date: string.isRequired,
      author: objectOf(string.isRequired).isRequired,
      slug: string.isRequired,
      excerpt: string.isRequired,
    })
  ).isRequired,
};
