import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setTodoActive, saveTodo, addSubtask, addTag, saveSubtask, saveTag, toggleChecked } from '../actions'
import { getVisibleTodos } from '../reducers';
import TodoList from '../components/TodoList';


const mapStateToProps = (state, {params}) => ({
  todos: getVisibleTodos(state, params.page || 'inbox'),
});

const mapDispatchToProps = (dispatch, { todo, onSpacebar }) => ({ 

  setTodoActive: id => dispatch(setTodoActive(id)),

  toggleChecked: id => dispatch(toggleChecked(id)),

  updateTodo: (id, text) => {
    dispatch(saveTodo(id, text)) 
    document.addEventListener("keydown", onSpacebar)
  },

  addSubtask: string => dispatch(addSubtask(todo.id, string)),
  addTag: string => dispatch(addTag(todo.id, string)),

  saveSubtask: string => dispatch(saveSubtask(string)),
  saveTag: string => dispatch(saveTag(string))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;