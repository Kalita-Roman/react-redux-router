import { GET_ALL_TODOS } from '../actions/todos.js'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO' :
      let id = 1;
      while( state.find(e => id === e.id) ) {
        id++;
      }
      return [ ...state, {text: action.value, id}];
    case 'DELETE_TODO' :
      const index = state.findIndex(x => x.id === action.id);
      state.splice(index, 1);
      return [ ...state ];
    case GET_ALL_TODOS:
      return [ ...action.todos ];
    default:
      return state;
  }
}