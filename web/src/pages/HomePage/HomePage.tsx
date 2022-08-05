import { MetaTags } from '@redwoodjs/web'
import AppsCell from 'src/components/AppsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h2>Applications In-Progress</h2>

      <AppsCell/>
    </>
  )
}

export default HomePage
