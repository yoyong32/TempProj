import type { AppsQuery } from 'types/graphql';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import { ButtonField, Form, SelectField, Submit, useForm } from '@redwoodjs/forms';
import { useState } from 'react';


export const QUERY = gql`
  query AppsQuery {
    apps: applications {
      id
      company
      position
      stage
      notes
      submitted
      offer
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Submit Applications!</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

type FormResponse = {
  stage: string;
};

export const Success = ({ apps }: CellSuccessProps<AppsQuery>) => {
  const [filteredApps, setFilteredApps] = useState<AppsQuery['apps']>(apps);

  const formMethods = useForm();

  const onSubmit = (data: FormResponse) => {
    setFilteredApps(apps.filter(app => app.stage === data.stage));
  };

  return (
    <>
      <>
        <h3>Filter</h3>
        <Form formMethods={formMethods} onSubmit={onSubmit}>
          <SelectField name="stage" >
            <option>Submitted Application</option>
            <option>Phone Screen</option>
            <option>Onsite</option>
            <option>Final Round</option>
          </SelectField>

          <Submit onClick={() => setFilteredApps(apps)} className="button">Apply</Submit>
        </Form>
      </>
      {filteredApps.map((application) => (
        <ul key={application.id}>
          <header>
            <h2>{application.company}</h2>
          </header>
          <div style={{ display: 'inline' }}>
            <p>{application.position}</p>
            <p>{application.stage}</p>
            <p>{application.notes}</p>
          </div>
          <div>Applied at: {application.submitted}</div>
        </ul>
      ))}
    </>
  );
};
