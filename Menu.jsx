// src/App.js
import React, { useState } from 'react';
import './menu.css';

const App = () => {
 
  const [message, setMessage] = useState('');

  
 
  return (

    <div className='me'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <button>Menu</button>
      <br />
      <button>Account</button>
      <br />
      <button>{online }</button>
      <br />
      <button>Routine</button>
      <br />
      <button>Assignment</button>
      <br />
      <button>Notes</button>
      <br />
      <button>Question Bank</button>
      <br />
      <button>Setting</button>
    </div>
  );
};


export default Menu;