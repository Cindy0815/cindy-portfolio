import React from 'react';
import './CenteredText.css';

const CenteredText = ({ text, className = '' }) => {
  return (
    <div className={`centered-text-container ${className}`}>
      {Array.isArray(text) ? (
        text.map((paragraph, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))
      ) : (
        <p dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </div>
  );
};

export default CenteredText;
