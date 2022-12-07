/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, operator: '', operand: 0 };
  }

  handleChange = (e) => {
    const op = e.target.innerHTML;
    this.setState({ operand: op });
  }

  handleOperator =(e) => {
    this.setState({ operator: e.target.innerHTML });
    this.reset();
  }

  reset = () => {
    this.setState({ result: 0 });
  }

  render() {
    return (
      <div className="calc">
        <form className="row-group">
          <input disabled className="result" value={this.state.operand} onChange={(e) => { this.setState({ operand: e.target.value }); }} />
        </form>
        <div className="row-group">
          <button type="button" id="AC" onClick={() => this.setState({ result: 0 })} className="keys">AC</button>
          <button type="button" onClick={(e) => this.handleOperator(e)} id="+/-" className="keys">+/-</button>
          <button type="button" onClick={(e) => this.handleOperator(e)} className="keys">%</button>
          <button type="button" onClick={(e) => this.handleOperator(e)} className="keys">&#247;</button>
        </div>
        <div className="row-group">
          <button className="keys" type="button" onClick={(e) => this.handleChange(e)}>7</button>
          <button className="keys" type="button" onClick={(e) => this.handleChange(e)}>8</button>
          <button className="keys" type="button" onClick={(e) => this.handleChange(e)}>9</button>
          <button className="keys" type="button" onClick={(e) => this.handleOperator(e)}>X</button>
        </div>
        <div className="row-group">
          <button type="button" onClick={(e) => this.handleChange(e)} className="keys">4</button>
          <button type="button" onClick={(e) => this.handleChange(e)} className="keys">5</button>
          <button type="button" onClick={(e) => this.handleChange(e)} className="keys">6</button>
          <button type="button" onClick={(e) => this.handleOperator(e)} className="keys">-</button>
        </div>
        <div className="row-group">
          <button type="button" onClick={(e) => this.handleChange(e)} className="keys">1</button>
          <button type="button" onClick={(e) => this.handleChange(e)} className="keys">2</button>
          <button type="button" onClick={(e) => this.handleChange(e)} className="keys">3</button>
          <button type="button" onClick={(e) => this.handleOperator(e)} className="keys">+</button>
        </div>
        <div className="row-group">
          <button type="button" onClick={(e) => this.handleChange(e)} className="keys zero">0</button>
          <button type="button" onClick={(e) => this.handleChange(e)} className="keys">.</button>
          <button type="submit" onClick={(e) => this.handleOperator(e)} className="keys">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
