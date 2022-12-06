/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

export default App;
