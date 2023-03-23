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
        <h2>Current Endeavors</h2>
        <p>DSA: HackerRank, Cracking the Coding Interview</p>
        <br />
        <p>Books: The Pragmatic Programmer</p>
        <br />
        <p>Graphic Design: Learning Vectornator and Figma</p>
        <br />
        <p>Music Production: In-depth pursuit to master Logic Pro, understanding the foundational concepts of synthesis</p>
        <br />
        <p>Learn Spanish Language: Duolingo, SpanishDict, youtube</p>
      </div>
      <div className={styles.card}>
        <h2>Django Project</h2>
        <p>Currently Wireframing this out</p>
      </div>
      <div className={styles.card}>
        <h2>Open Source Contributions</h2>
        <p>Nuclear</p>
      </div>
    </div>  
    </>
  );
}