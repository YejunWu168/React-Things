import {ADD_TODO, EDIT_TODO, TOGGLE_CHECKED, REMOVE_CHECKED } from './types';
import uuid from 'uuid';

export const addTodo = text => ({ type: ADD_TODO, id: uuid(), payload: text });
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, payload: text});
export const toggleChecked = id => ({ type: TOGGLE_CHECKED, payload: id});
export const removeChecked = id => ({type: REMOVE_CHECKED, payload: id});
