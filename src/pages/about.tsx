import styles from '@/styles/Home.module.css'

export default function About() {
  return (
    <>
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <h2>Elevator Pitch</h2>
        <p>Hi there! I'm an engineer who is passionate about music and the environment, and I possess a talent for crafting high-quality, responsive web interfaces. Using Angular, TypeScript, and Cypress, I create visually appealing user interfaces that delight clients. With experience in technical architecture and design, I work collaboratively with small teams to meet project objectives. My ability to communicate effectively and adapt to changing requirements has helped me to deliver successful projects. I'm dedicated to continuous learning and development, staying up to date with the latest trends and tools in software engineering. With exceptional interpersonal skills and a deep understanding of client needs, I excel in client onboarding and support roles.</p>
      </div>
      <div className={styles.card}>
        <h2>My Story</h2>
        <p>Growing up in an environment where music, art, and nature were constantly present has shaped who I am today. These experiences instilled in me a strong sense of teamwork and community, which I carry with me to this day. My academic journey furthered my understanding of how the world works, as I focused on studying biological and ecological systems. This curiosity led me to explore the world of computer systems and development, where I discovered that I could apply my knowledge and skills to create innovative solutions and make a positive impact on people’s lives. Today, as a developer, I continue to draw upon my upbringing and academic pursuits to approach problems with creativity, teamwork, and an appreciation for the interconnectedness of different systems.</p>
      </div>
      <div className={styles.card}>
        <h2>My Stoke</h2>
        <ul>
          <li>Playing the cello, guitar or one of my synthesizers.</li>
          <li>Early morning standup paddle boarding.</li>
          <li>Mountain biking with friends.</li>
          <li>Summiting a peak with my family.</li>
          <li>Cooking and dancing with my spouse.</li>
          <li>Rockhounding in the Utah desert.</li>
          <li>Learning about Audio Programming.</li>
          <li>Learning Spanish with my spouse.</li>
        </ul>
      </div>
      <div className={styles.card}>
        <h2>Past Lives</h2>
        <ul>
          <li>Surf Instructor - Pawleys Island, S.C.</li>
          <li>Organic Chemistry Technician - Burlington, WA</li>
          <li>Trainer and Team Lead @ BPO - Orem, UT</li>
          <li>Breakfast Cook - Bellingham, WA</li>
          <li>Farm Manager - Deming, WA</li>
          <li>Botany/Mycology/Ecology - Olympia, WA</li>
          <li>Musician - Honolulu, HI/Myrtle Beach, S.C.</li>
          <li>Mountain Operations - Snowbird, UT</li>
        </ul>
      </div>
    </div>  
    </>
  );
}