import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { playWorks } from '../data/portfolioData';
import { useState, useEffect } from 'react';
import './Home.css';
import './Play.css';

const Play = () => {
  const [cursorText, setCursorText] = useState("");
  const [activeWork, setActiveWork] = useState(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const cursorY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveWork(null);
    };
    if (activeWork) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeWork]);

  return (
    <div className="container page-container">
      <AnimatePresence>
        {cursorText && (
          <motion.div
            className="home-custom-cursor"
            style={{ x: cursorX, y: cursorY }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Playground</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px' }}>
          A collection of visual explorations, 3D experiments, and UI snippets I do for fun.
        </p>
      </motion.div>

      <div className="work-grid">
        {playWorks.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="work-card play-card-clickable"
            style={{ borderRadius: '16px' }}
            onMouseEnter={() => setCursorText("Expand")}
            onMouseLeave={() => setCursorText("")}
            onClick={() => setActiveWork(work)}
          >
            <div className="card-image" style={{ height: '400px', overflow: 'hidden' }}>
              {work.video ? (
                <video
                  src={work.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <img src={work.image} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
            </div>
            <div className="card-content" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{work.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{work.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded View Modal */}
      <AnimatePresence>
        {activeWork && (
          <motion.div
            className="play-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveWork(null)}
          >
            <button
              className="play-lightbox-close"
              onClick={() => setActiveWork(null)}
              aria-label="Close preview"
            >
              &times;
            </button>
            <motion.div
              className="play-lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeWork.video ? (
                <video
                  src={activeWork.video}
                  autoPlay
                  loop
                  controls
                  playsInline
                  className="play-lightbox-media"
                />
              ) : (
                <img src={activeWork.image} alt={activeWork.title} className="play-lightbox-media" />
              )}
              <div className="play-lightbox-caption">
                <h3>{activeWork.title}</h3>
                <p>{activeWork.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Play;
