import React from 'react';

const TodoListStatus = ({ showHidden, hiddenCount }) => {
  const taskPluralized = hiddenCount === 1 ? 'task' : 'tasks';
  const shouldDisplay = hiddenCount > 0 && !showHidden;

  if (!shouldDisplay) return null;

  return (
    <div className="hidden-todos-count">
      {hiddenCount} completed {taskPluralized} hidden
    </div>
  );
};

export default TodoListStatus;
