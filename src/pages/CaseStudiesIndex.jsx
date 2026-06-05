import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/portfolioData';

const CaseStudiesIndex = () => {
  return (
    <div className="container section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Selected Works</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px' }}>
          A deeper dive into my process, the problems I've solved, and the value I've delivered.
        </p>
      </motion.div>

      <div className="work-grid">
        {caseStudies.map((study, index) => (
          <motion.div 
            key={study.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="work-card"
          >
            <Link to={`/case-studies/${study.id}`}>
              <div className="card-image">
                <img src={study.coverImage} alt={study.title} />
              </div>
              <div className="card-content">
                <h3>{study.title}</h3>
                <p>{study.shortDescription}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesIndex;
