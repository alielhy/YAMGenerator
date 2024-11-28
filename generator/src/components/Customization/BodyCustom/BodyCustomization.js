import React, { useState } from 'react';
import './BodyCustomization.css'; // Optional: Create a CSS file for styling

function BodyCustomization() {
  const [bodyContent, setBodyContent] = useState('Default body content');

  const handleContentChange = (e) => {
    setBodyContent(e.target.value);
  };

  return (
    <div className="body-customization">
      <h2>Body Customization</h2>
      <textarea
        value={bodyContent}
        onChange={handleContentChange}
        rows="10"
        placeholder="Customize the body content here..."
      />
      <div className="preview">
        <h3>Preview:</h3>
        <p>{bodyContent}</p>
      </div>
    </div>
  );
}

export default BodyCustomization;
