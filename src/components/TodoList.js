import React from "react";
import { array, func } from 'prop-types';

import TodoContainer from "../containers/TodoContainer";

const TodoList = ({todos, onSpacebar}) => (
    <ul>
      {todos ? todos.map(todo => (
        <TodoContainer
          key={todo.id}
          todo={todo}
          onSpacebar={onSpacebar}
          editing={todo.editing}
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
