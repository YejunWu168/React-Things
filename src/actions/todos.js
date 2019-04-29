import * as types from './types'
import uuid from 'uuid'

// Main actions
export const addTodo = filter => ({ type: types.ADD_TODO, id: uuid(), filter })
export const saveTodo = (id, text) => ({ type: types.SAVE_TODO, id, payload: text})
export const openTodo = id => ({ type: types.OPEN_TODO, id})
export const closeTodo = id => ({ type: types.CLOSE_TODO, id})

// Checkbox Actions
export const toggleChecked = id => ({ type: types.TOGGLE_CHECKED, id})
export const removeChecked = id => ({ type: types.REMOVE_CHECKED, payload: id })

// Click Actions
export const setTodoActive = id => ({ type: types.SET_TODO_ACTIVE, id })
export const setAllTodosInactive = () => ({ type: types.SET_ALL_TODOS_INACTIVE })

// Tag Actions 
export const addTag = (todoId, text) => ({ type: types.ADD_TAG, payload: text })
