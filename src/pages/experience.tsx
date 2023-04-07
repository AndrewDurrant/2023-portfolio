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
import pastSessions from './/../assets/past-sessions.jpg';
import createTeamOne from './/../assets/create-team-one.jpg';
import createTeamTwo from './/../assets/create-team-two.jpg';
import avybeLandingPage from './/../assets/avybe-landing-page.jpg';
import avybeLandingPageTwo from './/../assets/avybe-landing-page-two.jpg';
import avybeCollage from './/../assets/avybe-collage.jpg';
import creatorDashboard from './/../assets/creator-dashboard.jpg';
import pennyThoughts from './/../assets/penny-thoughts.jpg';

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
        <p>Enterprise SaaS startup using Cognitive AI to build expert systems that reduce human labor costs. Airin has worked with very large clients in both the Tech and BPO spaces including Google, Microsoft, Dealertrack and Accenture. Airin has a very small engineering team where I had the privilege of being one of their first innovators as a Frontend Engineer. Screenshots are examples of my work at Airin.</p>
        <Image
          className={styles.desktopImages}
          src={myTeams}
          alt='Image of the My Teams view in Airin app'
          width={300}
        />
        <p>Collaborated with product and design to write user stories based off current business priorities and create wireframes for business solutions at an enterprise scale.</p>
        <Image
          className={styles.desktopImages}
          src={myModels}
          alt='Image of the My Models view in Airin app'
          width={300}
        />
        <p>Collaborated with back-end engineers to integrate front-end code with server-side logic.</p>
        <Image
          className={styles.desktopImages}
          src={modelBuilder}
          alt='Image of the My Teams view in Airin app'
          width={300}
        />
        <p>Led major updates to the frontend testing infrastructure, including implementing Cypress E2E testing and collaborating on the implementation of a Gitlab CI/CD pipeline to further automate testing.</p>
        <Image
          className={styles.desktopImages}
          src={pastSessions}
          alt='Image of the My Teams view in Airin app'
          width={300}
        />
        <p>Code maintenance and bug fixes across all front-end repositories.</p>
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
        <p>Developed front-end architecture and components using TypeScript, Angular, SaSS, HTML based off Figma designs.</p>
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
        <Image
          className={styles.desktopImages}
          src={createTeamOne}
          alt='Image of the User Avatar selection modal in Airin app'
          width={300}
        />
        <Image
          className={styles.desktopImages}
          src={createTeamTwo}
          alt='Image of the User Avatar selection modal in Airin app'
          width={300}
        />
      </div>
      <div className={styles.cardDark}>
        <h2>Avybe | Software Developer</h2>
        <p>Reinvented media platform and monetization hub for content creators and entertainers. Avybe allows creators to monetize their fans with the highest willingness to pay through virtual interactions and gamification. Third engineer on a hungry and dedicated team.</p>
        <Image
          className={styles.desktopImages}
          src={avybeLandingPage}
          alt='Image of the Avybe landing page'
          width={300}
        />
        <p>Enhanced functionality and scalability of a video streaming platform catering to content creators.</p>
        <Image
          className={styles.desktopImages}
          src={avybeLandingPageTwo}
          alt='Image of Avybe landing page part two.'
          width={300}
        />
        <p>Developed and expanded the video history functionality for both the client and API.</p>
        <Image
          className={styles.desktopImages}
          src={creatorDashboard}
          alt='Image of the Avybe creator dashboard'
          width={300}
        />
        <p>Designed and implemented the “Follow” Creator functionality for both the mobile app and API, driving engagement and user growth for the product.</p>
        <div className="video">
          <iframe 
          width="280" 
          height="157" 
          src="https://www.youtube.com/embed/ZDsTW-cpoRo" title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen/>
        </div>
        <p>Worked with product and design and other developers to implement new designs and functionality to the app and website.</p>
        <Image
          className={styles.desktopImages}
          src={avybeCollage}
          alt='Collage of Avybe application'
          width={300}
        />
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
        <Image
          className={styles.desktopImages}
          src={pennyThoughts}
          alt='Penny Thoughts Landing Page'
          width={300}
        />
      </div>
    </div>  
    </>
  );
}