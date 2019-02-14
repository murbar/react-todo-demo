import React from 'react';
import './TodoForm.css';

const TodoForm = ({ inputValue, changeInput, submitForm, showCompleted, toggleShowCompleted }) => {
  return (
    <div className="todolist-form">
      <form onSubmit={submitForm}>
        <div className="new-todo-input">
          <input type="text" placeholder="New to-do..." value={inputValue} onChange={changeInput} />
          <button type="submit" title="Add New Task">
            +
          </button>
        </div>
        <button type="button" title="Show/Hide Completed Tasks" onClick={toggleShowCompleted}>
          {showCompleted ? 'Hide' : 'Show'} Completed
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
