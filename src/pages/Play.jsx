import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { playWorks } from '../data/portfolioData';
import { useState, useEffect } from 'react';
import './Home.css';

const Play = () => {
  const [cursorText, setCursorText] = useState("");
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
            className="work-card"
            style={{ borderRadius: '16px' }}
            onMouseEnter={() => setCursorText(work.category)}
            onMouseLeave={() => setCursorText("")}
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
    </div>
  );
};

export default Play;
