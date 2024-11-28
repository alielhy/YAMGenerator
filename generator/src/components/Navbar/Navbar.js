// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Ensure you have this CSS file

function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="logo" onClick={() => navigate('/')}>
        <span className="logo-text animated">YAM</span> Generator
        <span className="lightning-icon">⚡</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/how-it-works">How It Works</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        <button className="login-btn" onClick={() => handleNavigation('/register')}>
          Login
        </button>
        <button className="signup-btn" onClick={() => handleNavigation('/register')}>
          Sign Up
        </button>
      </div>
      <div className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </div>
    </nav>
  );
}

export default Navbar;
