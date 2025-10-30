import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ServiceCard({ title, description, linkText, linkHref }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link 
        to={linkHref}
        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-500 transition-colors"
      >
        {linkText}
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
