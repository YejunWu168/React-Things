import { ADD_TODO, EDIT_TODO, TOGGLE_CHECKED } from '../actions/types';

const todos = (state = [], action) => {
  switch (action.type) {
    
    case ADD_TODO:
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

    case EDIT_TODO: 
    return state.map(
      todo => todo.id === action.id ? {...todo, text: action.payload} : todo
    )

    case TOGGLE_CHECKED:
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return {...todo, isChecked: !todo.isChecked}
      }

      return todo
    })

    default:
      return state;
  }
};


export default todos