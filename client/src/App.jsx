// File: client/src/App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    "Irritable towards baby & partner": '',
    "Trouble sleeping at night": '',
    "Feeling sad or Tearful": '',
    "Feeling of guilt": '',
    "Problems of bonding with baby": '',
    "Problems concentrating or making decision": ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Server error');
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Prediction failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="app">
      <h1>Postpartum Wellness Check</h1>
      <p className="subtitle">You're not alone. This quick check is here to help 💗</p>
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div> */}
        {/* <div className="form-group">
          <label>Sleep Hours (per day)</label>
          <input type="number" name="sleep_hours" value={formData.sleep_hours} onChange={handleChange} required />
        </div> */}
        {Object.entries(formData)
          .filter(([key]) => key !== 'age' && key !== 'sleep_hours')
          .map(([key, value]) => (
            <div className="form-group" key={key}>
              <label>{key}</label>
              <select name={key} value={value} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
        ))}
        <button type="submit">Check Risk 💬</button>
      </form>
      {result && (
        <div className="result">
          <h2>Your Result:</h2>
          <p className={result === 'High risk' ? 'high' : 'low'}>
            {result === 'High risk' ? 'You may be at risk. Please consider talking to a healthcare provider.' : 'You appear to be doing well. Stay supported and take care 💛'}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
