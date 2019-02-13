import React from 'react';
import './Todo.css';

const Todo = ({ item, toggleCompleted }) => {
  return (
    <li
      className="todolist-todo"
      onClick={() => toggleCompleted(item.id)}
      data-completed={item.completed}
    >
      {item.task}
    </li>
  );
};

export default Todo;
