import React from 'react';
import './Todo.css';

const Todo = ({ item, onToggleCompleted, onRemove }) => {
  const iconSrc = item.completed ? '/icons/check-circle.svg' : '/icons/circle.svg';

  const onClick = e => {
    e.stopPropagation();
    onRemove(item.id);
  };

  return (
    <li
      className="todolist-todo"
      onClick={() => onToggleCompleted(item.id)}
      data-completed={item.completed}
    >
      <img src={iconSrc} alt="Task icon" />
      {item.task}
      <button className="control-button" title="Remove task" onClick={onClick}>
        <img src="/icons/delete.svg" alt="Delete icon" />
      </button>
    </li>
  );
};

export default Todo;
