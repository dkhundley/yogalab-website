import { Link } from 'react-router-dom';

export default function AboutCoffee() {
  return (
    <div className="bg-black py-24 sm:py-32 font-montserrat">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-white">ABOUT LAB COFFEE</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Where connection happens, one cup at a time.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lab Coffee is more than just a coffee shop—it's a space designed for community, 
            connection, and meaningful relationships.
          </p>
        </div>

        {/* Our Story */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 lg:items-center">
            {/* Image on the right on desktop, but first on mobile - takes up 2 columns */}
            <div className="lg:col-span-2 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/images/general-photos/adam-abby-about-us.jpg" 
                  alt="Lab Coffee interior" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text on the left on desktop, but second on mobile - takes up 3 columns */}
            <div className="lg:col-span-3 lg:order-1 prose prose-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-gray-300 mb-6">
                Lab Coffee was born from a simple understanding: meaningful connection requires the right environment. 
                We recognized that people need more than just a place to grab coffee—they need a space where they can 
                slow down, connect with others, and build genuine relationships.
              </p>
              <p className="text-gray-300 mb-6">
                As the companion to Yoga Lab, we created Lab Coffee to provide the "relate" piece of the regulate-relate-reason 
                framework. After you move and breathe in a yoga class, Lab Coffee gives you a reason to stay, connect with 
                your community, and foster the relationships that make life meaningful.
              </p>
              <p className="text-gray-300 mb-6">
                Every detail of Lab Coffee—from our carefully sourced beans to our thoughtfully designed space—is 
                intentional. We're here to create the conditions where authentic connection can flourish.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              What We Believe
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Community First</h4>
                  <p className="text-gray-300">
                    We believe that strong communities are built on genuine relationships. Our space is designed to 
                    encourage conversation, connection, and a sense of belonging.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Quality & Care</h4>
                  <p className="text-gray-300">
                    From ethically sourced coffee beans to fresh, nourishing ingredients, we're committed to providing 
                    quality products that you can feel good about consuming.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Intentional Space</h4>
                  <p className="text-gray-300">
                    Every element of Lab Coffee is thoughtfully curated to create an atmosphere that promotes relaxation, 
                    presence, and authentic human connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Offerings */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What We Offer</h3>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-300 mb-6">
              Lab Coffee serves thoughtfully crafted beverages and nourishing food to fuel your body and support your 
              well-being. Our menu features:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>Artisanal Coffee:</strong> From rich espressos to smooth cold brews, each cup is crafted with care 
                using premium, ethically sourced beans.
              </li>
              <li>
                <strong>Premium Teas:</strong> A curated selection of organic teas, from calming chamomile to energizing 
                green tea.
              </li>
              <li>
                <strong>Nourishing Bowls:</strong> Fresh açai bowls packed with superfoods, fruits, and wholesome toppings 
                to nourish your body.
              </li>
            </ul>
            <p className="text-gray-300 mt-6">
              Whether you're catching up with a friend, working on a project, or simply taking a moment for yourself, 
              Lab Coffee provides the perfect environment for whatever connection you need—with others or with yourself.
            </p>
          </div>
        </div>

        {/* Connection to Yoga Lab */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-gray-900 text-white rounded-2xl p-8 lg:p-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Part of the Yoga Lab Experience
            </h3>
            <p className="text-lg text-gray-300 mb-6 text-center">
              Lab Coffee and Yoga Lab work together to support your well-being through the regulate-relate-reason framework.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Regulate</div>
                <p className="text-gray-400 text-sm">Move, breathe, and rest in Yoga Lab</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Relate</div>
                <p className="text-gray-400 text-sm">Connect and build community at Lab Coffee</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Reason</div>
                <p className="text-gray-400 text-sm">Transform interactions in your daily life</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location & CTA */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
            <p className="text-lg text-gray-300 mb-2">207 S. Prospect Road, Suite 2</p>
            <p className="text-lg text-gray-300 mb-6">Bloomington, IL 61704</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/order"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Order Online
              </Link>
              <Link
                to="/coffee"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:bg-gray-900 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
