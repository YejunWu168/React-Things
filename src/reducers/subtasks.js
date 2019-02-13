import * as types from '../actions/types';

const subtasks = (state = [], action) => {
    switch(action.type) {
        case types.ADD_SUBTASK:
         return [
           ...state,
           {
             id: action.id,   
             value: action.payload || '',
             completed: false
           }
         ]

        case types.SAVE_SUBTASK: 
            return state.map(
                subtask => subtask.id === action.id ? {...subtask, value: action.payload} : subtask
            )
        
        case types.TOGGLE_SUBTASK_CHECKED: 
            return state.map((subtask) => {
                if (subtask.id === action.id) {
                    return {...subtask, completed: !subtask.completed}
                }
                return subtask
            })

        default: 
         return state
    }
}

export default subtasks