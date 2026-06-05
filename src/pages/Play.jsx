import { motion } from 'framer-motion';
import { playWorks } from '../data/portfolioData';

const Play = () => {
  return (
    <div className="container page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Playground</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px' }}>
          A collection of visual explorations, 3D experiments, and UI snippets I do for fun.
        </p>
      </motion.div>

      <div className="work-grid">
        {playWorks.map((work, index) => (
          <motion.div 
            key={work.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="work-card"
            style={{ borderRadius: '16px' }}
          >
            <div className="card-image" style={{ height: '400px' }}>
              <img src={work.image} alt={work.title} />
            </div>
            <div className="card-content" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{work.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{work.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Play;
