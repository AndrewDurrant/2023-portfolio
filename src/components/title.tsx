import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Title() {
  return (
    <>
    < Link href = "/" >  
      <div className={styles.title}>
        <h1>Andrew Durrant</h1>
        <span>Software Engineer & Musician</span>
      </div>
    </Link>
    </>
  );
}