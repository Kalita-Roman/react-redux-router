import api from '../services/apiService.js'

export const GET_ALL_TODOS = 'GET_ALL_TODOS';

export const getAllTodos = () => (dispatch) => {
  return api.getTodos('todos')
    .then(todos => {
      dispatch({
        type: GET_ALL_TODOS,
        todos: todos
      });
    });
  let todos = api.getTodos('todos');
  return {
    type: GET_ALL_TODOS,
    todos: todos
  };
}

export const addTodo = (value) => (dispatch) => {
  //dispatch({ type: "SPINNER", value: true });
  return api.setTodo(value)
    .then((todos) => {
      //  dispatch({ type: "SPINNER", value: false });
      dispatch({
        type: GET_ALL_TODOS,
        todos: todos
      });
    })
}

export const deleteTodo = (id) => (dispatch) => {
  //dispatch({ type: "SPINNER", value: true });
  return api.deleteTodo(id)
    .then((todos) => {
      //dispatch({ type: "SPINNER", value: false });
      dispatch({
        type: GET_ALL_TODOS,
        todos: todos
      });
    })
}