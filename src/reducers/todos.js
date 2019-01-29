import { ADD_TODO, SAVE_TODO, TOGGLE_CHECKED, SET_TODO_ACTIVE, SET_ALL_TODOS_INACTIVE } from '../actions/types';

const todos = (state = [], action) => {
  switch (action.type) {
    
    case ADD_TODO:
        return [
          ...state,
          {
            value: '',
            progress: 0,
            editing: true,
            id: action.id,
            isChecked: false,
            isActive: false,
            tags: [],
            subtasks: [],
            tagList: [...new Set(["Home", "Errand", "Important", "Office"])]
          }
        ];

    case SAVE_TODO: 
    return state.map(
      todo => todo.id === action.id ? {...todo, value: action.payload} : todo
    )

    case TOGGLE_CHECKED:
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return {...todo, isChecked: !todo.isChecked}
      }

      return todo
    })

    case SET_TODO_ACTIVE: 
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return {...todo, isActive: true}
      } else {
        return {...todo, isActive: false}
      }
    })

    case SET_ALL_TODOS_INACTIVE:
    return state.map((todo) => ({...todo, isActive: false }))

    default:
      return state;
  }
};

export default todos