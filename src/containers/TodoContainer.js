import { connect } from 'react-redux';
import { setTodoActive, saveTodo, addSubtask, addTag, saveSubtask, closeTodo, openTodo, toggleChecked } from '../actions'

import Todo from '../components/Todo/Todo'

const mapDispatchToProps = (dispatch, props) => ({ 

  setTodoActive: id => dispatch(setTodoActive(id)),

  toggleChecked: id => dispatch(toggleChecked(id)),

  openTodo: id => dispatch(openTodo(props.todo.id)),

  updateTodo: text => {
    dispatch(closeTodo(props.todo.id))
    dispatch(saveTodo(props.todo.id, text)) 
    document.addEventListener("keydown", props.onSpacebar)
  },

  // removeListener: () => document.removeEventListener('keydown', props.onSpacebar),

  addSubtask: text => dispatch(addSubtask(props.todo.id, text)),
  saveSubtask: (id, text) => dispatch(saveSubtask(props.todo.id, id, text)),

  addTag: text => dispatch(addTag(props.todo.id, text)),
});

const TodoContainer = connect(null , mapDispatchToProps)(Todo)

export default TodoContainer