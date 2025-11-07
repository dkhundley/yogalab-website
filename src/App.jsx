// Importing the general React libraries and hooks
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing the Brand Context to manage active brand state
import { BrandProvider, useBrand, BRANDS } from './context/BrandContext';

// Importing various components and pages used in the application
import BrandSwitcher from './components/BrandSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import PrivateClasses from './pages/PrivateClasses';
import Coffee from './pages/Coffee';
import FAQ from './pages/FAQ';
import Book from './pages/Book';
import Order from './pages/Order';
import NewToYoga from './pages/NewToYoga';



// Defining the main application component
function AppContent() {

  // Setting the context of which brand is active
  const { activeBrand } = useBrand();

  // Updating the site title and favicon based on the active brand
  useEffect(() => {

    // Updating site title based on active brand
    document.title = activeBrand === BRANDS.LAB_COFFEE ? 'Lab Coffee' : 'Yoga Lab';
    
    // Updating the favicon based on active brand
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = activeBrand === BRANDS.LAB_COFFEE 
        ? '/icons/lab-coffee-favicon.svg' 
        : '/icons/yoga-lab-favicon.svg';
    }
  }, [activeBrand]);

  // Rendering the application structure with routing
  return (
    <div className="min-h-screen bg-white">

      {/* Loading in the "invisible" scroll-to-top component to ensure that the user sees the top of the page when navigating */}
      <ScrollToTop />

      {/* Loading in the top level "Brand Switcher" component to allow the user to navigate to either of the Yoga Lab or Lab Coffee Brands */}
      <BrandSwitcher />

      {/* Loading in the Header component which allows the user to navigate the site */}
      <Header />

      {/* Defining the main content area with routing to different pages, with "Home" being the default page that is displayed when the user first visits the site */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/private-classes" element={<PrivateClasses />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/book" element={<Book />} />
          <Route path="/order" element={<Order />} />
          <Route path="/new-to-yoga" element={<NewToYoga />} />
        </Routes>
      </main>

      {/* Loading in the Footer component which displays at the bottom of every page */}
      <Footer />
    </div>
  );
}



// Wrapping the AppContent with Router and BrandProvider
function App() {
  return (
    <Router>
      <BrandProvider>
        <AppContent />
      </BrandProvider>
    </Router>
  );
}



// Exporting the main App component as default (THIS IS THE FIRST THING THAT THE USER SEES!!!)
export default App;
