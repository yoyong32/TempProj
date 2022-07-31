import { MetaTags } from '@redwoodjs/web'
import AppsCell from 'src/components/AppsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <AppsCell/>
    </>
  )
}

export default HomePage
