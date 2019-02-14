import React from 'react';
import './TodoForm.css';

const TodoForm = ({ inputValue, changeInput, submitForm }) => {
  return (
    <div className="todolist-form">
      <form onSubmit={submitForm}>
        <div className="new-todo-input">
          <input type="text" placeholder="New to-do..." value={inputValue} onChange={changeInput} />
          {inputValue && (
            <button type="submit" title="Add New Task" className="control-button">
              <img src="/icons/plus-circle.svg" alt="Add icon" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
