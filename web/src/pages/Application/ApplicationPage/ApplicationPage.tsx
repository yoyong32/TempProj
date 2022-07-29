import ApplicationCell from 'src/components/Application/ApplicationCell'

type ApplicationPageProps = {
  id: number
}

const ApplicationPage = ({ id }: ApplicationPageProps) => {
  return <ApplicationCell id={id} />
}

export default ApplicationPage
