import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrand, BRANDS } from '../context/BrandContext';

const yogaLabNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Class Offerings', href: '/classes' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const labCoffeeNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/coffee' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeBrand } = useBrand();
  const isLabCoffee = activeBrand === BRANDS.LAB_COFFEE;
  const navigation = isLabCoffee ? labCoffeeNavigation : yogaLabNavigation;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-2.5">
            {isLabCoffee ? (
              <div className="flex items-center gap-4">
                <img 
                  src="/icons/lab-coffee-logo.png" 
                  alt="Lab Coffee Logo" 
                  className="h-8 w-auto -mt-1"
                />
                <span className="text-2xl font-lulo-bold text-gray-900">
                  Lab Coffee
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <img 
                  src="/icons/yoga-lab-logo.png" 
                  alt="Yoga Lab Logo" 
                  className="h-10 w-auto -mt-1"
                />
                <span className="text-2xl font-lulo-bold text-gray-900">
                  Yoga Lab
                </span>
              </div>
            )}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-black transition-colors font-montserrat">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLabCoffee ? (
            <Link
              to="/order"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors font-montserrat"
            >
              Order Now
            </Link>
          ) : (
            <Link
              to="/book"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors font-montserrat"
            >
              Book Your Class
            </Link>
          )}
        </div>
      </nav>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop with fade-in animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu panel with slide-in animation */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
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
                        src="/icons/lab-coffee-logo.png" 
                        alt="Lab Coffee Logo" 
                        className="h-7 w-auto -mt-1"
                      />
                      <span className="text-xl font-lulo-bold text-gray-900">
                        Lab Coffee
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <img 
                        src="/icons/yoga-lab-logo.png" 
                        alt="Yoga Lab Logo" 
                        className="h-9 w-auto -mt-1"
                      />
                      <span className="text-xl font-lulo-bold text-gray-900">
                        Yoga Lab
                      </span>
                    </div>
                  )}
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-all duration-200"
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
                        <Link
                          to={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-all duration-200 hover:translate-x-1 font-montserrat"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
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
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-all duration-200 hover:translate-x-1 font-montserrat"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Order Now
                      </Link>
                    ) : (
                      <Link
                        to="/book"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-all duration-200 hover:translate-x-1 font-montserrat"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Book Your Class
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
