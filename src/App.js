import React from 'react';
import './App.css';

function App() {
  const phoneNumber = '0772544151'; // Replace with the desired phone number

  // Function to initiate a phone call
  const callNumber = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="app-container">

      {/* Button to call a number */}
      <button className="button" onClick={callNumber}>
        Call Number
      </button>
    </div>
  );
}

export default App;
