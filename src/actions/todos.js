import * as types from './types'
import uuid from 'uuid'

// Main actions
export const addTodo = () => ({ type: types.ADD_TODO, id: uuid() })
export const saveTodo = (id, text) => ({ type: types.SAVE_TODO, id, payload: text})

// Checkbox Actions
export const toggleChecked = id => ({ type: types.TOGGLE_CHECKED, payload: id })
export const removeChecked = id => ({ type: types.REMOVE_CHECKED, payload: id })

// Click Actions
export const setTodoActive = id => ({ type: types.SET_TODO_ACTIVE, payload: id })
export const setAllTodosInactive = () => ({ type: types.SET_ALL_TODOS_INACTIVE })

// Subtask Actions
export const addSubtask = (todoId, text) => ({ type: types.ADD_SUBTASK, todoId: todoId, id: uuid(), payload: text })
export const saveSubtask = (todoId, id, text) => ({ type: types.SAVE_SUBTASK, payload: text })
export const toggleSubtaskChecked = id => ({type: types.TOGGLE_SUBTASK_CHECKED, payload: id})

// Tag Actions 
export const addTag = (todoId, text) => ({ type: types.ADD_TAG })
export const saveTag = (todoId, text) => ({ type: types.SAVE_TAG, payload: text})