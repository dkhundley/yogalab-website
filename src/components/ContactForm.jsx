// Importing necessary dependencies from React
import { useState } from 'react';
import { useBrand, BRANDS } from '../context/BrandContext';

export default function ContactForm() {

  // Accessing the active brand from context
  const { activeBrand } = useBrand();
  const isLabCoffee = activeBrand === BRANDS.LAB_COFFEE;

  // Initializing the form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Defining a handler for form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Defining a handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    // Resetting the form data after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });

    // Displaying an alert message to the user
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  // Setting up the contact form structure
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl font-montserrat">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

        {/* Setting up the "First Name" field */}
        <div>
          <label htmlFor="firstName" className={`block text-sm font-semibold leading-6 ${isLabCoffee ? 'text-white' : 'text-gray-900'}`}>
            First name *
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                isLabCoffee 
                  ? 'bg-gray-900 text-white ring-gray-700 focus:ring-white' 
                  : 'bg-white text-gray-900 ring-gray-300 focus:ring-black'
              }`}
            />
          </div>
        </div>

        {/* Setting up the "Last Name" field */}
        <div>
          <label htmlFor="lastName" className={`block text-sm font-semibold leading-6 ${isLabCoffee ? 'text-white' : 'text-gray-900'}`}>
            Last name *
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                isLabCoffee 
                  ? 'bg-gray-900 text-white ring-gray-700 focus:ring-white' 
                  : 'bg-white text-gray-900 ring-gray-300 focus:ring-black'
              }`}
            />
          </div>
        </div>

        {/* Setting up the "Email" field */}
        <div className="sm:col-span-2">
          <label htmlFor="email" className={`block text-sm font-semibold leading-6 ${isLabCoffee ? 'text-white' : 'text-gray-900'}`}>
            Email *
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                isLabCoffee 
                  ? 'bg-gray-900 text-white ring-gray-700 focus:ring-white' 
                  : 'bg-white text-gray-900 ring-gray-300 focus:ring-black'
              }`}
            />
          </div>
        </div>

        {/* Setting up the "Subject" field */}
        <div className="sm:col-span-2">
          <label htmlFor="subject" className={`block text-sm font-semibold leading-6 ${isLabCoffee ? 'text-white' : 'text-gray-900'}`}>
            Subject *
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                isLabCoffee 
                  ? 'bg-gray-900 text-white ring-gray-700 focus:ring-white' 
                  : 'bg-white text-gray-900 ring-gray-300 focus:ring-black'
              }`}
            />
          </div>
        </div>

        {/* Setting up the "Message" field */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={`block text-sm font-semibold leading-6 ${isLabCoffee ? 'text-white' : 'text-gray-900'}`}>
            Message *
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                isLabCoffee 
                  ? 'bg-gray-900 text-white ring-gray-700 focus:ring-white' 
                  : 'bg-white text-gray-900 ring-gray-300 focus:ring-black'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Setting up the submit button */}
      <div className="mt-10">
        <button
          type="submit"
          className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
            isLabCoffee 
              ? 'bg-white text-black hover:bg-gray-200 focus-visible:outline-white' 
              : 'bg-black text-white hover:bg-gray-800 focus-visible:outline-black'
          }`}
        >
          Connect
        </button>
      </div>
    </form>
  );
}
