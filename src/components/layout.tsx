import Navigation from './navigation'
import Title from './title'
import styles from '@/styles/Home.module.css';

//TODO: Need to type children.
export default function Layout({ children }: any) {
  return (
    <>
      <div className={styles.siteLayoutContainer}>
        <Title/>
        <Navigation />
        {children}
      </div>
    </>
  )
}