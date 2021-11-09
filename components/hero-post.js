import Link from 'next/link';

export default function HeroPost({ title, excerpt, slug }) {
  return (
    <div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
    </div>
  );
}
