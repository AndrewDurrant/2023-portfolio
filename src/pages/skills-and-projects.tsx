import Head from 'next/head';
import { faJs, faAngular, faReact, faPython, faCss3Alt, faHtml5, faSass, faDocker, faFigma, faJira, faNpm, faGit} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import styles from '@/styles/Home.module.css';

config.autoAddCss = false

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
          <li>
            <FontAwesomeIcon icon={faJs} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faAngular} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3Alt} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faHtml5} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faSass} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faDocker} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faFigma} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faJira} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faNpm} size="3x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faGit} size="3x"/>
          </li>
          <li>TypeScript</li>
          <li>Cypress</li>
          <li>Django</li>
          <li>Firebase</li>
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