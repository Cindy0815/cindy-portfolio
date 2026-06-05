import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import './DesignerHero.css';

// Import the user's assets from src/assets
// Note: You will need to place your images in the src/assets folder
import shapePurple from '../assets/purple_shape.png';
import shapeGreen from '../assets/green_shape.png';
import shapePink from '../assets/pink_shape.png';

const DesignerHero = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Animation sequence timeline
    const sequence = [
      setTimeout(() => setStep(1), 1000), // Grid and cursor move to pos 1, blue shape appears
      setTimeout(() => setStep(2), 2500), // Grid and cursor move to pos 2, green shape appears
      setTimeout(() => setStep(3), 4000), // Grid and cursor move to pos 3, pink shape appears
      setTimeout(() => setStep(4), 5500), // Grid disappears, Subtitle appears
    ];
    return () => sequence.forEach(clearTimeout);
  }, []);

  // Cursor positions based on step
  const cursorVariants = {
    0: { x: "50vw", y: "80vh", opacity: 0 },
    1: { x: "15vw", y: "35vh", opacity: 1 },
    2: { x: "48vw", y: "25vh", opacity: 1 },
    3: { x: "72vw", y: "50vh", opacity: 1 },
    4: { x: "85vw", y: "70vh", opacity: 0 } // exit screen
  };

  // Grid/Bounding Box positions based on step
  const gridVariants = {
    0: { x: "50vw", y: "80vh", opacity: 0, scale: 0.5 },
    1: { x: "15vw", y: "35vh", opacity: 1, scale: 1 },
    2: { x: "48vw", y: "25vh", opacity: 1, scale: 1 },
    3: { x: "72vw", y: "50vh", opacity: 1, scale: 1 },
    4: { x: "72vw", y: "50vh", opacity: 0, scale: 1.1 } // disappear on last shape
  };

  return (
    <div className="designer-hero">
      {/* Background Blurs */}
      <div className="gradient-blur blur-blue" />
      <div className="gradient-blur blur-pink" />
      <div className="gradient-blur blur-green" />
      <div className="gradient-blur blur-yellow" />

      {/* Shapes Container */}
      <div className="shapes-layer">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div 
              className="absolute-shape"
              style={{ left: '15vw', top: '35vh' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <img src={shapePurple} alt="Purple shape" width="64" />
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div 
              className="absolute-shape"
              style={{ left: '48vw', top: '25vh' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <img src={shapeGreen} alt="Green shape" width="48" />
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div 
              className="absolute-shape"
              style={{ left: '72vw', top: '50vh' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <img src={shapePink} alt="Pink shape" width="56" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Grid/Bounding Box */}
        <motion.div
          className="figma-box active absolute-shape grid-overlay"
          variants={gridVariants}
          initial="0"
          animate={step.toString()}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          style={{ width: '80px', height: '80px', marginLeft: '-40px', marginTop: '-40px' }}
        />

        {/* Custom Animated Cursor */}
        <motion.div 
          className="custom-cursor"
          variants={cursorVariants}
          initial="0"
          animate={step.toString()}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <MousePointer2 fill="#000" color="#000" size={28} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="hero-content-centered container">
        <h1 className="hero-sequence-title">
          <motion.span 
            className="word designing"
            style={{ color: '#5b65f0' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 20 }}
          >
            Designing
          </motion.span>
          
          <motion.span 
            className="arrow"
            style={{ color: '#9da388' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
          >
            {' → '}
          </motion.span>

          <motion.span 
            className="word prototyping"
            style={{ color: '#bccb3e' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 20 }}
          >
            Prototyping
          </motion.span>

          <motion.span 
            className="arrow"
            style={{ color: '#9da388' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
          >
            {' → '}
          </motion.span>

          <motion.span 
            className="word shipping"
            style={{ color: '#e76f80' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 20 }}
          >
            Shipping
          </motion.span>
        </h1>
        
        <motion.p 
          className="hero-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 4 ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Cindy Chen • Product Designer • cindyuxdesigns.com
        </motion.p>
      </div>
    </div>
  );
};

export default DesignerHero;
