import React from 'react';
import './App.css';

function App() {
  const phoneNumber = '123-456-7890'; // Replace with the desired phone number

  // Function to initiate a phone call
  const callNumber = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="app-container">
      <h1>Your React App</h1>
      {/* Button to call a number */}
      <button className="button" onClick={callNumber}>
        Call Number
      </button>
    </div>
  );
}

export default App;
