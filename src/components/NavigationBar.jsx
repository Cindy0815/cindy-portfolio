import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImg from '../assets/logo2_opt.png';
import { useHeroIntro } from '../context/HeroIntroContext';
import './NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();
  const { introPlaying } = useHeroIntro();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/case-studies', label: 'Work' },
    { path: '/play', label: 'Play' },
    { path: '/about', label: 'About' }
  ];

  const isCaseStudyPage = location.pathname.startsWith('/case-studies/');
  const isHome = location.pathname === '/';
  const hideForIntro = isHome && introPlaying;

  return (
    <motion.nav
      className={`navbar ${isCaseStudyPage ? '' : 'navbar-sticky'} ${isHome ? 'navbar-home' : ''} ${isScrolled && !menuOpen ? 'navbar-pill' : ''}`}
      initial={{ y: isHome ? -100 : 0, opacity: isHome ? 0 : 1 }}
      animate={{ 
        y: hideForIntro ? -100 : 0, 
        opacity: hideForIntro ? 0 : 1 
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: hideForIntro ? 'none' : 'auto' }}
    >
      <div className="navbar-inner container">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Cindy" className="nav-logo-img" />
        </Link>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="nav-underline"
                />
              )}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="nav-menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
