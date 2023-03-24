import Head from 'next/head';
import { faGithub, faGitlab, faHackerrank, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import styles from '@/styles/Home.module.css';

config.autoAddCss = false

export default function Contact() {
  return (
    <>
    <Head>
      <title>Andrew Durrant: Contact</title>
      <meta name="description" content="A place for Andrew Durrant to market his skills" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.cardDark}>
      <h2 className={styles.contactHeader}>Contact me at any of the following:</h2>
      <div className={styles.contactContainer}>
        <a href="https://gitlab.com/andrew.durrant" target="_blank">
          <FontAwesomeIcon icon={faGitlab} size="4x"/>
        </a>
        <a href="https://github.com/AndrewDurrant" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="4x"/>
        </a>
        <a href="https://www.linkedin.com/in/andrewdurrant/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} size="4x"/>
        </a>
        <a href="https://www.hackerrank.com/andrewrdurrant" target="_blank">
        <FontAwesomeIcon icon={faHackerrank} size="4x"/>
        </a>
      </div>
    </main>
    </>
  );
}