import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Durrant Portfolio</title>
        <meta name="description" content="A place for Andrew Durrant to market his skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.welcome}>
          <h2>Welcome to my Website</h2>
          <p>Built with NextJS</p>
          <p>Have a look around</p>
        <img src="" alt="" />
        </div>
      </main>
    </>
  )
}
