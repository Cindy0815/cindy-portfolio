import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GlobalCursor from './components/GlobalCursor';
import { HeroIntroProvider } from './context/HeroIntroContext';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudiesIndex from './pages/CaseStudiesIndex';
import CaseStudyTemplate from './pages/CaseStudyTemplate';
import Play from './pages/Play';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalCursor />
      <HeroIntroProvider>
        <div className="flex flex-col min-h-screen">
          <NavigationBar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudiesIndex />} />
              <Route path="/case-studies/:id" element={<CaseStudyTemplate />} />
              <Route path="/play" element={<Play />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HeroIntroProvider>
    </Router>
  );
}

export default App;
