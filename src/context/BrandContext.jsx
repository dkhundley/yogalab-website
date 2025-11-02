// Importing necessary functions from React
import { createContext, useContext, useState } from 'react';

// Instantiating the BrandContext
const BrandContext = createContext();

// Setting constant values representing the respective Yoga Lab and Lab Coffee brands
export const BRANDS = {
  YOGA_LAB: 'yoga-lab',
  LAB_COFFEE: 'lab-coffee',
};

// Defining the BrandProvider component to manage and provide brand state
export function BrandProvider({ children }) {
  const [activeBrand, setActiveBrand] = useState(BRANDS.YOGA_LAB);

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
