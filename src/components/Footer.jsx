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
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 8.025.01 7.052.048 6.08.085 5.431.222 4.877.42a5.918 5.918 0 0 0-2.135 1.39A5.918 5.918 0 0 0 .42 4.877C.222 5.431.085 6.08.048 7.052.01 8.025 0 8.396 0 12.017c0 3.624.01 3.994.048 4.967.037.973.174 1.622.372 2.176a5.918 5.918 0 0 0 1.39 2.135 5.918 5.918 0 0 0 2.135 1.39c.554.198 1.203.335 2.176.372.973.038 1.343.048 4.967.048 3.624 0 3.994-.01 4.967-.048.973-.037 1.622-.174 2.176-.372a5.918 5.918 0 0 0 2.135-1.39 5.918 5.918 0 0 0 1.39-2.135c.198-.554.335-1.203.372-2.176.038-.973.048-1.343.048-4.967 0-3.624-.01-3.994-.048-4.967-.037-.973-.174-1.622-.372-2.176a5.918 5.918 0 0 0-1.39-2.135A5.918 5.918 0 0 0 19.146.42c-.554-.198-1.203-.335-2.176-.372C16.997.01 16.627 0 13.003 0h-.986zm-.717 1.442h.718c3.136 0 3.506.01 4.465.048.952.037 1.47.171 1.814.284.456.177.78.389 1.122.731.342.342.554.666.731 1.122.113.344.247.862.284 1.814.038.959.048 1.329.048 4.465 0 3.136-.01 3.506-.048 4.465-.037.952-.171 1.47-.284 1.814a3.019 3.019 0 0 1-.731 1.122 3.019 3.019 0 0 1-1.122.731c-.344.113-.862.247-1.814.284-.959.038-1.329.048-4.465.048-3.136 0-3.506-.01-4.465-.048-.952-.037-1.47-.171-1.814-.284a3.019 3.019 0 0 1-1.122-.731 3.019 3.019 0 0 1-.731-1.122c-.113-.344-.247-.862-.284-1.814-.038-.959-.048-1.329-.048-4.465 0-3.136.01-3.506.048-4.465.037-.952.171-1.47.284-1.814.177-.456.389-.78.731-1.122.342-.342.666-.554 1.122-.731.344-.113.862-.247 1.814-.284.959-.038 1.329-.048 4.465-.048z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
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
