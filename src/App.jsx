import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoListStatus from './components/TodoListStatus';
import ToggleHiddenButton from './components/ToggleHiddenButton';
import getInitialData from './initialData';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appLocalStorageKey = 'todoListAppTasks';
    this.state = this.initLocalStorage();
  }

  createItemObject(task) {
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
    this.setState({
      items: [this.createItemObject(newItem), ...this.state.items]
    });
  };

  toggleShowCompletedTasks = () => {
    let show = this.state.showCompleted;
    this.setState({ showCompleted: !show });
  };

  render() {
    const hiddenCount = this.state.items.filter(i => i.completed === true).length;

    return (
      <div className="todolist-container">
        <h1>To-do List</h1>
        <ToggleHiddenButton
          showCompleted={this.state.showCompleted}
          onToggle={this.toggleShowCompletedTasks}
        />
        <TodoForm submitForm={this.addItem} />
        <TodoList
          items={this.state.items}
          toggleItemCompleted={this.toggleItemCompleted}
          showCompleted={this.state.showCompleted}
          removeItem={this.removeItem}
        />
        <TodoListStatus showHidden={this.state.showCompleted} hiddenCount={hiddenCount} />
      </div>
    );
  }
}

export default App;
