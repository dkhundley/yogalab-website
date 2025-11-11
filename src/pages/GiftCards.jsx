import { Link } from 'react-router-dom';

export default function GiftCards() {
  return (
    <div className="bg-white font-body">
  <section className="relative isolate px-6 pt-14 lg:px-8 bg-linear-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl py-16 sm:py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">Yoga Lab Gift Cards</p>
          <h1 className="mt-6 text-4xl font-heading tracking-tight text-gray-900 sm:text-5xl">
            Share the Practice You Love
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Give your friends, family, or team the gift of grounding movement and mindful connection. Choose a digital or in-studio card today—we will help with the details once you are ready to purchase.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">Choose the Gift That Fits</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We will follow up with you to finalize delivery details, personalize your message, and make sure your recipient can start practicing right away.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900">Digital Card</h3>
              <p className="mt-4 text-gray-600">
                Send a beautifully designed email gift card straight to their inbox. Perfect for last-minute gifting or friends who live out of town.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>• Personalized message</li>
                <li>• Flexible dollar amounts</li>
                <li>• Delivered on your chosen date</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-black bg-white p-10 shadow-lg">
              <p className="inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Most Popular</p>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">Studio Pickup</h3>
              <p className="mt-4 text-gray-600">
                Pick up a tactile gift card at the studio, complete with an envelope and space to add your handwritten note.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>• Perfect for special celebrations</li>
                <li>• Includes branded card & envelope</li>
                <li>• Quick pickup at our front desk</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900">Group & Corporate</h3>
              <p className="mt-4 text-gray-600">
                Treat your team to nervous-system regulation and community connection. We will craft a package that matches your group size and goals.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>• Tiered pricing for multiple recipients</li>
                <li>• Optional private session add-ons</li>
                <li>• Customized wellness recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Reach out with your preferred format and amount. We will follow up within one business day to finalize details and send your invoice.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-semibold text-white">1</div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Share the Basics</h3>
              <p className="mt-3 text-gray-600">
                Tell us who you are celebrating, how much you would like to gift, and whether you prefer digital or studio pickup.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-semibold text-white">2</div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">We Personalize Everything</h3>
              <p className="mt-3 text-gray-600">
                We will create the card, add your personalized message, and confirm timing so the gift lands right when you want it to.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-semibold text-white">3</div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Celebrate Together</h3>
              <p className="mt-3 text-gray-600">
                Once payment is complete, we handle delivery and provide the recipient with next steps for booking their experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">Gift Cards Fit Every Story</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Whether you are celebrating a birthday, appreciating a caregiver, or supporting someone through a season of change, Yoga Lab gift cards make it easy to share rest, recovery, and community.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>• First-time visitors exploring yoga for nervous-system regulation</li>
                <li>• Seasoned practitioners who love to drop into new classes</li>
                <li>• Partners, teammates, and friends who could use intentional downtime</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-gray-50 p-10 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Need a Recommendation?</h3>
              <p className="mt-4 text-gray-600">
                Let us know a bit about your recipient and we will suggest a gift amount or class package that feels thoughtful and aligned with their goals.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact-us"
                  className="w-full rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-gray-800"
                >
                  Contact Our Team
                </Link>
                <Link
                  to="/book"
                  className="w-full rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm ring-1 ring-inset ring-black transition-colors hover:bg-gray-50"
                >
                  Explore Classes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">Ready When You Are</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We will activate your gift card as soon as you are ready to purchase. Reach out today and we will handle the rest with care.
          </p>
          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-gray-800"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
