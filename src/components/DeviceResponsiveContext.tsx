'use client';

import { createContext, useContext } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

type DeviceResponsiveContextType = {
  isPortrait: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const DeviceResponsiveContext = createContext<DeviceResponsiveContextType | undefined>(undefined);

export const useDeviceResponsiveContext = () => {
  const context = useContext(DeviceResponsiveContext);
  if (context === undefined) {
    throw new Error('useDeviceResponsiveContext must be used within a DeviceResponsiveContext provider');
  }
  return context;
};

export default function DeviceResponsiveProvider({ children }: { children: React.ReactNode }) {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const contextValue: DeviceResponsiveContextType = {
    isPortrait,
    isMobile,
    isTablet,
    isDesktop
  }

  return <DeviceResponsiveContext.Provider value={contextValue}>{children}</DeviceResponsiveContext.Provider>;
}
