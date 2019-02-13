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
    editing: false,
    active: false
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
    // this.props.getProgressTodos(); 
    console.log(this.props);
  }

  getMinHeight = () => {
    //TODO: Use different method for calculating todo height
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

  handleCheck = () => {
    this.props.toggleChecked(this.props.todo.id);
  }

  expand = () => {
    this.setState({
      editing: true,
      setActive: true
    })
  }

  handleClick = () => {
    this.props.setTodoActive(this.props.todo.id)
    this.setState({
      active: true
    })
  }

  handleKeyDown = e => {
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
      editing: false,
      active: false
    })
  };

  render() {
    const {todo, addSubtask, saveSubtask, addTag} = this.props;
    const {
      editing,
      value,
      active
    } = this.state;

    return (
      <li className={`todo ${active ? "highlight" : ""} ${editing ? "expanded-todo" : ""} ${
          todo.completed ? "checkbox-clicked" : ""}`}
          // style={{ minHeight: `${this.getMinHeight()}px` }}
          onClick={this.handleClick}
          onDoubleClick={this.expand}
      >
      <div className="main-todo">
        <input
          className="toggle"
          type="checkbox"
          onChange={this.handleCheck}
        />
        <Label 
          completed={todo.completed}
          value={todo.value}
          editing={editing}
          handleChange={this.handleChange}
          onEnter={this.handleKeyDown}
        />
      </div>
      { editing &&
        <EditTodo>
          {
            todo.subtasks.length > 0 && 
            <SubtaskList 
                subtasks={todo.subtasks}
                todoId={todo.id}
                addSubtask={addSubtask}
                saveSubtask={saveSubtask}
              />
          } 
          {/* { todo.tags.length > 0 && 
            <ExpandedTags
              handleAddTag={this.handleAddTag}
              handleAddTags={this.handleAddTags}
              handleAddToTagList={this.handleAddToTagList}
              tags={todo.tags}
              tagList={this.tagList}
            />
          */}
          <InputButtons>
          {
            todo.subtasks.length === 0 && 
            <InputButton todoId={todo.id} buttonType="subtasks" icon={faListUl} addItem={addSubtask} />
          }
            <InputButton todoId={todo.id} buttonType="tags" icon={faTag} addItem={addTag}>
            </InputButton>  
          </InputButtons>
        </EditTodo>
      }
      {/* {todo.subtasks.length > 0 && 
        <div className="rc-line-container">
          <Line percent={this.props.progress} strokeColor={this.props.progressColor()} strokeWidth="10" trailWidth="10" />
        </div>
      } */}
      </li>
    );
  }
}

export default onClickOutside(Todo);