import React from 'react';

const Todo = ({ item, toggleCompleted }) => {
  return (
    <div className="todolist-todo" onClick={toggleCompleted}>
      {item.completed ? '[×]' : '[ ]'} - {item.task}
    </div>
  );
};

export default Todo;
