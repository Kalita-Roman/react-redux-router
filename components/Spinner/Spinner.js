import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'Spinner.scss';

export default connect(
  (s) => { return { isLoading: s.isLoading }; }
)
  (class Spinner extends Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div>
          {this.props.isLoading ? 'Loading' : ''}
        </div>
      );
    }
  })