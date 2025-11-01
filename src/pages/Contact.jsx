import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32 font-montserrat">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Visit Us</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Come experience our yoga studio, coffee shop, and community space in person.
            </p>
            
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="flex">
                  <svg className="h-6 w-6 text-gray-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-medium">207 S. Prospect Road, Suite 2</p>
                    <p className="text-gray-600">Bloomington, IL 61704</p>
                  </div>
                </dd>
              </div>
              
              <div>
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <svg className="h-6 w-6 text-gray-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:info@theyogalab.org" className="text-black hover:text-gray-700">
                    info@theyogalab.org
                  </a>
                </dd>
              </div>
              
              <div>
                <dt className="sr-only">Social Media</dt>
                <dd className="flex">
                  <svg className="h-6 w-6 text-gray-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 8.025.01 7.052.048 6.08.085 5.431.222 4.877.42a5.918 5.918 0 0 0-2.135 1.39A5.918 5.918 0 0 0 .42 4.877C.222 5.431.085 6.08.048 7.052.01 8.025 0 8.396 0 12.017c0 3.624.01 3.994.048 4.967.037.973.174 1.622.372 2.176a5.918 5.918 0 0 0 1.39 2.135 5.918 5.918 0 0 0 2.135 1.39c.554.198 1.203.335 2.176.372.973.038 1.343.048 4.967.048 3.624 0 3.994-.01 4.967-.048.973-.037 1.622-.174 2.176-.372a5.918 5.918 0 0 0 2.135-1.39 5.918 5.918 0 0 0 1.39-2.135c.198-.554.335-1.203.372-2.176.038-.973.048-1.343.048-4.967 0-3.624-.01-3.994-.048-4.967-.037-.973-.174-1.622-.372-2.176a5.918 5.918 0 0 0-1.39-2.135A5.918 5.918 0 0 0 19.146.42c-.554-.198-1.203-.335-2.176-.372C16.997.01 16.627 0 13.003 0h-.986zm-.717 1.442h.718c3.136 0 3.506.01 4.465.048.952.037 1.47.171 1.814.284.456.177.78.389 1.122.731.342.342.554.666.731 1.122.113.344.247.862.284 1.814.038.959.048 1.329.048 4.465 0 3.136-.01 3.506-.048 4.465-.037.952-.171 1.47-.284 1.814a3.019 3.019 0 0 1-.731 1.122 3.019 3.019 0 0 1-1.122.731c-.344.113-.862.247-1.814.284-.959.038-1.329.048-4.465.048-3.136 0-3.506-.01-4.465-.048-.952-.037-1.47-.171-1.814-.284a3.019 3.019 0 0 1-1.122-.731 3.019 3.019 0 0 1-.731-1.122c-.113-.344-.247-.862-.284-1.814-.038-.959-.048-1.329-.048-4.465 0-3.136.01-3.506.048-4.465.037-.952.171-1.47.284-1.814.177-.456.389-.78.731-1.122.342-.342.666-.554 1.122-.731.344-.113.862-.247 1.814-.284.959-.038 1.329-.048 4.465-.048z" clipRule="evenodd" />
                  </svg>
                  <a href="http://www.instagram.com/yogalab.bn" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                    @yogalab.bn
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-black mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Welcoming yoga studio with classes for all levels
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-black mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Coffee shop with organic beverages and healthy snacks
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-black mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Community space for workshops and connection
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-black mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Convenient parking and accessible location
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
