import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import myTeams from './/../assets/my-teams.jpg';
import userAvatar from './/../assets/user-avatar.jpg';
import myTeamsMobile from './/../assets/my-teams-mobile.jpg';
import myModelsMobile from './/../assets/my-models-mobile.jpg';
import myModels from './/../assets/my-models.jpg';
import pastSessionsMobile from './/../assets/past-sessions-mobile.jpg';
import sessionMobile from './/../assets/session-mobile.jpg';
import modelBuilder from './/../assets/model-builder.jpg';
import modelLibrary from './/../assets/model-library.jpg';

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
        <h2>Airin | Cognitive AI</h2>
        <p>Enterprise SaaS startup using Cognitive AI to build expert systems that reduce human labor costs. Airin has worked with very large clients in both the Tech and BPO spaces including Google, Microsoft, Dealertrack and Accenture. Airin has a very small engineering team where I had the privilege of being one of their first innovators.</p>
        <Image
          className={styles.desktopImages}
          src={myTeams}
          alt='Image of the My Teams view in Airin app'
          width={300}
        />
        <p>Developed front-end components using TypeScript, Angular, SaSS, HTML and collaborated with back-end engineers to integrate code with server-side logic.</p>
        <Image
          className={styles.desktopImages}
          src={myModels}
          alt='Image of the My Models view in Airin app'
          width={300}
        />
        <p>Code maintenance and bug fixes across all front-end repositories.</p>
        <Image
          className={styles.desktopImages}
          src={modelBuilder}
          alt='Image of the My Teams view in Airin app'
          width={300}
        />
        <p>Led major updates to the frontend testing infrastructure, including implementing Cypress E2E testing and implementing Gitlab CI/CD pipeline. Worked collaboratively with our manual testers to develop a new testing strategy that improved the overall quality of our product workflow.</p>
        <Image
          className={styles.desktopImages}
          src={modelLibrary}
          alt='Image of the User Avatar selection modal in Airin app'
          width={300}
        />
        <p>Developed and published Angular libraries via NPM</p>
        <Image
          className={styles.desktopImages}
          src={userAvatar}
          alt='Image of the User Avatar selection modal in Airin app'
          width={300}
        />
      </div>
      <div className={styles.cardDark}>
        <h2>Airin | Frontend Engineer</h2>
        <Image
          className={styles.mobileImages}
          src={myTeamsMobile}
          alt='Image of the My Teams view in Airin app'
          width={200}
        />
        <Image
          className={styles.mobileImages}
          src={myModelsMobile}
          alt='Image of the My models mobile view in Airin app'
          width={200}
        />
        <p>Onboard clients and provided them with support, including daily data reports.</p>
        <Image
          className={styles.mobileImages}
          src={pastSessionsMobile}
          alt='Image of past sessions mobile view in Airin app'
          width={200}
        />
        <Image
          className={styles.mobileImages}
          src={sessionMobile}
          alt='Image of a session on mobile in Airin app'
          width={200}
        />
        <p>Tech Stack: Angular, TypeScript, Firebase, GCP, Docker</p>
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