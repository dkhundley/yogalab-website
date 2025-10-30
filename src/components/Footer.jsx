import { Link } from 'react-router-dom';

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
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'http://www.facebook.com/yogalab.bn',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.99 3.66 9.13 8.44 9.86v-6.99h-2.54v-2.87h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63
            1.56v1.87h2.78l-.44 2.87h-2.34v6.99c4.78-.73 8.44-4.87 8.44-9.86 0-5.5-4.46-9.96-9.96-9.96z"
            clipRule="evenodd"
          />
        </svg>
      ),
    }
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
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
