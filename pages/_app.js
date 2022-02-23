/* eslint-disable react/prop-types */
import { ThemeProvider } from 'next-themes';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
