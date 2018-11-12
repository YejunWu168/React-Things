import uuid from 'uuid';

const addTodo = text => ({ type: 'ADD_TODO', id: uuid(), payload: text });

const editTodo = (id, text) => ({ type: 'EDIT_TODO', id, payload: text});

const toggleChecked = id => ({ type: 'TOGGLE_CHECKED', id})

const addSubtask = subtask => ({type: 'ADD_SUBTASK', payload: subtask});

const removeChecked = id => ({type: 'REMOVE_CHECKED', payload: id});

export {
    addTodo,
    editTodo,
    toggleChecked,
    addSubtask,
    removeChecked
}