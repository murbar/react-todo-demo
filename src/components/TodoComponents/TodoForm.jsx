import React from 'react';
import './Todo.css';

const TodoForm = ({ inputValue, changeInput, submitForm }) => {
  return (
    <div className="todolist-form">
      <form onSubmit={submitForm}>
        <input type="text" placeholder="New todo" value={inputValue} onChange={changeInput} />
        <button type="submit">Add Todo</button>
        <button type="button">Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
