import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './About.css';
import cindy1 from '../assets/cindy1.jpg';
import cindy2 from '../assets/cindy2.JPEG';
import cindy3 from '../assets/cindy3.JPG';
import cindy4 from '../assets/cindy4.JPG';

const About = () => {
  const images = [
    { src: cindy1, description: "I love traveling and exploring new places." },
    { src: cindy2, description: "Showcasing my project A Petal's Worth." },
    { src: cindy3, description: "Graduating with my bachelor's from NYU." },
    { src: cindy4, description: "Participating in hackathons." }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  const swipeVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '8%' : '-8%',
      y: '5%',
      scale: 0.9,
      opacity: 0,
      zIndex: 1,
      rotate: direction > 0 ? 4 : -4
    }),
    center: {
      zIndex: 2,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      rotate: 0
    },
    exit: (direction) => ({
      zIndex: 3,
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.8,
      rotate: direction > 0 ? -15 : 15
    })
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50) {
      paginate(1);
    } else if (swipe > 50) {
      paginate(-1);
    }
  };

  return (
    <div className="container page-container about-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="about-header">About Me</h1>
        
        <div className="about-grid">
          {/* Left Column: Text */}
          <div className="about-text">
            <p>
              Hello! I'm Cindy, a multidisciplinary designer specializing in UX/UI design. I bridge the gap between human needs and business goals to create intuitive, delightful digital experiences.
            </p>
            <p>
              My background in psychology combined with my passion for visual design allows me to craft products that not only look stunning but feel completely natural to use.
            </p>
            
            <div>
              <h2 className="skills-heading">Skills</h2>
              <ul className="skills-list">
                {['UX Design', 'UI Design', 'Prototyping', 'User Research', 'Design Systems', 'Framer', 'Webflow'].map(skill => (
                  <li key={skill} className="skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="contact-cta">
              <h2>Let's talk!</h2>
              <p>I'm currently looking for new opportunities.</p>
              <a href="mailto:hello@example.com" className="btn-primary-hero" style={{ display: 'inline-flex' }}>
                hello@example.com
              </a>
            </div>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="about-image-col">
            <div className="carousel-container">
              <div className="about-image-wrapper" style={{ perspective: 'none', background: 'transparent', boxShadow: 'none' }}>
                
                {/* Persistent Background Peek Preview */}
                <div 
                  className="about-img"
                  style={{
                    backgroundImage: `url(${images[(currentIndex + 1) % images.length].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: 'translate(8%, 5%) scale(0.9) rotate(4deg)',
                    opacity: 0.6,
                    zIndex: 0,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }}
                />

                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex].src}
                    custom={direction}
                    variants={swipeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 200, damping: 20 },
                      y: { type: "spring", stiffness: 200, damping: 20 },
                      opacity: { duration: 0.3 },
                      rotate: { type: "spring", stiffness: 200, damping: 20 },
                      scale: { duration: 0.3 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    whileDrag={{ cursor: 'grabbing' }}
                    alt={`Cindy ${currentIndex + 1}`}
                    className="about-img"
                    style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.2)', cursor: 'grab' }}
                  />
                </AnimatePresence>
              </div>

              {/* Caption */}
              <div className="carousel-caption" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="carousel-caption-text"
                  >
                    {images[currentIndex].description}
                  </motion.p>
                </AnimatePresence>
              </div>
              
              <div className="carousel-controls">
                <button className="carousel-btn" onClick={() => paginate(-1)} aria-label="Previous image">
                  <ChevronLeft size={24} />
                </button>
                <button className="carousel-btn" onClick={() => paginate(1)} aria-label="Next image">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
