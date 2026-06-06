import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImg from '../assets/logo2.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/case-studies', label: 'Work' },
    { path: '/play', label: 'Play' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav className="navbar container">
      <Link to="/" className="logo">
        <img src={logoImg} alt="Cindy" className="nav-logo-img" />
      </Link>
      <div className="nav-links">
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
    </nav>
  );
};

export default NavigationBar;
