import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { MousePointer2, RefreshCcw } from 'lucide-react';
import headerBg from '../assets/header_bg.jpg';
import shapePurple from '../assets/purple_shape_opt.png';
import shapeGreen from '../assets/green_shape_opt.png';
import shapePink from '../assets/pink_shape_opt.png';
import './DesignerHero.css';
import './InteractiveCanvas.css';

const SHAPES = [
  { id: 'purple', img: shapePurple, cx: 15, cy: 50, duration: 4, amp: -15 },
  { id: 'green', img: shapeGreen, cx: 50, cy: 50, duration: 4.5, amp: -12 },
  { id: 'pink', img: shapePink, cx: 80, cy: 50, duration: 5, amp: -18 },
];

const TINY_SHAPES = [shapePurple, shapeGreen, shapePink];

// Same hover-cursor / drag-and-click interaction used by the header,
// reused here so the footer behaves identically.
const InteractiveCanvas = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [tinyShapes, setTinyShapes] = useState([]);
  const [hasClicked, setHasClicked] = useState(false);
  const constraintsRef = useRef(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const rippleX1 = useSpring(mouseX, { damping: 15, stiffness: 100, mass: 0.8 });
  const rippleY1 = useSpring(mouseY, { damping: 15, stiffness: 100, mass: 0.8 });
  const rippleX2 = useSpring(mouseX, { damping: 20, stiffness: 60, mass: 1.2 });
  const rippleY2 = useSpring(mouseY, { damping: 20, stiffness: 60, mass: 1.2 });
  const rippleX3 = useSpring(mouseX, { damping: 25, stiffness: 30, mass: 1.8 });
  const rippleY3 = useSpring(mouseY, { damping: 25, stiffness: 30, mass: 1.8 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleCanvasClick = (e) => {
    if (!hasClicked) setHasClicked(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const randomShape = TINY_SHAPES[Math.floor(Math.random() * TINY_SHAPES.length)];
    const randomRotate = Math.random() * 360;

    setTinyShapes((prev) => [...prev, { id: Date.now() + Math.random(), x, y, img: randomShape, rotate: randomRotate }]);
  };

  const handleRefresh = (e) => {
    e.stopPropagation();
    setTinyShapes([]);
    setHasClicked(false);
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div
      className={`interactive-canvas-wrapper cursor-trail-zone ${isHovering ? 'interactive-canvas' : ''}`}
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
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <RefreshCcw size={20} />
      </motion.button>

      {/* Background Image */}
      <img src={headerBg} className="full-header-bg object-cover" alt="" />

      {/* Shapes Layer */}
      <div className="shapes-layer" ref={constraintsRef}>
        <AnimatePresence>
          {SHAPES.map((shape) => (
            <motion.div
              key={`${shape.id}-${refreshKey}`}
              className="shape-container interactive-shape"
              style={{ left: `${shape.cx}%`, top: `${shape.cy}%` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{ y: [0, shape.amp, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: shape.duration, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              >
                <img src={shape.img} className="canvas-shape-img" alt="" />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Trailing Ripple Effect Layers */}
        <AnimatePresence>
          {isHovering && (
            <>
              <motion.div
                className="mouse-ripple-trail"
                style={{ x: rippleX1, y: rippleY1, background: '#e76f80' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.5, scale: [0.8, 1, 0.8] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ opacity: { duration: 0.2 }, scale: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' } }}
              />
              <motion.div
                className="mouse-ripple-trail"
                style={{ x: rippleX2, y: rippleY2, background: '#bccb3e' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: [1, 1.2, 1] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ opacity: { duration: 0.2 }, scale: { repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 0.2 } }}
              />
              <motion.div
                className="mouse-ripple-trail"
                style={{ x: rippleX3, y: rippleY3, background: '#5b65f0' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: [1.2, 1.4, 1.2] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ opacity: { duration: 0.2 }, scale: { repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.4 } }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Interactive User Cursor */}
        <AnimatePresence>
          {isHovering && (
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
                      scale: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
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

        {/* Spawned Tiny Shapes */}
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
                width: '90px',
                pointerEvents: 'none',
                zIndex: 15,
                transformOrigin: 'center center',
              }}
              initial={{ scale: 0, rotate: shape.rotate - 60, opacity: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 1, rotate: shape.rotate, opacity: 1, x: '-50%', y: '-50%' }}
              transition={{ type: 'spring', bounce: 0.6 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveCanvas;
