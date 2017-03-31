const todos = [
  { text: 'first', id: 1 },
  { text: 'second', id: 2 },
  { text: 'third', id: 3 }
];

export default {
  getTodos() {
    return Promise.resolve(getTodosFromStorage());
  },

  setTodo(todo) {
    const todos = getTodosFromStorage();
    const maxId = todos.reduce((prev, curr) => {
      if(curr.id > prev)
        return curr.id;
      return prev;
    }, 0);
    todo.id = maxId + 1;
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    return Promise.resolve(todos);
  },

  deleteTodo(id) {
    const todos = getTodosFromStorage();
    const index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    return Promise.resolve(todos);
  }
};

function getTodosFromStorage() {
  let todos = JSON.parse(localStorage.getItem('todos'));
  if (!todos || !Array.isArray(todos)) {
    todos = [];
  }
  return todos
}