// Importing necessary dependencies and context
import { useNavigate } from 'react-router-dom';
import { useBrand, BRANDS } from '../context/BrandContext';



// Setting constant values representing the available brands
const brands = [
  { name: 'Yoga Lab', value: BRANDS.YOGA_LAB, description: 'Yoga Classes & Wellness' },
  { name: 'Lab Coffee', value: BRANDS.LAB_COFFEE, description: 'Artisan Coffee Shop' },
];



// Defining the BrandSwitcher component which allows users to switch between Yoga Lab and Lab Coffee brands
export default function BrandSwitcher() {

  // Instantiating the state and navigation
  const { activeBrand, setActiveBrand } = useBrand();
  const navigate = useNavigate();
  
  // Setting a handler for brand switching
  const handleBrandSwitch = (brandValue) => {
    setActiveBrand(brandValue);
    navigate('/');
  };
  
  return (
    // Setting the brand switcher container
    <div className={`relative z-50 font-montserrat ${
      activeBrand === BRANDS.YOGA_LAB ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 text-sm">

          {/* Setting the links to switch between each respective brand */}
          <div className="flex items-center gap-6">
            {brands.map((brand) => {
              const isActive = brand.value === activeBrand;
              const isYogaLab = activeBrand === BRANDS.YOGA_LAB;
              
              return (
                <button
                  key={brand.name}
                  onClick={() => handleBrandSwitch(brand.value)}
                  className={`font-medium transition-colors bg-transparent border-0 p-0 ${
                    isYogaLab 
                      ? (isActive ? 'text-white hover:text-gray-300 underline underline-offset-4' : 'text-gray-400 hover:text-gray-300')
                      : (isActive ? 'text-black hover:text-gray-700 underline underline-offset-4' : 'text-gray-500 hover:text-gray-700')
                  }`}
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    padding: '0',
                    borderRadius: '0'
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
