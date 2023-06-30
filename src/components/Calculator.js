import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'num1') {
      setNum1(value);
    } else if (name === 'num2') {
      setNum2(value);
    }
  };

  const handleOperation = (operation) => {
    if (num1 && num2) {
      let calculatedResult;
      switch (operation) {
        case 'addition':
          calculatedResult = parseFloat(num1) + parseFloat(num2);
          break;
        case 'subtraction':
          calculatedResult = parseFloat(num1) - parseFloat(num2);
          break;
        case 'multiplication':
          calculatedResult = parseFloat(num1) * parseFloat(num2);
          break;
        case 'division':
          if (parseFloat(num2) === 0) {
            calculatedResult = 'Error: Division by zero';
          } else {
            calculatedResult = parseFloat(num1) / parseFloat(num2);
          }
          break;
        default:
          break;
      }
      setResult(`Result: ${calculatedResult}`);
    } else {
      setResult('Error: Please enter valid numbers');
    }
  };

  return (
    <div className="calculator">
      <h1>Basic Calculator</h1>
      <div className="input-container">
        <input
          type="number"
          name="num1"
          placeholder="Enter number 1"
          value={num1}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="num2"
          placeholder="Enter number 2"
          value={num2}
          onChange={handleInputChange}
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleOperation('addition')}>Addition</button>
        <button onClick={() => handleOperation('subtraction')}>Subtraction</button>
        <button onClick={() => handleOperation('multiplication')}>Multiplication</button>
        <button onClick={() => handleOperation('division')}>Division</button>
      </div>
      <h2>{result}</h2>
    </div>
  );
}

export default Calculator;
