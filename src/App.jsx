import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import getInitialData from './initialData';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appLocalStorageKey = 'todoListAppTasks';
    this.state = this.initLocalStorage();
  }

  createItem(task) {
    return {
      task,
      id: Date.now(),
      completed: false
    };
  }

  initLocalStorage() {
    if (!localStorage[this.appLocalStorageKey]) {
      localStorage.setItem(this.appLocalStorageKey, JSON.stringify(getInitialData()));
    }

    return JSON.parse(localStorage.getItem(this.appLocalStorageKey));
  }

  persistLocalStorage() {
    localStorage.setItem(this.appLocalStorageKey, JSON.stringify(this.state));
  }

  componentDidUpdate() {
    this.persistLocalStorage();
  }

  toggleItemCompleted = itemId => {
    const items = [...this.state.items];
    const i = items.findIndex(i => i.id === itemId);
    items[i].completed = !items[i].completed;
    this.setState({ items });
  };

  removeItem = (e, itemId) => {
    e.stopPropagation();
    const items = [...this.state.items];
    const newItems = items.filter(i => i.id !== itemId);
    this.setState({ items: newItems });
  };

  addItem = newItem => {
    const items = [...this.state.items];
    items.unshift(this.createItem(newItem));
    this.setState({
      items
    });
  };

  // clearCompleted = () => {
  //   const items = [...this.state.items];
  //   const newItems = items.filter(i => i.completed === false);
  //   this.setState({ items: newItems });
  // };

  toggleShowCompletedTasks = () => {
    let show = this.state.showCompleted;
    this.setState({ showCompleted: !show });
  };

  render() {
    const hiddenCount = this.state.items.filter(i => i.completed === true).length;
    const taskPlural = hiddenCount === 1 ? 'task' : 'tasks';
    const showHiddenTodosStatus = hiddenCount > 0 && !this.state.showCompleted;
    const showHideButtonToolTip = this.state.showCompleted ? 'Hide' : 'Show';

    return (
      <div className="todolist-container">
        <button
          className="control-button show-hide"
          type="button"
          title={showHideButtonToolTip + ' completed tasks'}
          onClick={this.toggleShowCompletedTasks}
        >
          <img
            src={this.state.showCompleted ? '/icons/eye-off.svg' : '/icons/eye.svg'}
            alt="Show/Hide icon"
          />
        </button>
        <h1>To-do List</h1>
        <TodoForm submitForm={this.addItem} />
        <TodoList
          items={this.state.items}
          toggleItemCompleted={this.toggleItemCompleted}
          showCompleted={this.state.showCompleted}
          removeItem={this.removeItem}
        />
        {showHiddenTodosStatus && (
          <div className="hidden-todos-count">
            {hiddenCount} completed {taskPlural} hidden
          </div>
        )}
      </div>
    );
  }
}

export default App;
