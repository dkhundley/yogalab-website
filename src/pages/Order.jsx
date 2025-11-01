export default function Order() {
  return (
    <div className="bg-white font-montserrat">
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-black">ORDER AHEAD</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lab Coffee Online Ordering
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Skip the line! Order your favorite coffee, tea, or açai bowl ahead of time 
              for pickup at our Bloomington location.
            </p>
          </div>
        </div>
      </div>

      {/* Square Online Ordering Embed - Full Width */}
      <div className="w-full">
        <div className="relative w-full" style={{ paddingBottom: '100%', minHeight: '800px' }}>
          <iframe
            src="https://labcoffeebn.square.site"
            className="absolute top-0 left-0 w-full h-full border-0"
            title="Lab Coffee Online Ordering"
            style={{ minHeight: '800px' }}
            allowFullScreen
          />
        </div>
      </div>

      {/* Helpful Information */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Orders are typically ready in 10-15 minutes during regular hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Pick up at our Bloomington location</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  <span>Secure payment through Square</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>You'll receive an email confirmation with your order details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
