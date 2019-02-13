import React from "react";
import { array, func } from 'prop-types';

import Todo from "./Todo/Todo";

const TodoList = ({todos, ...dispatchers}) => (
    <ul>
      {todos ? todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          {...dispatchers}
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
