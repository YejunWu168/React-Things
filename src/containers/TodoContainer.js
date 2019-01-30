import { connect } from 'react-redux'
import { setTodoActive, saveTodo, addSubtask, addTag } from '../actions'
import Todo from '../components/Todo/Todo'

const mapDispatchToProps = (dispatch, ownProps) => ({ 

  setTodoActive: () => dispatch(setTodoActive(ownProps.todo.id)),

  updateTodo: text => {
    dispatch(saveTodo(ownProps.todo.id, text)) 

    document.addEventListener("keydown", ownProps.onSpacebar)
  },

  addSubtask: text => dispatch(addSubtask(text)),

  addTag: text => dispatch(addTag(text))
})

export default connect(null, mapDispatchToProps)(Todo);