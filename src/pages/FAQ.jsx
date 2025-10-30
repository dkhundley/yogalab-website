const faqs = [
  {
    question: 'What types of yoga classes do you offer?',
    answer: 'We offer a variety of yoga classes suitable for all levels, from beginner-friendly sessions to more advanced practices. Our classes focus on regulated movement and breathwork to promote physical and mental health.'
  },
  {
    question: 'Do I need to bring my own yoga mat?',
    answer: 'While we encourage you to bring your own mat for hygiene and comfort, we do have mats available for use at the studio. We also have props like blocks and straps available for all students.'
  },
  {
    question: 'What can I expect during my first class?',
    answer: 'Your first class will begin with a brief introduction and any necessary modifications for your practice. Our instructors create a welcoming environment where you can practice at your own pace and comfort level.'
  },
  {
    question: 'What are your coffee shop hours?',
    answer: 'Lab Coffee operates alongside our yoga schedule, providing a space for community connection before and after classes. Please check our current schedule or contact us for specific hours.'
  },
  {
    question: 'Do you offer any food options besides coffee?',
    answer: 'Yes! In addition to our coffee and tea selection, we offer nutritious açai bowls with various toppings. Our menu is designed to nourish and energize our community.'
  },
  {
    question: 'What is "The Lab" community space?',
    answer: 'The Lab is our community space designed for reasoning and critical thinking. It\'s where community members can share knowledge, host workshops, and engage in meaningful dialogue that supports our collective growth.'
  },
  {
    question: 'How do I book a yoga class?',
    answer: 'You can book classes through our online booking system. We recommend booking in advance as our classes tend to fill up, especially during peak times.'
  },
  {
    question: 'Do you offer private yoga sessions?',
    answer: 'Yes, we offer private and semi-private yoga sessions for those who prefer personalized instruction or have specific needs. Contact us to schedule a private session.'
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we have convenient parking available at our Bloomington location on Prospect Road. The studio is easily accessible with ample parking space.'
  },
  {
    question: 'What should I wear to yoga class?',
    answer: 'Wear comfortable, breathable clothing that allows you to move freely. Avoid overly loose clothing that might get in the way during poses. Most students prefer athletic wear or yoga-specific clothing.'
  },
  {
    question: 'Can beginners attend any class?',
    answer: 'We welcome beginners and offer classes suitable for all levels. Our instructors are skilled at providing modifications and alternatives to ensure everyone can participate safely and comfortably.'
  },
  {
    question: 'How does the "regulate, relate, reason" philosophy work in practice?',
    answer: 'Our space is designed to follow this natural brain sequence. You regulate through yoga practice, relate through coffee shop connections, and reason in our community lab space. This progression supports optimal learning and growth.'
  }
];

export default function FAQ() {
  return (
    <div className="bg-white py-24 sm:py-32">
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

          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <dt className="text-lg font-semibold leading-7 text-gray-900 mb-4">
                  {faq.question}
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
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
              <a
                href="/contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@theyogalab.org"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-indigo-50 transition-colors"
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
