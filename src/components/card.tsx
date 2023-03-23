import styles from '@/styles/Home.module.css'

interface IProps {
  title: string;
  copy: string[];
  fontAwesomeIcons?: string[];
}

export default function Card({title, copy, ...props}: IProps) {
  return (
    <>
    <div className={styles.card}>
      <h2>{ title }</h2>
      <p>{copy[0]}</p>
    </div>
    </>
  );
}