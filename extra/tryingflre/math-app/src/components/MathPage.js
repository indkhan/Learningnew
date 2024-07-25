import React, { useState } from 'react';

const MathPage = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await fetch('http://localhost:5000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1: Number(num1), num2: Number(num2) }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error during calculation: ", error);
    }
  };

  return (
    <div>
      <h1>Math Page</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default MathPage;
