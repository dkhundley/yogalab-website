import { useNavigate } from 'react-router-dom';
import { useBrand, BRANDS } from '../context/BrandContext';

const brands = [
  { name: 'Yoga Lab', value: BRANDS.YOGA_LAB, description: 'Yoga Classes & Wellness' },
  { name: 'Lab Coffee', value: BRANDS.LAB_COFFEE, description: 'Artisan Coffee Shop' },
];

export default function BrandSwitcher() {
  const { activeBrand, setActiveBrand } = useBrand();
  const navigate = useNavigate();
  
  const handleBrandSwitch = (brandValue) => {
    setActiveBrand(brandValue);
    // Navigate to home page when switching brands
    navigate('/');
  };
  
  return (
    <div className="bg-black text-white relative z-50 font-montserrat">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 text-sm">
          {/* Brand Links */}
          <div className="flex items-center gap-6">
            {brands.map((brand) => {
              const isActive = brand.value === activeBrand;
              
              return (
                <button
                  key={brand.name}
                  onClick={() => handleBrandSwitch(brand.value)}
                  className={`font-medium transition-colors hover:text-gray-300 bg-transparent border-0 p-0 ${
                    isActive ? 'text-white underline underline-offset-4' : 'text-gray-400'
                  }`}
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    padding: '0',
                    borderRadius: '0',
                    color: isActive ? '#ffffff' : '#9ca3af'
                  }}
                  title={brand.description}
                >
                  {brand.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
