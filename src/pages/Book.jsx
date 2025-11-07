import { Link } from 'react-router-dom';
import MomenceWidget from '../components/MomenceWidget';

export default function Book() {
  return (
    <div className="bg-white py-24 sm:py-32 font-montserrat">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Book Your Class
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ready to join us? Select your class below and reserve your spot.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Want to learn more about our class offerings?{' '}
            <Link to="/classes" className="font-semibold text-gray-700 hover:text-black underline">
              View Class Descriptions
            </Link>
          </p>
        </div>

        {/* Momence Booking Widget */}
        <div className="mx-auto max-w-4xl w-full">
          <MomenceWidget />
        </div>

        {/* Contact CTA */}
        <div className="mx-auto max-w-2xl mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Questions About Booking?</h3>
            <p className="mb-6">
              Contact us if you need help choosing the right class or have any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:info@theyogalab.org"
                className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
