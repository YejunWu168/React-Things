import React from "react";
import { array, func} from 'prop-types';

import Todo from "./Todo";

const TodoList = props => (
    <ul>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleChecked={props.handleChecked}
          handleSaveEdit={props.handleSaveEdit}
          onSpacebar={props.onSpacebar}
          getProgressTodos={props.getProgressTodos}
          handleAddTag={props.handleAddTag}
          usedTags={props.usedTags}
        />
      ))}
    </ul>
);

TodoList.propTypes = {
  todos: array,
  handleChecked: func,
  handleSaveEdit: func,
  handleAddTag: func,
  onSpacebar: func,
  getProgressTodos: func,
  usedTags: array
}

export default TodoList;
