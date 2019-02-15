import React from 'react';

const TodoListStatus = ({ showHidden, completedCount }) => {
  const taskPluralized = completedCount === 1 ? 'task' : 'tasks';
  const shouldDisplay = completedCount > 0 && !showHidden;

  if (!shouldDisplay) return null;

  return (
    <div className="hidden-todos-count">
      {completedCount} completed {taskPluralized} hidden
    </div>
  );
};

export default TodoListStatus;
