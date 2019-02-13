import * as types from './types'
import uuid from 'uuid'

// Subtask Actions
export const addSubtask = (todoId, text) => ({ type: types.ADD_SUBTASK, todoId: todoId, id: uuid(), payload: text })
export const saveSubtask = (todoId, id, text) => ({ type: types.SAVE_SUBTASK, todoId, id, payload: text })
export const toggleSubtaskChecked = id => ({type: types.TOGGLE_SUBTASK_CHECKED, payload: id})