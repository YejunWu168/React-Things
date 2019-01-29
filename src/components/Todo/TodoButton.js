import React, { Fragment } from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const TodoButton = props => {
  if (props.clicked) {
    return (
      <Fragment>
        <input
          type="text"
          className="todo-btn__input"
          placeholder={props.placeholder}
        />
        {props.children}
      </Fragment>
    )
  }
  return (
    <button className="todo-btn" onClick={props.handleAddSubtaskList}>
      <FontAwesomeIcon icon={props.icon} fixedWidth />
    </button>
  )

}

export default TodoButton