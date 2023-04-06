import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function About() {
  return (
    <>
    <Head>
      <title>Andrew Durrant: About Me</title>
      <meta name="description" content="A place for Andrew Durrant to market his skills" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.cardsContainer}>
      <div className={styles.cardLight}>
        <h2>Introduction</h2>
        <p>I'm an engineer who has thrived within early-stage startups, and I possess a talent for crafting high-quality, responsive web applications. Using an array of front-end technologies I create visually appealing UIs that delight clients and are intuitive for the user. My ability to communicate effectively and adapt to changing requirements has helped me to deliver successful projects. I'm dedicated to continuous learning and development, staying up to date with the latest trends and tools in software engineering. With exceptional interpersonal skills and an understanding of client needs, I also excel in client onboarding and technical support roles.</p>
      </div>
      <div className={styles.cardLight}>
        <h2>My Story</h2>
        <p>Growing up in an environment where music, art, and nature were constantly present has shaped who I am today. These experiences instilled in me a strong sense of teamwork and community, which I carry with me to this day. My academic journey furthered my understanding of how the world works, as I focused on studying biological and ecological systems. This curiosity led me to explore the world of computer systems and development, where I discovered that I could apply my knowledge and skills to create innovative solutions and make a positive impact on people's lives. Today, as a developer, I continue to draw upon my upbringing and academic pursuits to approach problems with creativity, teamwork, and an appreciation for the interconnectedness of different systems.</p>
      </div>
      <div className={styles.cardLight}>
        <h2>My Stoke</h2>
        <div>
          <p>Playing the cello, guitar or one of my synthesizers.</p>
          <p>Early morning standup paddle boarding.</p>
          <p>Mountain biking with friends.</p>
          <p>Summiting a peak with my family.</p>
          <p>Cooking and dancing with my spouse.</p>
          <p>Rockhounding in the Utah desert.</p>
          <p>Learning about Audio Programming.</p>
          <p>Learning Spanish with my spouse.</p>
        </div>
      </div>
      <div className={styles.cardLight}>
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