import { motion } from 'framer-motion';
import { caseStudies } from '../data/portfolioData';
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
    </div>
  );
};

export default Home;
