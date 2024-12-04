import React, { useState } from 'react';
import './ParameterSelection.css';

function WebsiteGenerator() {
  const [activeTab, setActiveTab] = useState('appearance');
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Choose Template', 'Customize Appearance', 'Set Layout', 'Configure Links', 'Preview & Generate'];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [config, setConfig] = useState({
    colors: {
      primary: '#0EA5E9',
      secondary: '#6366F1',
      accent: '#F43F5E',
      background: '#FFFFFF',
      text: '#1F2937',
    },
    gradients: {
      enabled: false,
      start: '#0EA5E9',
      end: '#6366F1',
      angle: 45,
    },
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Plus Jakarta Sans',
      baseFontSize: '14px',
      fontWeights: { heading: 700, body: 400 },
      letterSpacing: { heading: '-0.02em', body: '0' },
    },
    appearance: {
      darkModeEnabled: false,
      darkModeActive: false,
    },
    links: {
      websiteName: '',
      logo: null,
      additionalLinks: '',
      buttons: '',
      websiteFont: 'Inter',
      linkFont: 'Inter',
      showLogo: 'both',
      navbarType: 'basic',
    }
  });

  const [newLink, setNewLink] = useState('');
  const [newButton, setNewButton] = useState('');

  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const updateConfig = (section, subsection, value) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...(subsection ? { [subsection]: value } : value)
      }
    }));
  };

  const TabButton = ({ value, label, active, onClick }) => (
    <button
      className={`tab-button ${active ? 'active' : ''}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );

  const renderAppearanceTab = () => {
    return (
      <div className="tab-content">
        <div className="appearance-grid">
          <div className="input-group">
            <label>Primary Color</label>
            <input
              type="color"
              value={config.colors.primary}
              onChange={(e) => updateConfig('colors', 'primary', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Secondary Color</label>
            <input
              type="color"
              value={config.colors.secondary}
              onChange={(e) => updateConfig('colors', 'secondary', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Accent Color</label>
            <input
              type="color"
              value={config.colors.accent}
              onChange={(e) => updateConfig('colors', 'accent', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Background Color</label>
            <input
              type="color"
              value={config.colors.background}
              onChange={(e) => updateConfig('colors', 'background', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Text Color</label>
            <input
              type="color"
              value={config.colors.text}
              onChange={(e) => updateConfig('colors', 'text', e.target.value)}
            />
          </div>
          <div className="input-group dark-mode-toggle">
            <label>Enable Dark Mode</label>
            <input
              type="checkbox"
              checked={config.appearance.darkModeEnabled}
              onChange={(e) => updateConfig('appearance', 'darkModeEnabled', e.target.checked)}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderTypographyTab = () => (
    <div className="tab-content">
      <div className="typography-grid">
        <div className="input-group">
          <label>Website Font</label>
          <select
            value={config.links.websiteFont}
            onChange={(e) => updateConfig('links', 'websiteFont', e.target.value)}
          >
            <option value="Inter">Inter</option>
            <option value="Roboto">Roboto</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Lora">Lora</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Poppins">Poppins</option>
            <option value="Merriweather">Merriweather</option>
            <option value="Raleway">Raleway</option>
            <option value="Oswald">Oswald</option>
            <option value="Playfair Display">Playfair Display</option>
            <option value="Dancing Script">Dancing Script</option>
          </select>
        </div>
        <div className="input-group">
          <label>Link Font</label>
          <select
            value={config.links.linkFont}
            onChange={(e) => updateConfig('links', 'linkFont', e.target.value)}
          >
            <option value="Inter">Inter</option>
            <option value="Roboto">Roboto</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Lora">Lora</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Poppins">Poppins</option>
            <option value="Merriweather">Merriweather</option>
            <option value="Raleway">Raleway</option>
            <option value="Oswald">Oswald</option>
            <option value="Playfair Display">Playfair Display</option>
            <option value="Dancing Script">Dancing Script</option>
          </select>
        </div>
      </div>
    </div>
  );

  const handleAddLink = () => {
    if (newLink) {
      updateConfig('links', 'additionalLinks', config.links.additionalLinks ? `${config.links.additionalLinks}, ${newLink}` : newLink);
      setNewLink('');
    }
  };

  const handleAddButton = () => {
    if (newButton) {
      updateConfig('links', 'buttons', config.links.buttons ? `${config.links.buttons}, ${newButton}` : newButton);
      setNewButton('');
    }
  };

  const toggleDarkMode = () => {
    updateConfig('appearance', 'darkModeActive', !config.appearance.darkModeActive);
  };

  const renderLinksTab = () => {
    return (
      <div className="tab-content">
        <div className="links-grid">
          <div className="input-group">
            <label>Website Name</label>
            <input
              type="text"
              value={config.links.websiteName}
              onChange={(e) => updateConfig('links', 'websiteName', e.target.value)}
              placeholder="Enter your website name"
            />
          </div>
          <div className="input-group">
            <label>Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => updateConfig('links', 'logo', e.target.files[0])}
            />
          </div>
          <div className="input-group">
            <label>Show Logo</label>
            <select
              value={config.links.showLogo}
              onChange={(e) => updateConfig('links', 'showLogo', e.target.value)}
            >
              <option value="both">Both</option>
              <option value="logo">Logo Only</option>
              <option value="website">Website Name Only</option>
            </select>
          </div>
          <div className="input-group">
            <label>Navbar Type</label>
            <select
              value={config.links.navbarType}
              onChange={(e) => updateConfig('links', 'navbarType', e.target.value)}
            >
              <option value="basic">Basic Navbar</option>
              <option value="hamburger">Hamburger Menu</option>
              <option value="dropdown">Dropdown Menu</option>
            </select>
          </div>
          <div className="input-group">
            <label>Additional Links</label>
            <div className="link-input-container">
              <input
                type="text"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                placeholder="Enter link"
              />
              <button onClick={handleAddLink}>Add Link</button>
            </div>
          </div>
          <div className="input-group">
            <label>Buttons</label>
            <div className="button-input-container">
              <input
                type="text"
                value={newButton}
                onChange={(e) => setNewButton(e.target.value)}
                placeholder="Enter button text"
              />
              <button onClick={handleAddButton}>Add Button</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPreview = () => {
    const isDarkModeEnabled = config.appearance.darkModeEnabled;
    const isDarkModeActive = config.appearance.darkModeActive;
    const backgroundColor = isDarkModeActive ? '#1F2937' : config.colors.background;
    const textColor = isDarkModeActive ? '#FFFFFF' : config.colors.text;

    return (
      <div className="preview-window" style={{ backgroundColor }}>
        {config.links.navbarType === 'basic' && (
          <nav style={{ backgroundColor: config.colors.primary, padding: '10px' }}>
            <ul style={{
              listStyleType: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 0,
              padding: 0,
            }}>
              {config.links.showLogo !== 'website' && config.links.logo && (
                <li>
                  <img 
                    src={URL.createObjectURL(config.links.logo)} 
                    alt="Logo" 
                    style={{
                      width: '30px',
                      height: '30px',
                      border: '2px solid #FFFFFF',
                      borderRadius: '5px',
                    }} 
                  />
                </li>
              )}
              {config.links.showLogo !== 'logo' && (
                <li style={{ color: textColor, fontFamily: config.links.websiteFont }}>
                  {config.links.websiteName || 'Website Name'}
                </li>
              )}
              <div style={{ display: 'flex', gap: '6px' }}>
                {config.links.additionalLinks.split(',').map((link, index) => (
                  <li key={index} style={{ color: textColor, fontFamily: config.links.linkFont }}>
                    {link.trim() || 'Link'}
                  </li>
                ))}
                {config.links.buttons.split(',').map((button, index) => (
                  <li key={index}>
                    <button style={{ backgroundColor: config.colors.secondary, color: '#FFFFFF', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>
                      {button.trim() || 'Button'}
                    </button>
                  </li>
                ))}
                {isDarkModeEnabled && (
                  <li>
                    <button 
                      onClick={() => updateConfig('appearance', 'darkModeActive', !isDarkModeActive)} 
                      style={{ backgroundColor: 'transparent', border: 'none', color: textColor, cursor: 'pointer' }}
                    >
                      {isDarkModeActive ? '🌙' : '☀️'}
                    </button>
                  </li>
                )}
              </div>
            </ul>
          </nav>
        )}

        {config.links.navbarType === 'hamburger' && (
          <div>
            <button 
              style={{ backgroundColor: config.colors.primary, color: '#FFFFFF', border: 'none', padding: '10px', borderRadius: '5px' }}
              onClick={() => setHamburgerOpen(!isHamburgerOpen)}
            >
              ☰
            </button>
            {isHamburgerOpen && (
              <div style={{ backgroundColor: config.colors.primary, position: 'absolute', padding: '10px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {config.links.additionalLinks.split(',').map((link, index) => (
                    <li key={index} style={{ color: textColor, fontFamily: config.links.linkFont }}>
                      {link.trim() || 'Link'}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {config.links.navbarType === 'dropdown' && (
          <div>
            <button 
              style={{ backgroundColor: config.colors.primary, color: '#FFFFFF', border: 'none', padding: '8px', borderRadius: '5px' }}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Menu
            </button>
            {isDropdownOpen && (
              <div style={{ backgroundColor: config.colors.primary, position: 'absolute', padding: '10px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {config.links.additionalLinks.split(',').map((link, index) => (
                    <li key={index} style={{ color: textColor, fontFamily: config.links.linkFont }}>
                      {link.trim() || 'Link'}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div 
          style={{
            background: config.gradients.enabled 
              ? `linear-gradient(${config.gradients.angle}deg, ${config.gradients.start}, ${config.gradients.end})`
              : backgroundColor,
            height: '200px',
            marginTop: '8px',
          }}
        />
      </div>
    );
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'appearance':
        return renderAppearanceTab();
      case 'typography':
        return renderTypographyTab();
      case 'links':
        return renderLinksTab();  
      default:
        return null;
    }
  };

  return (
    <div className="website-generator">
      <div className="container">


        <div className="main-grid">
          <div className="config-panel">
            <div className="card">
              <div className="card-header">
                <h2>Configuration</h2>
              </div>
              <div className="card-content">
                <div className="tabs">
                  <div className="tab-buttons">
                    <TabButton
                      value="appearance"
                      label="Colors"
                      active={activeTab === 'appearance'}
                      onClick={setActiveTab}
                    />
                    <TabButton
                      value="typography"
                      label="Typography"
                      active={activeTab === 'typography'}
                      onClick={setActiveTab}
                    />
                    <TabButton
                      value="links"
                      label="Links"
                      active={activeTab === 'links'}
                      onClick={setActiveTab}
                    />
                  </div>
                  {renderActiveTab()}
                </div>
              </div>
            </div>
          </div>

          <div className="preview-panel">
            <div className="card">
              <div className="card-header">
                <h2>Preview</h2>
              </div>
              <div className="card-content">
                {renderPreview()}
              </div>
            </div>
            <div className="action-buttons">
              <button className="button generate-button" onClick={nextStep}>Next</button>
              <button className="button save-button" onClick={previousStep} disabled={currentStep === 0}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteGenerator;