import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
import "../styles/Subtask.css";

class Subtask extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  renderCheckbox = () => {
    if (this.props.subtask.isChecked === false) {
      return (
        <div
          type="checkbox"
          className="subtask-checkbox bounceIn"
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
      <li>
        {this.renderCheckbox()}
        <input
          className={`subtask-field ${this.props.subtask.isChecked ? "completed" : ""}`}
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
