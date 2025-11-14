import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function NewToYoga() {
  return (
    <div className="bg-white font-body">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-linear-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-heading tracking-tight text-gray-900 sm:text-5xl">
              NEW TO YOGA?
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Welcome! We're so glad you're here. Starting a yoga practice can feel intimidating, but at Yoga Lab, 
              we believe yoga is for every body, every experience level, and every stage of life.
            </p>
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
              What to Expect in Your First Class
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We want you to feel comfortable and confident from the moment you walk through our doors.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-black mt-1 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Arrive Early</h3>
                    <p className="text-gray-600">
                      Come 10-15 minutes before class to get familiar with the space, meet your teacher, 
                      and set up your mat. This gives you time to settle in and ask any questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-black mt-1 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What to Bring</h3>
                    <p className="text-gray-600">
                      We provide mats, blocks, straps, and blankets. Just bring yourself, water, and 
                      comfortable clothes you can move in. Yoga is typically practiced barefoot.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-black mt-1 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Yoga for Regulation</h3>
                    <p className="text-gray-600">
                      Our classes are designed with predicatability, consistency, and sustainability in mind. These three elements produce regulation in your brain and body. When you are on your mat, take what you need. We are building a practice for a lifetime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-black mt-1 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Questions</h3>
                    <p className="text-gray-600">
                      Our teachers are here to support you. If you're unsure about a pose or need help, 
                      just raise your hand or talk to your teacher before or after class.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-black mt-1 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Classes for Beginners</h3>
                    <p className="text-gray-600">
                      Almost all of our classess are accessible to beginners. The only classes we do not recommend are listed on our booking page as "90 Minute Power + Heat" and any class that says "Masterclass" (i.e. Warm Yin Masterclass, Power + Heat Masterclass, etc.). Every other class is taught by our teachers with the intention of being a class for anyone, including YOU!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
              Common Questions
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Here are answers to questions we hear most often from new students.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to be flexible to do yoga?</h3>
              <p className="text-gray-600">
                Absolutely not! Flexibility is something you develop through practice, not a prerequisite. 
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I wear?</h3>
              <p className="text-gray-600">
                Wear comfortable, breathable clothing that allows you to move freely. Think athletic wear or 
                stretchy clothes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I practice?</h3>
              <p className="text-gray-600">
                Even once a week can make a difference! As you build your practice, aim for 2-3 times per week. 
                The most important things are consistency and sustainability. We want you to be able to practice for a lifetime!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I can't keep up with the class?</h3>
              <p className="text-gray-600">
                That's completely okay! Take child's pose anytime you need a break (Your class will start with child’s pose so your teacher will tell you exactly what that is!). Remember, yoga is about your personal practice, not comparing yourself to others in the room.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I practice if I have injuries or health conditions?</h3>
              <p className="text-gray-600">
                You are responsible for you, on and off your mat! We recommend you speak with your doctor if you are concerned about injuries or health conditions. We provide modifications in our teaching and you are always free to take what you need, or forego any poses we cue. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Yoga Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
              Why Practice Yoga?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Yoga offers benefits that extend far beyond the mat.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                Regular yoga practice can help you build strength, improve flexibility, and develop better balance. 
                But the benefits go much deeper than the physical. Yoga teaches you to regulate your nervous system, 
                manage stress, and cultivate mindfulness.
              </p>
              <br />
              <p>
                At Yoga Lab, we understand that yoga is a tool for transformation. Through breath work, movement, 
                and meditation, you'll learn to connect more deeply with yourself and show up more fully in your 
                relationships and daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pose Breakdowns Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
              Pose Breakdowns
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Explore foundational alignment tips and breath cues with short videos from our teachers.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
              <div className="relative pt-[177.78%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://www.instagram.com/reel/DQ_56f_kY9q/embed"
                  title="Instagram Reel Pose Breakdown"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
              You are Ready Now!
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We're here to support you, on and off your mat. Join us on the mat and discover the transformational tools of yoga.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book"
                className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors w-full sm:w-auto"
              >
                Book Your First Class
              </Link>
              <Link
                to="/classes"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                View Class Schedule
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Have questions? <Link to="/faq" className="font-semibold text-gray-700 hover:text-gray-900">Visit our FAQ page</Link> or <Link to="/about-yoga" className="font-semibold text-gray-700 hover:text-gray-900">reach out to our team</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
