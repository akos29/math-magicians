/* eslint-disable react/destructuring-assignment */
import React, {} from 'react';
import Calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleChange = (e) => {
    const res = Calculate(this.state, e.target.innerHTML);
    this.setState(res);
  }

  render() {
    return (
      <div className="calc">
        <form className="row-group">
          <input disabled className="result" value={this.state.next || this.state.total || 0} />
        </form>
        <div className="row-group">
          <button type="button" id="AC" onClick={this.handleChange} className="keys">AC</button>
          <button type="button" onClick={this.handleChange} className="keys">+/-</button>
          <button type="button" onClick={this.handleChange} className="keys">%</button>
          <button type="button" onClick={this.handleChange} className="keys">&#247;</button>
        </div>
        <div className="row-group">
          <button className="keys" type="button" onClick={this.handleChange}>7</button>
          <button className="keys" type="button" onClick={this.handleChange}>8</button>
          <button className="keys" type="button" onClick={this.handleChange}>9</button>
          <button className="keys" type="button" onClick={this.handleChange}>x</button>
        </div>
        <div className="row-group">
          <button type="button" onClick={this.handleChange} className="keys">4</button>
          <button type="button" onClick={this.handleChange} className="keys">5</button>
          <button type="button" onClick={this.handleChange} className="keys">6</button>
          <button type="button" onClick={this.handleChange} className="keys">-</button>
        </div>
        <div className="row-group">
          <button type="button" onClick={this.handleChange} className="keys">1</button>
          <button type="button" onClick={this.handleChange} className="keys">2</button>
          <button type="button" onClick={this.handleChange} className="keys">3</button>
          <button type="button" onClick={this.handleChange} className="keys">+</button>
        </div>
        <div className="row-group">
          <button type="button" onClick={this.handleChange} className="keys zero">0</button>
          <button type="button" onClick={this.handleChange} className="keys">.</button>
          <button type="button" onClick={this.handleChange} className="keys">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
