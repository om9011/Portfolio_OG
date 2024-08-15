import React from 'react';
import Education from './Education';
import Project from './Project';
import "../Assets/Projects/project1.png"
import Certifications from './Certifications';
import Skills from './Skills';

const Details = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'Education':
        return <Education />;
      case 'Projects':
        return <Project/>;
      case 'Certifications':
        return <Certifications />;
      case 'Skills':
        return <Skills/>;
      case 'ExtraCurricular':
        return <div>Extra-Curricular Activities...</div>;
      default:
        return <div>Select a section...</div>;
    }
  };

  return (
    <div className='border rounded-lg shadow-md p-4 h-full bg-white'>
      <h2 className="text-2xl text-center font-bold mb-2">{activeSection}</h2>
      <hr className="border-t-2 border-blue-500 mb-4" />
      <div className="h-[calc(100%-3rem)] overflow-y-auto"> {/* Adjust height for content area */}
        {renderSection()}
      </div>
    </div>
  );
}

export default Details;
