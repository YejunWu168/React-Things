import React from 'react'
import { faTag, faListUl } from '@fortawesome/fontawesome-free-solid'
import { constants } from '../../utils/constants'

import TodoButton from './TodoButton'

const TodoButtons = ({tags, subtasks, addSubtask}) => (
    <div className="todo-buttons"> 
        <TodoButton type={constants.SUBTASK_BUTTON} icon={faListUl} subtasks={subtasks} onClick={addSubtask} />
        <TodoButton type={constants.TAG_BUTTON} icon={faTag}>
        </TodoButton>  
    </div> 
)

export default TodoButtons