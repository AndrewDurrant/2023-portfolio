import Link from 'next/link';
import styles from '@/styles/Navigation.module.css'

export default function Navigation() {
  return (
    <>
    <nav className={styles.navigation}>
      <Link href="/">About</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    </>
  );
}