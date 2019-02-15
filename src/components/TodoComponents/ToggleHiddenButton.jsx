import React from 'react';

const ToggleHiddenButton = ({ showCompleted, onToggle }) => {
  const toolTip = `${showCompleted ? 'Hide' : 'Show'} completed tasks`;
  const imgSrc = showCompleted ? '/icons/eye-off.svg' : '/icons/eye.svg';
  return (
    <button className="control-button show-hide" type="button" title={toolTip} onClick={onToggle}>
      <img src={imgSrc} alt="Show/Hide icon" />
    </button>
  );
};

export default ToggleHiddenButton;
