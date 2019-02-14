import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ items, toggleItemCompleted, showCompleted, removeItem }) => {
  return (
    <ul className="todolist-list" data-show-completed={showCompleted}>
      {items.map(item => (
        <Todo item={item} key={item.id} toggleCompleted={toggleItemCompleted} remove={removeItem} />
      ))}
    </ul>
  );
};

export default TodoList;
