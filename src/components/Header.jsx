import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrand, BRANDS } from '../context/BrandContext';

const yogaLabNavigation = [
  { name: 'Home', href: '/' },
  { name: 'New to Yoga', href: '/new-to-yoga' },
  { 
    name: 'Classes', 
    href: '/classes',
    submenu: [
      { name: 'Class Offerings', href: '/classes' },
      { name: 'Private Classes', href: '/private-classes' },
      { name: 'Yoga Teacher Training', href: '/teacher-training' }
    ]
  },
  { name: 'FAQ', href: '/faq' },
  { name: 'About Us', href: '/about-yoga' },
];

const labCoffeeNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/coffee' },
  { name: 'Locations', href: '/locations' },
  { name: 'About Us', href: '/about-coffee' },
  { name: 'Work With Us', href: '/work-with-us' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
  const { activeBrand } = useBrand();
  const isLabCoffee = activeBrand === BRANDS.LAB_COFFEE;
  const navigation = isLabCoffee ? labCoffeeNavigation : yogaLabNavigation;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 30; // Require 50px of scrolling up to show header
      
      // Show header when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Show header when scrolling up past threshold
      else if (currentScrollY < lastScrollY - scrollThreshold) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className={`${isLabCoffee ? 'bg-black' : 'bg-white'} shadow-sm sticky top-0 z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-8 p-4 lg:px-8" aria-label="Global">
          <div className="flex">
            <Link to="/" className="-m-1.5 p-2.5">
              {isLabCoffee ? (
                <div className="flex items-center gap-4">
                  <img 
                    src="/icons/lab-coffee-logo-white.svg" 
                    alt="Lab Coffee Logo" 
                    className="h-8 w-auto -mt-1"
                  />
                  <span className="text-2xl font-heading text-white">
                    Lab Coffee
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <img 
                    src="/icons/yoga-lab-logo.svg" 
                    alt="Yoga Lab Logo" 
                    className="h-10 w-auto -mt-1"
                  />
                  <span className="text-2xl font-heading text-gray-900">
                    Yoga Lab
                  </span>
                </div>
              )}
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
                isLabCoffee 
                  ? 'text-white hover:bg-gray-900' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isLabCoffee ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'rgb(55, 65, 81)' }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => item.submenu && setActiveDropdown(null)}
              >
                <Link 
                  to={item.href} 
                  className={`relative text-sm font-semibold leading-6 transition-colors font-body tracking-wide group flex items-center gap-1 ${
                    isLabCoffee 
                      ? 'text-white hover:text-gray-300' 
                      : 'text-gray-900 hover:text-black'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                  <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                    isLabCoffee ? 'bg-white' : 'bg-black'
                  }`}></span>
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-2 z-50">
                    <div className={`rounded-lg shadow-lg border py-2 min-w-[200px] ${
                      isLabCoffee 
                        ? 'bg-black border-gray-700' 
                        : 'bg-white border-gray-200'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors font-body ${
                            isLabCoffee 
                              ? 'text-white hover:bg-gray-900 hover:text-gray-300' 
                              : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex">
            {isLabCoffee ? (
              <Link
                to="/order"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors font-body"
              >
                Order Now
              </Link>
            ) : (
              <Link
                to="/book"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors font-body"
              >
                Book Your Class
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop with fade-in animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm" 
              style={{ zIndex: 9998 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu panel with slide-in animation */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`lg:hidden fixed inset-y-0 right-0 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 ${
                isLabCoffee 
                  ? 'bg-black sm:ring-gray-700' 
                  : 'bg-white sm:ring-gray-900/10'
              }`}
              style={{ zIndex: 9999 }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex items-center justify-between"
              >
                <Link to="/" className="-m-1.5 p-2.5" onClick={() => setMobileMenuOpen(false)}>
                  {isLabCoffee ? (
                    <div className="flex items-center gap-3">
                      <img 
                        src="/icons/lab-coffee-logo-white.svg" 
                        alt="Lab Coffee Logo" 
                        className="h-7 w-auto -mt-1"
                      />
                      <span className="text-xl font-heading text-white">
                        Lab Coffee
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <img 
                        src="/icons/yoga-lab-logo.svg" 
                        alt="Yoga Lab Logo" 
                        className="h-9 w-auto -mt-1"
                      />
                      <span className="text-xl font-heading text-gray-900">
                        Yoga Lab
                      </span>
                    </div>
                  )}
                </Link>
                <button
                  type="button"
                  className={`-m-2.5 rounded-md p-2.5 transition-all duration-200 ${
                    isLabCoffee 
                      ? 'text-white hover:bg-gray-900' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </motion.div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: index * 0.1 + 0.2,
                          duration: 0.4 
                        }}
                      >
                        {item.submenu ? (
                          <div>
                            <button
                              onClick={() => setMobileExpandedItem(mobileExpandedItem === item.name ? null : item.name)}
                              className={`-mx-3 w-full flex items-center gap-1 rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all duration-200 font-body ${
                                isLabCoffee 
                                  ? 'text-white hover:bg-gray-900' 
                                  : 'text-gray-900 hover:bg-gray-50'
                              }`}
                            >
                              <span>{item.name}</span>
                              <ChevronDownIcon className={`h-5 w-5 transition-transform ${mobileExpandedItem === item.name ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileExpandedItem === item.name && (
                              <div className="ml-4 mt-2 space-y-2">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className={`block rounded-lg px-3 py-2 text-sm font-medium leading-7 transition-all duration-200 font-body ${
                                      isLabCoffee 
                                        ? 'text-gray-300 hover:bg-gray-900' 
                                        : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all duration-200 hover:translate-x-1 font-body ${
                              isLabCoffee 
                                ? 'text-white hover:bg-gray-900' 
                                : 'text-gray-900 hover:bg-gray-50'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: navigation.length * 0.1 + 0.2,
                      duration: 0.4 
                    }}
                    className="py-6"
                  >
                    {isLabCoffee ? (
                      <Link
                        to="/order"
                        className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 transition-all duration-200 hover:translate-x-1 font-body ${
                          isLabCoffee 
                            ? 'text-white hover:bg-gray-900' 
                            : 'text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Order Now
                      </Link>
                    ) : (
                      <Link
                        to="/book"
                        className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 transition-all duration-200 hover:translate-x-1 font-body ${
                          isLabCoffee 
                            ? 'text-white hover:bg-gray-900' 
                            : 'text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Book Your Class
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
