import { combineReducers } from 'redux';
import todos from './todos';
import subtasks from './subtasks';

export default combineReducers({
  todos,
  subtasks
});