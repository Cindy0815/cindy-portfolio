import { motion } from 'framer-motion';
import { caseStudies, playWorks } from '../data/portfolioData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DesignerHero from '../components/DesignerHero';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <DesignerHero />

      {/* Featured Case Studies */}
      <section className="featured-work container section">
        <div className="section-header flex justify-between items-end">
          <div>
            <h2>Featured Works</h2>
            <p className="section-subtext">A look into my latest design case studies.</p>
          </div>
          <Link to="/case-studies" className="view-all-link">View all <ArrowRight size={16}/></Link>
        </div>
        
        <div className="work-grid">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="work-card"
            >
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
                    <span className="view-project-btn">View Project <ArrowRight size={16}/></span>
                  </div>
                </div>
              </Link>
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
          <Link to="/play" className="view-all-link">View all <ArrowRight size={16}/></Link>
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
              <Link to={`/play/${work.id}`}>
                <div className="play-card-image">
                  <img src={work.image} alt={work.title} />
                  <div className="play-card-overlay">
                    <h3>{work.title}</h3>
                    <p>{work.category}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="cta-footer container section">
        <div className="cta-content">
          <h2>Interested in working together?</h2>
          <p className="section-subtext">Feel free to reach out for collaborations or just a friendly hello!</p>
          <div className="cta-buttons">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary-hero">View Resume</a>
            <a href="mailto:hello@example.com" className="btn-secondary-hero">Let's Connect!</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
