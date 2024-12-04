import React, { useState } from 'react';
import './WebsiteGenerator.css'; // Optional: Create a CSS file for styling
import StepIndicator from '../StepIndicator/StepIndicator';
import TemplateSelection from '../Selection/Templates';
import BodyCustomization from './BodyCustom/BodyCustomization';
import FooterCustomization from './FooterCustom/FooterCustomization';
import ParameterSelection from '../ParameterSelection/ParameterSelection';

function WebsiteGenerator() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Choose Template', 'Customize Navbar', 'Customize Body', 'Customize Footer', 'Preview & Generate'];

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex); // Update the current step based on the clicked step
  };

  const renderActiveStep = () => {
    switch (currentStep) {
      case 0:
        return <TemplateSelection />;
      case 1:
        return <ParameterSelection />; // Assuming you want to customize appearance here
      case 2:
        return <BodyCustomization />;
      case 3:
        return <FooterCustomization />;
      case 4:
        return <div>Preview your website here.</div>; // Placeholder for preview
      default:
        return null;
    }
  };

  return (
    <div className="website-generator">
      <header>
        <h1>Website Generator</h1>
        <p>Create your perfect website with our advanced customization tools</p>
      </header>

      <StepIndicator steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />

      <div className="main-content">
        {renderActiveStep()}
      </div>

      <div className="action-buttons">
        <button className='button generate-button' onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))} disabled={currentStep === 0}>
          Back
        </button>
        <button className='button generate-button' onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}>
          Next
        </button>
      </div>
    </div>
  );
}

export default WebsiteGenerator;
