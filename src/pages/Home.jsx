import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { caseStudies, playWorks } from '../data/portfolioData';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import DesignerHero from '../components/DesignerHero';
import './Home.css';

const Home = () => {
  const [cursorText, setCursorText] = useState("");
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

      {/* Featured Case Studies */}
      <section id="featured-works" className="featured-work container section">
        <div className="section-header flex justify-between items-end">
          <div>
            <h2>Featured Works</h2>
            <p className="section-subtext">A look into my latest design case studies.</p>
          </div>
          <Link to="/case-studies" className="view-all-link">View all <ArrowRight size={16} /></Link>
        </div>

        <div className="work-grid">
          {caseStudies.slice(0, 4).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                    <h3>{study.title}</h3>
                    <p>{study.shortDescription}</p>
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
                    <h3>{study.title}</h3>
                    <p>{study.shortDescription}</p>
                    <div className="card-action">
                      <span className="view-project-btn">View Project <ArrowRight size={16} /></span>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Play Section */}
      <section className="play-works container section">
        <div className="section-header flex justify-between items-end">
          <div>
            <h2>Play</h2>
            <p className="section-subtext">Here’s a peek at what I’ve been up to in 3D, AR/VR, and motion graphics!</p>
          </div>
          <Link to="/play" className="view-all-link">View all <ArrowRight size={16} /></Link>
        </div>

        <div className="work-grid">
          {playWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="play-card"
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
  );
};

export default Home;
