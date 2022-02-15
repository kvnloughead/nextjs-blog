import Container from './container';

export default function Footer() {
  return (
    <footer id="footer" className="bg-accent-1 border-t px-6 border-accent-2">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row lg:justify-between items-center mx-auto">
          <h3 className="font-serif font-bold text-2xl text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            A blog built with Next.js and Tailwindcss
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:pl-4 lg:w-5/12">
            <a
              href="https://github.com/kvnloughead/blog/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Checkout the repo
            </a>
            <a
              href="https://kloughead.netlify.app/"
              className="mx-3 font-bold hover:underline"
            >
              See my portfolio
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
