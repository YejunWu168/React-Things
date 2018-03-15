import React from "react";
import "../styles/TodoForm.css";

class TodoForm extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }
  render() {
    return (
      <form onSubmit={this.props.handleAddTodo}>
        <input
          className="todo-input"
          onChange={this.props.handleChange}
          ref={input => {
            this.textInput = input;
          }}
          placeholder="New To-Do"
          value={this.props.inputValue}
          type="text"
        />
      </form>
    );
  }
}

export default TodoForm;
