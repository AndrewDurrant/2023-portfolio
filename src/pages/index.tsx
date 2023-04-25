import Head from 'next/head';
import { faJs, faAngular, faReact, faPython, faCss3Alt, faHtml5, faSass, faDocker, faFigma, faJira, faNpm, faGit} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import styles from '@/styles/Home.module.css';

config.autoAddCss = false

export default function About() {
  return (
    <>
    <Head>
      <title>Andrew Durrant Portfolio</title>
      <meta name="description" content="A place for Andrew Durrant to market his skills" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.cardsContainer}>
      <div className={styles.cardDark}>
        <h2>Introduction</h2>
        <p>I'm an engineer who has thrived within early-stage startups, and I possess a talent for crafting high-quality, responsive web applications. Using an array of front-end technologies I create visually appealing UIs that delight clients and are intuitive for the user. My ability to communicate effectively and adapt to changing requirements has helped me to deliver successful projects. I'm dedicated to continuous learning and development, staying up to date with the latest trends and tools in software engineering. With exceptional interpersonal skills and an understanding of client needs, I also excel in client onboarding and technical support roles.</p>
      </div>
      <div className={styles.cardDark}>
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
      <div className={styles.cardDark}>
        <h2>My Stoke</h2>
        <div>
          <p>Playing the cello, guitar or one of my synthesizers.</p>
          <p>Early morning standup paddle boarding.</p>
          <p>Mountain biking with friends.</p>
          <p>Summiting a peak with my family.</p>
          <p>Cooking and dancing with my spouse.</p>
          <p>Rockhounding in the Utah desert.</p>
          <p>Learning C++ and Audio Programming.</p>
        </div>
      </div>
      <div className={styles.cardDark}>
        <h2>Past Lives</h2>
        <div>
          <p><b>Surf Instructor</b> - Pawleys Island, S.C.</p>
          <p><b>Organic Chemistry Technician</b> - Burlington, WA</p>
          <p><b>Trainer and Team Lead @ BPO</b> - Orem, UT</p>
          <p><b>Breakfast Cook</b> - Bellingham, WA</p>
          <p><b>Farm Manager</b> - Deming, WA</p>
          <p><b>Botany/Mycology/Ecology</b> - Olympia, WA</p>
          <p><b>Musician</b> - Honolulu, HI/Myrtle Beach, S.C.</p>
          <p><b>Mountain Operations</b> - Snowbird, UT</p>
        </div>
      </div>
    </div>  
    </>
  );
}