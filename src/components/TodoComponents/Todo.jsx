import React from 'react';
import './Todo.css';

const Todo = ({ item, toggleCompleted }) => {
  const iconSrc = item.completed ? '/icons/check-circle.svg' : '/icons/circle.svg';
  return (
    <li
      className="todolist-todo"
      onClick={() => toggleCompleted(item.id)}
      data-completed={item.completed}
    >
      <img src={iconSrc} alt="Task icon" />
      {item.task}
    </li>
  );
};

export default Todo;
