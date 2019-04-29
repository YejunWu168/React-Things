import * as types from './types'

export const addTag = (id, text) => ({ type: types.ADD_TAG, id, payload: text })