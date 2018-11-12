import uuid from 'uuid';

const subtasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUBTASKLIST': 
        return [
          ...state.subtasks,
          {
            text: "",
            id: uuid(),
            isChecked: false
          }
        ]
        case 'ADD_SUBTASK':
            return [
              ...state.subtasks,
              {
                text: state.todoInput,
                id: uuid(),
                isChecked: false,
              }
            ]
        default: 
        return state
    }
}

export default subtasks