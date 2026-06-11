import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import './GlobalCursor.css';

// Page-wide custom cursor. Hides itself over the hero/footer interactive
// canvases (which render their own cursor + trails), over work/play cards
// (which show a "View Project" / "Expand" text cursor instead), and over
// form fields (native text cursor).
const HIDE_SELECTOR = '.cursor-trail-zone, .work-card, input, textarea, select, [contenteditable]';

const GlobalCursor = () => {
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      setVisible(!target?.closest(HIDE_SELECTOR));
    };

    const handleLeaveWindow = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeaveWindow);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="global-cursor"
      style={{ x: cursorX, y: cursorY, rotate: -10, opacity: visible ? 1 : 0 }}
    >
      <MousePointer2 size={32} color="currentColor" fill="currentColor" />
    </motion.div>
  );
};

export default GlobalCursor;
