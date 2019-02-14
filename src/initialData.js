const getInitialData = () => {
  return {
    items: [
      {
        task: 'Get into Lambda School',
        id: 1528817077286,
        completed: true
      },
      {
        task: 'Learn React in 3 days',
        id: 1528817077223,
        completed: true
      },
      {
        task: 'Build to-do app',
        id: 1528817077255,
        completed: true
      },
      {
        task: 'Get hired',
        id: 1528817084358,
        completed: false
      }
    ],
    showCompleted: true
  };
};

export default getInitialData;
