import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoListStatus from './components/TodoListStatus';
import ToggleHiddenButton from './components/ToggleHiddenButton';
import getInitialData from './initialData';
import './App.css';

const App = props => {
  const appLocalStorageKey = 'todoListAppTasks';
  const initLocalStorage = () => {
    if (!localStorage[appLocalStorageKey]) {
      const serializedState = JSON.stringify(getInitialData());
      localStorage.setItem(appLocalStorageKey, serializedState);
    }

    const deserializedState = JSON.parse(localStorage.getItem(appLocalStorageKey));
    return deserializedState;
  };

  const initialState = initLocalStorage();
  const [items, setItems] = useState(initialState.items);
  const [showCompleted, setShowCompleted] = useState(initialState.showCompleted);

  useEffect(() => {
    persistLocalStorage();
  });

  const createItemObject = task => {
    return {
      task,
      id: Date.now(),
      completed: false
    };
  };

  const persistLocalStorage = () => {
    const serializedState = JSON.stringify({
      items,
      showCompleted
    });
    localStorage.setItem(appLocalStorageKey, serializedState);
  };

  const addItem = newItem => {
    setItems([createItemObject(newItem), ...items]);
  };

  const removeItem = itemId => {
    const updatedItems = items.filter(i => i.id !== itemId);
    setItems(updatedItems);
  };

  const toggleItemCompleted = itemId => {
    const updatedItems = [...items];
    const i = updatedItems.findIndex(i => i.id === itemId);
    updatedItems[i].completed = !updatedItems[i].completed;
    setItems(updatedItems);
  };

  const toggleShowCompletedTasks = () => {
    setShowCompleted(!showCompleted);
  };

  const completedCount = items.filter(i => i.completed === true).length;

  return (
    <div className="todolist-container">
      <h1>To-do List</h1>
      <ToggleHiddenButton
        showCompleted={showCompleted}
        completedCount={completedCount}
        onToggle={toggleShowCompletedTasks}
      />
      <TodoForm onSubmitForm={addItem} />
      <TodoList
        items={items}
        showCompleted={showCompleted}
        onToggleItemCompleted={toggleItemCompleted}
        onRemoveItem={removeItem}
      />
      <TodoListStatus showHidden={showCompleted} completedCount={completedCount} />
    </div>
  );
};

export default App;
