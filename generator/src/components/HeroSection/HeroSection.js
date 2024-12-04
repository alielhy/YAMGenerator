// HeroSection.js
import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="animated-background">
        <div className="floating-shapes"></div>
      </div>
      <div className="hero-content bordered-text">
        <h1 className="hero-title">
          <span className="gradient-text">Generate Everything You Need</span>
        </h1>
        <p className="hero-subtitle">
          One platform, endless possibilities. Create unique content, and designs instantly.
        </p>
        <Link to="/webgenerator">
        <button className="cta-button">Get Started Free</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
