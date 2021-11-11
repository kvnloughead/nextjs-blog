import Head from 'next/head';
import { string, objectOf, arrayOf, shape } from 'prop-types';

import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { BLOG_SITE_NAME } from '../lib/constants';
import DateFormatter from '../components/date-formatter';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_SITE_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <>
              <h2>Most recent post</h2>
              <DateFormatter dateString={heroPost.date} />
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            </>
          )}
          <div className="border-b-4 border-blue-500" />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

Index.propTypes = {
  allPosts: arrayOf(
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

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
