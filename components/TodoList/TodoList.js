import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem.js';

import 'TodoList.scss';

export default connect(
  (s, p) => {
    return { todoItems: s.todos };
  }
)
(class TodoList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul className="todo__list-items">
        {this.props.todoItems && this.props.todoItems.map((el, i) => <TodoItem {...el} key={i}/>)}
      </ul>
    );
  }
});