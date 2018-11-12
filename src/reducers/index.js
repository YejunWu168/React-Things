import { combineReducers } from 'redux';
import todos from './todos';
import subtasks from './subtasks';


const rootReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
        return [
          ...state,
          {
            text: '',
            id: action.id,
            isChecked: false,
            isActive: false,
            tags: []
          }
        ];
    case "EDIT_TODO": 
    return state.map(
      todo => todo.id === action.id ? {...todo, text: action.payload} : todo
    )
    case "TOGGLE_CHECKED":
    return state.map(
      todo => todo.id === action.id ? {...todo, isChecked: !todo.isChecked} : todo
    )
    default:
      return state;
  }
};

export default rootReducer;

// export default combineReducers({
//   todos,
//   subtasks
// });