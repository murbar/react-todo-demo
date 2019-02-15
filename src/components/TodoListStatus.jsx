import React from 'react';

const TodoListStatus = ({ showHidden, hiddenCount }) => {
  const taskPluralized = hiddenCount === 1 ? 'task' : 'tasks';
  const shouldDisplayThis = hiddenCount > 0 && !showHidden;

  if (!shouldDisplayThis) return null;

  return (
    <div className="hidden-todos-count">
      {hiddenCount} completed {taskPluralized} hidden
    </div>
  );
};

export default TodoListStatus;
