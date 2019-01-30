import { combineReducers } from 'redux'
import todos from './todos'
import subtasks from './subtasks'
import tags from './tags'

export default combineReducers({
  todos,
  subtasks,
  tags
});