import React from 'react';

const TodoForm = ({ formSubmit }) => {
  return (
    <div className="todolist-form">
      <form onSubmit={formSubmit}>
        <input type="text" name="newTodo" />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
