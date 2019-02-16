import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ items, showCompleted, onToggleItemCompleted, onRemoveItem }) => {
  return (
    <ul className="todolist-list" data-show-completed={showCompleted}>
      {items.map(item => (
        <Todo
          item={item}
          key={item.id}
          onToggleCompleted={onToggleItemCompleted}
          onRemove={onRemoveItem}
        />
      ))}
    </ul>
  );
};

export default TodoList;
