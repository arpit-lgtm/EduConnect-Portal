import Head from 'next/head';
import '../styles/globals.css';
import '../utils/fontawesome';
import EduAI from '../components/eduai/EduAI';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      {/* AskEduAI Button - Available on ALL pages */}
      <EduAI />
    </>
  )
}

export default MyApp;