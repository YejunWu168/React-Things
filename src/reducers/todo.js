import * as types from '../actions/types';


const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        filter: action.filter,
        value: '',
        progress: 0,
        editing: true,
        id: action.id,
        completed: false,
        subtasks: []
      };
    case types.SAVE_TODO:
        if (state.id !== action.id) {
            return state;
        }
        return {
            ...state,
            value: action.payload,
        };
    case types.TOGGLE_CHECKED:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export default todo;