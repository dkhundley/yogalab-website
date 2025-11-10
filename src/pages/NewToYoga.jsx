import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function NewToYoga() {
  return (
    <div className="bg-white font-body">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
                  <CheckCircleIcon className="h-6 w-6 text-black mt-1 mr-3 flex-shrink-0" />
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
                  <CheckCircleIcon className="h-6 w-6 text-black mt-1 mr-3 flex-shrink-0" />
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
                  <CheckCircleIcon className="h-6 w-6 text-black mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Listen to Your Body</h3>
                    <p className="text-gray-600">
                      Yoga is not about perfect poses. It's about connecting with your body and breath. 
                      Take breaks anytime, modify as needed, and honor where you are today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-black mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Questions</h3>
                    <p className="text-gray-600">
                      Our teachers are here to support you. If you're unsure about a pose or need help, 
                      just raise your hand or talk to your teacher before or after class.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Classes Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Classes for Beginners
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              These classes are perfect starting points for your yoga journey.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Foundations</h3>
                <p className="text-gray-600 mb-4">
                  A slower-paced class focused on learning the basic postures and breathing techniques. 
                  Perfect for building confidence and understanding proper alignment.
                </p>
                <div className="text-sm text-gray-500">
                  <p><span className="font-semibold">Duration:</span> 60 minutes</p>
                  <p><span className="font-semibold">Level:</span> All Levels Welcome</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gentle Flow</h3>
                <p className="text-gray-600 mb-4">
                  A mindful practice that connects breath with gentle movement. Great for those new to 
                  yoga or anyone looking for a more relaxed class.
                </p>
                <div className="text-sm text-gray-500">
                  <p><span className="font-semibold">Duration:</span> 60 minutes</p>
                  <p><span className="font-semibold">Level:</span> Beginner-Friendly</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Restorative Yoga</h3>
                <p className="text-gray-600 mb-4">
                  A deeply relaxing practice using props to support your body in restful poses. Perfect 
                  for stress relief and learning to slow down.
                </p>
                <div className="text-sm text-gray-500">
                  <p><span className="font-semibold">Duration:</span> 60-75 minutes</p>
                  <p><span className="font-semibold">Level:</span> All Levels</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yoga Basics</h3>
                <p className="text-gray-600 mb-4">
                  An introductory class designed specifically for beginners. Learn foundational poses, 
                  breathing techniques, and yoga terminology in a supportive environment.
                </p>
                <div className="text-sm text-gray-500">
                  <p><span className="font-semibold">Duration:</span> 45-60 minutes</p>
                  <p><span className="font-semibold">Level:</span> Beginner</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
                Yoga meets you where you are, and every pose can be modified to suit your body.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I wear?</h3>
              <p className="text-gray-600">
                Wear comfortable, breathable clothing that allows you to move freely. Think athletic wear or 
                stretchy clothes. Avoid anything too baggy that might get in the way during inversions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I practice?</h3>
              <p className="text-gray-600">
                Even once a week can make a difference! As you build your practice, aim for 2-3 times per week. 
                The most important thing is consistency over frequency.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I can't keep up with the class?</h3>
              <p className="text-gray-600">
                That's completely okay! Take child's pose anytime you need a break. Remember, yoga is about 
                your personal practice, not comparing yourself to others in the room.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I practice if I have injuries or health conditions?</h3>
              <p className="text-gray-600">
                Please inform your teacher before class about any injuries, health conditions, or concerns. 
                They can offer modifications and ensure your practice is safe and beneficial for your body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Yoga Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
              <p>
                At Yoga Lab, we understand that yoga is a tool for transformation. Through breath work, movement, 
                and meditation, you'll learn to connect more deeply with yourself and show up more fully in your 
                relationships and daily life.
              </p>
              <p>
                Whether you're looking to reduce stress, build strength, increase flexibility, or simply find a 
                moment of peace in your busy day, yoga has something to offer you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We're here to support you every step of the way. Join us on the mat and discover what yoga can do for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book"
                className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors w-full sm:w-auto"
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
