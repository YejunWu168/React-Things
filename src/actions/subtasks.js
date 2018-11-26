import { ADD_SUBTASK } from './types';

export const addSubtask = subtask => ({type: ADD_SUBTASK, payload: subtask});
