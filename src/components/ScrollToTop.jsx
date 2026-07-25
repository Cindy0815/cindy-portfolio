import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ensures the browser always starts at the top of the page, even when
// content is swapped in dynamically by the router.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.addEventListener('load', () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    });
  }, []);

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
