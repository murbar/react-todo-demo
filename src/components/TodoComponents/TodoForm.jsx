import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ submitForm }) => {
  const [inputValue, setInputValue] = useState('');

  const changeInput = e => {
    setInputValue(e.target.value);
  };

  const addItem = e => {
    e.preventDefault();
    if (!inputValue) return;
    submitForm(inputValue);
    setInputValue('');
  };

  return (
    <div className="todolist-form">
      <form onSubmit={addItem}>
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
