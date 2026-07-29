import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ensures the browser always starts at the top of the page, even when
// content is swapped in dynamically by the router.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToHashElement = () => {
        const el = document.querySelector(hash);
        if (el) {
          const yOffset = -80; // Account for navbar height
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'instant' });
        }
      };

      // Execute immediately and once DOM layout settles
      scrollToHashElement();
      const timer = setTimeout(scrollToHashElement, 50);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
