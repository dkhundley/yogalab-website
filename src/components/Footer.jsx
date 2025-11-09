// Importing necessary libraries and components, including leveraging Lucide for social media icons
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { useBrand, BRANDS } from '../context/BrandContext';

// Defining the navigation structure for Yoga Lab
const yogaLabNavigation = [
  { name: 'Home', href: '/' },
  { name: 'New to Yoga', href: '/new-to-yoga' },
  { name: 'Class Offerings', href: '/classes' },
  { name: 'Private Classes', href: '/private-classes' },
  { name: 'FAQ', href: '/faq' },
  { name: 'About Us', href: '/about-yoga' },
];

// Defining the navigation structure for Lab Coffee
const labCoffeeNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/coffee' },
  { name: 'Locations', href: '/locations' },
  { name: 'About Us', href: '/about-coffee' },
  { name: 'Work With Us', href: '/work-with-us' },
];

// Defining the social media icons
const socialNavigation = [
  {
    name: 'Instagram',
    href: 'http://www.instagram.com/yogalab.bn',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'http://www.facebook.com/yogalab.bn',
    icon: Facebook,
  }
];



// Defining the Footer component which displays the footer section of the website
export default function Footer() {
  const { activeBrand } = useBrand();
  const isLabCoffee = activeBrand === BRANDS.LAB_COFFEE;
  const navigation = isLabCoffee ? labCoffeeNavigation : yogaLabNavigation;

  return (
    <footer className="bg-white font-montserrat">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">

        {/* Setting up the main footer text */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            REGULATE, RELATE, REASON
          </h2>
          <p className="text-lg leading-8 text-gray-600 max-w-4xl mx-auto">
            We know that we work best when we are regulated and related, which is why we have set up our space to follow the sequence of the brain; regulate, relate, reason. In the yoga studio, you will experience a deeper level of physical and mental health through regulated movement and breathwork. In the coffee shop, you will meet new people and experience a sense of community wellness. In The Lab, you will have the opportunity to share your knowledge and expertise to support reasoning and critical thinking in our community.
          </p>
        </div>

        {/* Setting up the footer address */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            207 S. Prospect Road, Suite 2<br />
            Bloomington, IL 61704
          </p>
        </div>

        {/* Setting up the navigation links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-12" aria-label="Footer">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Setting up the social media icons */}
        <div className="mt-10 flex justify-center space-x-10">
          {socialNavigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        
        {/* Setting up the copyright text */}
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          Copyright 2021 Community Wellness Lab, LLC; Yoga Lab, DBA
        </p>
      </div>
    </footer>
  );
}
