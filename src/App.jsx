import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import getDummyData from './dummyData';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appLocalStorageKey = 'todoListAppTasks';
    const initialData = this.initLocalStorage();
    this.state = {
      items: [...initialData],
      newItemInputValue: ''
    };
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
      localStorage.setItem(this.appLocalStorageKey, JSON.stringify(getDummyData()));
    }

    return JSON.parse(localStorage.getItem(this.appLocalStorageKey));
  }

  persistLocalStorage() {
    localStorage.setItem(this.appLocalStorageKey, JSON.stringify(this.state.items));
  }

  componentDidUpdate() {
    this.persistLocalStorage();
  }

  toggleCompleted = itemId => {
    const items = [...this.state.items];
    const i = items.findIndex(i => i.id === itemId);
    items[i].completed = !items[i].completed;
    this.setState({ items });
  };

  removeItem = itemId => {
    const items = [...this.state.items];
    items.filter(i => i.id !== itemId);
    this.setState({ items });
  };

  addFormInputChange = e => {
    this.setState({ newItemInputValue: e.target.value });
  };

  addItem = e => {
    e.preventDefault();

    const newItem = this.state.newItemInputValue;

    if (!newItem) return;

    const items = [...this.state.items];
    items.unshift(this.createItem(newItem));
    this.setState({
      items,
      newItemInputValue: ''
    });
  };

  clearCompleted = () => {
    const items = [...this.state.items];
    const newItems = items.filter(i => i.completed === false);
    this.setState({ items: newItems });
  };

  render() {
    return (
      <div className="todolist-container">
        <h1>To-do List</h1>
        <TodoList items={this.state.items} toggleCompleted={this.toggleCompleted} />
        <TodoForm
          inputValue={this.state.newItemInputValue}
          changeInput={this.addFormInputChange}
          submitForm={this.addItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
