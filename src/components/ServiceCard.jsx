import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useBrand, BRANDS } from '../context/BrandContext';

export default function ServiceCard({ title, description, linkText, linkHref }) {
  const { activeBrand, setActiveBrand } = useBrand();
  const isLabCoffee = activeBrand === BRANDS.LAB_COFFEE;

  const handleClick = () => {
    // Switch to Lab Coffee brand when navigating to coffee-related pages
    if (linkHref === '/coffee' || linkHref === '/order') {
      setActiveBrand(BRANDS.LAB_COFFEE);
    }
  };

  return (
    <div className="relative pl-6 font-body h-full">
      {/* Left vertical line - positioned to align with text */}
      <div className={`absolute left-0 top-[0.2em] bottom-[0.2em] w-[3px] ${
        isLabCoffee ? 'bg-white' : 'bg-black'
      }`}></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col">
        <h3 className={`text-xl font-bold uppercase mb-4 tracking-wide leading-tight ${
          isLabCoffee ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <p className={`leading-relaxed mb-6 grow ${
          isLabCoffee ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {description}
        </p>
        <Link 
          to={linkHref}
          onClick={handleClick}
          className={`inline-flex items-center gap-2 font-semibold transition-colors text-sm uppercase tracking-wide leading-tight ${
            isLabCoffee 
              ? 'text-white hover:text-gray-300' 
              : 'text-black hover:text-gray-700'
          }`}
        >
          {linkText}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
