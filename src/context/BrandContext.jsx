// Importing necessary functions from React
import { createContext, useContext, useState } from 'react';

// Instantiating the BrandContext
const BrandContext = createContext();

// Setting constant values representing the respective Yoga Lab and Lab Coffee brands
export const BRANDS = {
  YOGA_LAB: 'yoga-lab',
  LAB_COFFEE: 'lab-coffee',
};

// Helper function to determine initial brand based on domain
function getInitialBrand() {
  const hostname = window.location.hostname;
  
  // Check if the domain is Lab Coffee domain
  if (hostname.includes('labcoffeebn.org') || hostname.includes('labcoffee')) {
    return BRANDS.LAB_COFFEE;
  }
  
  // Default to Yoga Lab for theyogalab.org or any other domain
  return BRANDS.YOGA_LAB;
}

// Defining the BrandProvider component to manage and provide brand state
export function BrandProvider({ children }) {
  const [activeBrand, setActiveBrand] = useState(getInitialBrand);

  return (
    <BrandContext.Provider value={{ activeBrand, setActiveBrand }}>
      {children}
    </BrandContext.Provider>
  );
}


// Defining a custom hook to access the BrandContext
export function useBrand() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}
