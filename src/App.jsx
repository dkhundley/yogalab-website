// Importing the general React libraries and hooks
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importing the Brand Context to manage active brand state
import { BrandProvider, useBrand, BRANDS } from './context/BrandContext';

const coffeeRoutes = new Set([
  '/coffee',
  '/about-coffee',
  '/locations',
  '/work-with-us',
  '/order',
]);

const yogaRoutes = new Set([
  '/classes',
  '/private-classes',
  '/teacher-training',
  '/about-yoga',
  '/new-to-yoga',
  '/faq',
  '/book',
  '/contact-us',
  '/gift-cards',
]);

// Importing various components and pages used in the application
import BrandSwitcher from './components/BrandSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutYoga from './pages/AboutYoga';
import AboutCoffee from './pages/AboutCoffee';
import Classes from './pages/Classes';
import PrivateClasses from './pages/PrivateClasses';
import YogaTeacherTraining from './pages/YogaTeacherTraining';
import Coffee from './pages/Coffee';
import FAQ from './pages/FAQ';
import Book from './pages/Book';
import Order from './pages/Order';
import NewToYoga from './pages/NewToYoga';
import Locations from './pages/Locations';
import WorkWithUs from './pages/WorkWithUs';
import Contact from './pages/Contact';
import GiftCards from './pages/GiftCards';



// Defining the main application component
function AppContent() {

  // Setting the context of which brand is active
  const { activeBrand, setActiveBrand } = useBrand();
  const location = useLocation();

  useEffect(() => {
    if (coffeeRoutes.has(location.pathname) && activeBrand !== BRANDS.LAB_COFFEE) {
      setActiveBrand(BRANDS.LAB_COFFEE);
      return;
    }

    if (yogaRoutes.has(location.pathname) && activeBrand !== BRANDS.YOGA_LAB) {
      setActiveBrand(BRANDS.YOGA_LAB);
    }
  }, [location.pathname, activeBrand, setActiveBrand]);

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
          <Route path="/about-yoga" element={<AboutYoga />} />
          <Route path="/about-coffee" element={<AboutCoffee />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/private-classes" element={<PrivateClasses />} />
          <Route path="/teacher-training" element={<YogaTeacherTraining />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/book" element={<Book />} />
          <Route path="/order" element={<Order />} />
          <Route path="/new-to-yoga" element={<NewToYoga />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/gift-cards" element={<GiftCards />} />
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
