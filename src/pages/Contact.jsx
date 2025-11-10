import ContactForm from '../components/ContactForm';
import { Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32 font-body">
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
            <div className="relative pl-6">
              {/* Left vertical line */}
              <div className="absolute left-0 top-[0.2em] bottom-[0.2em] w-[3px] bg-black"></div>
              
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Visit Us</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Come experience our yoga studio and coffee shop in person.
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
                    <Instagram className="h-6 w-6 text-gray-400 mr-3 mt-1" />
                    <a href="http://www.instagram.com/yogalab.bn" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                      @yogalab.bn
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 relative pl-6">
              {/* Left vertical line */}
              <div className="absolute left-0 top-[0.2em] bottom-[0.2em] w-[3px] bg-black"></div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 flex-shrink-0 text-black mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Welcoming yoga studio with classes for all levels
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 flex-shrink-0 text-black mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Coffee shop with organic beverages and healthy snacks
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 flex-shrink-0 text-black mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
