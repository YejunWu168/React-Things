import * as types from './types'

export const inbox = () => ({type: types.INBOX, filter: 'inbox'})
export const today = () => ({type: types.TODAY, filter: 'today'})
export const work = () => ({type: types.WORK, filter: 'work'})