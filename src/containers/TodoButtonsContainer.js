import { connect } from 'react-redux'
import { addSubtask, addTag } from '../actions'
import TodoButtons from '../components/Todo/TodoButtons'

const mapDispatchToProps = dispatch => ({ 

  addSubtask: text => dispatch(addSubtask(text)),

  addTag: text => dispatch(addTag(text))
})

export default connect(null, mapDispatchToProps)(TodoButtons)