// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">YAM<span className="gradient">Generator</span></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
      </ul>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <div>
        <button className="nav-button">Login</button>
        <button className="nav-button signup-button">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
