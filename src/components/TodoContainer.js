import React, {Component} from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import uuid from "uuid";

class TodoContainer extends Component {
  state = {
    todoInput: "",
    todos: [],
    savedTodos: [],
    showButton: false,
    progress: 0,
    usedTags: [],
    selectedTag: ""
  };

  handleChange = e => {
    this.setState({
      todoInput: e.target.value
    });
  };

  handleAddTodo = e => {
    e.preventDefault();
    if (this.state.todoInput.length > 0) {
      this.setState({
        todoInput: "",
        todos: [
          ...this.state.todos,
          {
            text: this.state.todoInput,
            id: uuid(),
            isChecked: false,
            isActive: false,
            tags: []
          }
        ]
      });

      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    } else {
      alert("Please fill in a To-Do");
    }
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
      todos,
      showButton: true
    });

    this.getProgressTodos();
  };

  handleSaveEdit = (id, val) => {
    const todos = this.state.todos;
    const index = todos.findIndex(x => x.id === id);
    todos[index].text = val;
    this.setState({
      todos
    });
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

    console.log(usedTags);
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

    const progress = 100 / todosCount * isCheckedCount;

    this.setState(prevState => ({
      progress: (prevState.progress = progress)
    }));
  };

  handleClickFilterTag = selectedTag => {
    // const todosState = this.state.todos;
    // if (this.state.savedTodos.length === 0) {
    //   this.setState({
    //     savedTodos: todosState
    //   });
    // }

    // const savedTodos = this.state.savedTodos;
    // const todos = todosState.filter(todo => todo.tags.includes(selectedTag));

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
            <TodoForm
              handleChange={this.handleChange}
              handleAddTodo={this.handleAddTodo}
              inputValue={this.state.todoInput}
            />
            {this.renderFilterTags()}
            <TodoList
              showButton={this.state.showButton}
              todos={this.state.todos}
              handleChecked={this.handleChecked}
              handleSaveEdit={this.handleSaveEdit}
              getProgressTodos={this.getProgressTodos}
              changeBackground={this.changeBackground}
              handleAddTag={this.handleAddTag}
              tagList={this.state.tagList}
              usedTags={this.state.usedTags}
              selectedTag={this.state.selectedTag}
            />
          </main>
        </div>
    );
  }
} 

export default TodoContainer;