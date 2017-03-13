import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from '../../actions/todos.js'

import 'AddTodoItem.scss'


class AddTodoItem extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.dispatch(addTodo({ text: this.input.value }));
  }

  render() {
    return (
      <div>
        <form className="todo__add-todo" onSubmit={this.submit}>
          <input type="text" ref={x => this.input = x} />
          <button type="submit">
            Add Todo
            </button>
        </form>
      </div>
    );
  }
};

export default connect(
  state => ({ loading: true })
)(AddTodoItem);