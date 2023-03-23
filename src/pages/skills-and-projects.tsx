import styles from '@/styles/Home.module.css';

export default function SkillsAndProjects() {
  return (
    <>
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
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
          <li>Gitlab</li>
          <li>Docker</li>
          <li>Figma</li>
          <li>Jira</li>
          <li>Asana</li>
        </ul>
      </div>
      <div className={styles.card}>
        <h2>Endeavors</h2>
        <p><b>DSA:</b> HackerRank, Cracking the Coding Interview</p>
        <br />
        <p><b>Books:</b> The Pragmatic Programmer</p>
        <br />
        <p><b>Graphic Design:</b> Learning Vectornator and Figma</p>
        <br />
        <p><b>Music Production:</b> In-depth pursuit to master Logic Pro. Understanding the foundational concepts of synthesis.</p>
        <br />
        <p><b>Learning Spanish:</b> Duolingo, SpanishDict, youtube</p>
      </div>
      <div className={styles.card}>
        <h2>Django Project</h2>
        <p>Currently Wireframing this out.</p>
      </div>
      <div className={styles.card}>
        <h2>Open Source</h2>
        <p>Coming soon...</p>
      </div>
    </div>  
    </>
  );
}