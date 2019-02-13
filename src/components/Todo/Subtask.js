import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
import { constants } from '../../utils/constants'

class Subtask extends React.Component {
  state = {
    value: ''
  }

  componentDidMount() {
    this.textInput.focus();
  }

  handleChange = e => {
    this.setState({value: e.target.value })
  }

  handleKeydown = e => {
    if (e.keyCode !== constants.ENTER_KEY){
      return
    }

    this.props.saveSubtask(this.props.subtask.id, this.state.value)
    this.props.addSubtask('')
  }

  renderCheckbox = () => {
    if (this.props.subtask.completed === false) {
      return (
        <div
          type="checkbox"
          className="subtasks__checkbox bounceIn"
          // onClick={() => this.props.handleSubtaskChecked(this.props.subtask.id)}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          className="bounceIn"
          icon={faCheck}
          // onClick={() => this.props.handleSubtaskChecked(this.props.subtask.id)}
        />
      );
    }
  };

  render() {
    return (
      <li className="subtasks__item">
        {this.renderCheckbox()}
        <input
          className={`subtasks__field ${this.props.subtask.completed ? "completed" : ""}`}
          ref={input => {
            this.textInput = input;
          }}
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeydown}
          defaultValue={this.props.subtask ? this.props.subtask.value : ""}
          onFocus={this.handleChange}
        />
      </li>
    );
  }
}

export default Subtask;
