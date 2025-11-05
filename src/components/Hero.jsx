import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useBrand, BRANDS } from '../context/BrandContext';

export default function Hero() {
  const { activeBrand } = useBrand();
  const isLabCoffee = activeBrand === BRANDS.LAB_COFFEE;

  return (
    // Instantiating the overall container representing the hero section
    <div className="relative isolate px-6 pt-14 lg:px-8">

      {/* Loading the video to play in the background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        key={activeBrand} // Force video reload on brand change
      >
        <source 
          src={isLabCoffee ? "/videos/coffee-hero.mp4" : "/videos/yoga-hero.mp4"} 
          type="video/mp4" 
        />
      </video>
      
      {/* Placing a filter over the video to make the primary text more readable */}
      <div className="absolute inset-0 -z-10 bg-white/60" />
      
  { /* Setting the main text content of the hero section */ }
  <div className="max-w-5xl py-32 sm:py-48 lg:py-56 px-4 sm:px-8 md:px-16 lg:pl-40 font-montserrat">
        <div className="text-left">
          {isLabCoffee ? (

            // Setting the rendering for the Lab Coffee brand
            <>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-lulo-bold">
                EVERY INTERACTION IS A LAB FOR SOMETHING GREATER
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Coffee and acai bowls, made well, so you can BE WELL.
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <Link
                  to="/order"
                  className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors font-montserrat"
                >
                  Order Now
                </Link>
                <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-gray-500 transition-colors font-montserrat">
                  Sit with Us <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </>

          ) : (
            // Setting the rendering for the Yoga Lab brand
            <>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-lulo-bold">
                YOUR EXPERIENCE AT THE LAB
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Through classes, coffee, and community, we create an experience for each and every person to access the foundational tools of regulation + connection.
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <Link
                  to="/book"
                  className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors font-montserrat"
                >
                  Book Your Class
                </Link>
                <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-gray-500 transition-colors font-montserrat">
                  Learn more <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
