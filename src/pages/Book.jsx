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
            Join us for transformational yoga experiences. Choose from our variety of classes designed 
            to meet you where you are in your practice.
          </p>
        </div>

        {/* Mock Momence Widget Notice */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Mock Booking Widget:</strong> This is a placeholder for the Momence booking widget. 
                  Once you provide the Momence business ID and credentials, the actual booking calendar will appear here.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Momence Booking Widget */}
        <div className="mx-auto max-w-4xl mb-12">
          <MomenceWidget />
        </div>

        {/* Class Types Info */}
        <div className="mx-auto max-w-4xl mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Class Descriptions</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flow Classes</h3>
              <p className="text-gray-600">
                Dynamic sequences that link breath with movement. Perfect for building strength, 
                flexibility, and mindfulness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Power Yoga</h3>
              <p className="text-gray-600">
                Vigorous, fitness-based approach to yoga. Build strength and endurance while 
                maintaining mindful awareness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Yin & Restorative</h3>
              <p className="text-gray-600">
                Gentle, passive practices focused on deep relaxation and stress relief. 
                Perfect for balance and recovery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Beginner Classes</h3>
              <p className="text-gray-600">
                Learn fundamental poses, breathing techniques, and yoga philosophy in a 
                supportive, non-judgmental environment.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mx-auto max-w-2xl mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="mb-6">
              Contact us to book your first class or learn more about our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </a>
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
