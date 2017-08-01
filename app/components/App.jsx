import React from 'react';
import ProTypes from 'prop-types';
import './App.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}
Counter.propTypes = {
  value: ProTypes.string.isRequired
}

