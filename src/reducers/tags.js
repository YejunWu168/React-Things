import { ADD_TAG } from '../actions/types'

const subtasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TAG:
            return [
              ...state,
              {
                value: '',

              }
            ]
        default: 
        return state
    }
}

export default subtasks