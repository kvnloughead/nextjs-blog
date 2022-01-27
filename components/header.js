import Link from 'next/link';

import { BLOG_SITE_NAME } from '../lib/constants';

export default function Header() {
  return (
    <header className="font-mono font-bold md:text-2xl flex flex-row justify-between items-start shadow-sm md:justify-between py-4 px-6 lg:px-10 xl:px-12">
      <nav className="w-288 m-auto flex flex-row justify-between items-start">
        <Link href="/">
          <a href="/" className="hover:underline">
            {BLOG_SITE_NAME}
          </a>
        </Link>
        <button
          type="button"
          className="font-mono font-bold text-l md:text-2xl hover:underline"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
