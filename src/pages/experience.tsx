import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Experience() {
  return (
    <>
    <Head>
      <title>Andrew Durrant: Experience</title>
      <meta name="description" content="A place for Andrew Durrant to market his skills" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.cardsContainer}>
      <div className={styles.cardDark}>
        <h2>Airin | Frontend Engineer</h2>
        <p>Led major updates to the frontend testing infrastructure, including implementing Cypress E2E testing and implementing Gitlab CI/CD pipeline. Worked collaboratively with our manual testers to develop a new testing strategy that improved the overall quality of our product workflow.</p>
        <p>Ownership of code health and dependency updates across all front-end repositories.</p>
        <p>Onboard clients and provided them with support, including daily data reports.</p>
        <p>Developed and published Angular libraries via NPM</p>
        <p>Developed front-end components using TypeScript, Angular, SaSS, HTML and collaborated with back-end engineers to integrate code with server-side logic.</p>
        <p>Tech Stack: Angular, TypeScript, Node, Firebase, GCP, Docker</p>
      </div>
      <div className={styles.cardDark}>
        <h2>Avybe | Software Developer</h2>
        <p>Enhanced functionality and scalability of a video streaming platform catering to content creators.</p>
        <p>Developed and expanded the video history functionality for both the client and API.</p>
        <p>Designed and implemented the “Follow” Creator functionality for both the mobile app and API, driving engagement and user growth for the product.</p>
        <p>Worked with product and design and other developers to implement new designs and functionality to the app and website.</p>
        <p>Tech Stack: React, React Native, NextJS, Django, Python, AWS</p>
      </div>
      <div className={styles.cardDark}>
        <h2>Thinkful | SWE Student </h2>
        <p>Project: Penny-Thoughts https://penny-thoughts.vercel.app/</p>
        <p>Daily pair-programming with fellow cohort engineers.</p>
        <p>Worked closely with senior engineers to build and test full-stack applications that utilized JavaScript, React, Node, Express, PostgreSQL, Mocha, Jest, Enzyme and Chai.</p>
        <p>Mentorship by dedicated senior software engineer.</p> 
        <p>Github for collaboration and version control.</p>
        <p>Extensive VS Code, Postman and Test Driven Development practice.</p>
      </div>
    </div>  
    </>
  );
}