import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { poppins } from '@/fonts';

import '@/styles/globals.css';
import styles from '@/styles/app.module.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.className} ${styles.app}`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
