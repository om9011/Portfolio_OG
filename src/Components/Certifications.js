import React from 'react';
import info from '../Data/Info';

const Certifications = () => {
  const groupedCertifications = {
    IBM: info.certifications.filter(cert => cert.issuer === "IBM"),
    LinkedIn: info.certifications.filter(cert => cert.issuer === "LinkedIn"),
    Udemy: info.certifications.filter(cert => cert.issuer === "Udemy"),
  };

  return (
    <div className="container mx-auto px-4">
      {/* IBM Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">IBM Certifications</h3>
      <hr className="border-t-2 border-blue-600 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          {groupedCertifications.IBM.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-blue-50 border border-blue-200"
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{cert.title}</h4>
              <p className="text-gray-700 font-medium">{cert.issuer}</p>
              {cert.series && <span className="text-sm text-gray-500 mt-2 inline-block">{cert.series}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-green-600">LinkedIn Certifications</h3>
      <hr className="border-t-2 border-green-600 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          {groupedCertifications.LinkedIn.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-green-50 border border-green-200"
            >
              <h4 className="text-xl font-semibold mb-2 text-green-600">{cert.title}</h4>
              <p className="text-gray-700 font-medium">{cert.issuer}</p>
              {cert.series && <span className="text-sm text-gray-500 mt-2 inline-block">{cert.series}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Udemy Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-red-600">Udemy Certifications</h3>
      <hr className="border-t-2 border-red-600 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          {groupedCertifications.Udemy.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-red-50 border border-red-200"
            >
              <h4 className="text-xl font-semibold mb-2 text-red-600">{cert.title}</h4>
              <p className="text-gray-700 font-medium">{cert.issuer}</p>
              {cert.series && <span className="text-sm text-gray-500 mt-2 inline-block">{cert.series}</span>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certifications;
