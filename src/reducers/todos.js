import uuid from 'uuid';

const todos = (state = [], action) => {
    switch (action.type) {
        
        case "ADD_TODO":
        return [...state, {
          text: action.payload,
          id: uuid(),
          isChecked: false,
          isActive: false,
          tags: []
        }];

        case "EDIT_TODO": 
        return state.map(
          todo => todo.id === action.id ? {...todo, text: action.payload} : todo
        )

        case 'TOGGLE_CHECKED': 
            return state.map(
                todo => 
                    todo.id === action.id ? { ...todo, isChecked: !todo.isChecked } : todo
            )   
 
        default: 
        return state
    }
}

export default todos