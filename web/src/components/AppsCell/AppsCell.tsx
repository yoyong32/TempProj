import type { AppsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query AppsQuery {
    apps: applications {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ apps }: CellSuccessProps<AppsQuery>) => {
  return (
    // <ul>
    //   {apps.map((item) => {
    //     return <li key={item.id}>{JSON.stringify(item)}</li>
    //   })}
    // </ul>
    <>
      {apps.map((application) => (
        <ul key={application.id}>
          <header>
            <h2>{application.title}</h2>
          </header>
          <p>{application.body}</p>
          <div>Posted at: {application.createdAt}</div>
        </ul>
      ))}
    </>
  )
}
