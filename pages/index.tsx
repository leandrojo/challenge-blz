import Head from 'next/head';

import { Steps } from '../components';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Challenge – Beleza na Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Steps />
    </div>
  )
}
