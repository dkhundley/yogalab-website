import { Link, useLocation } from 'react-router-dom';

const brands = [
  { name: 'Yoga Lab', href: '/', description: 'Yoga Classes & Wellness' },
  { name: 'Lab Coffee', href: '/coffee', description: 'Artisan Coffee Shop' },
];

export default function BrandSwitcher() {
  const location = useLocation();
  
  // Determine active brand based on current path
  const isLabCoffee = location.pathname === '/coffee';
  
  return (
    <div className="bg-black text-white relative z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 text-sm">
          {/* Brand Links */}
          <div className="flex items-center gap-6">
            {brands.map((brand) => {
              const isActive = brand.href === '/coffee' ? isLabCoffee : !isLabCoffee && location.pathname !== '/coffee';
              
              return (
                <Link
                  key={brand.name}
                  to={brand.href}
                  className={`font-medium transition-colors hover:text-gray-300 ${
                    isActive ? 'text-white underline underline-offset-4' : 'text-gray-400'
                  }`}
                  title={brand.description}
                >
                  {brand.name}
                </Link>
              );
            })}
          </div>
          
          {/* Optional: Right side content */}
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-400">
            <span>Two brands, one experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}
