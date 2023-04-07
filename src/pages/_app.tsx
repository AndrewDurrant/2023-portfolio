import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta property='og:title' content='Andrew Durrant Portfolio'/>
      <meta property='og:image' content='https://www.andrewdurrant.com/ portfolio-screenshot.jpg'/>
      <meta property='og:description' content='Andrew Durrant Portfolio'/>
      <meta property='og:url' content='https://www.andrewdurrant.com/experience'/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
