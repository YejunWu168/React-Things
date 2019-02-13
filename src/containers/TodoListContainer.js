import { connect } from 'react-redux';
import { getVisibleTodos } from '../reducers';
import TodoList from '../components/TodoList';

const mapStateToProps = (state, props) => ({
  todos: getVisibleTodos(state, props.params.page || 'inbox'),
  onSpacebar: props.onSpacebar
});

const TodoListContainer = connect(
  mapStateToProps,
  null
)(TodoList);

export default TodoListContainer;