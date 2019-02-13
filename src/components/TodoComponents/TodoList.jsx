import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = ({ items, toggleCompleted }) => {
  return (
    <ul className="todolist-list">
      {items.map(item => (
        <Todo item={item} key={item.id} toggleCompleted={toggleCompleted} />
      ))}
    </ul>
  );
};

export default TodoList;
