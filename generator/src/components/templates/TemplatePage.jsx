import React from 'react';
import Hero from './Hero';
import SearchFilters from './SearchFilters';
import TemplateGrid from './TemplateGrid';
import Categories from './Categories';
import Features from './Features';
import FAQ from './FAQ';
import PreviewModal from './PreviewModal';

const TemplatesPage = () => {
  const [showPreview, setShowPreview] = React.useState(false);
  const [selectedTemplate, setSelectedTemplate] = React.useState(null);
  const [filters, setFilters] = React.useState({
    search: '',
    category: '',
    industry: '',
    style: ''
  });

  return (
    <div className="templates-page">
      <Hero />
      <SearchFilters filters={filters} setFilters={setFilters} />
      <TemplateGrid 
        filters={filters} 
        onPreview={(template) => {
          setSelectedTemplate(template);
          setShowPreview(true);
        }}
      />
      <Categories />
      <Features />
      <FAQ />
      {showPreview && (
        <PreviewModal 
          template={selectedTemplate}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default TemplatesPage; 