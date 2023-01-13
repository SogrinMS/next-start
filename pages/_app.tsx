import type { AppProps } from 'next/app';

import '/src/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
