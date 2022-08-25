import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
// import { ApplicationStatus } from 'src/utils/enums';
import applicationData from 'src/tempData';
import Column from '../Columns/Column';

class KanbanBoard extends React.Component{
  state = applicationData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination){
      return;
    }

    if (
      (destination.droppableId === source.droppableId) &&
      (destination.index === source.index))
      {
        return;
    }

    const column = this.state.columns[source.droppableId];
    const newCardIds = Array.from(column.cardIDs);
    newCardIds.splice(source.index, 1);
    newCardIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      cardIDs: newCardIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnID) => {
          const column = this.state.columns[columnID];
          const cards = column.cardIDs.map(cardID => this.state.cards[cardID])

          return <Column key={column.id} column={column} cards={cards}/>;
        })}
      </DragDropContext>
    );
  }
}
// const KanbanBoard = () => {
//   this.state = applicationData;

//   return (this.state.columnOrder.map((columnID) => {
//       const column = this.state.columns[columnID];
//       const tasks = column.taskIDs.map(taskID => this.state.tasks[taskID])

//       return <Column key={column.id} column={column} tasks={tasks}/>;
//   }));
// }

// ReactDOM.render(<KanbanBoard/>, document.getElementById('root'));

export default KanbanBoard;

// const applicationData = [
//   {
//     id: 1,
//     title: 'Facebook',
//     salary: '1 gazillion'
//   },
//   {
//     id: 2,
//     title: 'Google',
//     salary: '2 gazillion'
//   }
//   ,
//   {
//     id: 3,
//     title: 'Netflix',
//     salary: '5 gazillion'
//   }
// ];

// type KanbanBoardProps = {
//   applicationData: any;
// };

// // Create a card
// // Show all applications as cards in the grid
// // have a button on the card to move to next column
// // have a button on the card to move to prev column
// // Have an edit button on the card

// // How to connect to backend
// // 1. Get all application information - see ApplicationCell.tsx - from Prisma
// // 2. Create a list for each column that has the data so
// //  a. const waitingForReply = applications.filter(app => app.status === 'Waiting for reply')
// // 3. Use below code to iterate over array and display an item for each app in the lists

// // const KanbanBoard = ({ applicationData }: KanbanBoardProps) => {
// const KanbanBoard = () => {
//   return (
//     <Grid container spacing={2}>
//       <Grid xs={4}>
//         <CardList appStatus={ApplicationStatus.IN_PROGRESS} />
//       </Grid>
//       <Grid xs={4}>
//         <CardList appStatus={ApplicationStatus.WAITING_FOR_REPLY} />
//       </Grid>
//       <Grid xs={4}>
//         <CardList appStatus={ApplicationStatus.COMPLETED} />
//       </Grid>
//     </Grid>
//   );
// };

// type CardListArgs = {
//   appStatus: ApplicationStatus
// }

// const CardList = ({appStatus}: CardListArgs) => {
//   const onDragEnd = (result: DropResult) => {
//     const { destination, source, draggableId } = result;
//     console.log(result);
//   };
//   return (
//     <>
//       <Typography fontSize={30}>{appStatus}</Typography>
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId={'poop'}>
//             {(provided2) => (
//               <div ref={provided2.innerRef} {...provided2.droppableProps}>
//                 {applicationData.map((app, i) => (
//                   <Draggable draggableId={app.id} index={i}>
//                     {provided => (
//                       <div ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}>

//                         <Typography>{app.title}</Typography>
//                       </div>
//                     )}

//                   </Draggable>
//                 ))}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div>
//     </>
//   );
// };


