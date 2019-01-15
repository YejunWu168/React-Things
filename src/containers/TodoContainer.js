import React, {Component} from "react";
import {func, object, array} from 'prop-types'; 
import { saveTodo, toggleChecked, setTodoActive } from '../actions';
import { connect } from "react-redux";
import uuid from "uuid";

import Todo from '../components/Todo/Todo';
import onClickOutside from "react-onclickoutside";

class TodoContainer extends Component {
  state = {
    editing: true,
    // editText: this.props.todo.text,
    subtaskInput: "",
    subtasks: [],
    subtaskList: false,
    hasTags: false,
    tagInput: false,
    progress: 0,
    listHeight: 20,
    highlightClass: false,
    tagList: [...new Set(["Home", "Errand", "Important", "Office", ...this.props.usedTags])]
  };

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
    console.log(this.props.id);
  }

  // componentWillUnmount() {
  //   this.props.getProgressTodos();
  // }

  getlistHeight = () => {
    const subtaskCount = this.state.subtasks.length;

    // 20 is initial height of the task, 32 is the height of a subtask list element
    return 20 + subtaskCount * 32;
  };

  handleDoubleClick = () => {
    const todoTags = this.props.todo.tags;
    const tagListState = [...new Set(["Home", "Errand", "Important", "Office", ...this.props.usedTags])];
    const tagList = tagListState.filter(elem => !todoTags.includes(elem));

    this.setState({
      editing: true,
      isActive: true,
      listHeight: this.getlistHeight(),
      tagList
    });

    document.removeEventListener('keydown', this.props.onSpacebar);
  };

  handleEditChange = e => {
    this.setState({
      editText: e.target.value
    });
  };

  handleClickTodo = () => {
    this.props.setTodoActive(this.props.todo.id);
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.props.saveTodo(this.props.todo.id, this.state.editText);
      this.setState({
        editing: false,
        isActive: true,
        listHeight: 20
      });

      document.addEventListener("keydown", this.props.onSpacebar);
    }
  };

  // Methods for subtasks
  handleSubtaskChange = id => {
    const subtasks = this.state.subtasks;
    const index = subtasks.findIndex(x => x.id === id);

    return e => {
      subtasks[index].text = e.target.value;
      this.setState({
        subtasks
      });
    };
  };

  handleKeyDownSubtaskField = id => {
    return e => {
      if (e.key === "Enter") {
        const subtasks = this.state.subtasks;
        const index = subtasks.findIndex(x => x.id === id);
        subtasks.splice(index + 1, 0, {
          text: "",
          id: uuid(),
          isChecked: false
        });
        this.setState({
          subtasks,
          listHeight: this.getlistHeight()
        });
        this.getProgressSubtasks();
      }
    };
  };

  handleAddSubtaskList = () => {
    this.setState({
      subtaskList: !this.state.subtaskList,
      subtasks: [
        ...this.state.subtasks,
        {
          text: "",
          id: uuid(),
          isChecked: false
        }
      ]
    });
  };

  handleAddTags = () => {
    this.setState({
      hasTags: true
    });
  };

  handleSubtaskChecked = id => {
    const subtasks = this.state.subtasks;
    const index = subtasks.findIndex(x => x.id === id);
    subtasks[index].isChecked = !subtasks[index].isChecked;
    this.setState({
      subtasks
    });

    this.getProgressSubtasks();
  };

  getProgressSubtasks = () => {
    const subtasks = this.state.subtasks;
    const subtasksCount = subtasks.length;
    const isCheckedCount = subtasks.filter(obj => obj.isChecked === true).length;

    const progress = 100 / subtasksCount * isCheckedCount;

    this.setState({
      progress
    });
  };

  progressColor = () => {
    if (this.state.progress > 50) {
      return "#6CD173";
    }
  };

  handleClickOutside = () => {
    if (!this.state.editing) { return; }
    this.setState({
      editing: false,
      isActive: false,
      listHeight: 20
    });
    console.log('clicked!')
    this.props.saveTodo(this.props.todo.id, this.state.editText);
    document.addEventListener("keydown", this.props.onSpacebar);
  };

  handleAddToTagList = tag => {
    const tagListState = this.state.tagList;
    tagListState.push(tag);

    const tagList = tagListState.filter(elem => elem !== tag);

    this.setState({
      tagList
    });
  };


  render() {
    const {
      todo,
      handleAddTag,
      handleAddToTagList,
      toggleChecked
    } = this.props

    const {
      highlightClass,
      subtaskList,
      subtasks,
      hasTags,
      editing,
      editText,
      tagList,
      progress
    } = this.state

    return (
      <Todo 
        todo={ todo }
        highlightClass={highlightClass}
        handleClickTodo={ this.handleClickTodo }
        subtaskList= { subtaskList }
        subtasks={subtasks}
        hasTags={ hasTags } 
        editing={ editing } 
        editText={ editText } 
        handleEditChange={this.handleEditChange} 
        handleKeyDown={ this.handleKeyDown }
        handleDoubleClick={this.handleDoubleClick}
        toggleChecked={toggleChecked}
        handleHighlightClass={this.handleHighlightClass}
        handleAddSubtaskList={this.handleAddSubtaskList}
        handleSubtaskChecked={this.handleSubtaskChecked}
        handleKeyDownSubtaskField={this.handleKeyDownSubtaskField}
        handleSubtaskChange={this.handleSubtaskChange}
        handleAddTag={handleAddTag}
        handleAddTags={this.handleAddTags}
        tagList={tagList}
        handleAddToTagList={this.handleAddToTagList}
        progress={progress}
        progressColor={this.progressColor}
      />
    );
  }
}


const mapDispatchToProps = dispatch => ({
  saveTodo: (id, text) => dispatch(saveTodo(id,text)),
  setTodoActive: id => dispatch(setTodoActive(id)),
  toggleChecked: id => dispatch(toggleChecked(id))
});

export default connect(null, mapDispatchToProps)(onClickOutside(TodoContainer));