import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todolist-container">
      {props.items.map(item => (
        <Todo item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
