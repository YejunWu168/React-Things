import React from 'react';

import Subtask from './Subtask';

export const SubtaskList = ({subtasks, addSubtask}) => (
    <ul className="subtasks">
      {subtasks.map(subtask => (
        <Subtask
          key={subtask.id}
          subtask={subtask}
          addSubtask={addSubtask}
        />
      ))}
    </ul>
);

export default SubtaskList