import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import getDummyData from './dummyData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...getDummyData()]
    };
  }

  toggleCompleted = itemId => {
    const items = [...this.state.items];
  };

  removeItem = itemId => {
    console.log(itemId);
  };

  addItem = item => {
    console.log(item);
  };

  render() {
    return (
      <div>
        <h1>Joel's Super Neat-o Todo App</h1>
        <TodoList items={this.state.items} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
