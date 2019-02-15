import React from 'react';
import './Todo.css';

const Todo = ({ item, toggleCompleted, remove }) => {
  const iconSrc = item.completed ? '/icons/check-circle.svg' : '/icons/circle.svg';
  return (
    <li
      className="todolist-todo"
      onClick={() => toggleCompleted(item.id)}
      data-completed={item.completed}
    >
      <img src={iconSrc} alt="Task icon" />
      {item.task}
      <button className="control-button" title="Remove task" onClick={e => remove(e, item.id)}>
        <img src="/icons/delete.svg" alt="Delete icon" />
      </button>
    </li>
  );
};

export default Todo;
