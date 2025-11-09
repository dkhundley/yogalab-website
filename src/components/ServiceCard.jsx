import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useBrand, BRANDS } from '../context/BrandContext';

export default function ServiceCard({ title, description, linkText, linkHref }) {
  const { setActiveBrand } = useBrand();

  const handleClick = () => {
    // Switch to Lab Coffee brand when navigating to coffee page
    if (linkHref === '/coffee') {
      setActiveBrand(BRANDS.LAB_COFFEE);
    }
  };

  return (
    <div className="relative pl-6 font-montserrat h-full">
      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Left vertical line - positioned to align with text */}
        <div className="absolute -left-6 top-0 bottom-0 w-[3px] bg-black"></div>
        
        <h3 className="text-xl font-bold uppercase text-gray-900 mb-4 tracking-wide">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6 grow">
          {description}
        </p>
        <Link 
          to={linkHref}
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-black font-semibold hover:text-gray-700 transition-colors text-sm uppercase tracking-wide"
        >
          {linkText}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
