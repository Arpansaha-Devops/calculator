import React, { useState } from "react";

const App = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (["+", "-", "*", "/"].includes(value)) {
      // prevent changing operator if second number already started
      if (firstNum === "") return;
      setOperator(value);
    } 
    else if (value === "=") {
      calculate();
    } 
    else if (value === "C") {
      clearAll();
    } 
    else {
      if (operator) {
        setSecondNum((prev) => prev + value);
      } else {
        setFirstNum((prev) => prev + value);
      }
    }
  };

  const calculate = () => {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);

    if (isNaN(num1) || isNaN(num2)) return;

    let res;

    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          res = "Error";
        } else {
          res = num1 / num2;
        }
        break;
      default:
        res = "Invalid";
    }

    setResult(res);
    setFirstNum(res.toString());
    setSecondNum("");
    setOperator("");
  };

  const clearAll = () => {
    setFirstNum("");
    setSecondNum("");
    setOperator("");
    setResult("");
  };

  const display =
    result !== ""
      ? result
      : `${firstNum} ${operator} ${secondNum}`.trim();

  return (
    <>
      <h1>Calculator</h1>

      <input
        type="text"
        value={display}
        readOnly
        placeholder="0"
      />

      <br /><br />

      {/* Numbers */}
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleClick("/")}>/</button>

      <br />

      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("*")}>*</button>

      <br />

      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("-")}>-</button>

      <br />

      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={() => handleClick(".")}>.</button>
      <button onClick={() => handleClick("=")}>=</button>
      <button onClick={() => handleClick("+")}>+</button>

      <br />

      <button onClick={() => handleClick("C")}>C</button>
    </>
  );
};

export default App;