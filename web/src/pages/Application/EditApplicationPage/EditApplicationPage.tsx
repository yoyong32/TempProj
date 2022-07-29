import EditApplicationCell from 'src/components/Application/EditApplicationCell'

type ApplicationPageProps = {
  id: number
}

const EditApplicationPage = ({ id }: ApplicationPageProps) => {
  return <EditApplicationCell id={id} />
}

export default EditApplicationPage
