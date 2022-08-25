import { MetaTags } from '@redwoodjs/web';
import AppsCell from 'src/components/AppsCell';
import KanbanBoard from 'src/components/KanbanBoard/KanbanBoard';

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* <h3>Applications In-Progress</h3> */}

      {/* <AppsCell /> */}
      <KanbanBoard />
    </>
  );
};

export default HomePage;
