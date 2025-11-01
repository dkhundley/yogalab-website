import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { useBrand, BRANDS } from '../context/BrandContext';

export default function Home() {
  const { activeBrand } = useBrand();
  const isLabCoffee = activeBrand === BRANDS.LAB_COFFEE;

  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {isLabCoffee ? (
            <>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  What We Offer
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Experience quality beverages and community connection in a welcoming atmosphere.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  title="ARTISAN COFFEE"
                  description="From expertly crafted espresso drinks to smooth cold brew, we serve quality coffee that brings people together."
                  linkText="View Menu"
                  linkHref="/coffee"
                />
                
                <ServiceCard
                  title="ORGANIC TEAS"
                  description="A curated selection of calming and energizing teas, perfect for any time of day."
                  linkText="View Menu"
                  linkHref="/coffee"
                />
                
                <ServiceCard
                  title="AÇAI BOWLS"
                  description="Nourishing and delicious açai bowls packed with fresh fruits, superfoods, and wholesome toppings."
                  linkText="View Menu"
                  linkHref="/coffee"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Services
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Discover how we can support your journey through regulation, relation, and reasoning.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  title="YOGA CLASSES"
                  description="Your yoga mat is a laboratory. How you show up on your yoga mat, is how you show up in your life. Strength in your yoga practice translates to strength in your life."
                  linkText="Yoga"
                  linkHref="/yoga"
                />
                
                <ServiceCard
                  title="LAB COFFEE"
                  description="Lab Coffee exists to allow our community to build relationships. Our full menu includes coffee, teas, and açai bowls."
                  linkText="Lab Coffee"
                  linkHref="/coffee"
                />
                
                <ServiceCard
                  title="COMMUNITY"
                  description="In The Lab, you will have the opportunity to share your knowledge and expertise to support reasoning and critical thinking in our community."
                  linkText="Connect with Us"
                  linkHref="/about"
                />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {isLabCoffee ? 'Visit Us' : 'Connect With Us'}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {isLabCoffee 
                ? 'Stop by Lab Coffee and experience our welcoming community atmosphere.' 
                : 'Ready to start your journey with Yoga Lab? Get in touch with us today.'}
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </>
  );
}
