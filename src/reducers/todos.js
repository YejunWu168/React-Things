import * as types from '../actions/types';
import todo from './todo'
import subtasks from './subtasks'
import tags from './tags'
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TODO:
    case types.SAVE_TODO:
    case types.OPEN_TODO:
    case types.CLOSE_TODO:
    case types.TOGGLE_CHECKED:
      return {
          ...state,
          [action.id]: todo(state[action.id], action),
        };

    case types.ADD_SUBTASK:
    case types.SAVE_SUBTASK: 
      return {
        ...state,
        [action.todoId]: {
          ...state[action.todoId], 
          subtasks: subtasks(state[action.todoId].subtasks, action)}
      }

    case types.ADD_TAG:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          tags: tags(state[action.id].tags, action)}
      }

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
}

const todos = combineReducers({
  byId,
  allIds
})

export default todos 

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);

// Selector

// return allTodos.filter(todo => todo.filter === filter)
export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch(filter) {
    case types.INBOX:
      return allTodos.filter(todo => todo.filter === types.INBOX)
    case types.TODAY: 
      return allTodos.filter(todo => todo.filter === types.TODAY)
    case types.WORK: 
      return allTodos.filter(todo => todo.filter === types.WORK)
    default:
    throw new Error(`Unknown filter: ${filter}.`);
  }
}
