/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="calc">
        <div className="row-group">
          <p className="result">0</p>
        </div>
        <div className="row-group">
          <p className="keys">AC</p>
          <p className="keys">+/-</p>
          <p className="keys">%</p>
          <p className="keys">&#247;</p>
        </div>
        <div className="row-group">
          <p className="keys">7</p>
          <p className="keys">8</p>
          <p className="keys">9</p>
          <p className="keys">X</p>
        </div>
        <div className="row-group">
          <p className="keys">4</p>
          <p className="keys">5</p>
          <p className="keys">6</p>
          <p className="keys">-</p>
        </div>
        <div className="row-group">
          <p className="keys">1</p>
          <p className="keys">2</p>
          <p className="keys">3</p>
          <p className="keys">+</p>
        </div>
        <div className="row-group">
          <p className="keys zero">0</p>
          <p className="keys">.</p>
          <p className="keys">=</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
