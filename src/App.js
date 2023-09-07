import React from 'react';
import './App.css';

function App() {
  const phoneNumber = '0769099310'; // Replace with the desired phone number

  return (
    <div className="app-container">
      <h1>Your React App</h1>
      {/* Button to call a number */}
      <a href={`tel:${phoneNumber}`}>
        <button>Call Number</button>
      </a>
    </div>
  );
}

export default App;
