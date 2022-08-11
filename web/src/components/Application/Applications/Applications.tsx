import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Application/ApplicationsCell'

const DELETE_APPLICATION_MUTATION = gql`
  mutation DeleteApplicationMutation($id: Int!) {
    deleteApplication(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ApplicationsList = ({ applications }) => {
  const [deleteApplication] = useMutation(DELETE_APPLICATION_MUTATION, {
    onCompleted: () => {
      toast.success('Application deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete application ' + id + '?')) {
      deleteApplication({ variables: { id } })
    }
  }

  console.log(applications)

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Company</th>
            <th>Position</th>
            <th>Stage</th>
            <th>Notes</th>
            <th>Submitted</th>
            <th>Offer</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, i) => (
            <tr key={application.id}>
              <td>{truncate(i + 1)}</td>
              <td>{truncate(application.company)}</td>
              <td>{truncate(application.position)}</td>
              <td>{truncate(application.stage)}</td>
              <td>{truncate(application.notes)}</td>
              <td>{timeTag(application.submitted)}</td>
              <td>{truncate(application.offer)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.application({ id: application.id })}
                    title={'Show application ' + application.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editApplication({ id: application.id })}
                    title={'Edit application ' + application.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete application ' + application.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(application.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApplicationsList
