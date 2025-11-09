import { Link } from 'react-router-dom';

export default function YogaTeacherTraining() {
  const programHighlights = [
    {
      title: 'Journey Into Power Foundation',
      description: 'Master the art of Baron Baptiste\'s signature sequence, learning how to guide students through powerful, breath-driven flows with confidence and authenticity.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84a14.98 14.98 0 012.58 5.84M15.59 14.37A14.926 14.926 0 0117.17 8.41M15.59 14.37L17.17 8.41" />
        </svg>
      )
    },
    {
      title: 'Alignment & Sequencing',
      description: 'Develop a deep understanding of proper alignment, effective sequencing, and intelligent modifications to support students of all levels safely and effectively.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      )
    },
    {
      title: 'Teaching Methodology',
      description: 'Learn how to cue with clarity, create a welcoming space, hold space for transformation, and lead with your unique voice and presence.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      )
    },
    {
      title: 'Personal Development',
      description: 'Dive deep into your own practice and self-inquiry, cultivating the leadership skills and inner clarity needed to teach from a place of authenticity.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    },
    {
      title: 'Anatomy & Physiology',
      description: 'Gain foundational knowledge of the body\'s systems, how yoga affects them, and how to apply this understanding to safe, effective teaching.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      title: 'Business & Ethics',
      description: 'Understand the business of teaching yoga, professional ethics, and how to build a sustainable career while honoring the tradition and community.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      )
    }
  ];

  const trainingFormats = [
    {
      type: 'Weekend Intensive',
      duration: '8-10 weekends',
      schedule: 'Saturdays & Sundays',
      description: 'Perfect for working professionals, this format spreads the training over several weekends, allowing you to maintain your current commitments while transforming your practice.'
    },
    {
      type: 'Immersive Program',
      duration: '4-6 weeks',
      schedule: 'Weekdays with some weekends',
      description: 'Dive deep with a more concentrated schedule that allows for full immersion in the training experience and faster completion of the program.'
    }
  ];

  return (
    <div className="bg-white font-montserrat">
      {/* Hero Section with Image */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="/images/yoga/group-shot.jpg" 
            alt="Yoga teacher training group"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-7 text-white/90 uppercase tracking-wider">
              Transform Your Practice
            </h2>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Yoga Teacher Training
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              Step into your power as a yoga teacher. This is more than certification—it's a transformational 
              journey in leadership, self-discovery, and embodied practice.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                A Journey of Transformation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Yoga Lab's 200-Hour Teacher Training is rooted in Baron Baptiste's Journey Into Power methodology—a 
                powerful, breath-driven practice that emphasizes transformation both on and off the mat.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This immersive program will deepen your understanding of yoga philosophy, anatomy, alignment, and 
                the art of teaching, while cultivating the leadership skills and authenticity needed to guide others 
                with confidence and compassion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether your goal is to teach professionally or simply to deepen your personal practice, you'll 
                emerge from this training with clarity, purpose, and the tools to step into your fullest potential.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/yoga/abby-starts-class-front-corner.jpg" 
                  alt="Instructor leading a yoga class"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats or Key Info Boxes */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black text-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold mb-2">200</p>
                  <p className="text-sm text-gray-300">Training Hours</p>
                </div>
                <div className="bg-gray-900 text-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold mb-2">RYT</p>
                  <p className="text-sm text-gray-300">Certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              What You'll Learn
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive curriculum covers all aspects of yoga teaching and personal transformation
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Formats */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Training Formats
            </h2>
            <p className="text-lg text-gray-600">
              Choose the schedule that fits your life while receiving the same transformational experience
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingFormats.map((format, index) => (
              <div 
                key={index}
                className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {format.type}
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white">
                    {format.duration}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-200 px-4 py-1.5 text-sm font-medium text-gray-900">
                    {format.schedule}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who Should Attend */}
      <div className="bg-black text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Is This Training Right for You?
            </h2>
            <p className="text-xl text-gray-300">
              This training welcomes students from all backgrounds and experience levels
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  Aspiring Teachers
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You're ready to share the gift of yoga with others and want to build the skills, 
                  knowledge, and confidence to teach authentic, powerful classes.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84a14.98 14.98 0 012.58 5.84M15.59 14.37A14.926 14.926 0 0117.17 8.41M15.59 14.37L17.17 8.41" />
                  </svg>
                  Dedicated Practitioners
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You want to deepen your personal practice, refine your understanding of yoga, 
                  and embark on a journey of self-discovery and transformation.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  Community Builders
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You're passionate about creating spaces of connection, healing, and growth 
                  in your community through the practice of yoga.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                  Personal Growth Seekers
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You're at a crossroads or transition in life and seeking clarity, purpose, 
                  and a structured path for personal evolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment & Next Steps */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Investment in Your Future
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Yoga Lab's 200-Hour Teacher Training is an investment in yourself—in your growth, 
                your purpose, and your potential. Tuition includes all training materials, manuals, 
                and access to ongoing mentorship and support.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    '200 hours of comprehensive training',
                    'All course materials and manuals',
                    'Journey Into Power methodology certification',
                    'Hands-on teaching practice and feedback',
                    'Mentorship from experienced instructors',
                    'Lifetime access to alumni community',
                    'Post-graduation support and resources'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-black shrink-0 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-600 text-sm">
                Payment plans and early registration discounts are available. 
                Contact us for detailed pricing information.
              </p>
            </div>

            <div>
              <div className="bg-black text-white rounded-2xl p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Begin?
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Take the first step toward becoming a certified yoga teacher. Reach out to learn 
                  about upcoming training dates, application requirements, and to schedule an 
                  informational conversation with our lead trainers.
                </p>
                <Link
                  to="/contact-us"
                  className="inline-block rounded-md bg-white px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-50 transition-colors w-full text-center"
                >
                  Contact Us About Training
                </Link>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/yoga/todd-high-five.jpg" 
                  alt="Community celebration after training"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Graduate Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from those who've completed the journey
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-black">
              <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                "This training changed my life. Not only did I gain the skills to teach confidently, 
                but I discovered parts of myself I didn't know existed. The Journey Into Power 
                methodology gave me a framework, and the community gave me courage."
              </blockquote>
              <p className="font-semibold text-gray-900">— Jessica R.</p>
              <p className="text-sm text-gray-600">2023 Graduate</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-black">
              <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                "I came in as a student wanting to deepen my practice, and I left as a teacher 
                ready to serve. The authenticity of the instructors and the depth of the 
                curriculum exceeded all my expectations."
              </blockquote>
              <p className="font-semibold text-gray-900">— Marcus T.</p>
              <p className="text-sm text-gray-600">2024 Graduate</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Do I need prior teaching experience?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No teaching experience is required. We welcome both aspiring teachers and dedicated 
                practitioners. A consistent yoga practice (at least 6 months recommended) and an 
                open heart are all you need to begin.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Will I be certified to teach after completing the program?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! Upon successful completion of the 200-hour training, you'll receive certification 
                that allows you to register with Yoga Alliance as a Registered Yoga Teacher (RYT-200).
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                What if I can't attend every session?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Attendance at all sessions is required for certification. However, we understand life 
                happens—if you need to miss a session, makeup work and alternative arrangements can 
                be discussed with the lead trainers.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Have more questions?{' '}
              <Link to="/faq" className="font-semibold text-gray-900 hover:text-black underline">
                Visit our FAQ page
              </Link>{' '}
              or{' '}
              <Link to="/contact-us" className="font-semibold text-gray-900 hover:text-black underline">
                contact us directly
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
