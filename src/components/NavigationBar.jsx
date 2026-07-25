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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const featuredWorksEl = document.getElementById('featured-works');
      const playEl = document.getElementById('play');
      const scrollPos = window.scrollY + 250;

      if (playEl && scrollPos >= playEl.offsetTop) {
        setActiveSection('play');
      } else if (featuredWorksEl && scrollPos >= featuredWorksEl.offsetTop) {
        setActiveSection('work');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { key: 'work', label: 'Work', path: '/#featured-works', targetId: 'featured-works' },
    { key: 'play', label: 'Play', path: '/#play', targetId: 'play' },
    { key: 'about', label: 'About', path: '/about', targetId: null }
  ];

  const handleNavClick = (e, link) => {
    if (location.pathname === '/') {
      if (link.targetId) {
        const el = document.getElementById(link.targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${link.targetId}`);
          setActiveSection(link.key);
        }
      }
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      setActiveSection('home');
    }
  };

  const isCaseStudyPage = location.pathname.startsWith('/case-studies/');
  const isHome = location.pathname === '/';
  const hideForIntro = isHome && introPlaying;

  const isLinkActive = (link) => {
    if (link.key === 'about') return location.pathname === '/about';
    if (isHome) return activeSection === link.key;
    return false;
  };

  return (
    <motion.nav
      className={`navbar ${isCaseStudyPage ? '' : 'navbar-sticky'} ${isHome ? 'navbar-home' : ''} ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: isHome ? -100 : 0, opacity: isHome ? 0 : 1 }}
      animate={{
        y: hideForIntro ? -100 : 0,
        opacity: hideForIntro ? 0 : 1
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: hideForIntro ? 0 : 0.3
      }}
      style={{ pointerEvents: hideForIntro ? 'none' : 'auto' }}
    >
      <div className="navbar-inner container">
        <Link to="/" onClick={handleLogoClick} className="logo">
          <img src={logoImg} alt="Cindy" className="nav-logo-img" />
        </Link>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <Link
                key={link.key}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`nav-item ${active ? 'active' : ''}`}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="nav-underline"
                  />
                )}
              </Link>
            );
          })}

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
