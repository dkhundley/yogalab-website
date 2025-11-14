import { Link } from 'react-router-dom';

export default function PrivateClasses() {
  const privateOptions = [
    {
      title: 'Individual Private Classes',
      duration: '60 or 90 minutes',
      participants: '1 Person',
      description: 'Experience deeply personalized yoga instruction tailored specifically to your body, goals, and experience level. Whether you\'re recovering from an injury, are pregnant or in postpartum, or simply want undivided attention to refine your practice, private sessions offer the ultimate in customized guidance.',
      idealFor: [
        'Beginners seeking a solid foundation',
        'Injury recovery',
        'Advanced practitioners refining technique',
        'Athletes cross-training with yoga',
        'Prenatal and postnatal students'
      ]
    },
    {
      title: 'Group Private Classes',
      duration: '60 or 90 minutes',
      participants: '2+ People',
      description: 'Gather your friends, family, or colleagues for a semi-private yoga experience. Group sessions combine the benefits of personalized attention with the energy and motivation of practicing together. Perfect for connecting while working toward shared wellness goals.',
      idealFor: [
        'Friends wanting to practice together',
        'Corporate groups',
        'Wedding parties and special events',
        'Atheltic teams',
        'Families',
        'Study groups'
      ]
    },
    {
      title: 'Special Events & Workshops',
      duration: 'Customizable',
      participants: 'Flexible',
      description: 'Create a memorable experience with a custom yoga event tailored to your occasion. From birthday celebrations and bridal showers to corporate retreats and community gatherings, we design unique sessions that include movement, acai + coffee, and connection.',
      idealFor: [
        'Birthday and milestone celebrations',
        'Bachelorette and bridal parties',
        'Corporate team building',
        'Community events',
        'Wellness retreats and workshops'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Personalized Attention',
      description: 'Receive instruction tailored specifically to your body, goals, and experience level with modifications that work for you.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      title: 'Flexible Scheduling',
      description: 'Choose times that work best for your schedule. We accommodate daytime, week night, or weekend class times.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      )
    },
    {
      title: 'Custom Focus Areas',
      description: 'Work on specific goals like flexibility, strength, and stress management with targeted guidance.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    },
    {
      title: 'Your Location or Ours',
      description: 'Practice at the Yoga Lab or we can come to you - your home, office, or preferred outdoor location.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32 font-body">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-subheading leading-7 text-black">PERSONALIZED PRACTICE</h2>
          <p className="mt-2 text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
            Private Classes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the transformative power of personalized yoga instruction designed exclusively for you. 
            Whether you're seeking one-on-one guidance or a custom experience with your group, 
            our private classes meet you exactly where you are on your journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                    {benefit.icon}
                  </div>
                  {benefit.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Private Options Section */}
        <div className="mx-auto max-w-2xl text-center mt-24 mb-16">
          <h2 className="text-2xl font-heading text-gray-900 sm:text-3xl">
            Choose Your Experience
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            From intimate one-on-one sessions to celebratory group events, we create experiences 
            that honor your unique needs and intentions.
          </p>
        </div>

        {/* Options Cards */}
        <div className="mx-auto max-w-5xl space-y-12">
          {privateOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                      {option.duration}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
                      {option.participants}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {option.description}
              </p>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideal For:</h3>
                <ul className="space-y-2">
                  {option.idealFor.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg 
                        className="h-6 w-6 text-black shrink-0 mr-2" 
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
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mx-auto max-w-5xl mt-24">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-heading text-gray-900 mb-8 text-center">
              How Private Classes Work
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Connect With Us
                </h3>
                <p className="text-gray-600">
                  Reach out via our contact form or give us a call. We'll discuss your goals, 
                  experience level, and what you hope to achieve through private instruction.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Custom Design
                </h3>
                <p className="text-gray-600">
                  We'll work together to design a session or series that fits your schedule, 
                  location preference, and specific focus areas. Every detail is tailored to you.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Begin Your Practice
                </h3>
                <p className="text-gray-600">
                  Show up as you are and experience personalized guidance that meets you exactly 
                  where you are, helping you grow from that place of authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mx-auto max-w-3xl mt-24">
          <div className="bg-white border-l-4 border-black p-8 shadow-sm">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "Private sessions at Yoga Lab completely transformed my practice. The personalized attention 
              helped me work through long-standing shoulder issues while building strength I didn't know 
              I had. My instructor met me exactly where I was and guided me forward with patience and expertise."
            </blockquote>
            <p className="text-gray-900 font-semibold">— Sarah M., Bloomington</p>
          </div>
        </div>

        {/* Pricing Note Section */}
        <div className="mx-auto max-w-3xl mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Investment in Your Practice
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Private class pricing varies based on session length, number of participants, 
              location, and frequency. We offer single sessions as well as discounted packages 
              for those committing to a series.
            </p>
            <p className="text-gray-600 text-sm">
              Contact us for detailed pricing and to discuss custom packages that fit your needs and budget.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-2xl mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading mb-4">Ready to Start Your Private Practice?</h3>
            <p className="mb-6">
              Let's create a personalized yoga experience designed just for you. 
              Reach out today to schedule your first private session.
            </p>
            <Link
              to="/contact-us"
              className="inline-block rounded-md bg-white px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
