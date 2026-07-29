import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import './ScrollDrivenInsightPanel.css';

const ScrollDrivenInsightPanel = ({ items, onImageClick }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!items || items.length === 0) return;
    const count = items.length;
    const rawIndex = Math.floor(latest * count);
    const index = Math.min(Math.max(0, rawIndex), count - 1);
    setActiveIndex(index);
  });

  if (!items || items.length === 0) return null;

  const activeItem = items[activeIndex] || items[0];

  const handleTabClick = (idx) => {
    setActiveIndex(idx);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = rect.top + scrollTop;
      const sectionHeight = rect.height - window.innerHeight;
      const targetScroll = sectionTop + (idx / items.length) * sectionHeight;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="scroll-driven-panel-container">
      <div className="scroll-driven-sticky-viewport">
        {/* Header Tabs */}
        <div className="scroll-driven-tabs-header">
          <div className="scroll-driven-step-counter">
            <span className="step-current">0{activeIndex + 1}</span>
            <span className="step-divider">/</span>
            <span className="step-total">0{items.length}</span>
          </div>
          <div className="scroll-driven-tabs">
            {items.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`scroll-driven-tab ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => handleTabClick(idx)}
              >
                <span className="tab-number">0{idx + 1}</span>
                <span className="tab-title">{item.title}</span>
                {idx === activeIndex && (
                  <motion.div
                    className="tab-active-indicator"
                    layoutId="activeTabIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="scroll-driven-content-grid">
          {/* Image Side */}
          <div className="scroll-driven-image-col">
            <div className="image-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="image-motion-wrapper"
                >
                  {activeItem.image ? (
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="scroll-driven-img cs-zoomable"
                      onClick={() =>
                        onImageClick &&
                        onImageClick({
                          src: activeItem.image,
                          alt: activeItem.title,
                          caption: activeItem.title,
                        })
                      }
                    />
                  ) : (
                    <div className="scroll-driven-img-placeholder">
                      <span>{activeItem.title}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Text Detail Side */}
          <div className="scroll-driven-text-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-detail-wrapper"
              >
                <h3 className="insight-title">{activeItem.title}</h3>
                <p className="insight-text">{activeItem.text}</p>
              </motion.div>
            </AnimatePresence>

            {/* Progress fill */}
            <div className="scroll-driven-progress-track">
              <motion.div
                className="progress-fill"
                animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDrivenInsightPanel;
