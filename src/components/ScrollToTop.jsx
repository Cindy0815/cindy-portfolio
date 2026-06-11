import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ensures the browser always starts at the top of the page, even when
// content is swapped in dynamically by the router.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
