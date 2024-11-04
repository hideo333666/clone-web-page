// src/components/AppLauncher.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AppLauncher.css'; 

const AppLauncher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLauncher = () => {
    setIsOpen(prevIsOpen => {
      const newIsOpen = !prevIsOpen;
      console.log("isOpen:", newIsOpen);
      return newIsOpen;
    });
  };
  
  return (
    <div className="app-launcher">
      <button onClick={toggleLauncher} className="launcher-button">
        <div className="dots-icon">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>
      </button>
      {isOpen && (
        <div className="launcher-dropdown">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AppLauncher;
