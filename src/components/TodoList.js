import React from "react";
import Todo from "./Todo";

const TodoList = props => (
  <React.Fragment>
    <ul>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleChecked={props.handleChecked}
          handleSaveEdit={props.handleSaveEdit}
          getProgressTodos={props.getProgressTodos}
          handleAddTag={props.handleAddTag}
          tagList={props.tagList}
          usedTags={props.usedTags}
        />
      ))}
    </ul>
    <footer className="actionbar">
        <button className="actionbar__btn">+</button>
    </footer>
  </React.Fragment>
);

export default TodoList;
