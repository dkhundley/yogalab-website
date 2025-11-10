import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'I\'m interested in taking classes. How does that work?',
    answer: 'We\'d love to meet you, give you a tour of our studio, and make you a cup of coffee or an açai bowl before or after your class.',
    link: { text: 'Click here to book.', to: '/book' }
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We keep everything very simple. We do not think you should have to use a calculator to figure out how much your purchase is worth. We know the value of our classes, and we believe you should always feel clear on what you buy. That also means we will never offer discounts on memberships for holidays or promotions. We want you to feel confident in your purchase no matter what time of year you sign up. \n\n$15 Drop In // $115 Monthly Membership // $1100 Yearly Membership.\n\nYou can cancel the monthly membership at any time, no strings attached. We do not have a fee or cancellation window for the monthly memberships. Yearly memberships are paid for in a lump sump at the time the membership is purchased and will not be refunded in part if you decide to stop coming.'
  },
  {
    question: 'What should I know before coming to class?',
    answer: 'Arrive 10-15 minutes early so your teacher can give you a tour of the space and set you up for success!\n\nYou are welcome to bring your own mat. If you don\'t own a mat, we have mats available for rental for $5. Your teacher will help you with the rental, so you don\'t need to do anything for mat rentals ahead of time.\n\nBring a water bottle and hand towel.\n\nWear comfortable clothes you can move in.\n\nPlease follow the steps in the link below if you need to cancel your booking at the Yoga Lab. You must cancel 12+ hours before class time to avoid cancellation fees.',
  },
  {
    question: 'I have never done yoga before. Where should I start?',
    answer: 'Our "Fundamentals of Power Yoga" class is the best place for you to begin your practice at Yoga Lab; however, all of our classes are appropriate for beginners. Our teachers are experts in modifications and accommodations, and they will support you in making the practice your own no matter your level of expertise or experience. Fundamentals classes are held the first Tuesday of every month. \n\nHead to our Beginner\'s Resource page to learn more.'
  },
  {
    question: 'What are your classes like?',
    answer: 'You won\'t hear fancy "traditional yoga" words nor complicated theories about your life. We don\'t complicate the poses with our own jargon. We make yoga clear and simple! We will ask you to get on your mat, to feel your feet on the ground, and to see the possibility in your life.\n\nExperienced practitioners: you will have space to flow and build your practice. New practitioners: you will be fully supported with the tools to explore yoga in your own way.'
  },
  {
    question: 'Do I have to take a yoga class to enjoy the coffee?',
    answer: 'Nope! We operate as a full coffee shop as well as a yoga studio. You are welcome to come for coffee, tea, or an açai bowl even if you don\'t come for a class. You are welcome to grab your coffee and go, or you are welcome to stay and hang out in our coffee shop.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32 font-body">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about Yoga Lab, our classes, coffee shop, and community space.
            </p>
          </div>

          <dl className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold leading-7 text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="px-6 py-4 text-base leading-7 text-gray-600 whitespace-pre-line border-t border-gray-200 bg-gray-50">
                    {faq.answer}
                    {faq.link && (
                      <>
                        <br />
                        <br />
                        <Link to={faq.link.to} className="font-semibold text-gray-700 hover:text-black underline">
                          {faq.link.text}
                        </Link>
                      </>
                    )}
                  </dd>
                )}
              </div>
            ))}
          </dl>

          <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're here to help! Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:info@theyogalab.org"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50 transition-colors"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
