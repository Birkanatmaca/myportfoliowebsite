// src/components/CV.jsx
import React from 'react';
import './cv.scss';

const CV = () => {
  return (
    <div id="cv" className="cv-container">
      <h2>CV</h2>
      <iframe
        src="/assets/BirkanAtmaca_CV (1).pdf"
        width="100%"
        height="800px"
        title="CV"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default CV;
