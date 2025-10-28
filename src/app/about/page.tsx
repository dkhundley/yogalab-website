import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Yoga Lab',
  description: 'Learn about Yoga Lab\'s mission to free people to do the work they love through regulation and connection.',
};

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">OUR MISSION</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Yoga Lab
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe in freeing people to do the work they love through regulation and connection. 
            Our integrated approach combines yoga, coffee, and community to create transformational experiences.
          </p>
        </div>

        {/* Our Philosophy */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              REGULATE, RELATE, REASON
            </h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">REGULATE</h4>
                <p className="text-gray-600">
                  In the yoga studio, experience deeper physical and mental health through regulated movement and breathwork.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">RELATE</h4>
                <p className="text-gray-600">
                  In the coffee shop, meet new people and experience a sense of community wellness through connection.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75-7.478l1.838-2.197A2.25 2.25 0 0015.75 9H8.25a2.25 2.25 0 00-2.088 1.381L7.5 12.75m7.5-3v-.375c0-.621-.504-1.125-1.125-1.125h-4.5c-.621 0-1.125.504-1.125 1.125v.375m6 0H9m6 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H9c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">REASON</h4>
                <p className="text-gray-600">
                  In The Lab, share knowledge and expertise to support reasoning and critical thinking in our community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Yoga Lab was founded on the belief that everyone deserves access to the transformational power of yoga. 
              We recognized that true wellness extends beyond the yoga mat – it encompasses how we connect with others 
              and engage with our community.
            </p>
            <p className="text-gray-600 mb-6">
              Our unique approach follows the natural sequence of the brain: regulate, relate, reason. We've designed 
              our space to support this progression, creating an environment where physical regulation through yoga 
              leads to social connection through coffee, which then enables deeper reasoning and learning in our 
              community space.
            </p>
            <p className="text-gray-600">
              At Yoga Lab, we're not just teaching yoga poses or serving coffee – we're building a community where 
              people can discover their strength, form meaningful relationships, and contribute their unique gifts to 
              the collective wisdom of our community.
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-indigo-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
            <p className="text-lg text-gray-700 mb-2">207 S. Prospect Road, Suite 2</p>
            <p className="text-lg text-gray-700 mb-6">Bloomington, IL 61704</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/yoga"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Explore Yoga Classes
              </Link>
              <Link
                href="/coffee"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Visit Lab Coffee
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}