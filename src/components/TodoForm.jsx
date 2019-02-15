import React from 'react';
import './TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  changeInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  addItem = e => {
    e.preventDefault();

    if (!this.state.inputValue) return;

    this.props.submitForm(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <div className="todolist-form">
        <form onSubmit={this.addItem}>
          <div className="new-todo-input">
            <input
              type="text"
              placeholder="New to-do..."
              value={this.state.inputValue}
              onChange={this.changeInput}
            />
            {this.state.inputValue && (
              <button type="submit" title="Add New Task" className="control-button">
                <img src="/icons/plus-circle.svg" alt="Add icon" />
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
