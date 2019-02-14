import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ items, toggleCompleted, showCompleted }) => {
  return (
    <ul className="todolist-list" data-show-completed={showCompleted}>
      {items.map(item => (
        <Todo item={item} key={item.id} toggleCompleted={toggleCompleted} />
      ))}
    </ul>
  );
};

export default TodoList;
