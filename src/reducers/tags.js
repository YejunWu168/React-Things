import * as types from '../actions/types';

const tags = (state = [], action) => {
    switch(action.type) {
        case types.ADD_TAG:
         return [
           ...state,
           action.payload
         ]

        default: 
         return state
    }
}

export default tags