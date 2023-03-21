import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

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
        <div>
        <h1>Home Page, but I think this will default to about?</h1>
        <p>Or I could have this be the home of header and nav and next the routes within this file? Stay tuned!</p>
        </div>
        <div className={styles.navigation}>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/skills-and-projects">Skills & Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </main>
    </>
  )
}
