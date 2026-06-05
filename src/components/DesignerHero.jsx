import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, ArrowDown } from 'lucide-react';
import './DesignerHero.css';

// Background
import headerBg from '../assets/header_bg.png';

// Shapes
import shapePurple from '../assets/purple_shape.png';
import shapeGreen from '../assets/green_shape.png';
import shapePink from '../assets/pink_shape.png';
import gridImg from '../assets/grid.png';

const DesignerHero = () => {
  const [step, setStep] = useState(0);
  const [offsetVw, setOffsetVw] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setOffsetVw(10);
      else if (window.innerWidth <= 768) setOffsetVw(8);
      else setOffsetVw(4);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Animation sequence timeline (Sped up)
    const sequence = [
      setTimeout(() => setStep(1), 200),   // 1: Move to Purple TL
      setTimeout(() => setStep(2), 700),   // 2: Drag Purple
      setTimeout(() => setStep(3), 1100),  // 3: Purple shape pops, "Designing"
      setTimeout(() => setStep(4), 1600),  // 4: Move to Green TL
      setTimeout(() => setStep(5), 2100),  // 5: Green TL
      setTimeout(() => setStep(6), 2500),  // 6: Drag Green
      setTimeout(() => setStep(7), 2900),  // 7: Green shape pops, "Prototyping"
      setTimeout(() => setStep(8), 3400),  // 8: Move to Pink TL
      setTimeout(() => setStep(9), 3900),  // 9: Pink TL
      setTimeout(() => setStep(10), 4300), // 10: Drag Pink
      setTimeout(() => setStep(11), 4700), // 11: Pink shape pops, "Shipping"
      setTimeout(() => setStep(12), 5600), // 12: Text rolls
      setTimeout(() => setStep(13), 6200), // 13: Subtext
    ];
    return () => sequence.forEach(clearTimeout);
  }, []);

  // Exact center coordinates for the shapes
  const positions = {
    purple: { cx: "14vw", cy: "45vh" },
    green: { cx: "50%", cy: "20%" }, // Centered to the header text
    pink: { cx: "80vw", cy: "50vh" }
  };

  // Helper to calculate Top-Left and Bottom-Right for the cursor
  // The shapes are roughly 8vw by 8vw on screen, so +/- 4vw from center
  const getTL = (pos) => ({ left: `calc(${pos.cx} + -${offsetVw}vw)`, top: `calc(${pos.cy} + -${offsetVw}vw)` });
  const getBR = (pos) => ({ left: `calc(${pos.cx} + ${offsetVw}vw)`, top: `calc(${pos.cy} + ${offsetVw}vw)` });

  const defaultSpring = { type: "spring", stiffness: 50, damping: 20 };
  const dragEase = { duration: 0.4, ease: "easeOut" };

  const cursorVariants = {
    0: { ...getTL(positions.purple), opacity: 0 },
    1: { ...getTL(positions.purple), opacity: 1, transition: { duration: 0.2 } },
    2: { ...getBR(positions.purple), opacity: 1, transition: dragEase },
    3: { ...getBR(positions.purple), opacity: 1 },
    4: { ...getTL(positions.green), opacity: 1, transition: defaultSpring },
    5: { ...getTL(positions.green), opacity: 1 },
    6: { ...getBR(positions.green), opacity: 1, transition: dragEase },
    7: { ...getBR(positions.green), opacity: 1 },
    8: { ...getTL(positions.pink), opacity: 1, transition: defaultSpring },
    9: { ...getTL(positions.pink), opacity: 1 },
    10: { ...getBR(positions.pink), opacity: 1, transition: dragEase },
    11: { ...getBR(positions.pink), opacity: 1 },
    12: { ...getBR(positions.pink), opacity: 0 },
    13: { ...getBR(positions.pink), opacity: 0 }
  };

  const imageSizeClass = "scaled-shape-img";

  // Clip path animating from top-left (empty) to full bounding box
  const gridClipEmpty = "inset(18% 66% 82% 34%)";
  const gridClipFull = "inset(18% 34% 18% 34%)";

  const GridBox = ({ currentStep, triggerStep, pos }) => (
    <AnimatePresence>
      {(currentStep >= triggerStep - 1 && currentStep <= triggerStep) && (
        <motion.div
          className="shape-container"
          style={{ left: pos.cx, top: pos.cy }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.img
            src={gridImg}
            className={imageSizeClass}
            initial={{ clipPath: gridClipEmpty, opacity: 0 }}
            animate={{
              clipPath: currentStep >= triggerStep ? gridClipFull : gridClipEmpty,
              opacity: 1
            }}
            transition={{ duration: 0.4, ease: "easeOut" }} // Sped up from 0.6
            alt=""
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="designer-hero">
      {/* Background Gradients */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src={headerBg}
        className="full-header-bg object-cover"
        alt="Background gradient"
      />

      {/* Shapes Layer */}
      <div className="shapes-layer">

        {/* Grids */}
        <GridBox currentStep={step} triggerStep={2} pos={positions.purple} />
        <GridBox currentStep={step} triggerStep={6} pos={positions.green} />
        <GridBox currentStep={step} triggerStep={10} pos={positions.pink} />

        <AnimatePresence>
          {step >= 3 && (
            <motion.div className="shape-container" style={{ left: positions.purple.cx, top: positions.purple.cy }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
              <motion.div
                animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              >
                <img src={shapePurple} className={imageSizeClass} alt="Purple shape" />
              </motion.div>
            </motion.div>
          )}

          {step >= 7 && (
            <motion.div className="shape-container" style={{ left: positions.green.cx, top: positions.green.cy }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
              <motion.div
                animate={{ y: [0, -12, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              >
                <img src={shapeGreen} className={imageSizeClass} alt="Green shape" />
              </motion.div>
            </motion.div>
          )}

          {step >= 11 && (
            <motion.div className="shape-container" style={{ left: positions.pink.cx, top: positions.pink.cy }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
              <motion.div
                animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              >
                <img src={shapePink} className={imageSizeClass} alt="Pink shape" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Custom Animated Cursor */}
        <motion.div
          className="custom-cursor"
          variants={cursorVariants}
          initial="0"
          animate={step.toString()}
          // Default transition applied when variant doesn't specify one
          transition={defaultSpring}
        >
          <MousePointer2 size={32} color="currentColor" fill="currentColor" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="hero-content-centered">

        {/* Rolling Text Animation Wrapper using CSS Grid for perfect overlap */}
        <div className="title-wrapper">
          <AnimatePresence>
            {step < 12 && (
              <motion.h1
                key="sequence"
                className="hero-sequence-title"
                exit={{ y: -40, opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <motion.span
                  className="word"
                  style={{ color: '#5b65f0' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                >
                  Designing
                </motion.span>

                <motion.span
                  className="arrow sequence-arrow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 7 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {' → '}
                </motion.span>

                <motion.span
                  className="word"
                  style={{ color: '#bccb3e' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: step >= 7 ? 1 : 0, y: step >= 7 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                >
                  Prototyping
                </motion.span>

                <motion.span
                  className="arrow sequence-arrow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 11 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {' → '}
                </motion.span>

                <motion.span
                  className="word"
                  style={{ color: '#e76f80' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: step >= 11 ? 1 : 0, y: step >= 11 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                >
                  Shipping
                </motion.span>
              </motion.h1>
            )}

            {step >= 12 && (
              <motion.h1
                key="name"
                className="hero-sequence-title name-gradient"
                initial={{ y: 40, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                Cindy Chen
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Final Subtext and View Work Arrow */}
        <motion.div
          className="hero-final-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: step >= 13 ? 1 : 0, y: step >= 13 ? 0 : 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="hero-subtext">
            Product designer building intuitive, human-centered systems that help <br className="hidden md:block" />
            people navigate complexity with confidence
          </p>

          <div className="view-work-container">
            <span className="view-work-text">View Work</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown size={20} className="view-work-arrow" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignerHero;
