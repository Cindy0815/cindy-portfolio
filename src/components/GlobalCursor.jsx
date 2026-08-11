import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './GlobalCursor.css';

// Page-wide custom cursor. Hides itself over the hero/footer interactive
// canvases (which render their own cursor + trails), over work/play cards
// (which show a "View Project" / "Expand" text cursor instead), and over
// form fields (native text cursor).
const HIDE_SELECTOR = '.cursor-trail-zone, .work-card, .play-card, input, textarea, select, [contenteditable]';

const GlobalCursor = () => {
  const [visible, setVisible] = useState(false);
  const [isHoveringBtn, setIsHoveringBtn] = useState(false);

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
      const hasCustomTextCursor = Boolean(document.querySelector('.home-custom-cursor'));
      const isHiddenZone = Boolean(target?.closest(HIDE_SELECTOR));

      setVisible(!hasCustomTextCursor && !isHiddenZone);

      const isBtn = Boolean(target?.closest('button, a, [role="button"], .btn, .filter-btn, .submit-btn'));
      setIsHoveringBtn(isBtn);
    };

    const handleLeaveWindow = () => {
      setVisible(false);
      setIsHoveringBtn(false);
    };

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeaveWindow);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`global-cursor ${isHoveringBtn ? 'hovering-btn' : ''}`}
      style={{ x: cursorX, y: cursorY, opacity: visible ? 1 : 0 }}
      animate={{ scale: isHoveringBtn ? 1.6 : 1 }}
      transition={{ duration: 0.15 }}
    >
      <div className="cursor-circle" />
    </motion.div>
  );
};

export default GlobalCursor;
