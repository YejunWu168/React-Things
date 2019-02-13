import React from 'react';

import Subtask from './Subtask';

export const SubtaskList = ({subtasks, addSubtask, saveSubtask}) => (
    <ul className="subtasks">
      {subtasks.map(subtask => (
        <Subtask
          key={subtask.id}
          subtask={subtask}
          addSubtask={addSubtask}
          saveSubtask={saveSubtask}
        />
      ))}
    </ul>
);

export default SubtaskList