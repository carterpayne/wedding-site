import { useEffect, useState } from 'react';

const useMaxWindowWidth = (maxWidth: number) => {
  const [isUnder, setIsUnder] = useState(window.innerWidth <= maxWidth);
  useEffect(() => {
    const windowHandler = () => setIsUnder(window.innerWidth <= maxWidth);
    window.addEventListener('resize', windowHandler);
    return () => {
      window.removeEventListener('resize', windowHandler);
    };
  });

  return isUnder;
};

export default useMaxWindowWidth;
