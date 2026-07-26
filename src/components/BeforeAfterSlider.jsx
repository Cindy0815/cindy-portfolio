import { useState, useRef } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Existing State",
  afterLabel = "New State"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (e.touches && e.touches[0]) handleMove(e.touches[0].clientX);
      }}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background Layer) */}
      <div className="after-img-layer">
        <img src={afterImage} alt={afterLabel} className="before-after-img" />
        <span className="before-after-badge badge-after">{afterLabel}</span>
      </div>

      {/* Before Image (Clipped Overlay Layer) */}
      <div
        className="before-img-layer"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt={beforeLabel} className="before-after-img" />
        <span className="before-after-badge badge-before">{beforeLabel}</span>
      </div>

      {/* Divider Handle Line */}
      <div
        className="before-after-divider"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="divider-line" />
        <div className="divider-handle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m11 17-5-5 5-5" />
            <path d="m13 17 5-5-5-5" />
          </svg>
        </div>
      </div>

      {/* Invisible Range Input for Keyboard & Touch Accessibility */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="before-after-range-input"
        aria-label="Before and After Image Comparison Slider"
      />
    </div>
  );
};

export default BeforeAfterSlider;
