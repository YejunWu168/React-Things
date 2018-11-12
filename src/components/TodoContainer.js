import React, {Component} from "react";
import { string, array } from 'prop-types';

import { addTodo } from '../actions';
import store from '../store';
import { connect } from "react-redux";

import Header from "./Header";
import TodoList from "./TodoList";
import ActionBar from './ActionBar';
 
class TodoContainer extends Component {
  state = {
    todoInput: "",
    todos: this.props.todos,
    buttonDisabled: true,
    progress: 0,
    usedTags: [],
    selectedTag: ""
  };

  static propTypes = {
    title: string,
    todos: array
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onSpacebar);
  }

  handleChange = e => {
    this.setState({
      todoInput: e.target.value
    });
  };

  onSpacebar = e => {
    if (e.keyCode === 32) {
      this.handleAddTodo();
    }
  }

  handleAddTodo = (e) => {
    store.dispatch(addTodo());

    document.removeEventListener("keydown", this.onSpacebar);
  };

  // handleRemoveTodo = todoToRemove => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoToRemove)
  //   }));
  // };

  handleChecked = id => {
    const todos = this.state.todos;
    const index = todos.findIndex(x => x.id === id);
    todos[index].isChecked = !todos[index].isChecked;

    this.setState({
      todos
    }, ()=> {
      const isCheckedCount = todos.filter(obj => obj.isChecked === true).length;
      if (isCheckedCount === 0) {
        this.setState({
          buttonDisabled: true
        });
      } else {
        this.setState({
          buttonDisabled: false
        });
      }
    });


    this.getProgressTodos();
  };

  handleRemoveSelected = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.isChecked !== true),
      buttonDisabled: true
    }));
  };

  handleAddTag = (id, tag) => {
    const todosState = this.state.todos;

    const index = todosState.findIndex(x => x.id === id);
    const todoTags = todosState[index].tags;
    todoTags.push(tag);

    const filteredTodoTags = todoTags.filter((elem, index, arr) => index === arr.indexOf(elem));

    todoTags.splice(0, todoTags.length, ...filteredTodoTags);
    const todos = this.state.todos;

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
    const todos = this.state.todos;
    const todosCount = todos.length;
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
        <div className="wrapper">
          <Header progress={this.state.progress} title={this.props.title} progressColor={this.progressColor} />
          <main>
            {this.renderFilterTags()}
            <TodoList
              todos={this.props.todos}
              handleChecked={this.handleChecked}
              handleSaveEdit={this.handleSaveEdit}
              onSpacebar={this.onSpacebar}
              getProgressTodos={this.getProgressTodos}
              changeBackground={this.changeBackground}
              handleAddTag={this.handleAddTag}
              usedTags={this.state.usedTags}
              selectedTag={this.state.selectedTag}
            />
          </main>
          <ActionBar 
            handleAddTodo={this.handleAddTodo}
            buttonDisabled={this.state.buttonDisabled}
            handleRemoveSelected={this.handleRemoveSelected}
          />
        </div>
    );
  }
} 

// map store state to props
const mapStateToProps = state => {
  return { todos: state };
};

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps)(TodoContainer);