// Importing necessary libraries and components
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import MomenceReviews from '../components/MomenceReviews';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import { useBrand, BRANDS } from '../context/BrandContext';



// Defining the Home component which essentially serves as the homepage for the website (contextually aware based on the active brand, whether Yoga Lab or Lab Coffee)
export default function Home() {

  // Accessing the active brand from context
  const { activeBrand } = useBrand();
  const isLabCoffee = activeBrand === BRANDS.LAB_COFFEE;

  // Refs for carousel and parallax
  const carouselRef = useRef(null);
  const parallaxRef = useRef(null);
  
  // State for parallax offset
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Parallax scroll effect for single image
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        // Only apply parallax when element is in view
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          // More subtle effect on mobile, more dramatic on desktop
          const isMobile = window.innerWidth < 768;
          const range = isMobile ? 50 : 150; // 50px on mobile, 150px on desktop
          setParallaxOffset(scrollProgress * range * 2 - range);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Loading in the Hero section */}
      <Hero />

      {/* Yoga Lab: Featured Community Carousel - Only shows for Yoga Lab */}
      {!isLabCoffee && (
        <section className="py-16 bg-white font-montserrat overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Experience The Lab
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                A vibrant community where strength meets mindfulness
              </p>
            </div>
          </div>
          
          {/* Single row carousel */}
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-8"
          >
            <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/images/yoga/group-shot.jpg" 
                  alt="Yoga Lab community after class"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/images/yoga/chair-pose-back.jpg" 
                  alt="Power yoga class in chair pose"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/images/yoga/abby-starts-class.jpg" 
                  alt="Yoga class beginning with instructor Abby"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/images/yoga/hot-namaste.jpg" 
                  alt="Students in namaste after heated class"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/images/yoga/fitness-lab-rowing-machine.jpg" 
                  alt="Fitness Lab strength training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/images/yoga/downward-dog.jpg" 
                  alt="Class in downward facing dog"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Setting the rendering of the homepage screen based on the brand selected (Yoga Lab vs. Lab Coffee) */}
      <section className="py-24 bg-gray-50 font-montserrat">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {isLabCoffee ? (
            // Displaying Lab Coffee Services
            <>
              {/* Setting the "header" text over the various services offered by Lab Coffee */}
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  What We Offer
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Experience quality beverages and community connection in a welcoming atmosphere.
                </p>
              </div>
              
              {/* Displaying the various services offered by Lab Coffee */}
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
            // Displaying Yoga Lab Services
            <>
              {/* Setting the "header" text over the various services offered by Yoga Lab */}
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Services
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Discover how we can support your journey through regulation, relation, and reasoning.
                </p>
              </div>
              
              {/* Displaying the various services offered by Yoga Lab */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  title="YOGA CLASSES"
                  description="Your yoga mat is a laboratory. How you show up on your yoga mat, is how you show up in your life. Strength in your yoga practice translates to strength in your life."
                  linkText="Class Offerings"
                  linkHref="/classes"
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

      {/* Yoga Lab: Practice & Community Images - Only shows for Yoga Lab */}
      {!isLabCoffee && (
        <section className="relative bg-white font-montserrat">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side image */}
            <div className="relative h-[500px] md:h-[600px]">
              <img 
                src="/images/yoga/single-woman-childs-pose.jpg" 
                alt="Peaceful yoga practice"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right side image */}
            <div className="relative h-[500px] md:h-[600px]">
              <img 
                src="/images/yoga/abby-starts-class-front-corner.jpg" 
                alt="Yoga class beginning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Setting up the Reviews section (only displays when active brand is Yoga Lab) */}
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
            
            {/* Loading in the Momence embedding widget */}
            <div className="mx-auto max-w-5xl">
              <MomenceReviews />
            </div>

            {/* Setting the "footer" text noting that reviews are powered by Momence */}
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

      {/* Yoga Lab: Welcoming Community Image with Parallax - Only shows for Yoga Lab */}
      {!isLabCoffee && (
        <section ref={parallaxRef} className="bg-gray-50 font-montserrat overflow-hidden">
          <div className="relative h-[500px] md:h-[700px]">
            <div className="absolute inset-0 scale-110">
              <img 
                src="/images/yoga/todd-high-five.jpg" 
                alt="Welcoming community atmosphere at Yoga Lab"
                className="w-full h-full object-cover"
                style={{
                  transform: `translateY(${parallaxOffset}px)`,
                  transition: 'transform 0.05s ease-out'
                }}
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
          </div>
        </section>
      )}

      {/* Setting the Location & Contact Section */}
      <section id="contact" className={`py-24 font-montserrat ${isLabCoffee ? 'bg-white' : 'bg-gray-50'}`}>
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
          
          {/* Setting up the "Map" section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
            
            {/* Loading in the contact form */}
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
