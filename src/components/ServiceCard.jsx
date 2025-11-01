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
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 font-montserrat">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link 
        to={linkHref}
        onClick={handleClick}
        className="inline-flex items-center gap-2 text-black font-semibold hover:text-gray-700 transition-colors"
      >
        {linkText}
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
