'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type ScreenOrientationContextType = {
  isPortrait: boolean;
};

const ScreenOrientationContext = createContext<ScreenOrientationContextType | undefined>(undefined);

export const useScreenOrientationContext = () => {
  const context = useContext(ScreenOrientationContext);
  if (context === undefined) {
    throw new Error('useScreenOrientationContext must be used within a ScreenOrientationProvider');
  }
  return context;
};

export default function ScreenOrientationProvider({ children }: { children: React.ReactNode }) {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQueryList = window.matchMedia('(orientation: portrait)');

    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setIsPortrait(e.matches);
    };

    setIsPortrait(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleOrientationChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <ScreenOrientationContext.Provider value={{ isPortrait }}>
      {children}
    </ScreenOrientationContext.Provider>
  );
}
