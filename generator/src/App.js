// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Home/HomePage';
import ServicesPage from './components/Services/ServicesPage';
import HowItWorksPage from './components/HowToWork/HowItWorksPage';
import RegisterPage from './components/Authentification/RegisterPage';
import HeroSection from './components/HeroSection/HeroSection';
import ParameterSelection from './components/ParameterSelection/ParameterSelection';
import Templates from './components/Selection/Templates';
import WebsiteGenerator from './components/Customization/WebsiteGenerator';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/webgenerator" element={<WebsiteGenerator />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/parameter-selection" element={<ParameterSelection />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </Router>
    
  );
}

export default App;
