import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { MousePointer2, ArrowDown, RefreshCcw } from 'lucide-react';
import './DesignerHero.css';

// Background
import headerBg from '../assets/header_bg.png';

// Shapes
import shapePurple from '../assets/purple_shape.png';
import shapeGreen from '../assets/green_shape.png';
import shapePink from '../assets/pink_shape.png';
import gridImg from '../assets/grid.png';

const imageSizeClass = "scaled-shape-img";

// Clip path animating from top-left (empty) to full bounding box
const gridClipEmpty = "inset(18% 66% 82% 34%)";
const gridClipFull = "inset(18% 34% 18% 34%)";

const GridBox = ({ currentStep, triggerStep, pos }) => (
  <AnimatePresence>
    {(currentStep >= triggerStep - 1 && currentStep <= triggerStep) && (
      <motion.div
        className="shape-container"
        style={{ left: `${pos.cx}%`, top: `${pos.cy}%` }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <motion.img
          src={gridImg}
          className={`${imageSizeClass} grid-img-asset`}
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

const DesignerHero = () => {
  const [step, setStep] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);
  const [offsetVw, setOffsetVw] = useState(4);
  const [isHovering, setIsHovering] = useState(false);
  const [tinyShapes, setTinyShapes] = useState([]);
  const [hasClicked, setHasClicked] = useState(false);
  const constraintsRef = useRef(null);

  // Mouse tracking for interactive cursor
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }; // Snappy follow
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Trailing ripple tracking (slower, softer follow to create a snake-like trail)
  const rippleX1 = useSpring(mouseX, { damping: 15, stiffness: 100, mass: 0.8 });
  const rippleY1 = useSpring(mouseY, { damping: 15, stiffness: 100, mass: 0.8 });

  const rippleX2 = useSpring(mouseX, { damping: 20, stiffness: 60, mass: 1.2 });
  const rippleY2 = useSpring(mouseY, { damping: 20, stiffness: 60, mass: 1.2 });

  const rippleX3 = useSpring(mouseX, { damping: 25, stiffness: 30, mass: 1.8 });
  const rippleY3 = useSpring(mouseY, { damping: 25, stiffness: 30, mass: 1.8 });

  const handleMouseMove = (e) => {
    if (step >= 13) {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const handleCanvasClick = (e) => {
    if (step >= 13) {
      if (!hasClicked) setHasClicked(true);

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const shapeTypes = [shapePurple, shapeGreen, shapePink];
      const randomShape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const randomRotate = Math.random() * 360;

      setTinyShapes(prev => [...prev, { id: Date.now() + Math.random(), x, y, img: randomShape, rotate: randomRotate }]);
    }
  };

  const handleRefresh = (e) => {
    e.stopPropagation();
    setStep(0);
    setTinyShapes([]);
    setHasClicked(false);
    setRefreshKey(prev => prev + 1);
  };

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
  }, [refreshKey]);

  // Exact center coordinates for the shapes
  const positions = {
    purple: { cx: 15, cy: 54 },
    green: { cx: 50, cy: 20 }, // Centered to the header text
    pink: { cx: 80, cy: 60 }
  };

  // Helper to calculate Top-Left and Bottom-Right for the cursor
  // The shapes are roughly 8vw by 8vw on screen, so +/- 4vw from center
  const getTL = (pos) => ({ left: `calc(${pos.cx}% + ${-offsetVw}vw)`, top: `calc(${pos.cy}% + ${-offsetVw}vw)` });
  const getBR = (pos) => ({ left: `calc(${pos.cx}% + ${offsetVw}vw)`, top: `calc(${pos.cy}% + ${offsetVw}vw)` });

  const moveEase = { type: "tween", ease: "easeInOut", duration: 0.5 };
  const dragEase = { duration: 0.4, ease: "easeOut" };

  const cursorVariants = {
    0: { ...getTL(positions.purple), opacity: 0 },
    1: { ...getTL(positions.purple), opacity: 1, transition: { duration: 0.2 } },
    2: { ...getBR(positions.purple), opacity: 1, transition: dragEase },
    3: { ...getBR(positions.purple), opacity: 1 },
    4: { ...getTL(positions.green), opacity: 1, transition: moveEase },
    5: { ...getTL(positions.green), opacity: 1 },
    6: { ...getBR(positions.green), opacity: 1, transition: dragEase },
    7: { ...getBR(positions.green), opacity: 1 },
    8: { ...getTL(positions.pink), opacity: 1, transition: moveEase },
    9: { ...getTL(positions.pink), opacity: 1 },
    10: { ...getBR(positions.pink), opacity: 1, transition: dragEase },
    11: { ...getBR(positions.pink), opacity: 1 },
    12: { ...getBR(positions.pink), opacity: 0 },
    13: { ...getBR(positions.pink), opacity: 0 }
  };



  return (
    <div
      className={`designer-hero ${step >= 13 && isHovering ? 'interactive-canvas' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleCanvasClick}
    >
      {/* Refresh Button */}
      <motion.button
        className="refresh-btn"
        onClick={handleRefresh}
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <RefreshCcw size={20} />
      </motion.button>

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
      <div className="shapes-layer" ref={constraintsRef}>

        {/* Grids */}
        <GridBox currentStep={step} triggerStep={2} pos={positions.purple} />
        <GridBox currentStep={step} triggerStep={6} pos={positions.green} />
        <GridBox currentStep={step} triggerStep={10} pos={positions.pink} />

        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              className="shape-container interactive-shape"
              style={{ left: `${positions.purple.cx}%`, top: `${positions.purple.cy}%` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              drag={step >= 13}
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
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
            <motion.div
              className="shape-container interactive-shape"
              style={{ left: `${positions.green.cx}%`, top: `${positions.green.cy}%` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              drag={step >= 13}
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
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
            <motion.div
              className="shape-container interactive-shape"
              style={{ left: `${positions.pink.cx}%`, top: `${positions.pink.cy}%` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              drag={step >= 13}
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
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

        {/* Trailing Ripple Effect Layers */}
        <AnimatePresence>
          {step >= 13 && isHovering && (
            <>
              <motion.div
                className="mouse-ripple-trail"
                style={{ x: rippleX1, y: rippleY1, background: '#e76f80' }} /* Pink */
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.5, scale: [0.8, 1, 0.8] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ opacity: { duration: 0.2 }, scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } }}
              />
              <motion.div
                className="mouse-ripple-trail"
                style={{ x: rippleX2, y: rippleY2, background: '#bccb3e' }} /* Green */
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: [1, 1.2, 1] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ opacity: { duration: 0.2 }, scale: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 } }}
              />
              <motion.div
                className="mouse-ripple-trail"
                style={{ x: rippleX3, y: rippleY3, background: '#5b65f0' }} /* Purple */
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: [1.2, 1.4, 1.2] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ opacity: { duration: 0.2 }, scale: { repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.4 } }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Interactive User Cursor (Only visible after sequence completes and user hovers) */}
        <AnimatePresence>
          {step >= 13 && isHovering && (
            <motion.div
              className="custom-cursor interactive-user-cursor"
              style={{ x: cursorX, y: cursorY, rotate: -10, transformOrigin: 'top left', willChange: 'transform' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <AnimatePresence>
                {!hasClicked && (
                  <motion.div
                    className="click-me-prompt"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ 
                      opacity: { duration: 0.2 },
                      scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                    }}
                  >
                    click me!
                  </motion.div>
                )}
              </AnimatePresence>
              <MousePointer2 size={32} color="currentColor" fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {tinyShapes.map((shape) => (
            <motion.img
              key={shape.id}
              src={shape.img}
              alt=""
              style={{
                position: 'absolute',
                left: shape.x,
                top: shape.y,
                width: '120px', /* Makes the physical inner shape ~35px due to image padding */
                pointerEvents: 'none', /* Don't block future clicks */
                zIndex: 15,
                transformOrigin: 'center center'
              }}
              initial={{ scale: 0, rotate: shape.rotate - 60, opacity: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 1, rotate: shape.rotate, opacity: 1, x: '-50%', y: '-50%' }}
              transition={{ type: "spring", bounce: 0.6 }}
            />
          ))}
        </AnimatePresence>

        {/* Custom Animated Cursor (Sequence) */}
        <AnimatePresence>
          {step < 13 && (
            <motion.div
              className="custom-cursor"
              style={{ willChange: 'left, top' }}
              variants={cursorVariants}
              initial="0"
              animate={step.toString()}
              exit={{ opacity: 0 }}
              // Default transition applied when variant doesn't specify one
              transition={moveEase}
            >
              <MousePointer2 size={32} color="currentColor" fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>
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

          <div
            className="hero-buttons"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <button className="btn-primary-hero">View Work</button>
            <button className="btn-secondary-hero">Let's Connect!</button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator at the very bottom */}
      <AnimatePresence>
        {step >= 13 && (
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="scroll-text">scroll to view work</span>
            <motion.div
              style={{ willChange: 'transform' }}
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown size={16} className="view-work-arrow" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesignerHero;
