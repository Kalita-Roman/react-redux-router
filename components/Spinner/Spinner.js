import React, { PureComponent } from 'react';
import 'Spinner.scss';

export default class Spinner extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {'Loading'}
      </div>
    );
  }
};