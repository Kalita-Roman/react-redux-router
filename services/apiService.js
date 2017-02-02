const todos = [
  { text: 'first', id: 1 },
  { text: 'second', id: 2 },
  { text: 'third', id: 3 }
];

export default {
  getTodos() {
    return new Promise((resolve, reject) => {
      const act = () => resolve(todos);
      setTimeout(act, 1000);
    });
  },

  setTodo(todo) {
    return new Promise((resolve) => {
      setTimeout(() => { resolve() }, 1000);
    })
  },

  deleteTodo(id) {
    return new Promise((resolve) => {
      setTimeout(() => { resolve() }, 1000);
    })
  }
}