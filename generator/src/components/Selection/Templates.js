import React, { useState } from 'react';
import './TemplateSelection.css';

function TemplateSelection() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: 'Modern',
      description: 'A sleek and contemporary design with a clean layout and minimalistic styling.',
      preview: (
        <div className="template-preview">
          <div className="modern-template">
            <header className="modern-header">Modern Template Header</header>
            <section className="modern-content">Modern Template Content</section>
            <footer className="modern-footer">Modern Template Footer</footer>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      name: 'Classic',
      description: 'A timeless and traditional layout with elegant typography and rich color themes.',
      preview: (
        <div className="template-preview">
          <div className="classic-template">
            <header className="classic-header">Classic Template Header</header>
            <section className="classic-content">Classic Template Content</section>
            <footer className="classic-footer">Classic Template Footer</footer>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: 'Minimal',
      description: 'A simple and clean design focused on content and readability.',
      preview: (
        <div className="template-preview">
          <div className="minimal-template">
            <header className="minimal-header">Minimal Template Header</header>
            <section className="minimal-content">Minimal Template Content</section>
            <footer className="minimal-footer">Minimal Template Footer</footer>
          </div>
        </div>
      ),
    },
  ];

  const handleTemplateSelection = (templateId) => {
    setSelectedTemplate(templateId);
  };

  return (
    <div className="template-selection">

      <div className="templates-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => handleTemplateSelection(template.id)}
          >
            <h2>{template.name}</h2>
            <p>{template.description}</p>
            <button className="preview-button">Preview</button>
          </div>
        ))}
      </div>

      <div className="template-preview-container">
        {selectedTemplate !== null ? (
          <div>
            <h2>Preview: {templates.find(t => t.id === selectedTemplate).name}</h2>
            {templates.find(t => t.id === selectedTemplate).preview}
          </div>
        ) : (
          <p>Please select a template to see a preview.</p>
        )}
      </div>

      <div className="action-buttons">
        <button className="button choose-button" disabled={selectedTemplate === null}>
          Choose Template
        </button>
      </div>
    </div>
  );
}

export default TemplateSelection;
