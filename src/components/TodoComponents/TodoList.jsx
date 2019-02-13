import React from 'react';
import Todo from './Todo';

const TodoList = ({ items, toggleCompleted }) => {
  return (
    <div className="todolist-container">
      {items.map(item => (
        <Todo item={item} key={item.id} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  );
};

export default TodoList;
