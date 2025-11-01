import { createContext, useContext, useState } from 'react';

const BrandContext = createContext();

export const BRANDS = {
  YOGA_LAB: 'yoga-lab',
  LAB_COFFEE: 'lab-coffee',
};

export function BrandProvider({ children }) {
  const [activeBrand, setActiveBrand] = useState(BRANDS.YOGA_LAB);

  return (
    <BrandContext.Provider value={{ activeBrand, setActiveBrand }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}
