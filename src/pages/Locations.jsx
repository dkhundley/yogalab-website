import { Link } from 'react-router-dom';

const locations = [
  {
    name: 'Bloomington Location',
    address: '207 S. Prospect Road, Suite 2',
    city: 'Bloomington, IL 61704',
    hours: {
      weekdays: 'Monday - Friday: 7:00 AM - 6:00 PM',
      saturday: 'Saturday: 8:00 AM - 5:00 PM',
      sunday: 'Sunday: 9:00 AM - 4:00 PM'
    },
    features: [
      'Full coffee and tea menu',
      'Fresh açai bowls daily',
      'Indoor seating with WiFi',
      'Adjacent to Yoga Lab',
      'Private event space available'
    ],
    phone: '(309) 555-0123',
    email: 'bloomington@labcoffee.com'
  },
  {
    name: 'Normal Location',
    address: '123 Main Street',
    city: 'Normal, IL 61761',
    hours: {
      weekdays: 'Monday - Friday: 6:30 AM - 7:00 PM',
      saturday: 'Saturday: 7:00 AM - 6:00 PM',
      sunday: 'Sunday: 8:00 AM - 5:00 PM'
    },
    features: [
      'Full coffee and tea menu',
      'Fresh açai bowls daily',
      'Outdoor patio seating',
      'Drive-through available',
      'Study-friendly atmosphere'
    ],
    phone: '(309) 555-0124',
    email: 'normal@labcoffee.com'
  }
];

export default function Locations() {
  return (
    <div className="bg-white py-24 sm:py-32 font-body">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-subheading leading-7 text-black">VISIT US</h2>
          <p className="mt-2 text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
            Our Locations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find your nearest Lab Coffee location and join our community. Each space is designed 
            to foster connection and provide a welcoming environment for all.
          </p>
        </div>

        {/* Locations */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {locations.map((location) => (
              <div key={location.name} className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{location.name}</h3>
                
                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-2">
                    <svg className="h-6 w-6 text-black shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-semibold">{location.address}</p>
                      <p className="text-gray-900">{location.city}</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-black shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-semibold mb-1">Hours</p>
                      <p className="text-gray-600 text-sm">{location.hours.weekdays}</p>
                      <p className="text-gray-600 text-sm">{location.hours.saturday}</p>
                      <p className="text-gray-600 text-sm">{location.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-black shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-semibold mb-1">Contact</p>
                      <p className="text-gray-600 text-sm">{location.phone}</p>
                      <p className="text-gray-600 text-sm">{location.email}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-black shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-semibold mb-2">Features</p>
                      <ul className="space-y-1">
                        {location.features.map((feature) => (
                          <li key={feature} className="text-gray-600 text-sm">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <p className="text-gray-500 text-sm">Map Coming Soon</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="flex-1 text-center rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
                  >
                    Get Directions
                  </a>
                  <Link
                    to="/order"
                    className="flex-1 text-center rounded-md border-2 border-black px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    Order Ahead
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-black text-white rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-heading mb-4">
              Can't Visit In Person?
            </h3>
            <p className="text-lg text-gray-200 mb-8">
              Order online for pickup at either location, or explore our full menu to plan your next visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/order"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 transition-colors"
              >
                Order Online
              </Link>
              <Link
                to="/coffee"
                className="rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/10 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Questions About Our Locations?
          </h3>
          <p className="text-gray-600 mb-6">
            Each location has its own unique charm and community. Feel free to reach out if you'd like 
            to learn more about hosting events, booking our private spaces, or anything else.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 text-black font-semibold hover:underline"
          >
            Contact Us
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
