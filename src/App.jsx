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

  render() {
    return (
      <div>
        <h1>Joel's Super Neat-o Todo App</h1>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
