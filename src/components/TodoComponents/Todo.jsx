import React from 'react';
import './Todo.css';

const Todo = ({ item, toggleCompleted }) => {
  return (
    <div className="todolist-todo" onClick={() => toggleCompleted(item.id)}>
      {item.completed ? '[×]' : '[ ]'} - {item.task}
    </div>
  );
};

export default Todo;
