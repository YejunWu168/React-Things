import React, { Component } from "react"
import { Line } from "rc-progress"
import {func, object, array} from 'prop-types' 
import onClickOutside from "react-onclickoutside"
import { constants } from '../../utils/constants'
import { faTag, faListUl } from '@fortawesome/fontawesome-free-solid'

import EditTodo from './EditTodo'
import Label from './Label'
import SubtaskList from './SubtaskList'
import ExpandedTags from './ExpandedTags'
import InputButtons from '../InputButtons/InputButtons'
import InputButton from '../InputButtons/InputButton'

class Todo extends Component {

  state = {
    value: '',
    editing: true
  }

  static propTypes = {
    todo: object,
    saveTodo: func,
    toggleChecked: func,
    onSpacebar: func,
    getProgressTodos: func,
    handleAddTag: func,
    usedTags: array
  }

  componentDidMount() {
    this.props.getProgressTodos();
  }

  getMinHeight = () => {
    if (this.state.editing) {
      const subtaskCount = this.props.todo.subtasks.length;

      // 20 is initial height of the task, 32 is the height of a subtask list element
      return 20 + subtaskCount * 32;
    }

    return 20;
  };

  handleChange = e => {
    this.setState({value: e.target.value})
  }

  expand = () => {
    this.setState({
      editing: true,
      setActive: true
    })
  }

  onClick = () => {
    this.props.setTodoActive()
  }

  onEnter = e => {
    if (e.keyCode !== constants.ENTER_KEY) {
      return;
    }

    this.props.updateTodo(this.state.value)
    this.setState({
      editing: false
    })
  }

  handleClickOutside = () => {
    this.props.updateTodo(this.state.value);
    this.setState({
      editing: false
    })
  };

  render() {
    const {
      todo,
      addSubtask,
      addTag
    } = this.props;

    const {
      editing,
      value
    } = this.state;

    return (
      <li className={`todo ${todo.isActive ? "highlight" : ""} ${editing ? "expanded-todo" : ""} ${
          todo.isChecked ? "checkbox-clicked" : ""}`}
        style={{ minHeight: `${this.getMinHeight()}px` }}
        onClick={this.onClick}
        onDoubleClick={this.expand}
      >
      <div className="main-todo">
        <input
          className="toggle"
          type="checkbox"
        />
        <Label 
          isChecked={todo.isChecked}
          value={value}
          tags={todo.tags}
          editing={editing}
          handleChange={this.handleChange}
          onEnter={this.onEnter}
        />
      </div>
      { editing &&
        <EditTodo>
          <SubtaskList 
            subtasks={todo.subtasks}
            handleSubtaskChecked={this.handleSubtaskChecked}
            handleKeyDownSubtaskField={this.handleKeyDownSubtaskField}
            handleSubtaskChange={this.handleSubtaskChange}
          />
          { todo.tags.length > 0 && 
            <ExpandedTags
              handleAddTag={this.handleAddTag}
              handleAddTags={this.handleAddTags}
              handleAddToTagList={this.handleAddToTagList}
              tags={todo.tags}
              tagList={this.tagList}
            />
          }
          <InputButtons>
            <InputButton buttonType={todo.subtasks} icon={faListUl} onClick={addSubtask} />
            <InputButton buttonType={todo.tags} icon={faTag} onClick={addTag}>
            </InputButton>  
          </InputButtons>
        </EditTodo>
      }
        {todo.subtasks.length > 0 && 
          <div className="rc-line-container">
            <Line percent={this.props.progress} strokeColor={this.props.progressColor()} strokeWidth="10" trailWidth="10" />
          </div>
        }
      </li>
    );
  }
}

export default onClickOutside(Todo);