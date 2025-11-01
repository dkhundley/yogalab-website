import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import MomenceReviews from '../components/MomenceReviews';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import { useBrand, BRANDS } from '../context/BrandContext';

export default function Home() {
  const { activeBrand } = useBrand();
  const isLabCoffee = activeBrand === BRANDS.LAB_COFFEE;

  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 bg-gray-50 font-montserrat">
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

      {/* Reviews Section - Only for Yoga Lab */}
      {!isLabCoffee && (
        <section className="py-24 bg-white font-montserrat">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Community Says
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Hear from our students about their transformative experiences at Yoga Lab.
              </p>
            </div>
            
            {/* Momence Reviews Widget Embed */}
            <div className="mx-auto max-w-5xl">
              <MomenceReviews />
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Reviews powered by{' '}
                <a 
                  href="https://www.momence.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Momence
                </a>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Location & Contact Section */}
      <section className={`py-24 font-montserrat ${isLabCoffee ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {isLabCoffee ? 'Visit Us' : 'Find Us & Connect'}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {isLabCoffee 
                ? 'Stop by Lab Coffee and experience our welcoming community atmosphere.' 
                : 'Visit our studio or get in touch with us today.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Map Section */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Location</h3>
              <Map 
                latitude={40.4783244}
                longitude={-88.9507216}
                markerTitle="Yoga Lab"
                markerDescription="207 S. Prospect Road, Suite 2, Bloomington, IL 61704"
              />
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">207 S. Prospect Road, Suite 2</p>
                <p>Bloomington, IL 61704</p>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
