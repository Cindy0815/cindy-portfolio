import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { caseStudies, playWorks } from '../data/portfolioData';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import DesignerHero from '../components/DesignerHero';
import './Home.css';

const Home = () => {
  const [cursorText, setCursorText] = useState("");
  const [activeWork, setActiveWork] = useState(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const cursorY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveWork(null);
    };
    if (activeWork) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeWork]);

  return (
    <div className="home-page">
      <AnimatePresence>
        {cursorText && (
          <motion.div
            className="home-custom-cursor"
            style={{ x: cursorX, y: cursorY }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>
      <DesignerHero />

      <div className="home-content-wrapper">
        {/* Featured Case Studies */}
        <section id="featured-works" className="featured-work container section">
          <div className="section-header flex justify-between items-end">
            <div>
              <h2>Featured Works</h2>
              <p className="section-subtext">A look into my latest design case studies.</p>
            </div>

          </div>

          <motion.div className="work-grid" layout>
            <AnimatePresence mode="popLayout">
              {caseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`work-card${study.comingSoon ? ' work-card--coming-soon' : ''}`}
                  onMouseEnter={() => setCursorText(study.comingSoon ? "Coming Soon" : "View Project")}
                  onMouseLeave={() => setCursorText("")}
                >
                  {study.comingSoon ? (
                    <div>
                      <div className="card-image">
                        <img src={study.coverImage} alt={study.title} />
                        {study.tags && (
                          <div className="card-tags">
                            {study.tags.map(tag => (
                              <span key={tag} className="tag-pill">{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="card-content">
                        <h3>{study.shortDescription}</h3>
                        <p>{study.title}</p>
                        <div className="card-action">
                          <span className="view-project-btn coming-soon-label">Coming Soon</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link to={`/case-studies/${study.id}`}>
                      <div className="card-image">
                        <img src={study.coverImage} alt={study.title} />
                        {study.tags && (
                          <div className="card-tags">
                            {study.tags.map(tag => (
                              <span key={tag} className="tag-pill">{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="card-content">
                        <h3>{study.shortDescription}</h3>
                        <p>{study.title}</p>
                      </div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Play Section */}
        <section id="play" className="play-works container section">
          <div className="section-header flex justify-between items-end">
            <div>
              <h2>Play</h2>
              <p className="section-subtext">Here’s a peek at what I’ve been up to in 3D, AR/VR, and motion graphics!</p>
            </div>
          </div>

          <div className="work-grid">
            {playWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="work-card play-card play-card-clickable"
                onMouseEnter={() => setCursorText("Expand")}
                onMouseLeave={() => setCursorText("")}
                onClick={() => setActiveWork(work)}
              >
                <div className="play-card-image">
                  {work.video ? (
                    <video
                      src={work.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <img src={work.image} alt={work.title} />
                  )}
                  <div className="play-card-overlay">
                    <h3>{work.title}</h3>
                    <p>{work.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section container section">
          <div className="contact-grid">
            {/* Left Column */}
            <div className="contact-info-col">
              <h2 className="contact-heading">Send a message</h2>
              <p className="contact-subtext">
                Have a project, a question, or a cool idea? I'm all ears and excited to connect!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <span>cindychenc9@gmail.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <span>718-508-2218</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="contact-form-col">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="(xxx) xxx xxx" />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Enter subject" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Type your message..." rows="5"></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Play Works Lightbox Modal */}
      <AnimatePresence>
        {activeWork && (
          <motion.div
            className="play-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveWork(null)}
          >
            <button
              className="play-lightbox-close"
              onClick={() => setActiveWork(null)}
              aria-label="Close preview"
            >
              &times;
            </button>
            <motion.div
              className="play-lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeWork.video ? (
                <video
                  src={activeWork.video}
                  autoPlay
                  loop
                  controls
                  playsInline
                  className="play-lightbox-media"
                />
              ) : (
                <img src={activeWork.image} alt={activeWork.title} className="play-lightbox-media" />
              )}
              <div className="play-lightbox-caption">
                <h3>{activeWork.title}</h3>
                <p>{activeWork.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
