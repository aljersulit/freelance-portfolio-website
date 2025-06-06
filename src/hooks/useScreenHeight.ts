import { useState, useEffect } from 'react';

export default function useScreenHeight() {
  const [screenHeight, setScreenHeight] = useState<number>(1);

  useEffect(() => {
  
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenHeight;
}