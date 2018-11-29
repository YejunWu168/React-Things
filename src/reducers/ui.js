import {TOGGLE_DELETE_TODO_BUTTON} from '../actions/types';

const ui = (state = { toggleDeleteTodoButton : false}, action) => {
    switch (action.type) {

        case TOGGLE_DELETE_TODO_BUTTON:
        return {...state, toggleDeleteTodoButton: !toggleDeleteTodoButton }

        default: 
        return state;
    }
};