import React from "react";

import { Line } from "rc-progress";

import EditTodo from './EditTodo';

export const Todo = props => (
  <li
    className={`todo ${props.isActive ? "highlight" : ""} ${props.editing ? "expanded-todo" : ""} ${
      props.highlightClass ? "checkbox-clicked" : ""
    }`}
    // ref={element => (this.liRef = element)}
    style={{ minHeight: props.listHeight + "px" }}
    onDoubleClick={props.handleDoubleClick}
  >
    <input
      className="toggle"
      type="checkbox"
      onClick={() => {
        props.toggleChecked(props.todo.id);
        if (!props.editing && !props.isActive) {
          props.handleHighlightClass();
        }
      }}
    />
    <EditTodo
      handleClickTodo={ props.handleClickTodo }
      subtaskList= { props.subtaskList }
      hasTags={ props.hasTags }
      editing={ props.editing } 
      editText={ props.editText } 
      handleEditChange={props.handleEditChange} 
      todo={props.todo}
      handleKeyDown={ props.handleKeyDown }
      subtasks={props.subtasks}
      handleAddSubtaskList={props.handleAddSubtaskList}
      handleSubtaskChecked={props.handleSubtaskChecked}
      handleKeyDownSubtaskField={props.handleKeyDownSubtaskField}
      handleSubtaskChange={props.handleSubtaskChange}
      tags={props.todo.tags} 
      handleAddTag={props.handleAddTag}
      todoId={props.todo.id}
      handleAddTags={props.handleAddTags}
      tagList={props.tagList}
      handleAddToTagList={props.handleAddToTagList}
    />

    {props.subtasks.length > 0 && (
      <div className="rc-line-container">
        <Line percent={props.progress} strokeColor={props.progressColor()} strokeWidth="10" trailWidth="10" />
      </div>
    )}
  </li>
);

export default Todo;
