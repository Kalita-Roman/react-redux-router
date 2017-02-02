import React, { Component } from 'react';
import './Label.scss';

export default class Label extends Component {
  constructor() {
    super();
    this.state = { text: 'value' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="label">
        label
        <input type="text" value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}