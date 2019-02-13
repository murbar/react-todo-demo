import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
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
