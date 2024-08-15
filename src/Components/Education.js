import React from 'react';
import info from '../Data/Info';  // Adjust the path as needed

const Education = () => {
  return (
    <div>
      {info.education.map((item, index) => (
        <div key={index} className="bg-white border rounded-lg shadow-sm p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">{item.degree}</h3>
          {item.institution && (
            <p className="text-gray-600 mb-1">
              {item.institution}
            </p>
          )}
          {item.cgpa && (
            <p className="text-gray-600 mb-1">
              CGPA: {item.cgpa}
            </p>
          )}
          {item.percentage && (
            <p className="text-gray-600 mb-2">Percentage: {item.percentage}</p>
          )}
          <div className="text-teal-500 font-medium">
            {item.duration}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
