import React, {Component} from "react";
import {func, object, array} from 'prop-types'; 
import { editTodo, toggleChecked } from '../../actions';
import { connect } from "react-redux";

import { Line } from "rc-progress";
import uuid from "uuid";

import EditTodo from './EditTodo';
import onClickOutside from "react-onclickoutside";

class Todo extends Component {
  state = {
    editing: true,
    editText: this.props.todo.text,
    subtaskInput: "",
    subtasks: [],
    subtaskList: false,
    hasTags: false,
    tagInput: false,
    progress: 0,
    isActive: false,
    listHeight: 20,
    highlightClass: false,
    tagList: [...new Set(["Home", "Errand", "Important", "Office", ...this.props.usedTags])]
  };

  static propTypes = {
    todo: object,
    editTodo: func,
    toggleChecked: func,
    onSpacebar: func,
    getProgressTodos: func,
    handleAddTag: func,
    usedTags: array
  }

  // componentDidMount() {
  //   this.props.getProgressTodos();
  // }

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
    this.setState({
      isActive: true
    });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.props.editTodo(this.props.todo.id, this.state.editText);
      this.setState({
        editing: false,
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
    this.setState({
      editing: false,
      isActive: this.state.editing,
      listHeight: 20
    });

    this.props.editTodo(this.props.todo.id, this.state.editText);
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

  handleHighlightClass = () => {
    this.setState({
      highlightClass: true
    });

    setTimeout(() => {
      this.setState(prevState => ({
        highlightClass: !prevState.highlightClass
      }));
    }, 300);
  };

  render() {
    return (
      <li
        className={`todo ${this.state.isActive ? "highlight" : ""} ${this.state.editing ? "expanded-todo" : ""} ${
          this.state.highlightClass ? "checkbox-clicked" : ""
        }`}
        ref={element => (this.liRef = element)}
        style={{ minHeight: this.state.listHeight + "px" }}
        onDoubleClick={this.handleDoubleClick}
      >
        <input
          className="toggle"
          type="checkbox"
          onClick={() => {
            this.props.toggleChecked(this.props.todo.id);
            if (!this.state.editing && !this.state.isActive) {
              this.handleHighlightClass();
            }
          }}
        />
        <EditTodo
          handleClickTodo={ this.handleClickTodo }
          subtaskList= { this.state.subtaskList }
          hasTags={ this.state.hasTags }
          editing={ this.state.editing } 
          editText={ this.state.editText } 
          handleEditChange={this.handleEditChange} 
          todo={this.props.todo}
          handleKeyDown={ this.handleKeyDown }
          subtasks={this.state.subtasks}
          handleAddSubtaskList={this.handleAddSubtaskList}
          handleSubtaskChecked={this.handleSubtaskChecked}
          handleKeyDownSubtaskField={this.handleKeyDownSubtaskField}
          handleSubtaskChange={this.handleSubtaskChange}
          tags={this.props.todo.tags} 
          handleAddTag={this.props.handleAddTag}
          todoId={this.props.todo.id}
          handleAddTags={this.handleAddTags}
          tagList={this.state.tagList}
          handleAddToTagList={this.handleAddToTagList}
        />

        {this.state.subtasks.length > 0 && (
          <div className="rc-line-container">
            <Line percent={this.state.progress} strokeColor={this.progressColor()} strokeWidth="10" trailWidth="10" />
          </div>
        )}
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editTodo: (id, text) => dispatch(editTodo(id,text)),
  toggleChecked: id => dispatch(toggleChecked(id))
});

export default connect(null, mapDispatchToProps)(onClickOutside(Todo));
