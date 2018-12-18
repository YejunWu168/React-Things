import React from 'react';

import Subtask from './Subtask';

export const SubtaskList = props => (
    <ul className="subtasks" style={{ display: props.editing ? "block" : "none" }}>
      {props.subtasks.map(subtask => (
        <Subtask
          key={props.id}
          subtask={subtask}
          handleSubtaskChecked={props.handleSubtaskChecked}
          handleKeyDownSubtaskField={props.handleKeyDownSubtaskField}
          handleSubtaskChange={props.handleSubtaskChange}
        />
      ))}
    </ul>
);

export default SubtaskList;