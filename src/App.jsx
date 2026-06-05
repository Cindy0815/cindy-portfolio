import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudiesIndex from './pages/CaseStudiesIndex';
import CaseStudyTemplate from './pages/CaseStudyTemplate';
import Play from './pages/Play';

function App() {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudiesIndex />} />
          <Route path="/case-studies/:id" element={<CaseStudyTemplate />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
