import React from 'react';

import Subtask from './Subtask';

export const SubtaskList = ({subtasks, editing, id, handleSubtaskChecked, handleKeyDownSubtaskField, handleSubtaskChange}) => (
    <ul className="subtasks" style={{ display: editing ? "block" : "none" }}>
      {subtasks.map(subtask => (
        <Subtask
          key={id}
          subtask={subtask}
          handleSubtaskChecked={handleSubtaskChecked}
          handleKeyDownSubtaskField={handleKeyDownSubtaskField}
          handleSubtaskChange={handleSubtaskChange}
        />
      ))}
    </ul>
);

export default SubtaskList;