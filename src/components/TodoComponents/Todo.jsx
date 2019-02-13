import React from 'react';

const Todo = ({ item }) => {
  return <div className="todolist-todo">{item.task}</div>;
};

export default Todo;
