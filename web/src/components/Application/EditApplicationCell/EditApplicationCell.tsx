import type { EditApplicationById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ApplicationForm from 'src/components/Application/ApplicationForm'

export const QUERY = gql`
  query EditApplicationById($id: Int!) {
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
const UPDATE_APPLICATION_MUTATION = gql`
  mutation UpdateApplicationMutation($id: Int!, $input: UpdateApplicationInput!) {
    updateApplication(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ application }: CellSuccessProps<EditApplicationById>) => {
  const [updateApplication, { loading, error }] = useMutation(UPDATE_APPLICATION_MUTATION, {
    onCompleted: () => {
      toast.success('Application updated')
      navigate(routes.applications())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateApplication({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Application {application.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ApplicationForm application={application} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
