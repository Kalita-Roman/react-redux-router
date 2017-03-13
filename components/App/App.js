import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.scss';

import TodoList from '../TodoList/TodoList.js'
import AddTodoItem from '../AddTodoItem/AddTodoItem.js'
import Spinner from '../Spinner/Spinner.js'

export default connect(
  s => { return {} }
)(
  class App extends Component {
    render() {
      return (
        <div className="app">
          <AddTodoItem />
          <Spinner />
          <TodoList />
        </div>
      );
    }
  }
  )