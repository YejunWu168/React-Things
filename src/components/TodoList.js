import React from "react";
import { array, func} from 'prop-types';

import Todo from "./Todo/Todo";

const TodoList = props => (
    <ul>
      {props.todos ? props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleChecked={props.handleChecked}
          onSpacebar={props.onSpacebar}
          getProgressTodos={props.getProgressTodos}
          handleAddTag={props.handleAddTag}
          usedTags={props.usedTags}
        />
      )) : null}
    </ul>
);

TodoList.propTypes = {
  todos: array,
  handleChecked: func.isRequired,
  handleAddTag: func.isRequired,
  onSpacebar: func.isRequired,
  getProgressTodos: func.isRequired,
  usedTags: array
}

export default TodoList;
