// src/App.js
import React, { useState } from 'react';
import './Components/menu.css';


const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [message, setMessage] = useState('');

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
    setMessage(`You clicked: ${buttonName}`);
    // Do not close the dropdown after selection
  };

return (
    <div className='me'>
      <button onClick={toggleDropdown} className='menu-button'>Menu</button>
      {isOpen && (
        <div className='dropdown'>
          <button onClick={() => handleButtonClick('Account')}>Account</button>
          <button onClick={() => handleButtonClick('Online classes')}>Online classes</button>
          <button onClick={() => handleButtonClick('Routine')}>Routine</button>
          <button onClick={() => handleButtonClick('Assignment')}>Assignment</button>
          <button onClick={() => handleButtonClick('Notes')}>Notes</button>
          <button onClick={() => handleButtonClick('Question Bank')}>Question Bank</button>
          <button onClick={() => handleButtonClick('Setting')}>Setting</button>
        </div>
      )}
      {message && <p>{message}</p>} {/* Display the message if it exists */}
    </div>
     
  
  );
};

export default App;