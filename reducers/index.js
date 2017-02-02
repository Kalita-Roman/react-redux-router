import { combineReducers } from 'redux'
import todos from 'todos.js'

const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'SPINNER':
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  isLoading
})
