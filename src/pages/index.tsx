import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Durrant Portfolio</title>
        <meta name="description" content="A place for Andrew Durrant to market his skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.welcome}>
        <h2>“Make everything as simple as possible, but not simpler.” (Albert Einstein)</h2>
      </div>
    </>
  )
}
