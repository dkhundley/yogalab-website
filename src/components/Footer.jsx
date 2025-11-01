import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Classes', href: '/yoga' },
    { name: 'Coffee', href: '/coffee' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
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
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white font-montserrat">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            REGULATE, RELATE, REASON
          </h2>
          <p className="text-lg leading-8 text-gray-600 max-w-4xl mx-auto">
            We know that we work best when we are regulated and related, which is why we have set up our space to follow the sequence of the brain; regulate, relate, reason. In the yoga studio, you will experience a deeper level of physical and mental health through regulated movement and breathwork. In the coffee shop, you will meet new people and experience a sense of community wellness. In The Lab, you will have the opportunity to share your knowledge and expertise to support reasoning and critical thinking in our community.
          </p>
        </div>
        
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            207 S. Prospect Road, Suite 2<br />
            Bloomington, IL 61704
          </p>
        </div>

        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          Copyright 2021 Community Wellness Lab, LLC; Yoga Lab, DBA
        </p>
      </div>
    </footer>
  );
}
