import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCertificate, faPuzzlePiece, faFutbol } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ setActiveSection }) => {
  return (
    <nav className="flex flex-col space-y-4 border rounded-lg shadow-md p-4 h-full bg-white">
      <button onClick={() => setActiveSection('Education')} className="flex flex-col items-center hover:bg-gray-300 p-2">
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
        Education
      </button>
      <button onClick={() => setActiveSection('Skills')} className="flex flex-col items-center hover:bg-gray-300 p-2">
        <FontAwesomeIcon icon={faPuzzlePiece} className="mr-2" />
        Skills
      </button>
      <button onClick={() => setActiveSection('Projects')} className="flex flex-col items-center hover:bg-gray-300 p-2">
        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
        Projects
      </button>
      <button onClick={() => setActiveSection('Certifications')} className="flex flex-col items-center hover:bg-gray-300 p-2">
        <FontAwesomeIcon icon={faCertificate} className="mr-2" />
        Certifications
      </button>
      <button onClick={() => setActiveSection('ExtraCurricular')} className="flex flex-col items-center hover:bg-gray-300 p-2">
        <FontAwesomeIcon icon={faFutbol} className="mr-2" />
        Extra-Curricular
      </button>
    </nav>
  );
}

export default Sidebar;
