import { Link } from 'react-router-dom';

const positions = [
  {
    title: 'Barista',
    type: 'Part-Time & Full-Time',
    description: 'Create exceptional coffee experiences while building meaningful connections with our community.',
    responsibilities: [
      'Prepare high-quality coffee beverages and açai bowls',
      'Provide exceptional customer service',
      'Maintain cleanliness and organization',
      'Foster a welcoming community atmosphere',
      'Support team members and contribute to a positive work environment'
    ]
  },
  {
    title: 'Shift Lead',
    type: 'Full-Time',
    description: 'Lead our barista team while ensuring operational excellence and exceptional customer experiences.',
    responsibilities: [
      'Oversee daily café operations during assigned shifts',
      'Train and mentor barista team members',
      'Manage inventory and ordering',
      'Handle customer concerns with grace and professionalism',
      'Support café manager with administrative tasks'
    ]
  }
];

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Competitive Pay',
    description: 'Fair wages with opportunities for raises and advancement'
  },
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Free Training',
    description: 'Comprehensive coffee training and professional development'
  },
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: 'Flexible Schedule',
    description: 'Work schedules that accommodate your life and commitments'
  },
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Yoga Benefits',
    description: 'Complimentary Yoga Lab memberships for team members'
  },
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Community Focus',
    description: 'Work in an environment that values authentic connection'
  },
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Growth Opportunities',
    description: 'Clear paths for career advancement and skill development'
  }
];

const values = [
  'Passionate about coffee and genuine hospitality',
  'Committed to creating welcoming, inclusive spaces',
  'Reliable, punctual, and accountable',
  'Strong communication and teamwork skills',
  'Positive attitude and willingness to learn',
  'Ability to work in a fast-paced environment'
];

export default function WorkWithUs() {
  return (
    <div className="bg-white py-24 sm:py-32 font-body">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-subheading leading-7 text-black">CAREERS</h2>
          <p className="mt-2 text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
            Work With Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our team and help create meaningful connections within our community. At Lab Coffee, 
            you're not just making drinks—you're fostering relationships and building a space where people belong.
          </p>
        </div>

        {/* Why Work Here Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6 text-center">
              Why Lab Coffee?
            </h3>
            <p className="text-gray-600 text-center mb-8">
              We believe that great work happens when people feel valued, supported, and connected to a 
              meaningful mission. At Lab Coffee, you'll be part of something bigger than just a café—you'll 
              be part of a community movement focused on authentic human connection.
            </p>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600">
                Working at Lab Coffee means more than serving coffee. It means being part of a team that values 
                personal growth, community wellness, and creating spaces where people can truly connect. Whether 
                you're an experienced barista or new to the coffee world, we'll support your development and help 
                you grow both professionally and personally.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Current Openings
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position) => (
              <div key={position.title} className="border-2 border-gray-200 rounded-2xl p-8 hover:border-black transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{position.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{position.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{position.description}</p>
                <div className="mb-6">
                  <p className="font-semibold text-gray-900 mb-3">Key Responsibilities:</p>
                  <ul className="space-y-2">
                    {position.responsibilities.map((resp, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-black mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#apply"
                  className="inline-block w-full text-center rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
                >
                  Apply for {position.title}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* What We're Looking For */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-black text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-heading mb-6 text-center">
              What We're Looking For
            </h3>
            <p className="text-gray-200 text-center mb-8">
              We welcome team members from all backgrounds and experience levels. What matters most to us 
              is your commitment to our values and your passion for creating meaningful connections.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Section */}
        <div id="apply" className="mx-auto mt-16 max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-4 text-center">
              Ready to Apply?
            </h3>
            <p className="text-gray-600 text-center mb-8">
              We're excited to hear from you! To apply, please send your resume and a brief cover letter 
              explaining why you'd be a great fit for Lab Coffee to:
            </p>
            <div className="text-center mb-8">
              <a 
                href="mailto:careers@labcoffee.com" 
                className="text-xl font-semibold text-black hover:underline"
              >
                careers@labcoffee.com
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Please include in your application:</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Your resume or work history</li>
                <li>• A brief cover letter (3-5 paragraphs)</li>
                <li>• Your availability and preferred location</li>
                <li>• Any relevant experience or certifications</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 text-center">
              We review applications on a rolling basis and will reach out to qualified candidates within 
              1-2 weeks of submission.
            </p>
          </div>
        </div>

        {/* Questions Section */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Feel free to reach out if you have any questions about working 
            at Lab Coffee or want to learn more about our culture and values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@labcoffee.com"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              Email Us
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <Link
              to="/locations"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-50 transition-colors"
            >
              Visit Our Locations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
