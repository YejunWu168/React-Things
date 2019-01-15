import React, {Component} from "react";
import TodoList from "../components/TodoList";

import { addTodo } from '../actions';
import { connect } from "react-redux";

import { string, func, array } from 'prop-types';

class TodoListContainer extends Component {
  state = {
    todoInput: "",
    buttonDisabled: true,
    progress: 0,
    usedTags: [],
    selectedTag: ""
  };

  static propTypes = {
    title: string,
    addTodo: func,
    todos: array
  }

  handleChange = e => {
    this.setState({
      todoInput: e.target.value
    });
  };


  // handleRemoveTodo = todoToRemove => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoToRemove)
  //   }));
  // };

  handleChecked = id => {

    // this.setState({
    //   todos
    // }, ()=> {
    //   const isCheckedCount = todos.filter(obj => obj.isChecked === true).length;
    //   if (isCheckedCount === 0) {
    //     this.setState({
    //       buttonDisabled: true
    //     });
    //   } else {
    //     this.setState({
    //       buttonDisabled: false
    //     });
    //   }
    // });


    this.getProgressTodos();
  };

  handleRemoveSelected = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.isChecked !== true),
      buttonDisabled: true
    }));
  };

  handleAddTag = (id, tag) => {
    const todosState = this.props.todos;

    const index = todosState.findIndex(x => x.id === id);
    const todoTags = todosState[index].tags;
    todoTags.push(tag);

    const filteredTodoTags = todoTags.filter((elem, index, arr) => index === arr.indexOf(elem));

    todoTags.splice(0, todoTags.length, ...filteredTodoTags);
    const todos = this.props.todos;

    const usedTags = todos
      .map(todo => todo.tags)
      .reduce((acc, val) => acc.concat(val))
      .filter((elem, index, arr) => index === arr.indexOf(elem));

    this.setState({
      todos,
      usedTags
    });
  };

  progressColor = () => {
    if (this.state.progress > 50) {
      return "#6CD173";
    }
  };

  getProgressTodos = () => {
    const todos = this.props.todos;
    const todosCount = this.props.todos.length;
    const isCheckedCount = todos.filter(obj => obj.isChecked === true).length;

    const progress = (100 / todosCount) * isCheckedCount;

    this.setState(prevState => ({
      progress: (prevState.progress = progress)
    }));
  };
 
  handleClickFilterTag = selectedTag => {
    this.setState({
      selectedTag
    });
  };

  handleClickFilterAllTag = () => {
    this.setState({
      selectedTag: ""
    });
  };

  renderFilterTags = () => {
    if (this.state.usedTags.length > 0) {
      return (
        <div>
          <span
            className={`filter-tag ${!this.state.selectedTag ? "filter-tag--all" : ""}`}
            onClick={() => {
              this.handleClickFilterAllTag();
            }}
          >
            All
          </span>
          {this.state.usedTags.map(tag => (
            <span
              key={tag}
              className={`filter-tag ${this.state.selectedTag === tag ? "filter-tag--blue" : ""}`}
              onClick={() => this.handleClickFilterTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      );
    }
  };
  
  render () {
    return (
      <TodoList
        todos={this.props.todos}
        handleChecked={this.handleChecked}
        handleSaveEdit={this.handleSaveEdit}
        getProgressTodos={this.getProgressTodos}
        changeBackground={this.changeBackground}
        handleAddTag={this.handleAddTag}
        usedTags={this.state.usedTags}
        selectedTag={this.state.selectedTag}
        onSpacebar={this.props.onSpacebar}
      />   
    );
  }
} 

// map store state to props
const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);