import { BLOG_SITE_NAME } from '../lib/constants';

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-start shadow-sm md:justify-between py-4 px-6 lg:px-10 xl:px-12">
      <h1 className="font-code text-l md:text-2xl font-bold tracking-tighter leading-tight md:pr-8">
        {BLOG_SITE_NAME}
      </h1>
      <button type="button" className="font-code text-l md:text-2xl">
        Menu
      </button>
    </header>
  );
}
