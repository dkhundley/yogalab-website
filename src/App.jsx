import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrandProvider, useBrand, BRANDS } from './context/BrandContext';
import BrandSwitcher from './components/BrandSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Yoga from './pages/Yoga';
import Classes from './pages/Classes';
import Coffee from './pages/Coffee';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Book from './pages/Book';
import Order from './pages/Order';

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
      <ScrollToTop />
      <BrandSwitcher />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/book" element={<Book />} />
          <Route path="/order" element={<Order />} />
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
