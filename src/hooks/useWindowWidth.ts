import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const windowHandler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', windowHandler);
    return () => {
      window.removeEventListener('resize', windowHandler);
    };
  });

  return width;
};

export default useWindowWidth;
