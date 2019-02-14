import React from 'react';
import './TodoForm.css';

const TodoForm = ({ inputValue, changeInput, submitForm, clearCompleted }) => {
  return (
    <div className="todolist-form">
      <form onSubmit={submitForm}>
        <input type="text" placeholder="New todo" value={inputValue} onChange={changeInput} />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
