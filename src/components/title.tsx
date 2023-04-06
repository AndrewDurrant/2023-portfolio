import Link from 'next/link';
import Image from 'next/image'

import styles from '@/styles/Home.module.css';
import portfolioPicture from './/../assets/brickwall-image.jpg';

export default function Title() {
  return (
    <> 
      <div className={styles.title}>
      <Link href = "/" >
        <Image
          src={portfolioPicture}
          alt='Image of Portfolio creator'
          width={150}
          height={150}
          className={styles.authorImage}
        />
      </Link>
      <div>
        <h1>Andrew Durrant</h1>
        <span>Software Engineer</span>
      </div>
    </div>
    </>
  );
}