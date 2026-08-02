import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, ArrowLeft, Eye, EyeOff, AlertCircle, KeyRound, ArrowRight } from 'lucide-react';
import { unlockCaseStudies } from '../data/portfolioData';
import './PasswordLockScreen.css';

const PasswordLockScreen = ({ projectTitle, onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter a password');
      triggerShake();
      return;
    }

    const success = unlockCaseStudies(password);
    if (success) {
      setError('');
      onUnlock();
    } else {
      setError('Incorrect password. Please try again.');
      triggerShake();
    }
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="lock-screen-wrapper">
      <div className="container">
        <div className="lock-top-nav">
          <Link to="/#featured-works" className="back-link lock-back-link">
            <ArrowLeft size={16} /> Back to Work
          </Link>
        </div>

        <div className="lock-card-container">
          <motion.div
            className="lock-card"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={
              isShaking
                ? { x: [-10, 10, -8, 8, -4, 4, 0], opacity: 1, y: 0, scale: 1 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={isShaking ? { duration: 0.4 } : { duration: 0.5, ease: 'easeOut' }}
          >
            <div className="lock-icon-badge">
              <Lock size={26} className="lock-icon-svg" />
            </div>

            <span className="lock-category-tag">Protected Case Study</span>

            <h1 className="lock-title">{projectTitle || 'Password Protected'}</h1>

            <p className="lock-subtitle">
              This case study is password-protected. Please enter the password below to access the full content.
            </p>

            <form onSubmit={handleSubmit} className="lock-form">
              <div className={`lock-input-group ${error ? 'has-error' : ''}`}>
                <KeyRound size={18} className="lock-input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handleInputChange}
                  placeholder="Enter password..."
                  className="lock-input"
                  autoFocus
                />
                <button
                  type="button"
                  className="lock-toggle-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? 'Hide password' : 'Show password'}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {error && (
                <motion.div
                  className="lock-error-message"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlertCircle size={15} />
                  <span>{error}</span>
                </motion.div>
              )}

              <button type="submit" className="lock-submit-btn">
                <span>Unlock Case Study</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PasswordLockScreen;
