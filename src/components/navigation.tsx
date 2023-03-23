import Link from 'next/link';
import styles from '@/styles/Home.module.css'

export default function Navigation() {
  return (
    <>
    <div className={styles.navigation}>
      <Link href="/about">About</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/skills-and-projects">Skills & Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
    </>
  );
}