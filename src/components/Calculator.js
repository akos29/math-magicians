/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import Calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleChange = (e) => {
    const res = Calculate(state, e.target.innerHTML);
    setState(res);
  };

  const { total, next, operation } = state;

  return (
    <div className="calc">
      <form className="row-group">
        <input disabled className="result" value={next || total || operation || 0} />
      </form>
      <div className="row-group">
        <button type="button" id="AC" onClick={handleChange} className="keys">AC</button>
        <button type="button" onClick={handleChange} className="keys">+/-</button>
        <button type="button" onClick={handleChange} className="keys">%</button>
        <button type="button" onClick={handleChange} className="keys">&#247;</button>
      </div>
      <div className="row-group">
        <button className="keys" type="button" onClick={handleChange}>7</button>
        <button className="keys" type="button" onClick={handleChange}>8</button>
        <button className="keys" type="button" onClick={handleChange}>9</button>
        <button className="keys" type="button" onClick={handleChange}>x</button>
      </div>
      <div className="row-group">
        <button type="button" onClick={handleChange} className="keys">4</button>
        <button type="button" onClick={handleChange} className="keys">5</button>
        <button type="button" onClick={handleChange} className="keys">6</button>
        <button type="button" onClick={handleChange} className="keys">-</button>
      </div>
      <div className="row-group">
        <button type="button" onClick={handleChange} className="keys">1</button>
        <button type="button" onClick={handleChange} className="keys">2</button>
        <button type="button" onClick={handleChange} className="keys">3</button>
        <button type="button" onClick={handleChange} className="keys">+</button>
      </div>
      <div className="row-group">
        <button type="button" onClick={handleChange} className="keys zero">0</button>
        <button type="button" onClick={handleChange} className="keys">.</button>
        <button type="button" onClick={handleChange} className="keys">=</button>
      </div>
    </div>
  );
};

export default Calculator;
