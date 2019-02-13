import * as types from '../actions/types';
import { combineReducers } from 'redux'

const todosState = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          filter: action.filter,
          value: '',
          progress: 0,
          editing: true,
          id: action.id,
          completed: false,
          active: false
        }
      ]

    case types.SAVE_TODO: 
      return state.map(
        todo => todo.id === action.id ? {...todo, value: action.payload} : todo
      )
      
    case types.SET_TODO_ACTIVE:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, active: true}
        } else {
          return {...todo, active: false}
        }
      })

    case types.SET_ALL_TODOS_INACTIVE:
      return state.map((todo) => ({...todo, active: false }))
    
    case types.TOGGLE_CHECKED:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })

    default:
      return state;
  }
};

const allTodoIds = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
}


const todos = combineReducers({
  todosState,
  allTodoIds
})

export default todos 

export const getVisibleTodos = (state, filter) => {
  switch(filter) {
    case types.INBOX:
      return state.todosState.filter(todo => todo.filter === types.INBOX)
    case types.TODAY: 
      return state.todosState.filter(todo => todo.filter === types.TODAY)
    case types.WORK: 
      return state.todosState.filter(todo => todo.filter === types.WORK)
    default:
    throw new Error(`Unknown filter: ${filter}.`);
  }
}
