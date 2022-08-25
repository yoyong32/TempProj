const applicationData = {
  cards: {
    'card1': {id: 'card1', content: 'Take out the garbage'},
    'card2': {id: 'card2', content: 'Watch TV'},
    'card3': {id: 'card3', content: 'Charge phone'},
    'card4': {id: 'card4', content: 'Cook dinner'},
  },
  columns: {
    'column1': {
      id: 'column1',
      title: 'To do',
      cardIDs: ['card1', 'card2', 'card3', 'card4'],
    },
  },
  columnOrder: ["column1"],
};

export default applicationData;
