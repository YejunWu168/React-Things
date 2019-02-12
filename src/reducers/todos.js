import * as types from '../actions/types';

const todos = (state = [], action) => {
  switch (action.type) {
    
    case types.ADD_TODO:
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
            subtasks: []
          }
        ];

    case types.SAVE_TODO: 
    return state.map(
      todo => todo.id === action.id ? {...todo, value: action.payload} : todo
    )

    case types.TOGGLE_CHECKED:
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return {...todo, isChecked: !todo.isChecked}
      }

      return todo
    })

    case types.SET_TODO_ACTIVE: 
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return {...todo, isActive: true}
      } else {
        return {...todo, isActive: false}
      }
    })

    case types.SET_ALL_TODOS_INACTIVE:
    return state.map((todo) => ({...todo, isActive: false }))

    // Subtasks
    case types.ADD_SUBTASK:
    return state.map(
        todo => todo.id === action.todoId ? {...todo, subtasks: [...todo.subtasks, {
          value: action.payload, 
          id: action.id, 
          isChecked: false}
        ]} : todo
    )
    // Tags

    default:
      return state;
  }
};

export default todos