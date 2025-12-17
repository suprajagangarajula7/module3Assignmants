import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);
  const handleCalculate = () => {
    const a = Number(num1);
    const b = Number(num2);
    let result = 0;

    if (operation === "add") {
      result = a + b;
    } else if (operation === "subtract") {
      result = a - b;
    } else if (operation === "multiply") {
      result = a * b;
    }
    setResults([...results, result]);
    setNum1("");
    setNum2("");
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number"/>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number"/>
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <button onClick={handleCalculate}>Perform Action</button>
      <h3>Results:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;
