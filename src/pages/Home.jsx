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
  const carouselInnerRef = useRef(null);
  const coffeeCarouselRef = useRef(null);
  const coffeeCarouselInnerRef = useRef(null);
  const parallaxRef = useRef(null);
  const parallaxPairRef = useRef(null);
  const coffeeParallaxRef = useRef(null);
  
  // State for parallax offsets
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [parallaxPairOffset, setParallaxPairOffset] = useState(0);
  const [coffeeParallaxOffset, setCoffeeParallaxOffset] = useState(0);
  
  // Refs for autoscroll
  const scrollPositionRef = useRef(0);
  const inactivityTimerRef = useRef(null);

  // Carousel autoscroll effect - continuous scroll
  useEffect(() => {
    const activeCarouselOuter = isLabCoffee ? coffeeCarouselRef.current : carouselRef.current;
    const activeCarouselInner = isLabCoffee ? coffeeCarouselInnerRef.current : carouselInnerRef.current;
    
    if (!activeCarouselOuter || !activeCarouselInner) return;

    let animationFrameId;
    
    // Faster scroll speed on mobile, slower on desktop
    const isMobile = window.innerWidth < 768;
    const scrollSpeed = isMobile ? 60 : 30; // pixels per second

    const animate = () => {
      // Increment scroll position
      scrollPositionRef.current += scrollSpeed / 60; // 60fps

      // Get the width of the content (half, since we duplicated)
      const contentWidth = activeCarouselInner.scrollWidth / 2;

      // Reset position when we've scrolled through one full set
      if (scrollPositionRef.current >= contentWidth) {
        scrollPositionRef.current = 0;
      }

      // Apply transform for smooth scrolling
      activeCarouselInner.style.transform = `translateX(-${scrollPositionRef.current}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isLabCoffee]);

  // Parallax scroll effect for both image sections
  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const isMobile = window.innerWidth < 768;
      
      // Update single image parallax (Yoga Lab)
      if (parallaxRef.current) {
        const range = isMobile ? 50 : 150; // 50px on mobile, 150px on desktop
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          setParallaxOffset(scrollProgress * range * 2 - range);
        }
      }
      
      // Update image pair parallax (Yoga Lab - more pronounced on mobile)
      if (parallaxPairRef.current) {
        const range = isMobile ? 200 : 150; // 200px on mobile, 150px on desktop
        const rect = parallaxPairRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          setParallaxPairOffset(scrollProgress * range * 2 - range);
        }
      }
      
      // Update coffee parallax (Lab Coffee)
      if (coffeeParallaxRef.current) {
        const range = isMobile ? 50 : 150;
        const rect = coffeeParallaxRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          setCoffeeParallaxOffset(scrollProgress * range * 2 - range);
        }
      }
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateParallax(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Loading in the Hero section */}
      <Hero />

      {/* Lab Coffee: Featured Video Section - Only shows for Lab Coffee */}
      {isLabCoffee && (
        <section className="py-16 bg-black font-body">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-heading tracking-tight text-white sm:text-4xl">
                Discover Lab Coffee
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Experience the space where connection happens
              </p>
            </div>
            
            {/* Video Container */}
            <div className="mx-auto max-w-5xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                {/* Replace this iframe src with the actual video embed URL */}
                {/* Option 1: For Vimeo - <iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID" ... */}
                {/* Option 2: For YouTube - <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ... */}
                {/* Option 3: For direct video file, replace iframe with video element */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?title=0&byline=0&portrait=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Lab Coffee Introduction"
                ></iframe>
                {/* Alternative: Direct video file
                <video
                  className="absolute top-0 left-0 w-full h-full"
                  controls
                  poster="/images/lab-coffee/video-thumbnail.jpg"
                >
                  <source src="/videos/lab-coffee-intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                */}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lab Coffee: Featured Images Carousel - Only shows for Lab Coffee */}
      {isLabCoffee && (
        <section className="py-16 bg-black font-body overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-heading tracking-tight text-white sm:text-4xl">
                Experience Lab Coffee
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Where community and quality come together
              </p>
            </div>
          </div>
          
          {/* Carousel */}
          <div 
            ref={coffeeCarouselRef}
            className="overflow-hidden"
          >
            <div 
              ref={coffeeCarouselInnerRef}
              className="flex gap-4 px-6 lg:px-8"
              style={{ willChange: 'transform' }}
            >
              {/* First set of images */}
              <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="/images/lab-coffee/smiling-coffeeshop.jpg" 
                    alt="Smiling customers enjoying Lab Coffee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="/images/lab-coffee/berries-acai-bowl-landscape.jpg" 
                    alt="Fresh açai bowl with berries"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="/images/lab-coffee/getting-coffee-offsite.jpg" 
                    alt="Customer getting coffee to go"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="/images/lab-coffee/smiling-coffeeshop.jpg" 
                    alt="Smiling customers enjoying Lab Coffee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="/images/lab-coffee/berries-acai-bowl-landscape.jpg" 
                    alt="Fresh açai bowl with berries"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-none w-[80vw] md:w-[60vw] lg:w-[45vw]">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="/images/lab-coffee/getting-coffee-offsite.jpg" 
                    alt="Customer getting coffee to go"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Yoga Lab: Featured Community Carousel - Only shows for Yoga Lab */}
      {!isLabCoffee && (
        <section className="py-16 bg-white font-body overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
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
            className="overflow-hidden"
          >
            <div 
              ref={carouselInnerRef}
              className="flex gap-4 px-6 lg:px-8"
              style={{ willChange: 'transform' }}
            >
              {/* First set of images */}
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
              
              {/* Duplicate set for seamless loop */}
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
          </div>
        </section>
      )}
      
      {/* Setting the rendering of the homepage screen based on the brand selected (Yoga Lab vs. Lab Coffee) */}
      <section className={`py-24 font-body ${isLabCoffee ? 'bg-black' : 'bg-gray-50'}`}>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {isLabCoffee ? (
            // Displaying Lab Coffee Services
            <>
              {/* Setting the "header" text over the various services offered by Lab Coffee */}
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className={`text-3xl font-heading tracking-tight sm:text-4xl ${isLabCoffee ? 'text-white' : 'text-gray-900'}`}>
                  What We Offer
                </h2>
                <p className={`mt-4 text-lg leading-8 ${isLabCoffee ? 'text-gray-300' : 'text-gray-600'}`}>
                  Experience quality beverages and community connection in a welcoming atmosphere.
                </p>
              </div>
              
              {/* Displaying the various services offered by Lab Coffee */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
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
                <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
                  Our Services
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Discover how we can support your journey through regulation, relation, and reasoning.
                </p>
              </div>
              
              {/* Displaying the various services offered by Yoga Lab */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                <ServiceCard
                  title="YOGA CLASSES"
                  description="Your yoga mat is a laboratory. How you show up on your yoga mat, is how you show up in your life. Strength in your yoga practice translates to strength in your life."
                  linkText="Class Offerings"
                  linkHref="/classes"
                />
                
                <ServiceCard
                  title="LAB COFFEE"
                  description="Lab Coffee exists to allow our community to build relationships. Our full menu includes coffee, teas, and açai bowls."
                  linkText="View Menu"
                  linkHref="/order"
                />
                
                <ServiceCard
                  title="PRIVATE CLASSES"
                  description="Elevate your practice with personalized instruction tailored to your goals. Perfect for individuals, couples, or small groups seeking focused attention."
                  linkText="Learn More"
                  linkHref="/private-classes"
                />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Lab Coffee: Parallax Image - Only shows for Lab Coffee */}
      {isLabCoffee && (
        <section ref={coffeeParallaxRef} className="bg-black font-body overflow-hidden">
          <div className="relative h-[500px] md:h-[700px]">
            <div className="absolute inset-0 scale-110">
              <img 
                src="/images/lab-coffee/berries-acai-bowl-portrait.jpg" 
                alt="Beautifully styled açai bowl"
                className="w-full h-full object-cover will-change-transform"
                style={{
                  transform: `translateY(${coffeeParallaxOffset}px)`
                }}
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
          </div>
        </section>
      )}

      {/* Yoga Lab: Practice & Community Images - Only shows for Yoga Lab */}
      {!isLabCoffee && (
        <section ref={parallaxPairRef} className="relative bg-white font-body overflow-hidden">
          <div className="absolute inset-0 scale-110">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 h-full will-change-transform"
              style={{
                transform: `translateY(${parallaxPairOffset}px)`
              }}
            >
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
          </div>
          {/* Static container to maintain height */}
          <div className="grid grid-cols-1 md:grid-cols-2 invisible">
            <div className="h-[500px] md:h-[600px]"></div>
            <div className="h-[500px] md:h-[600px]"></div>
          </div>
        </section>
      )}

      {/* Setting up the Reviews section (only displays when active brand is Yoga Lab) */}
      {!isLabCoffee && (
        <section className="py-24 bg-white font-body">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
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
        <section ref={parallaxRef} className="bg-gray-50 font-body overflow-hidden">
          <div className="relative h-[500px] md:h-[700px]">
            <div className="absolute inset-0 scale-110">
              <img 
                src="/images/yoga/todd-high-five.jpg" 
                alt="Welcoming community atmosphere at Yoga Lab"
                className="w-full h-full object-cover will-change-transform"
                style={{
                  transform: `translateY(${parallaxOffset}px)`
                }}
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
          </div>
        </section>
      )}

      {/* Setting the Location & Contact Section */}
      <section id="contact" className={`py-24 font-body ${isLabCoffee ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className={`text-3xl font-heading tracking-tight sm:text-4xl ${isLabCoffee ? 'text-white' : 'text-gray-900'}`}>
              {isLabCoffee ? 'Visit Us' : 'Find Us & Connect'}
            </h2>
            <p className={`mt-4 text-lg leading-8 ${isLabCoffee ? 'text-gray-300' : 'text-gray-600'}`}>
              {isLabCoffee 
                ? 'Stop by Lab Coffee and experience our welcoming community atmosphere.' 
                : 'Visit our studio or get in touch with us today.'}
            </p>
          </div>
          
          {/* Setting up the "Map" section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h3 className={`text-xl font-semibold mb-4 ${isLabCoffee ? 'text-white' : 'text-gray-900'}`}>Our Location</h3>
              <Map 
                latitude={40.4783244}
                longitude={-88.9507216}
                markerTitle="Yoga Lab"
                markerDescription="207 S. Prospect Road, Suite 2, Bloomington, IL 61704"
              />
              <div className={`mt-4 text-sm ${isLabCoffee ? 'text-gray-300' : 'text-gray-600'}`}>
                <p className="font-medium">207 S. Prospect Road, Suite 2</p>
                <p>Bloomington, IL 61704</p>
              </div>
            </div>
            
            {/* Loading in the contact form */}
            <div className="order-1 lg:order-2">
              <h3 className={`text-xl font-semibold mb-4 ${isLabCoffee ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
