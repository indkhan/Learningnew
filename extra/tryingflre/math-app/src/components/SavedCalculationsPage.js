import React, { useEffect, useState } from 'react';

const SavedCalculationsPage = () => {
  const [calculations, setCalculations] = useState([]);

  useEffect(() => {
    const fetchCalculations = async () => {
      try {
        const response = await fetch('http://localhost:5000/calculations');
        const data = await response.json();
        setCalculations(data);
      } catch (error) {
        console.error("Error fetching calculations: ", error);
      }
    };

    fetchCalculations();
  }, []);

  return (
    <div>
      <h1>Saved Calculations</h1>
      <ul>
        {calculations.map((calc, index) => (
          <li key={index}>{calc}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCalculationsPage;
