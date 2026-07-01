import React from 'react';
import './HighlightBox.css';

const HighlightBox = ({
  title,
  text,
  borderColor,
  bgColor,
  textColor,
  className = ''
}) => {
  const style = {};
  if (borderColor) style['--highlight-box-border'] = borderColor;
  if (bgColor) style['--highlight-box-bg'] = bgColor;
  if (textColor) style['--highlight-box-text'] = textColor;

  return (
    <div className={`highlight-box-container ${className}`}>
      <div className="highlight-box" style={style}>
        <p className="highlight-box-text">{text}</p>
      </div>
    </div>
  );
};

export default HighlightBox;
