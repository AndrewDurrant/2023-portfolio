import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function SkillsAndProjects() {
  return (
    <>
    <Head>
      <title>Andrew Durrant: Skills & Projects</title>
      <meta name="description" content="A place for Andrew Durrant to market his skills" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.cardsContainer}>
      <div className={styles.cardLight}>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript ES6</li>
          <li>TypeScript</li>
          <li>Angular</li>
          <li>React</li>
          <li>Cypress</li>
          <li>Python</li>
          <li>Django</li>
          <li>CSS3</li>
          <li>Sass</li>
          <li>HTML5</li>
          <li>Git</li>
          <li>Angular Material</li>
          <li>Firebase</li>
          <li>Figma</li>
        </ul>
      </div>
      <div className={styles.cardLight}>
        <h2>Endeavors</h2>
        <p><b>DSA:</b> HackerRank </p>
        <br />
        <p><b>Books:</b> The Pragmatic Programmer</p>
        <br />
        <p><b>Graphic Design:</b> Learning Vectornator and Figma</p>
        <br />
        <p><b>Music Production:</b> In-depth pursuit to master Logic Pro. Understanding the foundational concepts of synthesis.</p>
        <br />
        <p><b>Learning Spanish:</b> Duolingo</p>
      </div>
      <div className={styles.cardLight}>
        <h2>Django Project</h2>
        <p>Currently Wireframing this out.</p>
      </div>
      <div className={styles.cardLight}>
        <h2>Open Source</h2>
        <p>Coming soon...</p>
      </div>
    </div>  
    </>
  );
}