import { BLOG_SITE_NAME } from '../lib/constants';

export default function Intro() {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='font-code text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8'>
        {BLOG_SITE_NAME}
      </h1>
      <h4 className='font-code text-center md:text-left text-lg mt-5 md:pl-8'>
        This blog is under construction.{' '}
      </h4>
    </section>
  );
}
