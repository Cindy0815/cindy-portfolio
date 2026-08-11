import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { RefreshCcw } from 'lucide-react';
import headerBg from '../assets/header_bg.webp';
import shapePurple from '../assets/purple_shape_opt.webp';
import shapeGreen from '../assets/green_shape_opt.webp';
import shapePink from '../assets/pink_shape_opt.webp';
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
  const lastSpawnRef = useRef({ x: -999, y: -999 });
  const constraintsRef = useRef(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const dx = x - lastSpawnRef.current.x;
    const dy = y - lastSpawnRef.current.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 30) {
      lastSpawnRef.current = { x, y };
      const randomShape = TINY_SHAPES[Math.floor(Math.random() * TINY_SHAPES.length)];
      const randomRotate = Math.random() * 360 - 180;
      const randomSize = Math.floor(Math.random() * (110 - 30 + 1)) + 30;
      const randomDriftY = -(Math.random() * 18 + 8);

      setTinyShapes((prev) => [
        ...prev.slice(-20),
        { id: Date.now() + Math.random(), x, y, img: randomShape, rotate: randomRotate, size: randomSize, driftY: randomDriftY }
      ]);
    }
  };

  const handleCanvasClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const burst = Array.from({ length: 4 }).map((_, i) => {
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;
      return {
        id: Date.now() + Math.random() + i,
        x: clickX + offsetX,
        y: clickY + offsetY,
        img: TINY_SHAPES[Math.floor(Math.random() * TINY_SHAPES.length)],
        rotate: Math.random() * 360,
        size: Math.floor(Math.random() * (120 - 35 + 1)) + 35,
        driftY: -(Math.random() * 20 + 10)
      };
    });

    setTinyShapes((prev) => [...prev.slice(-16), ...burst]);
  };

  const handleRefresh = (e) => {
    e.stopPropagation();
    setTinyShapes([]);
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



        {/* Interactive User Cursor */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              className="custom-cursor interactive-user-cursor"
              style={{ x: cursorX, y: cursorY, transformOrigin: 'center center', willChange: 'transform' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <div className="cursor-circle" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spawned Trail Shapes */}
        <AnimatePresence>
          {tinyShapes.map((shape) => (
            <motion.div
              key={shape.id}
              style={{
                position: 'absolute',
                left: shape.x,
                top: shape.y,
                width: `${shape.size}px`,
                pointerEvents: 'none',
                zIndex: 15,
                transformOrigin: 'center center'
              }}
              initial={{ scale: 0, rotate: shape.rotate - 45, opacity: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 1, rotate: shape.rotate, opacity: [0, 0.45, 0.45, 0], y: ['-50%', `calc(-50% + ${shape.driftY}px)`], x: '-50%' }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 1.5,
                ease: 'easeOut',
                times: [0, 0.2, 0.7, 1]
              }}
              onAnimationComplete={() => {
                setTinyShapes((prev) => prev.filter((item) => item.id !== shape.id));
              }}
            >
              <img
                src={shape.img}
                alt=""
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveCanvas;
