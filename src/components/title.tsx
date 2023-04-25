import Link from 'next/link';
import Image from 'next/image'

import styles from '@/styles/Title.module.css';
import portfolioPicture from './/../assets/brickwall-image.jpg';

export default function Title() {
  return (
    <> 
      <div className={styles.title}>
        <Image
          src={portfolioPicture}
          alt='Image of Portfolio creator'
          width={100}
          height={100}
          className={styles.authorImage}
        />
      <div>
        <h1>Andrew Durrant</h1>
        <span>Software Engineer</span>
      </div>
    </div>
    </>
  );
}