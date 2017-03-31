import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem.js';

import 'TodoList.scss';

class TodoList extends Component {
  constructor() {
    super();
  }

  render() {
    const { todoItems } = this.props;
    console.log(todoItems);
    return (
      <ul className="todo__list-items">
        {this.props.todoItems && this.props.todoItems.map((el, i) => <TodoItem {...el} key={i} />)}
      </ul>
    );
  }
};

export default connect(
  (state) => ({ todoItems: state.todos })
)(TodoList)