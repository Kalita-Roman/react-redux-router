import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions/index.js'
import 'TodoItem.scss';

export default connect()
  (class TodoItem extends Component {
    constructor() {
      super();
      this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
      this.props.dispatch(deleteTodo(this.props.id));
    }

    render() {
      return (
        <li className="todo__list-items__item">
          <div className="todo__list-items__item__content">
            <div className="todo__list-items__item__content_elem id">id: {this.props.id}</div>
            <div>{this.props.text}</div>
          </div>
          <div className="todo__list-items__item__controls">
            <button className="todo__list-items__item__controls_button edit" onClick={this.onEdit}>edit</button>
            <button className="todo__list-items__item__controls_button delete" onClick={this.onDelete}>delete</button>
          </div>
        </li>
      );
    }
  })
