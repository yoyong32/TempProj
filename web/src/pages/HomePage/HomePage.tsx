import { MetaTags } from '@redwoodjs/web'
import AppsCell from 'src/components/AppsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h3>Applications In-Progress</h3>

      <AppsCell/>
    </>
  )
}

export default HomePage
