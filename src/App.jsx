import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrandProvider, useBrand, BRANDS } from './context/BrandContext';
import BrandSwitcher from './components/BrandSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Yoga from './pages/Yoga';
import Coffee from './pages/Coffee';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Book from './pages/Book';

function AppContent() {
  const { activeBrand } = useBrand();

  useEffect(() => {
    document.title = activeBrand === BRANDS.LAB_COFFEE ? 'Lab Coffee' : 'Yoga Lab';
    
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = activeBrand === BRANDS.LAB_COFFEE 
        ? '/icons/lab-coffee-favicon.svg' 
        : '/icons/yoga-lab-favicon.svg';
    }
  }, [activeBrand]);

  return (
    <div className="min-h-screen bg-white">
      <BrandSwitcher />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <BrandProvider>
        <AppContent />
      </BrandProvider>
    </Router>
  );
}

export default App;
