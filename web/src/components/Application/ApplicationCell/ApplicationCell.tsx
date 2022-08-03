import type { FindApplicationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Application from 'src/components/Application/Application'

export const QUERY = gql`
  query FindApplicationById($id: Int!) {
    application: application(id: $id) {
      id
      position
      stage
      notes
      submitted
      offer
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Application not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ application }: CellSuccessProps<FindApplicationById>) => {
  return <Application application={application} />
}
