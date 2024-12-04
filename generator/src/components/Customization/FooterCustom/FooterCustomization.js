import React, { useState } from 'react';
import './FooterCustomization.css'; // Optional: Create a CSS file for styling

function FooterCustomization() {
  const [footerContent, setFooterContent] = useState('Default footer content');

  const handleContentChange = (e) => {
    setFooterContent(e.target.value);
  };

  return (
    <div className="footer-customization">
      <h2>Footer Customization</h2>
      <textarea
        value={footerContent}
        onChange={handleContentChange}
        rows="10"
        placeholder="Customize the footer content here..."
      />
      <div className="preview">
        <h3>Preview:</h3>
        <p>{footerContent}</p>
      </div>
    </div>
  );
}

export default FooterCustomization;
