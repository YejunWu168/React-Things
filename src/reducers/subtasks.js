import uuid from 'uuid'
import { ADD_SUBTASK } from '../actions/types'

const subtasks = (state = [], action) => {
    switch (action.type) {
        case ADD_SUBTASK:
            return [
              ...state,
              {
                value: '',
                id: uuid(),
                isChecked: false,
              }
            ]
        default: 
        return state
    }
}

export default subtasks