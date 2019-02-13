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

    this.props.addSubtask(this.state.value)
    this.props.addSubtask('')
  }

  handleBlur = () => {
    console.log('blurred')
    // this.props.addSubtask(this.state.value)
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
          onBlur={this.handleBlur}
          defaultValue={this.props.subtask ? this.props.subtask.value : ""}
          // onFocus={this.props.handleSubtaskChange}
        />
      </li>
    );
  }
}

export default Subtask;
