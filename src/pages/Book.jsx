const classSchedule = [
  {
    day: 'Monday',
    classes: [
      { time: '7:00 AM', name: 'Morning Flow', instructor: 'Sarah', level: 'All Levels' },
      { time: '12:00 PM', name: 'Lunch Break Yoga', instructor: 'Mike', level: 'Beginner' },
      { time: '6:00 PM', name: 'Evening Restore', instructor: 'Emma', level: 'All Levels' },
    ]
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '8:00 AM', name: 'Power Yoga', instructor: 'Jake', level: 'Intermediate' },
      { time: '5:30 PM', name: 'Gentle Flow', instructor: 'Sarah', level: 'Beginner' },
      { time: '7:00 PM', name: 'Vinyasa Flow', instructor: 'Emma', level: 'All Levels' },
    ]
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '7:00 AM', name: 'Morning Flow', instructor: 'Mike', level: 'All Levels' },
      { time: '12:00 PM', name: 'Mindful Movement', instructor: 'Sarah', level: 'All Levels' },
      { time: '6:30 PM', name: 'Yin Yoga', instructor: 'Emma', level: 'All Levels' },
    ]
  },
  {
    day: 'Thursday',
    classes: [
      { time: '8:00 AM', name: 'Power Flow', instructor: 'Jake', level: 'Intermediate' },
      { time: '5:30 PM', name: 'Beginner Basics', instructor: 'Sarah', level: 'Beginner' },
      { time: '7:00 PM', name: 'Flow & Meditation', instructor: 'Mike', level: 'All Levels' },
    ]
  },
  {
    day: 'Friday',
    classes: [
      { time: '7:00 AM', name: 'Friday Flow', instructor: 'Emma', level: 'All Levels' },
      { time: '12:00 PM', name: 'Lunch Stretch', instructor: 'Sarah', level: 'All Levels' },
      { time: '6:00 PM', name: 'Weekend Prep Flow', instructor: 'Jake', level: 'All Levels' },
    ]
  },
  {
    day: 'Saturday',
    classes: [
      { time: '9:00 AM', name: 'Saturday Morning Flow', instructor: 'Mike', level: 'All Levels' },
      { time: '10:30 AM', name: 'Power Yoga', instructor: 'Jake', level: 'Intermediate' },
      { time: '4:00 PM', name: 'Restorative Yoga', instructor: 'Emma', level: 'All Levels' },
    ]
  },
  {
    day: 'Sunday',
    classes: [
      { time: '9:00 AM', name: 'Sunday Slow Flow', instructor: 'Sarah', level: 'All Levels' },
      { time: '11:00 AM', name: 'Family Yoga', instructor: 'Emma', level: 'All Ages' },
      { time: '5:00 PM', name: 'Sunday Evening Restore', instructor: 'Mike', level: 'All Levels' },
    ]
  },
];

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

        {/* Booking Notice */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">
                  <strong>Booking Information:</strong> This is a demo version of the Yoga Lab website. 
                  To book actual classes, please contact us directly at{' '}
                  <a href="mailto:info@theyogalab.org" className="font-medium underline">
                    info@theyogalab.org
                  </a>{' '}
                  or visit us at our Bloomington location.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Weekly Schedule</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {classSchedule.map((day) => (
              <div key={day.day} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {day.day}
                </h3>
                <div className="space-y-4">
                  {day.classes.map((classInfo, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{classInfo.name}</h4>
                          <p className="text-sm text-gray-600">with {classInfo.instructor}</p>
                        </div>
                        <span className="text-sm font-medium text-black">{classInfo.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {classInfo.level}
                        </span>
                        <button 
                          className="text-sm text-black hover:text-gray-700 font-medium"
                          onClick={() => alert('Please contact us directly to book this class!')}
                        >
                          Book Class
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
