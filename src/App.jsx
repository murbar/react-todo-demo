import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Joel's Super Neat-o Todo App</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
