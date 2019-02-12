import { connect } from 'react-redux'
import { setTodoActive, saveTodo, addSubtask, addTag, saveSubtask, saveTag } from '../actions'
import Todo from '../components/Todo/Todo'

const mapDispatchToProps = (dispatch, ownProps) => ({ 

  setTodoActive: () => dispatch(setTodoActive(ownProps.todo.id)),

  updateTodo: text => {
    dispatch(saveTodo(ownProps.todo.id, text)) 
    document.addEventListener("keydown", ownProps.onSpacebar)
  },

  addSubtask: string => dispatch(addSubtask(ownProps.todo.id, string)),
  addTag: string => dispatch(addTag(ownProps.todo.id, string)),

  saveSubtask: string => dispatch(saveSubtask(string)),
  saveTag: string => dispatch(saveTag(string))
})

export default connect(null, mapDispatchToProps)(Todo);