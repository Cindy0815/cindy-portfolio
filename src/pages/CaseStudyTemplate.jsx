import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';
import { useState, useEffect } from 'react';
import './CaseStudyTemplate.css';

const CaseStudyTemplate = () => {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!study || !study.sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is near the top
        threshold: 0
      }
    );

    study.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [study]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -120; // Account for the sticky progress bar height
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!study) {
    return (
      <div className="container section">
        <h2>Case Study Not Found</h2>
        <Link to="/case-studies" className="back-link">Return to all work</Link>
      </div>
    );
  }

  return (
    <motion.article 
      className="case-study-template"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sticky Progress Bar */}
      {study.sections && study.sections.length > 0 && (
        <nav className="cs-progress-bar">
          <div className="container progress-container">
            <ul className="progress-nav-list">
              {study.sections.map((section) => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`} 
                    className={`progress-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, section.id)}
                  >
                    <span className="progress-indicator"></span>
                    <span className="progress-text">{section.subtitle.split(' / ')[1] || section.subtitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <header className="cs-hero container section">
        <Link to="/case-studies" className="back-link">
          <ArrowLeft size={16} /> Back to Work
        </Link>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="cs-title"
        >
          {study.title}
        </motion.h1>
        
        <div className="cs-meta">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">{study.role}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Timeline</span>
            <span className="meta-value">{study.timeline}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Tools</span>
            <span className="meta-value">{study.tools.join(", ")}</span>
          </div>
        </div>
      </header>

      {/* Hero Cover Image */}
      <motion.div 
        className="cs-cover"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <img src={study.headerImage || study.coverImage} alt={`${study.title} cover`} />
      </motion.div>

      {/* Content Body */}
      <div className="cs-body container">
        {study.sections && study.sections.map((section) => (
          <section key={section.id} id={section.id} className="cs-dynamic-section">
            <div className="section-subtitle">{section.subtitle}</div>
            
            <div className="section-content-blocks">
              {section.content && section.content.map((block, index) => (
                <div key={index} className="content-block">
                  {block.heading && <h2 className="section-heading">{block.heading}</h2>}
                  
                  {block.paragraphs && block.paragraphs.length > 0 && (
                    <div className="section-paragraphs">
                      {block.paragraphs.map((text, i) => (
                        <p key={i}>{text}</p>
                      ))}
                    </div>
                  )}

                  {block.image && (
                    <div className="section-image-wrapper">
                      <img src={block.image} alt={block.heading || `section image ${index}`} className="section-image" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="cs-footer container section text-center">
        <h2>Next Project</h2>
        <Link to="/case-studies" className="primary-btn mt-4">
          View more case studies
        </Link>
      </div>
    </motion.article>
  );
};

export default CaseStudyTemplate;
