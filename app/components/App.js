import React from 'react';
import './App.css'

export default class Counter extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div>
      <h1>{this.props.value}</h1>
    </div>
    );
  }
}
