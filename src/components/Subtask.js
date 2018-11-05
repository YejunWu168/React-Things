import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";

class Subtask extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  renderCheckbox = () => {
    if (this.props.subtask.isChecked === false) {
      return (
        <div
          type="checkbox"
          className="subtasks__checkbox bounceIn"
          onClick={() => this.props.handleSubtaskChecked(this.props.subtask.id)}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          className="bounceIn"
          icon={faCheck}
          onClick={() => this.props.handleSubtaskChecked(this.props.subtask.id)}
        />
      );
    }
  };

  render() {
    return (
      <li className="subtasks__item">
        {this.renderCheckbox()}
        <input
          className={`subtasks__field ${this.props.subtask.isChecked ? "completed" : ""}`}
          ref={input => {
            this.textInput = input;
          }}
          type="text"
          onChange={this.props.handleSubtaskChange(this.props.subtask.id)}
          onKeyDown={this.props.handleKeyDownSubtaskField(this.props.subtask.id)}
          defaultValue={this.props.subtask ? this.props.subtask.text : ""}
          onFocus={this.props.handleSubtaskChange}
        />
      </li>
    );
  }
}

export default Subtask;
