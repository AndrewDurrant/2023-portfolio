import Navigation from './navigation'
import Title from './title'

//TODO: Need to type children.
export default function Layout({ children }: any) {
  return (
    <>
      <Title/>
      <Navigation />
      <main>{children}</main>
    </>
  )
}