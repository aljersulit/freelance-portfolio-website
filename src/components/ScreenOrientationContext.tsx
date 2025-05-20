'use client';

import { createContext, useContext } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

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
  const isPortrait = useMediaQuery('(orientation: portrait)');

  return <ScreenOrientationContext.Provider value={{ isPortrait }}>{children}</ScreenOrientationContext.Provider>;
}
