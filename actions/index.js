import api from '../services/apiService.js';

export function addTodo(value) {
  return function(dispatch) {
    dispatch({ type: "SPINNER", value: true });
    return api.setTodo(value)
      .then(() => {
        dispatch({ type: "SPINNER", value: false });
        dispatch({ type: "ADD_TODO", value });
      })
  }
}

export function deleteTodo(id) {
  return function(dispatch) {
    dispatch({ type: "SPINNER", value: true });
    return api.deleteTodo(id)
      .then(() => {
        dispatch({ type: "SPINNER", value: false });
        dispatch({ type: "DELETE_TODO", id });
      })
  }
}