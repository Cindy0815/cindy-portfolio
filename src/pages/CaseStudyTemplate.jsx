import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';
import './CaseStudyTemplate.css';

const CaseStudyTemplate = () => {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);

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
        <img src={study.coverImage} alt={`${study.title} cover`} />
      </motion.div>

      {/* Content Body */}
      <div className="cs-body container">
        <section className="cs-section">
          <h2>Overview</h2>
          <p>{study.overview}</p>
        </section>

        <section className="cs-section">
          <h2>The Problem</h2>
          <p className="highlight-text">{study.problemStatement}</p>
        </section>

        <section className="cs-section">
          <h2>Design Process</h2>
          <div className="process-list">
            {study.process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">0{index + 1}</div>
                <div className="step-content">
                  <h3>{step.phase}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <h2>Outcomes & Learnings</h2>
          <p>{study.outcomes}</p>
        </section>
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
