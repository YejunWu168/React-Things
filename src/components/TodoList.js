import React from "react";
import Todo from "./Todo";
import "../styles/TodoList.css";

const TodoList = props => (
  <div>
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
  </div>
);

export default TodoList;
