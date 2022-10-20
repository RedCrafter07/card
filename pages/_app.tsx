import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/montserrat/900.css';
import '@fontsource/readex-pro/300.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
