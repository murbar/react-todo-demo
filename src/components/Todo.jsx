import React from 'react';
import './Todo.css';

const Todo = ({ item, onToggleCompleted, onRemove }) => {
  const iconSrc = item.completed ? '/icons/check-circle.svg' : '/icons/circle.svg';

  return (
    <li
      className="todolist-todo"
      onClick={() => onToggleCompleted(item.id)}
      data-completed={item.completed}
    >
      <img src={iconSrc} alt="Task icon" />
      {item.task}
      <button className="control-button" title="Remove task" onClick={e => onRemove(e, item.id)}>
        <img src="/icons/delete.svg" alt="Delete icon" />
      </button>
    </li>
  );
};

export default Todo;
