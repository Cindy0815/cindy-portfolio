import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '8rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>About Me</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p>
            Hello! I'm Cindy, a multidisciplinary designer specializing in UX/UI design. I bridge the gap between human needs and business goals to create intuitive, delightful digital experiences.
          </p>
          <p>
            My background in psychology combined with my passion for visual design allows me to craft products that not only look stunning but feel completely natural to use.
          </p>
          
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>Skills</h2>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0 }}>
            {['UX Design', 'UI Design', 'Prototyping', 'User Research', 'Design Systems', 'Framer', 'Webflow'].map(skill => (
              <li key={skill} style={{ 
                padding: '0.5rem 1rem', 
                background: 'var(--surface-color)', 
                borderRadius: '100px',
                fontSize: '1rem',
                color: 'var(--text-primary)'
              }}>
                {skill}
              </li>
            ))}
          </ul>
          
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Let's talk!</h2>
            <p>I'm currently looking for new opportunities.</p>
            <a href="mailto:hello@example.com" className="primary-btn" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              hello@example.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
