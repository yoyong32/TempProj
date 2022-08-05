import type { AppsQuery } from 'types/graphql';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';


export const QUERY = gql`
  query AppsQuery {
    apps: applications {
      id
      position
      stage
      notes
      submitted
      offer
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ apps }: CellSuccessProps<AppsQuery>) => {
  const filterApps = (apps: AppsQuery['apps']) => {
    return apps.filter(app => !app.stage.toLocaleLowerCase().includes('phone'))
  }

  return (
    <>
      {filterApps(apps).map((application) => (
        <ul key={application.id}>
          <header>
            <h2>{application.position}</h2>
          </header>
          <div style={{ display: 'inline' }}>
            <p>{application.stage}</p>
            <p>{application.notes}</p>
          </div>
          <div>Applied at: {application.submitted}</div>
        </ul>
      ))}
    </>
  );
};
