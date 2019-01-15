import React, { Component } from 'react';
import Header from '../components/Header';
import TodoListContainer from './TodoListContainer';
import ActionBar from '../components/ActionBar';

import { addTodo, setAllTodosInactve } from '../actions';
import { connect } from "react-redux";

import { string, func, array } from 'prop-types';

class DashboardContainer extends Component {
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

  removeActiveStatesTodo = e => {
    if (e.target !== e.currentTarget) return;
		this.props.setAllTodosInactve();
  }

  handleAddTodo = (e) => {
    this.props.addTodo();

    document.removeEventListener("keydown", this.onSpacebar);
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

  render() {
    return (
        <main className="wrapper" onClick={this.removeActiveStatesTodo}>
          <Header progress={this.state.progress} title={this.props.title} progressColor={this.progressColor} />
          <section>
            {this.renderFilterTags()}
            <TodoListContainer onSpacebar={this.onSpacebar}/>
          </section>
          <ActionBar 
            handleAddTodo={this.handleAddTodo}
            buttonDisabled={this.state.buttonDisabled}
            handleRemoveSelected={this.handleRemoveSelected}
          />
        </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  setAllTodosInactve: () => dispatch(setAllTodosInactve())
});


export default connect(null, mapDispatchToProps)(DashboardContainer);