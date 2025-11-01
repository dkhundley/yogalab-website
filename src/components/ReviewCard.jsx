import { StarIcon } from '@heroicons/react/24/solid';

export default function ReviewCard({ name, review, rating, date }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Review Text */}
      <p className="text-gray-700 mb-4 leading-relaxed italic">"{review}"</p>
      
      {/* Reviewer Info */}
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        {date && <p className="text-sm text-gray-500 mt-1">{date}</p>}
      </div>
    </div>
  );
}
