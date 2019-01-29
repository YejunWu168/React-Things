import { connect } from 'react-redux'
import { setTodoActive, saveTodo, addSubtask } from '../actions'
import Todo from '../components/Todo/Todo'

const mapDispatchToProps = (dispatch, ownProps) => ({ 

  setTodoActive: () => dispatch(setTodoActive(ownProps.todo.id)),

  updateTodo: text => {
    dispatch(saveTodo(ownProps.todo.id, text)) 

    document.addEventListener("keydown", ownProps.onSpacebar)
  },

  addSubtask: text => dispatch(addSubtask(text))
})

export default connect(null, mapDispatchToProps)(Todo);