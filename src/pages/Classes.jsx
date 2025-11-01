import { Link } from 'react-router-dom';

export default function Classes() {
  const classOfferings = [
    {
      title: 'Power and Heat Yoga',
      temperature: '95-100°F',
      level: 'Intermediate to Advanced',
      description: 'Experience an intense, dynamic practice in a heated room. This vigorous style combines powerful sequences with heat to deepen your practice, increase flexibility, and build incredible strength. The elevated temperature helps warm muscles for deeper stretches and promotes detoxification through sweating.',
      benefits: [
        'Enhanced flexibility and range of motion',
        'Increased cardiovascular endurance',
        'Deep muscle engagement and toning',
        'Stress relief through intense physical challenge',
        'Improved focus and mental clarity'
      ]
    },
    {
      title: 'Power Yoga',
      temperature: 'Room Temperature',
      level: 'All Levels',
      description: 'A fitness-based approach to vinyasa-style yoga that builds strength, flexibility, and stamina. Power yoga features athletic yoga poses with a focus on building core strength and improving balance. This challenging practice flows from one pose to another, building heat internally without external temperature.',
      benefits: [
        'Builds lean muscle and core strength',
        'Improves balance and coordination',
        'Increases mental resilience',
        'Burns calories and boosts metabolism',
        'Develops body awareness and control'
      ]
    },
    {
      title: 'Gentle Yoga',
      temperature: 'Room Temperature',
      level: 'Beginners & All Levels',
      description: 'A nurturing, accessible practice perfect for beginners, those recovering from injury, or anyone seeking a slower-paced class. Gentle yoga emphasizes breath awareness, proper alignment, and mindful movement. Poses are held longer with modifications offered to meet you exactly where you are.',
      benefits: [
        'Reduces stress and anxiety',
        'Improves flexibility gradually and safely',
        'Enhances mind-body connection',
        'Suitable for all fitness levels',
        'Promotes relaxation and better sleep'
      ]
    },
    {
      title: 'Warm Yin Yoga',
      temperature: '85-90°F',
      level: 'All Levels',
      description: 'A meditative practice that combines the deep tissue benefits of Yin yoga with gentle warmth. Poses are held for 3-5 minutes in a comfortably heated room, targeting the connective tissues, fascia, and joints. This practice encourages stillness and introspection while the warmth helps muscles relax more deeply.',
      benefits: [
        'Deep release of tension and stress',
        'Improved flexibility in joints and connective tissue',
        'Enhanced circulation',
        'Meditative and calming for the nervous system',
        'Complements more active yoga practices'
      ]
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32 font-montserrat">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-black">REGULATE</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Class Offerings
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your yoga mat is a laboratory. How you show up on your yoga mat, is how you show up in your life. 
            Strength in your yoga practice translates to strength in your life.
          </p>
        </div>

        {/* Features Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84a14.98 14.98 0 012.58 5.84M15.59 14.37A14.926 14.926 0 0117.17 8.41M15.59 14.37L17.17 8.41" />
                  </svg>
                </div>
                Mindful Movement
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Each class is designed to help you connect with your body and breath.
              </dd>
            </div>
            
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                Strength Building
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Develop physical and mental strength through consistent practice. Build resilience that extends 
                far beyond your yoga mat into all areas of your life.
              </dd>
            </div>
            
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                Community Practice
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Join a supportive community of practitioners. Share your journey with others and find 
                encouragement in a welcoming, inclusive environment.
              </dd>
            </div>
            
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                Personal Growth
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Discover transformational tools that help you access your inner wisdom and strength. 
                Every practice is an opportunity for growth and self-discovery.
              </dd>
            </div>
          </dl>
        </div>

        {/* Class Descriptions Section */}
        <div className="mx-auto max-w-2xl text-center mt-24 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Our Class Types
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover the perfect practice for your journey. Each class is designed to meet you 
            where you are and support your growth on and off the mat.
          </p>
        </div>

        {/* Class Cards */}
        <div className="mx-auto max-w-5xl space-y-12">
          {classOfferings.map((classItem, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {classItem.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                      {classItem.temperature}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
                      {classItem.level}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {classItem.description}
              </p>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h3>
                <ul className="space-y-2">
                  {classItem.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <svg 
                        className="h-6 w-6 text-black flex-shrink-0 mr-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M4.5 12.75l6 6 9-13.5" 
                        />
                      </svg>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-2xl mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
            <p className="mb-6">
              Book your first class today and experience the transformative power of yoga.
            </p>
            <Link
              to="/book"
              className="inline-block rounded-md bg-white px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-50 transition-colors"
            >
              Book Your Class
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mx-auto max-w-3xl mt-12 text-center">
          <p className="text-sm text-gray-600">
            Not sure which class is right for you? We're here to help!{' '}
            <Link to="/contact" className="font-semibold text-gray-900 hover:text-black underline">
              Contact us
            </Link>{' '}
            with any questions or to schedule a consultation with one of our instructors.
          </p>
        </div>
      </div>
    </div>
  );
}
