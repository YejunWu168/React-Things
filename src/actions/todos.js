import { ADD_TODO, SAVE_TODO, TOGGLE_CHECKED, REMOVE_CHECKED, SET_TODO_ACTIVE, SET_ALL_TODOS_INACTIVE, SET_EDITING_INACTIVE} from './types'
import uuid from 'uuid'

// Main actions
export const addTodo = text => ({ type: ADD_TODO, id: uuid(), payload: text })
export const saveTodo = (id, text) => ({ type: SAVE_TODO, id, payload: text})

// Checkbox Actions
export const toggleChecked = id => ({ type: TOGGLE_CHECKED, payload: id })
export const removeChecked = id => ({ type: REMOVE_CHECKED, payload: id })

// Click Actions
export const setTodoActive = id => ({ type: SET_TODO_ACTIVE, payload: id })
export const setAllTodosInactive = () => ({ type: SET_ALL_TODOS_INACTIVE })
